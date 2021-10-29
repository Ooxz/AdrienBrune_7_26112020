export const filters = {
  mainSearch: '',
  ingredients: [],
  appliances: '',
  ustensils: []
}

export function filter (recipes, filters) {
  let filtredRecipes = [...recipes]
  if (filters.ingredients.length > 0) {
    filtredRecipes = [...filterIngredients(filtredRecipes, filters.ingredients)]
  }
  if (filters.appliances.length > 0) {
    filtredRecipes = [...filterAppliance(filtredRecipes, filters.appliances)]
  }
  if (filters.ustensils.length > 0) {
    filtredRecipes = [...filterUstensils(filtredRecipes, filters.ustensils)]
  }
  return filtredRecipes
}
function filterIngredients (recipes, ingredients) {
  let filtredRecipes = [...recipes]
  ingredients.forEach(ingredient => {
    const newFilter = []
    filtredRecipes.forEach(recipe => {
      const index = recipe.ingredients.findIndex(elt => elt.ingredient.toLowerCase() === ingredient.toLowerCase())
      if (index > -1) {
        newFilter.push(recipe)
      }
    })
    filtredRecipes = [...newFilter]
  })
  return [...new Set(filtredRecipes)]
}

function filterAppliance (recipes, appliance) {
  const filtredRecipes = []
  recipes.forEach(recipe => {
    const isAppliance = recipe.appliance.toLowerCase() === appliance.toLowerCase()
    if (isAppliance) {
      filtredRecipes.push(recipe)
    }
  })
  return filtredRecipes
}

function filterUstensils (recipes, ustensils) {
  let filtredRecipes = [...recipes]
  ustensils.forEach(ustensil => {
    const newFilter = []
    filtredRecipes.forEach(recipe => {
      const index = recipe.ustensils.findIndex(elt => elt.toLowerCase() === ustensil.toLowerCase())
      if (index > -1) {
        newFilter.push(recipe)
      }
    })
    filtredRecipes = [...newFilter]
  })
  return [...new Set(filtredRecipes)]
}
