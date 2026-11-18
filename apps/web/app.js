const form = document.querySelector('#planner-form');
const results = document.querySelector('#results');
const wizardSteps = [...form.querySelectorAll('.wizard-step')];
const wizardNames = ['Presupuesto', 'Personas', 'Días', 'Comidas', 'Preferencia'];
let currentStep = 0;
const money = n => new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC', maximumFractionDigits: 0 }).format(n);
const amount = n => new Intl.NumberFormat('es-CR', { maximumFractionDigits: 2 }).format(n);
const unitLabel = unit => unit === 'count' ? 'unid.' : unit;
const asOf = new Date('2026-11-18T12:00:00Z'); // Fixed demonstration clock.
const date = s => new Intl.DateTimeFormat('es-CR', { dateStyle: 'medium', timeZone: 'America/Costa_Rica' }).format(new Date(s));
const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const mealNames = { breakfast: 'Desayuno', lunch: 'Almuerzo', dinner: 'Cena' };
let dataPromise;

function updateOccasionCount() {
  const days = form.querySelectorAll('input[name="weekday"]:checked').length;
  const meals = [...form.querySelectorAll('input[name="mealType"]:checked')].length;
  const total = days * meals;
  document.querySelector('#occasion-count').textContent = `${total} ${total === 1 ? 'comida' : 'comidas'} en total · ${days} ${days === 1 ? 'día' : 'días'} × ${meals} ${meals === 1 ? 'tipo' : 'tipos'} por día`;
}

function showWizardStep(index) {
  currentStep = index;
  wizardSteps.forEach((step, i) => { step.hidden = i !== index; });
  document.querySelector('#wizard-count').textContent = `PASO ${index + 1} DE ${wizardSteps.length}`;
  document.querySelector('#wizard-label').textContent = wizardNames[index];
  document.querySelector('#progress-fill').style.width = `${((index + 1) / wizardSteps.length) * 100}%`;
  document.querySelector('#wizard-back').hidden = index === 0;
  document.querySelector('#wizard-next').hidden = index === wizardSteps.length - 1;
  document.querySelector('#wizard-submit').hidden = index !== wizardSteps.length - 1;
  document.querySelector('#wizard-hint').textContent = index === 3 ? '✳  Tu semana puede incluir hasta 21 comidas.' : '✳  Siempre podés volver y ajustar tus respuestas.';
  if (index === 3) updateOccasionCount();
  const focusable = wizardSteps[index].querySelector('input, select');
  focusable?.focus({preventScroll:true});
}

function validateWizardStep() {
  const step = wizardSteps[currentStep];
  const field = step.querySelector('input:not([type="checkbox"]), select');
  if (field && !field.reportValidity()) return false;
  if (currentStep === 3) {
    const hasMeal = form.querySelector('input[name="mealType"]:checked');
    document.querySelector('#meal-type-error').hidden = Boolean(hasMeal);
    if (!hasMeal) return false;
  }
  if (currentStep === 2) {
    const hasDay = form.querySelector('input[name="weekday"]:checked');
    document.querySelector('#weekday-error').hidden = Boolean(hasDay);
    if (!hasDay) return false;
  }
  return true;
}

document.querySelector('#wizard-next').addEventListener('click', () => {
  if (validateWizardStep()) showWizardStep(Math.min(currentStep + 1, wizardSteps.length - 1));
});
document.querySelector('#wizard-back').addEventListener('click', () => showWizardStep(Math.max(currentStep - 1, 0)));
form.querySelectorAll('input[name="weekday"], input[name="mealType"]').forEach(input => input.addEventListener('change', () => {
  if (currentStep === 2) document.querySelector('#weekday-error').hidden = Boolean(form.querySelector('input[name="weekday"]:checked'));
  if (currentStep === 3) document.querySelector('#meal-type-error').hidden = Boolean(form.querySelector('input[name="mealType"]:checked'));
  updateOccasionCount();
}));

