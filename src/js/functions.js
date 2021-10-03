export const filters = {
  mainSearch: '',
  ingredients: [],
  appliances: '',
  ustensils: []
}

export function filter (recipes, filters) {
  let filtredRecipes = [...recipes]
  if (filters.ingredients.length > 0) {
    filtredRecipes = [...filterIngredients(recipes, filters.ingredients)]
  }
  if (filters.appliances.length > 0) {
    filtredRecipes = [...filterAppliance(filtredRecipes, filters.appliances[0])]
  }
  if (filters.ustensils.length > 0) {
    filtredRecipes = [...filterUstensils(filtredRecipes, filters.ustensils)]
  }
  return filtredRecipes
}
function filterIngredients (recipes, ingredients) {
  const filtredRecipes = []
  recipes.forEach(recipe => {
    ingredients.forEach(ingredient => {
      const index = recipe.ingredients.findIndex(elt => elt.ingredient.toLowerCase() === ingredient.toLowerCase())
      if (index > -1) {
        filtredRecipes.push(recipe)
      }
    })
  })
  return filtredRecipes
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
  const filtredRecipes = []
  recipes.forEach(recipe => {
    ustensils.forEach(ustensil => {
      const index = recipe.ustensils.findIndex(elt => elt.toLowerCase() === ustensil.toLowerCase())
      if (index > -1) {
        filtredRecipes.push(recipe)
      }
    })
  })
  return filtredRecipes
}
