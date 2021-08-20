// class scontructor to create DOM element with name, type and class name.

// class Element {
//   constructor (name, type, classname) {
//     this.name = name
//     this.type = type
//     this.classname = classname
//   }

//   createElt () {
//     this.name = document.createElement(this.type)
//     this.name.classlist.add(this.classname)
//     return this.name
//   }

//   get elt () {
//     return this.createElt()
//   }
// }
class Element {
  constructor (name, type, classname) {
    this.name = name
    this.type = type
    this.classname = classname
  }

  createElt () {
    this.name = document.createElement(this.type)
    this.name.classList.add(this.classname)
    return this.name
  }

  get elt () {
    return this.createElt()
  }
}

export { Element }
