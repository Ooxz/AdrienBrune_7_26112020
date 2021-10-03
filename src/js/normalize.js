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

export function normalize (str) {
  // remove accents and diacritics and punctuation (do not remove "-" and "'")
  str = str
	  .normalize('NFD')
	  .replace(/[\u0300-\u036f]/g, '')
	  .replace(/[@&"()[\]{}<>_$*%§¤€£`+=/\\|~°;:!,?#.]/g, '')
  str = str.toLowerCase()
  str = str.replace(/[ ']/g, '_').replace(/œ/g, 'oe').replace(/æ/g, 'ae')
  return str
}