async function loadData() {
  if (!dataPromise) dataPromise = Promise.all([
    fetch('../../data/mock/recipes.json', {cache: 'no-store'}), fetch('../../data/mock/products.json', {cache: 'no-store'})
  ]).then(async responses => {
    if (responses.some(response => !response.ok)) throw new Error('No se pudieron cargar los datos de ejemplo.');
    const documents = await Promise.all(responses.map(response => response.json()));
    if (documents.some(document => document.schemaVersion !== 1)) throw new Error('La versión de los datos no es compatible.');
    return documents;
  }).catch(error => { dataPromise = null; throw error; });
  return dataPromise;
}

function recipeFitsDiet(recipe, diet) {
  if (diet === 'none') return true;
  const tags = recipe.dietaryTags || [];
  return diet === 'vegan' ? tags.includes('vegan') : tags.includes('vegetarian');
}

function selectRecipes(catalog, diet, occasions) {
  const usage = new Map();
  const selectedByDay = new Map();
  return occasions.map(occasion => {
    const candidates = catalog.recipes.filter(recipe => recipe.mealTypes.includes(occasion.mealType) && recipeFitsDiet(recipe, diet));
    if (!candidates.length) return { ...occasion, recipe: null };
    const sameDayIds = selectedByDay.get(occasion.dayIndex) || new Set();
    const available = candidates.filter(recipe => !sameDayIds.has(recipe.id));
    const pool = available.length ? available : candidates;
    pool.sort((a,b) => (usage.get(a.id) || 0) - (usage.get(b.id) || 0) || a.id.localeCompare(b.id));
    const recipe = pool[0];
    usage.set(recipe.id, (usage.get(recipe.id) || 0) + 1);
    sameDayIds.add(recipe.id);
    selectedByDay.set(occasion.dayIndex, sameDayIds);
    return { ...occasion, recipe };
  });
}

function collectNeeds(plan, people) {
  const needs = new Map();
  plan.forEach(({recipe}) => recipe?.ingredients.forEach(item => {
    const unit = item.quantity.unit;
    const key = `${item.ingredientId}:${unit}`;
    const current = needs.get(key) || { ingredientId: item.ingredientId, amount: 0, unit };
    current.amount += item.quantity.amount * people / recipe.baseServings;
    needs.set(key, current);
  }));
  return needs;
}

function compareStores(products, needs, planComplete) {
  const ingredientById = Object.fromEntries(products.ingredients.map(item => [item.id, item]));
  const locations = products.branches.map(branch => ({...products.stores.find(store => store.id === branch.storeId), branchId: branch.id, branchName: branch.name})).filter(location => location.id);
  return locations.map(store => {
    let subtotal = 0;
    const missing = [];
    const packages = [];
    const ages = [];
    needs.forEach((required, key) => {
      const ingredient = ingredientById[required.ingredientId];
      const candidates = products.products.filter(product => product.storeId === store.id && product.branchId === store.branchId && product.ingredientId === required.ingredientId && product.package.unit === required.unit && (product.ingredientMatchStatus === 'approved' || (product.isSynthetic && product.ingredientMatchStatus === 'mock')))
        .map(product => ({ product, observation: products.priceObservations.filter(o => o.productId === product.id && o.branchId === store.branchId && o.eligibleForEstimate && (o.reviewStatus === 'approved' || (o.isSynthetic && o.reviewStatus === 'mock')) && o.currency === 'CRC' && o.priceCrc > 0 && new Date(o.capturedAt) <= asOf && (asOf - new Date(o.capturedAt)) / 86400000 <= 30).sort((a,b) => b.capturedAt.localeCompare(a.capturedAt))[0] }))
        .filter(choice => choice.observation && choice.product.package.amount > 0)
        .map(choice => {
          const count = Math.ceil(required.amount / choice.product.package.amount);
          return { ...choice, count, purchasedAmount: count * choice.product.package.amount, leftoverAmount: count * choice.product.package.amount - required.amount, cost: count * choice.observation.priceCrc };
        }).sort((a,b) => a.cost-b.cost);
      if (!candidates.length) { missing.push(ingredient?.name || required.ingredientId); return; }
      const choice = candidates[0];
      subtotal += choice.cost;
      packages.push({ key, ...required, ...choice });
      ages.push(choice.observation.capturedAt);
    });
    if (!planComplete) missing.push('comidas sin receta compatible');
    const oldest = ages.sort()[0];
    return { ...store, subtotal, missing, packages, oldest, stale: oldest && (asOf - new Date(oldest)) / 86400000 > 7 };
  });
}

