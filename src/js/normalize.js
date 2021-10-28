/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
export function SortByFirstLetter (elements) {
  function tri (a, b) {
	  const titleA = a.split(' ').join('')
	  a = titleA.toLowerCase()
	  a.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	  const titleB = b.split(' ').join('')
	  b = titleB.toLowerCase()
	  b.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	  return (a < b) ? -1 : 1
  }
  elements.sort(tri)
}

export function normalize (str) {
  // remove accents and diacritics and punctuation (do not remove "-" and "'")
  str = str
	  .normalize('NFD')
	  .replace(/[\u0300-\u036f]/g, '')
	  .replace(/[@&"()[\]{}<>_$*%§¤€£`+=/\\|~°;:!,?#.]/g, '')
  str = str.toLowerCase()
  str = str.replace(/[ ']/g, '_').replace(/œ/g, 'oe').replace(/æ/g, 'ae')
  return str
}

export function remove (array) {
  const exclude = ['et', 'd\'', 'au', 'de', 'la', 'le', 'du', 'en', 'ou', 'l\'', 'a', 'un', 'une', 'avec']
  const arrayText = array.filter(x => !exclude.includes(x))
  return arrayText
}

export function concatenation (recipe) {
  const name = normalize(recipe.name)
  const appliance = normalize(recipe.appliance)
  const description = normalize(recipe.description)
  const arrayIngredients = recoveryIngredients(recipe)
  const ingredients = arrayIngredients.toString()
  const arrayUstensils = recoveryUstensils(recipe)
  const ustensils = arrayUstensils.toString()
  const recipeString = name + ' ' + appliance + ' ' + description + ' ' + ingredients + ' ' + ustensils
  return recipeString
}

/**
 * @function recoveryIngredients
 * fonction permettant de récupérer les ingrédients de l'objet recette
 * pour en faire un array
 * @param {Object} recipe
 * @returns {Array} - array de chaque ingrédient de la recette
 */

function recoveryIngredients (recipe) {
  const allIngredients = []
  const ingredientsList = recipe.ingredients
  for (let j = 0; j < ingredientsList.length; j++) {
    const ingredient = ingredientsList[j].ingredient
    const ingredients = normalize(ingredient)
    allIngredients.push(ingredients)
  }
  return allIngredients
}

/**
 * @function recoveryUstensils
 * fonction permettant de récupérer les ustensiles de l'objet recette
 * pour en faire un array
 * @param {Object} recipe
 * @returns {Array} - array de chaque ustensile de la recette
 */

function recoveryUstensils (recipe) {
  const allUstensils = []
  const ustensilsList = recipe.ustensils
  for (let k = 0; k < ustensilsList.length; k++) {
    const ustensil = ustensilsList[k]
    const ustensils = normalize(ustensil)
    allUstensils.push(ustensils)
  }
  return allUstensils
}
