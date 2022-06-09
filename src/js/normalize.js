/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
export function SortByFirstLetter (elements) {
  function tri (a, b) {
	  const titleA = a.split(' ').join('')
	  a = titleA.toLowerCase()
	  a.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	  const titleB = b.split(' ').join('')
	  b = titleB.toLowerCase()
	  b.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	  return (a < b) ? -1 : 1
  }
  elements.sort(tri)
}

export function normalizeString (str) {
  str = str
	  .normalize('NFD')
	  .replace(/[\u0300-\u036f]/g, '')
	  .replace(/[@&"()[\]{}<>_$*%§¤€£`+=/\\|~°;:!,?#.]/g, '')
  str = str.toLowerCase()
  str = str.replace(/[ ']/g, '_').replace(/œ/g, 'oe').replace(/æ/g, 'ae')
  return str
}

export function remove (array) {
  const exclude = ['et', 'd\'', 'au', 'de', 'la', 'le', 'du', 'en', 'ou', 'l\'', 'a', 'un', 'une', 'avec']
  const arrayText = array.filter(x => !exclude.includes(x))
  return arrayText
}
