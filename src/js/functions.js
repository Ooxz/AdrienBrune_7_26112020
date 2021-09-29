const filters = {
  mainSearch: '',
  ingredients: [],
  appliances: '',
  ustensils: ''
}

function filter (recipes, filter) {
  const filtredRecipes = []
  recipes.forEach(recipe => {
    filters.ingredients.forEach(ingredient => {
      const index = recipe.ingredients.findIndex(elt => elt.ingredients.toLowerCase()) === ingredient.toLowerCase()
      if (index > -1) { filter.filtredRecipes(recipe) }
    })
  })
}
