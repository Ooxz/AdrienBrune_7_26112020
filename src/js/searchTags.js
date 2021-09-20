/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */

import { generateCard } from './generateCard.js'
import { generateListeners } from './index.js'
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
			<li class="tags__li tags__li--ingredients">${e.target.textContent}
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
			<li class="tags__li tags__li--appliances">${e.target.textContent}
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
			<li class="tags__li tags__li--ustensils">${e.target.textContent}
			<i class="far fa-times-circle tags__li__close"></i>
			</li>
		  </ul>`)
	  })
  }

  deleteTags () {
	  document.addEventListener('click', e => {
      const tagsNode = e.target.classList[2]
      if (tagsNode === 'tags__li__close') {
        generateCard(filtredRecipes)
		  e.target.parentNode.remove()
      }
	  })
  }
}

export { GenerateSearchedTags }
