/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { recipes } from './recipes.js'
import { filters } from './functions.js'
import { generateCards } from './generateCards.js'
import { dropdownTags } from './dropdownElements.js'
let filtredRecipes = recipes

/**
 * @function generateListeners
 * fonction permettant de filtrer les recettes au click
 * @param {parameters} dropDownMenuItems - recettes filtrées
 */

function generateListeners (dropDownMenuItems) {
  dropDownMenuItems.forEach(item => {
	  item.addEventListener('click', (event) => {
      const filter = []
      if (event.target.parentNode.id === 'menu__ingredients') {
		  filtredRecipes.forEach(recipe => {
          const index = recipe.ingredients.findIndex(elt => elt.ingredient.toLowerCase() === event.target.textContent.toLowerCase())
          filters.ingredients.push(event.target.textContent)
          if (index > -1) {
			  filter.push(recipe)
          }
		  })
      } else if (event.target.parentNode.id === 'menu__appliances') {
		  filtredRecipes.forEach(recipe => {
          if (recipe.appliance.toLowerCase() === event.target.textContent.toLowerCase()) {
			  filters.appliances = event.target.textContent
			  filter.push(recipe)
          }
		  })
      } else if (event.target.parentNode.id === 'menu__ustensils') {
		  filtredRecipes.forEach(recipe => {
          const index = recipe.ustensils.findIndex(elt => elt === event.target.textContent)
          if (index > -1) {
			  filters.ustensils.push(event.target.textContent)
			  filter.push(recipe)
          }
		  })
      }
      filtredRecipes = [...filter]
      generateCards(filtredRecipes)
      dropdownTags(filtredRecipes)
      const dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items')
      generateListeners(dropDownMenuItems)
	  })
  })
}

export { generateListeners }
