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

// // click escape to close dropdown
// const closeIt = document.querySelector('dropdown__menu')
// document.addEventListener('keydown', function (event) {
//   if (event.key === 'Escape') {
//     closeIt.style.display = 'none'
//   }
// })
