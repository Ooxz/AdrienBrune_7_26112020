/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { dropdownTags } from './dropdownElements.js'
import { openDropdown } from './dropdown.js'
import { filters, filter } from './functions.js'
import { generateCards } from './generateCards.js'
import { generateListeners } from './generatelisteners.js'
import { recipes } from './recipes.js'

const filtredRecipes = recipes

class GenerateSearchedTags {
  constructor () {
	  this.tagsIngredients()
	  this.tagsAppliances()
	  this.tagsUstensils()
	  this.deleteTags()
  }

  tagsIngredients () {
	  document.querySelector('#menu__ingredients').addEventListener('click', e => {
      document.querySelector('#tags').insertAdjacentHTML(
		  'afterbegin', `
		  <ul class="tags__ul tags__ul--ingredients">
			<li data-ingredients="${e.target.textContent}" class="tags__li tags__li--ingredients">${e.target.textContent}
			<i class="far fa-times-circle tags__li__close"></i>
			</li>
		  </ul>`)
	  })
  }

  tagsAppliances () {
	  document.querySelector('#menu__appliances').addEventListener('click', e => {
      document.querySelector('#tags').insertAdjacentHTML(
		  'afterbegin', `
		  <ul class="tags__ul tags__ul--appliances">
			<li data-appliances="${e.target.textContent}" class="tags__li tags__li--appliances">${e.target.textContent}
			<i class="far fa-times-circle tags__li__close"></i>
			</li>
		  </ul>`)
	  })
  }

  tagsUstensils () {
	  document.querySelector('#menu__ustensils').addEventListener('click', e => {
      document.querySelector('#tags').insertAdjacentHTML(
		  'afterbegin', `
		  <ul class="tags__ul tags__ul--ustensils">
			<li data-ustensils="${e.target.textContent}" class="tags__li tags__li--ustensils">${e.target.textContent}
			<i class="far fa-times-circle tags__li__close"></i>
			</li>
		  </ul>`)
	  })
  }

  deleteTags () {
	  document.addEventListener('click', e => {
      const tagsNode = e.target.classList[2]
      if (tagsNode === 'tags__li__close') {
		  // on supprime le tag
        e.target.parentNode.remove()
        // on recupere tous les tags qu'il reste
        const tagsElts = document.querySelectorAll('.tags__li')
        filters.ingredients = Array.from(tagsElts).filter(elt => elt.dataset.ingredients).map(elt => elt.dataset.ingredients)
        filters.appliances = Array.from(tagsElts).filter(elt => elt.dataset.appliances).map(elt => elt.dataset.appliances)
        filters.ustensils = Array.from(tagsElts).filter(elt => elt.dataset.ustensils).map(elt => elt.dataset.ustensils)
        console.log(filters)
        const recipes = filter(filtredRecipes, filters)
        console.log(recipes)
        generateCards(recipes)
        dropdownTags(recipes)
        const buttonDropdown = document.querySelectorAll('.dropdown__icon')
        buttonDropdown.forEach(button => {
          button.addEventListener('click', (event) => {
            openDropdown(event)
          })
        })
        const dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items')
        generateListeners(dropDownMenuItems)
      }
	  })
  }
}

export { GenerateSearchedTags }
