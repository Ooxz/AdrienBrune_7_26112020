import { generateCard } from './generateCard.js'
import { openDropdown } from './dropdown.js'
import { dropdownTags } from './dropdownElements.js'
import { recipes } from './recipes.js'

let filtredRecipes = recipes

// display cards with recipes
generateCard(filtredRecipes)
dropdownTags(filtredRecipes)
// Ouverture et fermeture des dropdowns ___________________________
const buttonDropdown = document.querySelectorAll('.dropdown__icon')
buttonDropdown.forEach(button => {
  button.addEventListener('click', (event) => {
    openDropdown(event)
  })
})

const dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items')
generateListeners(dropDownMenuItems)

const close = document.querySelectorAll('.form__arrow')
close.forEach((btn) => btn.addEventListener('click', () => {
  document.getElementById('search__Ingredients').style.display = 'none'
  document.getElementById('search__appliances').style.display = 'none'
  document.getElementById('search__ustensils').style.display = 'none'
  document.getElementById('menu__ingredients').style.display = 'none'
  document.getElementById('menu__appliances').style.display = 'none'
  document.getElementById('menu__ustensils').style.display = 'none'
  document.getElementById('arrowDown__ingredients').style.display = 'flex'
  document.getElementById('arrowDown__appliances').style.display = 'flex'
  document.getElementById('arrowDown__ustensils').style.display = 'flex'
}))

function generateListeners (dropDownMenuItems) {
  dropDownMenuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const filter = []
      if (event.target.parentNode.id === 'menu__ingredients') {
        filtredRecipes.forEach(recipe => {
          const index = recipe.ingredients.findIndex(elt => elt.ingredient.toLowerCase() === event.target.textContent.toLowerCase())
          if (index > -1) {
            filter.push(recipe)
          }
        })
      } else if (event.target.parentNode.id === 'menu__appliances') {
        filtredRecipes.forEach(recipe => {
          if (recipe.appliance.toLowerCase() === event.target.textContent.toLowerCase()) {
            filter.push(recipe)
          }
        })
      } else if (event.target.parentNode.id === 'menu__ustensils') {
        filtredRecipes.forEach(recipe => {
          const index = recipe.ustensils.findIndex(elt => elt === event.target.textContent)
          if (index > -1) {
            filter.push(recipe)
          }
        })
      }
      filtredRecipes = [...filter]
      generateCard(filtredRecipes)
      dropdownTags(filtredRecipes)
      const dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items')
      generateListeners(dropDownMenuItems)
    })
  })
}

// A faire : diviser generatelistener en 2 une fonction pour le addEventListener et une fonction que pour le filtrage des recettes
