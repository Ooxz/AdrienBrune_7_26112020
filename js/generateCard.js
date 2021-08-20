/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { Element } from './element.js'

function generateCard (param) {
  const section = document.querySelector('.allRecipesCards')
  for (let i = 0; i < param.length; i++) {
	  const article = new Element('article', 'article', 'card').elt
	  section.appendChild(article)
	  article.id = `article-${param[i].id}`
	  const anchor = new Element('anchor', 'a', 'card__anchor').elt
	  article.appendChild(anchor)
	  anchor.href = '#'
	  const divBg = new Element('divBg', 'div', 'card__bg').elt
	  anchor.appendChild(divBg)
	  const divRecipe = new Element('divRecipe', 'div', 'card__recipe').elt
	  anchor.appendChild(divRecipe)
	  const divTitle = new Element('divTitle', 'div', 'card__title').elt
	  divRecipe.appendChild(divTitle)
	  const title = new Element('title', 'h3', 'card__title__h3').elt
	  divTitle.appendChild(title)
	  title.textContent = `${param[i].name}`
	  const divTime = new Element('divTime', 'div', 'card__title__time').elt
	  divTitle.appendChild(divTime)
	  const iconTime = new Element('iconTime', 'i', 'card__title__clock').elt
	  divTime.appendChild(iconTime)
	  iconTime.classList.add('fa-clock')
	  const time = new Element('time', 'p', 'card__title__time__clock__number').elt
	  divTime.appendChild(time)
	  time.textContent = `${param[i].time} min`
	  const cardContent = new Element('cardContent', 'div', 'card__content').elt
	  divRecipe.appendChild(cardContent)
	  const ulIngredients = new Element('ulIngredients', 'ul', 'card__ingredients').elt
	  cardContent.appendChild(ulIngredients)
	  displayIngredients(param[i].ingredients, ulIngredients)
	  const description = new Element('description', 'p', 'card__description').elt
	  cardContent.appendChild(description)
	  description.textContent = `${param[i].description}`
  }
}

function displayIngredients (ingredients, ulIngredients) {
  for (const ingredient of ingredients) {
    const liIngredient = new Element('liIngredient', 'li', 'ingredientsList').elt
    ulIngredients.appendChild(liIngredient)
    const ingredientName = new Element('ingredientName', 'p', 'ingredientsList__item').elt
    liIngredient.appendChild(ingredientName)
    ingredientName.innerHTML = `${ingredient.ingredient}`
    const quantity = new Element('quantity', 'p', 'ingredientsList__quantity').elt
    liIngredient.appendChild(quantity)
    if (ingredient.quantity != undefined) {
      quantity.innerHTML = ' ' + ':' + ' ' + `${ingredient.quantity}`
    }
  }
}

export { generateCard }
