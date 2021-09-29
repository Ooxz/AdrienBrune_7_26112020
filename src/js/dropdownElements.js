/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { Element } from './Element.class.js'
/**
 * @function dropdownTags
 * function to display items in dropdown
 * @param {parameter} param
 */
function dropdownTags (param) {
  // declare const to list all tags in their respective menu function
  const allIngredients = listIngredients(param)
  const allAppliances = listAppliances(param)
  const allUstensils = listUstensils(param)
  // get each menu tag elements by Id
  const tagsIngredientsMenu = document.getElementById('menu__ingredients')
  const tagsAppliancesMenu = document.getElementById('menu__appliances')
  const tagsUstensilsMenu = document.getElementById('menu__ustensils')
  // call function displayItems for each tag
  displayItems(allIngredients, tagsIngredientsMenu)
  displayItems(allAppliances, tagsAppliancesMenu)
  displayItems(allUstensils, tagsUstensilsMenu)
}
/**
 * @function listIngredients
 * transforme la string : minuscules, sans accents
 * @param {paramter} param
 */
function listIngredients (param) {
  const allItems = [] // make an array for all items from ingredients
  for (let i = 0; i < param.length; i++) { // loop to set ingredients in the array
	  const ingredientsMenu = param[i].ingredients // const to make an array of ingredients from recipes
    const arrayOfIngredients = [] // new array to receive ingredient from ingredient
    for (const ingredient of ingredientsMenu) { // boucle pour récupérer ingredient dans ingredients
      const mediaIngredient = ingredient.ingredient // const to get ingredient from ingredients
      arrayOfIngredients.push(mediaIngredient) // push the ingredient from ingredients in the arrayOfIngredients
    }
    arrayOfIngredients.forEach(ingred => allItems.push(ingred)) // for each ingredient in arrayOfIngredients push in allItems
  }
  // the ... operator what it does is to convert an array of parameters into an array of items
  const eachIngredient = [...new Set(allItems)]// make a new array of each unique ingredients
  return eachIngredient // return that array of ingredients
}

/**
 * @function listAppliances
 * transforme la string : minuscules, sans accents
 * @param {paramter} param
 */
function listAppliances (param) {
  const allItems = []
  for (let i = 0; i < param.length; i++) {
    const appliancesMenu = param[i].appliance
    allItems.push(appliancesMenu)
  }
  const eachAppliances = [...new Set(allItems)]
  return eachAppliances
}

/**
 * @function listUstensils
 * transforme la string : minuscules, sans accents
 * @param {paramter} param
 */
function listUstensils (param) {
  const allItems = []
  for (let i = 0; i < param.length; i++) {
    const ustensilsMenu = param[i].ustensils
    const arratyOfUstensils = []
    for (const ustensil of ustensilsMenu) {
      const mediaUstensils = ustensil
      arratyOfUstensils.push(mediaUstensils)
    }
    arratyOfUstensils.forEach(usten => allItems.push(usten))
  }
  const eachUstensils = [...new Set(allItems)]
  return eachUstensils
}

/**
 * @function generateItems
 * transforme la string : minuscules, sans accents
 * @param {paramter} param
 * @param {HTMLElement} ul
 */
function generateItems (param, ul) {
  ul.innerHTML = ''
  for (let i = 0; i < param.length; i++) {
    const li = new Element('1', 'li', 'dropdown__menu__items').elt
    ul.appendChild(li)
    li.textContent = `${param[i]}`
  }
}
/**
 * @function displayItems
 * transforme la string : minuscules, sans accents
 * @param {paramter} param
 * @param {HTMLElement} ul
 */
function displayItems (param, ul) {
  generateItems(param, ul)
}

export { dropdownTags }

// récupérer tous les ingredients dans un seul ensemble
// afficher l'ensemble dans la liste (select)
// ajouter un event listener sur la liste
