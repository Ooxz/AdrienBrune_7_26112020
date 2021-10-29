import { filter, filters } from './functions.js'
import { normalize } from './normalize.js'
import { generateCards } from './generateCards.js'
import { dropdownTags } from './dropdownElements.js'
import { generateListeners } from './generateListeners.js'
import { openDropdown } from './dropdown.js'

export function mainSearch (recipes) {
  const searchInput = document.getElementById('mainSearch')
  searchInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (searchInput.value.length > 2) {
      filters.mainSearch = normalize(searchInput.value)
    } else {
      filters.mainSearch = ''
    }
    const filtredRecipes = filter(recipes, filters) // fonction pour récupérer l'array de tous les tags affichés?
    console.log(filtredRecipes)
    generateCards(filtredRecipes)
    dropdownTags(filtredRecipes)
    const buttonDropdown = document.querySelectorAll('.dropdown__icon')
    buttonDropdown.forEach(button => {
      button.addEventListener('click', (event) => {
        openDropdown(event)
      })
    })
    const dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items')
    generateListeners(dropDownMenuItems, recipes)
  })
}

// export function mainSearch (recipes) {
//   const searchInput = document.getElementById('mainSearch')
//   searchInput.addEventListener('keyup', (e) => {
//     e.preventDefault()
//     if (searchInput.value.length > 2) {
//       filters.mainSearch = normalize(searchInput.value)
//     } else {
//       filters.mainSearch = ''
//     }
//     const filtredRecipes = filter(recipes, filters) // fonction pour récupérer l'array de tous les tags affichés?
//     console.log(filtredRecipes)
//     generateCards(filtredRecipes)
//     dropdownTags(filtredRecipes)
//     const buttonDropdown = document.querySelectorAll('.dropdown__icon')
//     for (let i = 0; i < buttonDropdown.length; i++) {
//       buttonDropdown[i].addEventListener('click', function (event) {
//         openDropdown(event)
//       })
//     }
//     const dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items')
//     generateListeners(dropDownMenuItems, recipes)
//   })
// }
