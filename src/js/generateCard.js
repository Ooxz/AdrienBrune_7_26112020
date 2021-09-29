/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { Element } from './Element.class.js'
/**
 * @function generateCard
 * transforme la string : minuscules, sans accents
 * @param {paramter} param
 */
function generateCard (param) {
  const section = document.querySelector('.allRecipesCards')
  section.innerHTML = ''
  for (let i = 0; i < param.length; i++) {
    const article = new Element('1', 'article', 'card').elt
    const anchor = new Element('2', 'a', 'card__anchor').elt
    const divBg = new Element('3', 'div', 'card__bg').elt
    const divRecipe = new Element('4', 'div', 'card__recipe').elt
    const divTitle = new Element('5', 'div', 'card__title').elt
    const title = new Element('6', 'h3', 'card__title__h3').elt
    const divTime = new Element('7', 'div', 'card__title__time').elt
    const iconTime = new Element('8', 'i', 'card__title__clock').elt
    const time = new Element('9', 'p', 'card__title__time__clock__number').elt
    const cardContent = new Element('10', 'div', 'card__content').elt
    const ulIngredients = new Element('11', 'ul', 'card__ingredients').elt
    const description = new Element('12', 'p', 'card__description').elt
    // -------1 article----------------------------------------
    section.appendChild(article)
    article.id = `article-${param[i].id}`
    // -------2 anchor-----------------------------------------
    article.appendChild(anchor)
    anchor.href = '#'
    // -------3 divBg------------------------------------------
    anchor.appendChild(divBg)
    // -------4 divRecipe--------------------------------------
    anchor.appendChild(divRecipe)
    // -------5 divTitle---------------------------------------
    divRecipe.appendChild(divTitle)
    // -------6 title------------------------------------------
    divTitle.appendChild(title)
    title.textContent = `${param[i].name}`
    // -------7 divTime----------------------------------------
    divTitle.appendChild(divTime)
    // -------8 IconTime---------------------------------------
    divTime.appendChild(iconTime)
    iconTime.classList.add('far', 'fa-clock')
    // -------9 Time ------------------------------------------
    divTime.appendChild(time)
    time.textContent = `${param[i].time} min`
    // -------10 cardContent-----------------------------------
    divRecipe.appendChild(cardContent)
    // -------11 ulIngredients---------------------------------
    cardContent.appendChild(ulIngredients)
    displayIngredients(param[i].ingredients, ulIngredients)
    // -------12 description-----------------------------------
    cardContent.appendChild(description)
    description.textContent = `${param[i].description}`
  }
}

function displayIngredients (ingredients, ulIngredients) {
  for (const ingredient of ingredients) {
    const liIngredient = new Element('1', 'li', 'ingredientsList').elt
    const ingredientName = new Element('2', 'p', 'ingredientsList__item').elt
    const quantity = new Element('3', 'p', 'ingredientsList__quantity').elt
    // ------1 liIngredient-------------------------------------
    ulIngredients.appendChild(liIngredient)
    // ------2 ingredientName-----------------------------------
    liIngredient.appendChild(ingredientName)
    ingredientName.innerHTML = `${ingredient.ingredient}`
    // ------3 quantity-----------------------------------------
    liIngredient.appendChild(quantity)
    if (ingredient.quantity != undefined) {
      quantity.innerHTML = ' ' + ':' + ' ' + `${ingredient.quantity}`
    }
    const unit = new Element('4', 'p', 'ingredientsList__units').elt
    // ------4 units--------------------------------------------
    liIngredient.appendChild(unit)
    if (ingredient.unit != undefined) {
      unit.innerHTML = ' ' + `${ingredient.unit}`
    }
  }
}

export { generateCard }
