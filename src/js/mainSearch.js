import { filter } from './functions.js'
import { recipes } from './recipes.js'
import { normalize, remove, concatenation } from './normalize.js'
import { generateCards } from './generateCards.js'
import { dropdownTags } from './dropdownElements.js'

// recuperer recettes affichées
function getRecipes () {
  const selectedRecipes = []
  const card = document.querySelectorAll('.card')
  const allCards = Array.from(card)
  allCards.forEach(card => {
    const cardId = card.id
    for (let i = 0; i < recipes.length; i++) {
      const recipeId = `article-${recipes[i].id}`
      if (cardId === recipeId) {
        selectedRecipes.push(recipes[i])
      }
    }
  })
  return selectedRecipes
}

export function mainSearch (e) {
  // e.preventDefault
  const searchInput = document.getElementById('mainSearch')
  const text = searchInput.values
  let tags = filter() // fonction pour récupérer l'array de tous les tags affichés?
  let filtredRecipes

  // addeventlistener sur keyup pour suppression
  searchInput.addEventListener('keyup', (e) => {
    const keyCode = e.code
    if (keyCode === 'Backspace' || keyCode === 'Delete') {
      outcome(tags, recipes)
    }
  })

  // si saisie > 3 characters
  if (text.lenght >= 3) {
    const searchText = normalize(text)
    const array = searchText.split(' ')
    const arrayText = remove(array)
    arrayText.forEach(element => {
      tags.push(element)
    })
    tags = [...new Set(tags)]
    filtredRecipes = getRecipes()
    outcome(tags, filtredRecipes)
  } else {
    outcome(tags, recipes)
  }
}

const mainText = document.getElementById('mainSearch')
mainText.addEventListener('keyup', (e) => {
  const keyCode = e.code
  if (keyCode === 'Escape') {
    const tags = filter() // fonction pour récupérer l'array de tous les tags affichés?
    outcome(tags, recipes)
  }
})

// fonction pour trouver recette en fonction du mot saisi + tags
function findRecipes (array, someRecipes) {
  const allRecipes = document.querySelector('.allRecipesCards')
  const selectedRecipes = []
  let index = 0
  for (let i = 0; i < someRecipes.length; i++) {
    const recipe = concatenation(someRecipes[i])
    const counter = matchingWords(array, recipe)
    if (counter === array.length) {
      selectedRecipes.push(someRecipes[i])
      index++
    }
  }
  allRecipes.innerHTML = ''
  generateCards(selectedRecipes)
  dropdownTags(selectedRecipes)
  if (index === 0) {
    allRecipes.style.display = 'flex'
    allRecipes.style.justifyContent = 'center'
    allRecipes.innerHTML = '<p class="noresult">Auncune recette ne correspond à votre recherche...</br>Vous pouvez chercher "Tarte aux pommes", "poisson", etc. </br></br>Pour afficher à nouveau toutes les recettes, veuillez cliquer sur le logo en haut de la page.'
    dropdownTags(recipes)
  }
}

// fonction permettant de vérifier la présence de chaque élément de l'array 'input'

function matchingWords (array, recipe) {
  let counter = 0
  for (let j = 0; j < array.length; j++) {
    if (recipe.indexOf(array[j]) !== -1) {
      counter++
    }
  }
  return counter
}

function outcome (tags, recipes) {
  findRecipes(tags, recipes)
}
// 3 lettres d'écritent on récupère l'entrée du clavier puis on recherche dans les recettes
// une fois filtrer même principe que d'ajouter les recettes avec les tags
// limonade tester titre salez tester description
// appeler filter et modifier avec mainSearch déja présent ou fonction a part pour que ce soir moins lourd aussi dans functions.
// rappeler  generateCards(recipes)  dropdownTags(recipes) comme dans searchTags
