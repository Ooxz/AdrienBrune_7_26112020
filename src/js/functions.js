import { normalize } from './normalize.js'

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
  if (filters.mainSearch.length > 2) {
    filtredRecipes = [...filterMainSearch(filtredRecipes, filters.mainSearch)]
  }
  return filtredRecipes
}

function filterMainSearch (recipes, searchedExpression) {
  const filtredRecipes = []
  for (const recipe of recipes) {
    if (normalize(recipe.name).includes(searchedExpression) ||
     normalize(recipe.description).includes(searchedExpression) ||
     hasIngredient(recipe, searchedExpression) ||
     hasAppliance(recipe, searchedExpression) ||
     hasUstensils(recipe, searchedExpression)) {
      filtredRecipes.push(recipe)
    }
  }
  return [...new Set(filtredRecipes)]
}

function hasIngredient (recipe, search) {
  for (let i = 0; i < recipe.ingredients.length; i++) {
    if (normalize(recipe.ingredients[i]).includes(search)) {
      return true
    }
  }
  return false
}

function hasAppliance (recipe, search) {
  const index = normalize(recipe.appliance).includes(search)
  return index
}

function hasUstensils (recipe, search) {
  for (let i = 0; i < recipe.ustensils.length; i++) {
    if (normalize(recipe.ustensils[i]).includes(search)) {
      return true
    }
  }
  return false
}

function filterIngredients (recipes, ingredients) {
  const filtredRecipes = []
  for (const recipe of recipes) {
    const newFilter = []
    ingredients.forEach(ingredient => {
      newFilter.push(
        recipe.ingredients.filter(recIngredient =>
          recIngredient.ingredient.toLowerCase().includes(ingredient.toLowerCase())
        ).length > 0
      )
    })
    if (newFilter.every(match => match === true)) {
      filtredRecipes.push(recipe)
      console.log(recipe)
    }
  }
  return [...new Set(filtredRecipes)]
}

function filterAppliance (recipes, appliance) {
  let filtredRecipes = [...recipes]
  const newFilter = []
  for (const recipe of recipes) {
    if (recipe.appliance.toLowerCase() === appliance.toLowerCase()) {
      newFilter.push(recipe)
    }
    filtredRecipes = [...newFilter]
    console.log(newFilter)
  }
  return [...new Set(filtredRecipes)]
}

function filterUstensils (recipes, ustensils) {
  let filtredRecipes = [...recipes]
  let newFilter = []
  for (const ustensil of ustensils) {
    for (const recipe of filtredRecipes) {
      if (ustensils === '' || recipe.ustensils.filter(usten => usten.includes(ustensil)).length > 0) {
        newFilter.push(recipe)
      }
    }
    filtredRecipes = [...newFilter]
    newFilter = []
  }
  return [...new Set(filtredRecipes)]
}
