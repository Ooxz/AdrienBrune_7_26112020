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
dropDownMenuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    alert(event.target.textContent)

    const filter = []
    filtredRecipes.forEach(recipe => {
      const index = recipe.ingredients.findIndex(elt => elt.ingredient === event.target.textContent)
      console.log(index)
      if (index > -1) {
        filter.push(recipe)
      }
    })
    filtredRecipes = [...filter]
    generateCard(filtredRecipes)
    dropdownTags(filtredRecipes)
  })
})

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
