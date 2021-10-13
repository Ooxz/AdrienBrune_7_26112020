/* eslint-disable no-new */
import { generateCards } from './generateCards.js'
import { openDropdown } from './dropdown.js'
import { dropdownTags } from './dropdownElements.js'
import { recipes } from './recipes.js'
import { GenerateSearchedTags } from './searchTags.js'
import { generateListeners } from './generateListeners.js'

const filtredRecipes = recipes

// display cards with recipes
generateCards(filtredRecipes)
dropdownTags(filtredRecipes)
new GenerateSearchedTags(filtredRecipes)

// Ouverture et fermeture des dropdowns ___________________________
const buttonDropdown = document.querySelectorAll('.dropdown__icon')
buttonDropdown.forEach(button => {
  button.addEventListener('click', (event) => {
    openDropdown(event)
  })
})

const dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items')
generateListeners(dropDownMenuItems, filtredRecipes)

// function to close the dropdown on click with the uparrow
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
