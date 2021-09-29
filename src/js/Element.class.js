
// class Element création de mon constructor
class Element {
  constructor (name, type, classname) {
    this.name = name
    this.type = type
    this.classname = classname
  }

  // fonction pour créer le type d'élément (div/p...) et le nom de classe puis retouner le nom
  createElt () {
    this.name = document.createElement(this.type) // on récupère le nom et on lui créé un type (div/p/li etc...)
    this.name.classList.add(this.classname) // on récupère le nom et on lui donne une classe (ex: class= "card__title")
    return this.name // on retoune le nom
  }

  // fonction pour récupérer et utiliser createElt
  get elt () {
    return this.createElt()
  }
}

export { Element }
