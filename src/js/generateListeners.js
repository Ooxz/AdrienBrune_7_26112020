/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// import { recipes } from './recipes.js'
import { filters, filter } from './functions.js'
import { generateCards } from './generateCards.js'
import { dropdownTags } from './dropdownElements.js'
// const filtredRecipes = recipes

/**
 * @function generateListeners
 * fonction permettant de filtrer les recettes au click
 * @param {parameters} dropDownMenuItems - recettes filtrées
 */

function generateListeners (dropDownMenuItems, filtredRecipes) {
  dropDownMenuItems.forEach(item => {
	  item.addEventListener('click', (event) => {
      if (event.target.parentNode.id === 'menu__ingredients') {
        filters.ingredients.push(event.target.textContent)
      } else if (event.target.parentNode.id === 'menu__appliances') {
        filters.appliances = event.target.textContent
      } else if (event.target.parentNode.id === 'menu__ustensils') {
        filters.ustensils.push(event.target.textContent)
      }
      const newRecipes = filter(filtredRecipes, filters)
      generateCards(newRecipes)
      dropdownTags(newRecipes)
      const dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items')
      generateListeners(dropDownMenuItems, newRecipes)
	  })
  })
}

export { generateListeners }
