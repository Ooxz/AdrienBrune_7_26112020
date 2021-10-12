/* eslint-disable prefer-const */
import { typeSearch } from './typingSearch.js'
/**
 * @function openDropdown
 * function to open the dropdown menu
 */
function openDropdown () {
  const target = window.event.target
  let form
  let open
  if (target.tagName === 'I') {
    open = target.parentNode
  } else {
    open = target
  }
  const openMenu = open.parentNode
  const openMenuChildren = openMenu.children
  form = openMenuChildren[1]
  const id = getId(open)
  const menu = document.getElementById(id)
  open.style.display = 'none'
  form.style.display = 'flex'
  menu.style.display = 'grid'
  const formChildren = form.children
  const typedText = formChildren[1]
  typedText.focus()
  typeSearch()
  typedText.addEventListener('input', (event) => {
    typeSearch(event)
  })
  // Close dropdown menu with escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      menu.style.display = 'none'
      form.style.display = 'none'
      open.style.display = 'flex'
    }
  })
}
/**
 * @function getId
 * function to get id to open the right menu in openDropdown
 * @param {parameter} element
 */
function getId (element) {
  if (element.id === 'arrowUp__ingredients' || element.id === 'arrowDown__ingredients') {
    const id = 'menu__ingredients'
    return id
  }
  if (element.id === 'arrowUp__appliances' || element.id === 'arrowDown__appliances') {
    const id = 'menu__appliances'
    return id
  }
  if (element.id === 'arrowUp__ustensils' || element.id === 'arrowDown__ustensils') {
    const id = 'menu__ustensils'
    return id
  }
}

export { openDropdown }
