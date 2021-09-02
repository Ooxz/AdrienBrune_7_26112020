import { generateCard } from './generateCard.js'
import { openDropdown } from './dropdown.js'
import { dropdownTags } from './dropdownElements.js'
import { recipes } from './recipes.js'

// display cards with recipes
generateCard(recipes)
dropdownTags(recipes)
// Ouverture et fermeture des dropdowns ___________________________
const buttonDropdown = document.querySelectorAll('.dropdown__icon')
buttonDropdown.forEach(button => {
  button.addEventListener('click', (event) => {
    openDropdown(event)
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

// const closeButton = document.querySelectorAll('.dropdown__icon')
// window.onclick = function (event) {
//   if (event.target !== closeButton) {
//     document.getElementById('search__Ingredients').style.display = 'none'
//     document.getElementById('search__appliances').style.display = 'none'
//     document.getElementById('search__ustensils').style.display = 'none'
//     document.getElementById('menu__ingredients').style.display = 'none'
//     document.getElementById('menu__appliances').style.display = 'none'
//     document.getElementById('menu__ustensils').style.display = 'none'
//     document.getElementById('arrowDown__ingredients').style.display = 'flex'
//     document.getElementById('arrowDown__appliances').style.display = 'flex'
//     document.getElementById('arrowDown__ustensils').style.display = 'flex'
//   }
// }
