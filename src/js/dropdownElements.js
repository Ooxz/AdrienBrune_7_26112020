/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { Element } from './Element.class.js'
import { SortByFirstLetter } from './normalize.js'
import { filters } from './functions.js'

let allIngredients
let allAppliances
let allUstensils
/**
 * @function dropdownTags
 * function to display items in dropdown
 * @recipe {parameter} recipe
 */
function dropdownTags (recipe) {
  // declare const to list all tags in their respective menu function
  allIngredients = listIngredients(recipe)
  allAppliances = listAppliances(recipe)
  allUstensils = listUstensils(recipe)
  // get each menu tag elements by Id
  const tagsIngredientsMenu = document.getElementById('menu__ingredients')
  const tagsAppliancesMenu = document.getElementById('menu__appliances')
  const tagsUstensilsMenu = document.getElementById('menu__ustensils')
  // call function displayItems for each tag
  tagsIngredientsMenu.innerHTML = ''
  displayItems(allIngredients, tagsIngredientsMenu)
  tagsAppliancesMenu.innerHTML = ''
  displayItems(allAppliances, tagsAppliancesMenu)
  tagsUstensilsMenu.innerHTML = ''
  displayItems(allUstensils, tagsUstensilsMenu)
}
/**
 * @function listIngredients
 * @recipe {paramter} recipe
 */
function listIngredients (recipe) {
  const allItems = [] // make an array for all items from ingredients
  for (let i = 0; i < recipe.length; i++) { // loop to set ingredients in the array
	  const ingredientsMenu = recipe[i].ingredients // const to make an array of ingredients from recipes
    const arrayOfIngredients = [] // new array to receive ingredient from ingredient
    for (const ingredient of ingredientsMenu) { // boucle pour récupérer ingredient dans ingredients
      const mediaIngredient = ingredient.ingredient // const to get ingredient from ingredients
      if (!filters.ingredients.includes(mediaIngredient)) {
        arrayOfIngredients.push(mediaIngredient) // push the ingredient from ingredients in the arrayOfIngredients
      }
    }
    arrayOfIngredients.forEach(ingred => allItems.push(ingred)) // for each ingredient in arrayOfIngredients push in allItems
  }

  // the ... operator what it does is to convert an array of parameters into an array of items
  const eachElement = [...new Set(allItems)]// make a new array of each unique ingredients
  return eachElement // return that array of ingredients
}

/**
 * @function listAppliances
 * @recipe {paramter} recipe
 */
function listAppliances (recipe) {
  const allItems = []
  for (let i = 0; i < recipe.length; i++) {
    const appliancesMenu = recipe[i].appliance
    if (!filters.appliances.includes(appliancesMenu)) {
      allItems.push(appliancesMenu)// push the ingredient from ingredients in the arrayOfIngredients
    }
  }
  const eachElement = [...new Set(allItems)]
  return eachElement
}

/**
 * @function listUstensils
 * @recipe {paramter} recipe
 */
function listUstensils (recipe) {
  const allItems = []
  for (let i = 0; i < recipe.length; i++) {
    const ustensilsMenu = recipe[i].ustensils
    const arratyOfUstensils = []
    for (const ustensil of ustensilsMenu) {
      const mediaUstensils = ustensil
      if (!filters.ustensils.includes(mediaUstensils)) {
        arratyOfUstensils.push(mediaUstensils)// push the ingredient from ingredients in the arrayOfIngredients
      }
    }
    arratyOfUstensils.forEach(usten => allItems.push(usten))
  }
  const eachElement = [...new Set(allItems)]
  return eachElement
}

/**
 * @function generateItems
 * @param {paramter} recipe
 * @param {HTMLElement} ul
 */
function generateItems (recipe, ul) {
  for (let i = 0; i < recipe.length; i++) {
    const li = new Element('1', 'li', 'dropdown__menu__items').elt
    ul.appendChild(li)
    li.textContent = `${recipe[i]}`
    li.setAttribute('id', 'li__id')
  }
}

/**
 * @function displayItems
 * @recipe {paramter} recipe
 * @param {HTMLElement} ul
 */
function displayItems (recipe, ul) {
  SortByFirstLetter(recipe)
  generateItems(recipe, ul)
}

export { dropdownTags, displayItems, allIngredients, allUstensils, allAppliances }
