/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { normalizeString } from './normalize.js'
import { allIngredients, allAppliances, allUstensils, displayItems } from './dropdownElements.js'

export function typeSearch () {
  const typeArea = window.event.target
  const typedText = typeArea.value
  if (typeArea.id === 'ingredients') {
    const menu = document.getElementById('menu__ingredients')
    refreshDropdown(allIngredients, menu, typedText)
  }
  if (typeArea.id === 'appliances') {
    const menu = document.getElementById('menu__appliances')
    refreshDropdown(allAppliances, menu, typedText)
  }
  if (typeArea.id === 'ustensils') {
    const menu = document.getElementById('menu__ustensils')
    refreshDropdown(allUstensils, menu, typedText)
  }
}

export function refreshDropdown (items, menu, typedArea) {
  if (typedArea.length >= 1) {
    const typedText = normalizeString(typedArea)
    const selectedWords = showTypedWords(typedText, items)
    menu.innerHTML = ''
    displayItems(selectedWords, menu)
  } else {
	  menu.innerHTML = ''
	  displayItems(items, menu)
  }
}

function showTypedWords (typedArea, items) {
  const selectedWords = []
  for (let i = 0; i < items.length; i++) {
    const ingredient = normalizeString(items[i])
    if (ingredient.search(typedArea) !== -1) {
      selectedWords.push(items[i])
    }
  }
  return selectedWords
}