function renderPlan({catalog, products, plan, needs, stores, budget, people, days, mealTypes}) {
  const complete = stores.filter(store => !store.missing.length).sort((a,b) => a.subtotal-b.subtotal);
  const best = complete[0];
  const listStore = best || stores[0];
  const mealCount = plan.length;
  const status = best ? (best.subtotal <= budget ? 'Tu plan está dentro del presupuesto' : 'Tu plan supera el presupuesto') : 'No hay precios suficientes para comparar';
  const message = best ? (best.subtotal <= budget ? `Quedarían ${money(budget-best.subtotal)} de tu presupuesto semanal de ${money(budget)}.` : `Supera tu presupuesto semanal por ${money(best.subtotal-budget)}. Probá reducir días o comidas, cambiar recetas o ajustar el presupuesto.`) : 'No podemos saber si el plan se ajusta al presupuesto. Revisá la lista o cambiá tus opciones.';
  const repeats = new Set(plan.filter(x => x.recipe).map(x => x.recipe.id)).size < mealCount;
  const ingredientById = Object.fromEntries(products.ingredients.map(item => [item.id,item]));
  const planByDay = days.map(dayIndex => ({day: dayNames[dayIndex], meals: plan.filter(item => item.dayIndex === dayIndex)}));

  results.innerHTML = `<div class="eyebrow">02 / TU PLAN SEMANAL DE EJEMPLO</div><h2>¡A la mesa!</h2><p class="results-intro">${days.length} ${days.length === 1 ? 'día' : 'días'} · ${mealTypes.length} ${mealTypes.length === 1 ? 'tipo de comida' : 'tipos de comida'} por día · ${mealCount} ${mealCount === 1 ? 'comida' : 'comidas'} · ${people} ${people === 1 ? 'persona' : 'personas'} por comida · Presupuesto ${money(budget)}</p>
    <div class="result-summary"><div><strong>${status}</strong><p>${message}</p></div><div><span class="badge">${best ? 'MENOR TOTAL COMPLETO' : 'COMPARACIÓN INCOMPLETA'}</span>${best ? `<p>${best.name} · <b>${money(best.subtotal)}</b>${best.stale ? ' · incluye precios antiguos' : ''}</p>` : ''}</div></div>
    <p class="muted">Datos ficticios con fecha de referencia 18 nov 2026. El estimado supone que comprás todos los paquetes desde cero; no descuenta ingredientes que ya tengas en casa. Los productos sobrantes se muestran en la lista y pueden guardarse para otra semana. No son precios actuales ni disponibilidad.</p>
    ${repeats ? '<p class="warning">El catálogo de ejemplo tiene variedad limitada, por eso algunas recetas se repiten durante la semana.</p>' : ''}
    <h3>Tu calendario</h3><div class="weekly-grid">${planByDay.map(({day, meals}) => `<article class="day-card"><h4>${day}</h4>${meals.map(item => item.recipe ? `<section class="planned-meal"><span class="tag">${mealNames[item.mealType]} · ${item.recipe.minutes} min</span><h5>${item.recipe.name}</h5><p>${item.recipe.description}</p><details><summary>Ingredientes y preparación</summary><ul>${item.recipe.ingredients.map(ing => `<li>${ingredientById[ing.ingredientId].name}: ${amount(ing.quantity.amount * people / item.recipe.baseServings)} ${unitLabel(ing.quantity.unit)}</li>`).join('')}</ul><ol>${item.recipe.instructions.map(step => `<li>${step.text}</li>`).join('')}</ol></details></section>` : '<p>No hay receta de ejemplo para esta comida y preferencia.</p>').join('')}</article>`).join('')}</div>
    <h3>Compará supermercados</h3><p class="results-intro">Compramos paquetes completos en una sola tienda. Solo comparamos totales con todos los ingredientes disponibles.</p><div class="store-grid">${stores.map(store => `<article class="card store ${best && store.id === best.id ? 'best' : ''}"><span class="tag">${store.branchName || 'Sucursal no especificada'}</span><h4>${store.name}</h4><span class="badge">${store.missing.length ? 'INCOMPLETO' : best && store.id === best.id ? 'MENOR TOTAL COMPLETO' : 'TOTAL COMPLETO'}</span><strong>${store.packages.length ? money(store.subtotal) : '—'}</strong><p>${store.missing.length ? `Subtotal parcial. Faltan: ${store.missing.join(', ')}. No se puede evaluar el presupuesto.` : 'Costo de compra de paquetes completos.'}</p><p>${store.oldest ? `Observación más antigua: ${date(store.oldest)}${store.stale ? ' · Precio antiguo' : ' · Vigente en la demo'}` : 'Sin observaciones disponibles'}</p></article>`).join('')}</div>
    <h3>Lista de compras semanal</h3><p class="results-intro">Cantidades de receta consolidadas. La compra se redondea a paquetes enteros; sobrante = comprado − usado.</p><div class="table-scroll"><table class="list"><thead><tr><th>INGREDIENTE</th><th>SE USA</th><th>FORMATO</th><th>COMPRÁS</th><th>SOBRA</th><th>COSTO</th></tr></thead><tbody>${[...needs.values()].map(required => { const item = listStore.packages.find(entry => entry.ingredientId === required.ingredientId && entry.unit === required.unit); return `<tr><td>${ingredientById[required.ingredientId].name}</td><td>${amount(required.amount)} ${unitLabel(required.unit)}</td><td>${item ? `${amount(item.product.package.amount)} ${unitLabel(item.product.package.unit)} × ${item.count}` : 'Sin precio'}</td><td>${item ? `${amount(item.purchasedAmount)} ${unitLabel(required.unit)}` : '—'}</td><td>${item ? `${amount(item.leftoverAmount)} ${unitLabel(required.unit)}` : '—'}</td><td>${item ? money(item.cost) : '—'}</td>`; }).join('')}</tbody></table></div><p class="muted">El presupuesto se compara con el costo de compra completo, no con el valor proporcional de lo consumido. Así no se promete un total imposible de pagar en caja; los sobrantes quedan visibles para decidir si se guardan.</p>`;
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (currentStep !== wizardSteps.length - 1 || !validateWizardStep()) return;
  const budget = Number(document.querySelector('#budget').value);
  const people = Number(document.querySelector('#people').value);
  const days = [...form.querySelectorAll('input[name="weekday"]:checked')].map(input => Number(input.value));
  const diet = document.querySelector('#diet').value;
  const mealTypes = [...form.querySelectorAll('input[name="mealType"]:checked')].map(input => input.value);
  if (!mealTypes.length) { document.querySelector('#meal-type-error').hidden = false; return; }
  document.querySelector('#meal-type-error').hidden = true;
  const occasions = days.flatMap(dayIndex => mealTypes.map(mealType => ({dayIndex, mealType})));
  results.hidden = false;
  results.innerHTML = '<p>Preparando tu plan semanal de ejemplo…</p>';
  try {
    const [catalog, products] = await loadData();
    const eligibleCatalog = {...catalog, recipes: catalog.recipes.filter(recipe => recipeFitsDiet(recipe, diet))};
    const plan = selectRecipes(eligibleCatalog, diet, occasions);
    const needs = collectNeeds(plan, people);
    const stores = compareStores(products, needs, plan.every(item => item.recipe));
    renderPlan({catalog, products, plan, needs, stores, budget, people, days, mealTypes});
    results.scrollIntoView({behavior:'smooth'});
  } catch (error) {
    results.innerHTML = '<div class="warning">No pudimos cargar los datos de ejemplo. Abrí el prototipo mediante el servidor local indicado en el README y volvé a intentarlo.</div>';
    results.scrollIntoView({behavior:'smooth'});
  }
});
