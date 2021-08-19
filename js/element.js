// class scontructor to create DOM element with name, type and class name.

class Element {
  constructor (name, type, classname) {
    this.name = name
    this.type = type
    this.classname = classname
  }

  get elt () {
    return this.createElt()
  }

  createElt () {
    this.name = document.createElement(this.type)
    this.name.classlist.add(this.classname)
    return this.name
  }
}

export { Element }
