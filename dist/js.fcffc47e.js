// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../js/Element.class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Element = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class Element création de mon constructor
var Element = /*#__PURE__*/function () {
  function Element(name, type, classname) {
    _classCallCheck(this, Element);

    this.name = name;
    this.type = type;
    this.classname = classname;
  } // fonction pour créer le type d'élément (div/p...) et le nom de classe puis retouner le nom


  _createClass(Element, [{
    key: "createElt",
    value: function createElt() {
      this.name = document.createElement(this.type); // on récupère le nom et on lui créé un type (div/p/li etc...)

      this.name.classList.add(this.classname); // on récupère le nom et on lui donne une classe (ex: class= "card__title")

      return this.name; // on retoune le nom
    } // fonction pour récupérer et utiliser createElt

  }, {
    key: "elt",
    get: function get() {
      return this.createElt();
    }
  }]);

  return Element;
}();

exports.Element = Element;
},{}],"../js/generateCards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCards = generateCards;

var _ElementClass = require("./Element.class.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @function generateCard
 * transforme la string : minuscules, sans accents
 * @recipe {paramter} recipe
 */
function generateCards(recipe) {
  var section = document.querySelector('.allRecipesCards');
  section.innerHTML = '';

  for (var i = 0; i < recipe.length; i++) {
    var article = new _ElementClass.Element('1', 'article', 'card').elt;
    var anchor = new _ElementClass.Element('2', 'a', 'card__anchor').elt;
    var divBg = new _ElementClass.Element('3', 'div', 'card__bg').elt;
    var divRecipe = new _ElementClass.Element('4', 'div', 'card__recipe').elt;
    var divTitle = new _ElementClass.Element('5', 'div', 'card__title').elt;
    var title = new _ElementClass.Element('6', 'h3', 'card__title__h3').elt;
    var divTime = new _ElementClass.Element('7', 'div', 'card__title__time').elt;
    var iconTime = new _ElementClass.Element('8', 'i', 'card__title__clock').elt;
    var time = new _ElementClass.Element('9', 'p', 'card__title__time__clock__number').elt;
    var cardContent = new _ElementClass.Element('10', 'div', 'card__content').elt;
    var ulIngredients = new _ElementClass.Element('11', 'ul', 'card__ingredients').elt;
    var description = new _ElementClass.Element('12', 'p', 'card__description').elt; // -------1 article----------------------------------------

    section.appendChild(article);
    article.id = "article-".concat(recipe[i].id); // -------2 anchor-----------------------------------------

    article.appendChild(anchor);
    anchor.href = '#'; // -------3 divBg------------------------------------------

    anchor.appendChild(divBg); // -------4 divRecipe--------------------------------------

    anchor.appendChild(divRecipe); // -------5 divTitle---------------------------------------

    divRecipe.appendChild(divTitle); // -------6 title------------------------------------------

    divTitle.appendChild(title);
    title.textContent = "".concat(recipe[i].name); // -------7 divTime----------------------------------------

    divTitle.appendChild(divTime); // -------8 IconTime---------------------------------------

    divTime.appendChild(iconTime);
    iconTime.classList.add('far', 'fa-clock'); // -------9 Time ------------------------------------------

    divTime.appendChild(time);
    time.textContent = "".concat(recipe[i].time, " min"); // -------10 cardContent-----------------------------------

    divRecipe.appendChild(cardContent); // -------11 ulIngredients---------------------------------

    cardContent.appendChild(ulIngredients);
    displayIngredients(recipe[i].ingredients, ulIngredients); // -------12 description-----------------------------------

    cardContent.appendChild(description);
    description.textContent = "".concat(recipe[i].description);
  }
}

function displayIngredients(ingredients, ulIngredients) {
  var _iterator = _createForOfIteratorHelper(ingredients),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ingredient = _step.value;
      var liIngredient = new _ElementClass.Element('1', 'li', 'ingredientsList').elt;
      var ingredientName = new _ElementClass.Element('2', 'p', 'ingredientsList__item').elt;
      var quantity = new _ElementClass.Element('3', 'p', 'ingredientsList__quantity').elt; // ------1 liIngredient-------------------------------------

      ulIngredients.appendChild(liIngredient); // ------2 ingredientName-----------------------------------

      liIngredient.appendChild(ingredientName);
      ingredientName.innerHTML = "".concat(ingredient.ingredient); // ------3 quantity-----------------------------------------

      liIngredient.appendChild(quantity);

      if (ingredient.quantity != undefined) {
        quantity.innerHTML = ' ' + ':' + ' ' + "".concat(ingredient.quantity);
      }

      var unit = new _ElementClass.Element('4', 'p', 'ingredientsList__units').elt; // ------4 units--------------------------------------------

      liIngredient.appendChild(unit);

      if (ingredient.unit != undefined) {
        unit.innerHTML = ' ' + "".concat(ingredient.unit);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
},{"./Element.class.js":"../js/Element.class.js"}],"../js/normalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortByFirstLetter = SortByFirstLetter;
exports.normalize = normalize;
exports.remove = remove;
exports.concatenation = concatenation;

/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable no-tabs */
function SortByFirstLetter(elements) {
  function tri(a, b) {
    var titleA = a.split(' ').join('');
    a = titleA.toLowerCase();
    a.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    var titleB = b.split(' ').join('');
    b = titleB.toLowerCase();
    b.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return a < b ? -1 : 1;
  }

  elements.sort(tri);
}

function normalize(str) {
  // remove accents and diacritics and punctuation (do not remove "-" and "'")
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[@&"()[\]{}<>_$*%§¤€£`+=/\\|~°;:!,?#.]/g, '');
  str = str.toLowerCase();
  str = str.replace(/[ ']/g, '_').replace(/œ/g, 'oe').replace(/æ/g, 'ae');
  return str;
}

function remove(array) {
  var exclude = ['et', 'd\'', 'au', 'de', 'la', 'le', 'du', 'en', 'ou', 'l\'', 'a', 'un', 'une', 'avec'];
  var arrayText = array.filter(function (x) {
    return !exclude.includes(x);
  });
  return arrayText;
}

function concatenation(recipe) {
  var name = normalize(recipe.name);
  var appliance = normalize(recipe.appliance);
  var description = normalize(recipe.description);
  var arrayIngredients = recoveryIngredients(recipe);
  var ingredients = arrayIngredients.toString();
  var arrayUstensils = recoveryUstensils(recipe);
  var ustensils = arrayUstensils.toString();
  var recipeString = name + ' ' + appliance + ' ' + description + ' ' + ingredients + ' ' + ustensils;
  return recipeString;
}
/**
 * @function recoveryIngredients
 * fonction permettant de récupérer les ingrédients de l'objet recette
 * pour en faire un array
 * @param {Object} recipe
 * @returns {Array} - array de chaque ingrédient de la recette
 */


function recoveryIngredients(recipe) {
  var allIngredients = [];
  var ingredientsList = recipe.ingredients;

  for (var j = 0; j < ingredientsList.length; j++) {
    var ingredient = ingredientsList[j].ingredient;
    var ingredients = normalize(ingredient);
    allIngredients.push(ingredients);
  }

  return allIngredients;
}
/**
 * @function recoveryUstensils
 * fonction permettant de récupérer les ustensiles de l'objet recette
 * pour en faire un array
 * @param {Object} recipe
 * @returns {Array} - array de chaque ustensile de la recette
 */


function recoveryUstensils(recipe) {
  var allUstensils = [];
  var ustensilsList = recipe.ustensils;

  for (var k = 0; k < ustensilsList.length; k++) {
    var ustensil = ustensilsList[k];
    var ustensils = normalize(ustensil);
    allUstensils.push(ustensils);
  }

  return allUstensils;
}
},{}],"../js/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;
exports.filters = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filters = {
  mainSearch: '',
  ingredients: [],
  appliances: '',
  ustensils: []
};
exports.filters = filters;

function filter(recipes, filters) {
  var filtredRecipes = _toConsumableArray(recipes);

  if (filters.ingredients.length > 0) {
    filtredRecipes = _toConsumableArray(filterIngredients(filtredRecipes, filters.ingredients));
  }

  if (filters.appliances.length > 0) {
    filtredRecipes = _toConsumableArray(filterAppliance(filtredRecipes, filters.appliances));
  }

  if (filters.ustensils.length > 0) {
    filtredRecipes = _toConsumableArray(filterUstensils(filtredRecipes, filters.ustensils));
  }

  return filtredRecipes;
}

function filterIngredients(recipes, ingredients) {
  var filtredRecipes = _toConsumableArray(recipes);

  ingredients.forEach(function (ingredient) {
    var newFilter = [];
    filtredRecipes.forEach(function (recipe) {
      var index = recipe.ingredients.findIndex(function (elt) {
        return elt.ingredient.toLowerCase() === ingredient.toLowerCase();
      });

      if (index > -1) {
        newFilter.push(recipe);
      }
    });
    filtredRecipes = [].concat(newFilter);
  });
  return _toConsumableArray(new Set(filtredRecipes));
}

function filterAppliance(recipes, appliance) {
  var filtredRecipes = [];
  recipes.forEach(function (recipe) {
    var isAppliance = recipe.appliance.toLowerCase() === appliance.toLowerCase();

    if (isAppliance) {
      filtredRecipes.push(recipe);
    }
  });
  return filtredRecipes;
}

function filterUstensils(recipes, ustensils) {
  var filtredRecipes = _toConsumableArray(recipes);

  ustensils.forEach(function (ustensil) {
    var newFilter = [];
    filtredRecipes.forEach(function (recipe) {
      var index = recipe.ustensils.findIndex(function (elt) {
        return elt.toLowerCase() === ustensil.toLowerCase();
      });

      if (index > -1) {
        newFilter.push(recipe);
      }
    });
    filtredRecipes = [].concat(newFilter);
  });
  return _toConsumableArray(new Set(filtredRecipes));
}
},{}],"../js/dropdownElements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownTags = dropdownTags;
exports.displayItems = displayItems;
exports.allAppliances = exports.allUstensils = exports.allIngredients = void 0;

var _ElementClass = require("./Element.class.js");

var _normalize = require("./normalize.js");

var _functions = require("./functions.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var allIngredients;
exports.allIngredients = allIngredients;
var allAppliances;
exports.allAppliances = allAppliances;
var allUstensils;
/**
 * @function dropdownTags
 * function to display items in dropdown
 * @recipe {parameter} recipe
 */

exports.allUstensils = allUstensils;

function dropdownTags(recipes) {
  // declare const to list all tags in their respective menu function
  exports.allIngredients = allIngredients = listIngredients(recipes);
  exports.allAppliances = allAppliances = listAppliances(recipes);
  exports.allUstensils = allUstensils = listUstensils(recipes); // get each menu tag elements by Id

  var tagsIngredientsMenu = document.getElementById('menu__ingredients');
  var tagsAppliancesMenu = document.getElementById('menu__appliances');
  var tagsUstensilsMenu = document.getElementById('menu__ustensils'); // call function displayItems for each tag

  tagsIngredientsMenu.innerHTML = '';
  displayItems(allIngredients, tagsIngredientsMenu);
  tagsAppliancesMenu.innerHTML = '';
  displayItems(allAppliances, tagsAppliancesMenu);
  tagsUstensilsMenu.innerHTML = '';
  displayItems(allUstensils, tagsUstensilsMenu);
}
/**
 * @function listIngredients
 * @recipe {paramter} recipe
 */


function listIngredients(recipes) {
  var allItems = []; // make an array for all items from ingredients

  for (var i = 0; i < recipes.length; i++) {
    // loop to set ingredients in the array
    var ingredientsMenu = recipes[i].ingredients; // const to make an array of ingredients from recipes

    var arrayOfIngredients = []; // new array to receive ingredient from ingredient

    var _iterator = _createForOfIteratorHelper(ingredientsMenu),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var ingredient = _step.value;
        // boucle pour récupérer ingredient dans ingredients
        var mediaIngredient = ingredient.ingredient; // const to get ingredient from ingredients

        if (!_functions.filters.ingredients.includes(mediaIngredient)) {
          arrayOfIngredients.push(mediaIngredient); // push the ingredient from ingredients in the arrayOfIngredients
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    arrayOfIngredients.forEach(function (ingred) {
      return allItems.push(ingred);
    }); // for each ingredient in arrayOfIngredients push in allItems
  } // the ... operator what it does is to convert an array of parameters into an array of items


  var eachElement = _toConsumableArray(new Set(allItems)); // make a new array of each unique ingredients


  return eachElement; // return that array of ingredients
}
/**
 * @function listAppliances
 * @recipe {paramter} recipe
 */


function listAppliances(recipes) {
  var allItems = [];

  for (var i = 0; i < recipes.length; i++) {
    var appliancesMenu = recipes[i].appliance;

    if (!_functions.filters.appliances.includes(appliancesMenu)) {
      allItems.push(appliancesMenu); // push the ingredient from ingredients in the arrayOfIngredients
    }
  }

  var eachElement = _toConsumableArray(new Set(allItems));

  return eachElement;
}
/**
 * @function listUstensils
 * @recipe {paramter} recipe
 */


function listUstensils(recipes) {
  var allItems = [];

  for (var i = 0; i < recipes.length; i++) {
    var ustensilsMenu = recipes[i].ustensils;
    var arratyOfUstensils = [];

    var _iterator2 = _createForOfIteratorHelper(ustensilsMenu),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var ustensil = _step2.value;
        var mediaUstensils = ustensil;

        if (!_functions.filters.ustensils.includes(mediaUstensils)) {
          arratyOfUstensils.push(mediaUstensils); // push the ingredient from ingredients in the arrayOfIngredients
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    arratyOfUstensils.forEach(function (usten) {
      return allItems.push(usten);
    });
  }

  var eachElement = _toConsumableArray(new Set(allItems));

  return eachElement;
}
/**
 * @function generateItems
 * @param {paramter} recipe
 * @param {HTMLElement} ul
 */


function generateItems(recipes, ul) {
  for (var i = 0; i < recipes.length; i++) {
    var li = new _ElementClass.Element('1', 'li', 'dropdown__menu__items').elt;
    ul.appendChild(li);
    li.textContent = "".concat(recipes[i]);
    li.setAttribute('id', 'li__id');
  }
}
/**
 * @function displayItems
 * @recipe {paramter} recipe
 * @param {HTMLElement} ul
 */


function displayItems(recipes, ul) {
  (0, _normalize.SortByFirstLetter)(recipes);
  generateItems(recipes, ul);
}
},{"./Element.class.js":"../js/Element.class.js","./normalize.js":"../js/normalize.js","./functions.js":"../js/functions.js"}],"../js/typingSearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeSearch = typeSearch;
exports.refreshDropdown = refreshDropdown;

var _normalize = require("./normalize.js");

var _dropdownElements = require("./dropdownElements.js");

/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable no-tabs */
function typeSearch() {
  var typeArea = window.event.target;
  var typedText = typeArea.value;

  if (typeArea.id === 'ingredients') {
    var menu = document.getElementById('menu__ingredients');
    refreshDropdown(_dropdownElements.allIngredients, menu, typedText);
  }

  if (typeArea.id === 'appliances') {
    var _menu = document.getElementById('menu__appliances');

    refreshDropdown(_dropdownElements.allAppliances, _menu, typedText);
  }

  if (typeArea.id === 'ustensils') {
    var _menu2 = document.getElementById('menu__ustensils');

    refreshDropdown(_dropdownElements.allUstensils, _menu2, typedText);
  }
}

function refreshDropdown(items, menu, typedArea) {
  if (typedArea.length >= 1) {
    var typedText = (0, _normalize.normalize)(typedArea);
    var selectedWords = showTypedWords(typedText, items);
    menu.innerHTML = '';
    (0, _dropdownElements.displayItems)(selectedWords, menu);
  } else {
    menu.innerHTML = '';
    (0, _dropdownElements.displayItems)(items, menu);
  }
}

function showTypedWords(typedArea, items) {
  var selectedWords = [];

  for (var i = 0; i < items.length; i++) {
    var ingredient = (0, _normalize.normalize)(items[i]);

    if (ingredient.search(typedArea) !== -1) {
      selectedWords.push(items[i]);
    }
  }

  return selectedWords;
}
},{"./normalize.js":"../js/normalize.js","./dropdownElements.js":"../js/dropdownElements.js"}],"../js/dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openDropdown = openDropdown;

var _typingSearch = require("./typingSearch.js");

/* eslint-disable prefer-const */

/**
 * @function openDropdown
 * function to open the dropdown menu
 */
function openDropdown() {
  var target = window.event.target;
  var form;
  var open;

  if (target.tagName === 'I') {
    open = target.parentNode;
  } else {
    open = target;
  }

  var openMenu = open.parentNode;
  var openMenuChildren = openMenu.children;
  form = openMenuChildren[1];
  var id = getId(open);
  var menu = document.getElementById(id);
  open.style.display = 'none';
  form.style.display = 'flex';
  menu.style.display = 'grid';
  var formChildren = form.children;
  var typedText = formChildren[1];
  typedText.focus();
  (0, _typingSearch.typeSearch)();
  typedText.addEventListener('input', function (event) {
    (0, _typingSearch.typeSearch)(event);
  }); // Close dropdown menu with escape

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      menu.style.display = 'none';
      form.style.display = 'none';
      open.style.display = 'flex';
    }
  });
}
/**
 * @function getId
 * function to get id to open the right menu in openDropdown
 * @param {parameter} element
 */


function getId(element) {
  if (element.id === 'arrowUp__ingredients' || element.id === 'arrowDown__ingredients') {
    var id = 'menu__ingredients';
    return id;
  }

  if (element.id === 'arrowUp__appliances' || element.id === 'arrowDown__appliances') {
    var _id = 'menu__appliances';
    return _id;
  }

  if (element.id === 'arrowUp__ustensils' || element.id === 'arrowDown__ustensils') {
    var _id2 = 'menu__ustensils';
    return _id2;
  }
}
},{"./typingSearch.js":"../js/typingSearch.js"}],"../js/recipes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recipes = void 0;
var recipes = [{
  id: 1,
  name: 'Limonade de Coco',
  servings: 1,
  ingredients: [{
    ingredient: 'Lait de coco',
    quantity: 400,
    unit: 'ml'
  }, {
    ingredient: 'Jus de citron',
    quantity: 2
  }, {
    ingredient: 'Crème de coco',
    quantity: 2,
    unit: 'cuillères à soupe'
  }, {
    ingredient: 'Sucre',
    quantity: 30,
    unit: 'grammes'
  }, {
    ingredient: 'Glaçons'
  }],
  time: 10,
  description: "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
  appliance: 'Blender',
  ustensils: ['cuillère à soupe', 'verres', 'presse citron']
}, {
  id: 2,
  name: 'Poisson Cru à la tahitienne',
  servings: 2,
  ingredients: [{
    ingredient: 'Thon Rouge (ou blanc)',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Concombre',
    quantity: 1
  }, {
    ingredient: 'Tomate',
    quantity: 2
  }, {
    ingredient: 'Carotte',
    quantity: 1
  }, {
    ingredient: 'Citron Vert',
    quantity: 5
  }, {
    ingredient: 'Lait de coco',
    quantity: 100,
    unit: 'ml'
  }],
  time: 60,
  description: 'Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco',
  appliance: 'Saladier',
  ustensils: ['presse citron']
}, {
  id: 3,
  name: 'Poulet coco réunionnais',
  servings: 4,
  ingredients: [{
    ingredient: 'Poulet',
    quantity: 1
  }, {
    ingredient: 'Lait de coco',
    quantity: 400,
    unit: 'ml'
  }, {
    ingredient: 'Coulis de tomates',
    quantity: 25,
    unit: 'cl'
  }, {
    ingredient: 'Oignon',
    quantity: 1
  }, {
    ingredient: 'Poivron rouge',
    quantity: 1
  }, {
    ingredient: "Huile d'olive"
  }],
  time: 80,
  description: "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
  appliance: 'Cocotte',
  ustensils: ['couteau']
}, {
  id: 4,
  name: 'Salade de riz',
  servings: 4,
  ingredients: [{
    ingredient: 'Riz blanc',
    quantity: 500,
    unit: 'grammes'
  }, {
    ingredient: 'Thon en miettes',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Tomate',
    quantity: 2
  }, {
    ingredient: 'Oeuf dur',
    quantity: 2
  }, {
    ingredient: 'Maïs',
    quantity: 300,
    unit: 'grammes'
  }, {
    ingredient: 'Vinaigrette',
    quantity: 5,
    unit: 'cl'
  }],
  time: 50,
  description: 'Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..',
  appliance: 'Cuiseur de riz',
  ustensils: ['saladier', 'passoire']
}, {
  id: 5,
  name: 'Tarte au thon',
  servings: 4,
  ingredients: [{
    ingredient: 'Pâte feuilletée',
    quantity: 1
  }, {
    ingredient: 'Thon en miettes',
    quantity: 130,
    unit: 'grammes'
  }, {
    ingredient: 'Tomate',
    quantity: 2
  }, {
    ingredient: 'Crème fraîche',
    quantity: 2,
    unit: 'cuillères à soupe'
  }, {
    ingredient: 'gruyère râpé',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Moutarde de Dijon',
    quantity: 1,
    unite: 'cuillères à soupe'
  }],
  time: 45,
  description: 'Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraiche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes',
  appliance: 'Four',
  ustensils: ['moule à tarte', 'râpe à fromage', 'couteau']
}, {
  id: 6,
  name: 'Tarte aux pommes',
  servings: 6,
  ingredients: [{
    ingredient: 'Pâte brisée',
    quantity: 1
  }, {
    ingredient: 'Pomme',
    quantity: 3
  }, {
    ingredient: 'Oeuf',
    quantity: '2'
  }, {
    ingredient: 'Crème fraîche',
    quantity: 25,
    unit: 'cl'
  }, {
    ingredient: 'Sucre en poudre',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre vanillé',
    quantity: 1,
    unit: 'sachets'
  }],
  time: 50,
  description: "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraiche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crême fraiche. Laisser cuire au four pendant 30 minutes",
  appliance: 'Four',
  ustensils: ['moule à tarte', 'saladier', 'fourchette']
}, {
  id: 7,
  name: 'Tartelettes au chocolat et aux fraises',
  servings: 6,
  ingredients: [{
    ingredient: 'Pâte sablée',
    quantity: 1
  }, {
    ingredient: 'Chocolat au lait',
    quantity: 300,
    unit: 'grammes'
  }, {
    ingredient: 'Crème liquide',
    quantity: 80,
    unit: 'cl'
  }, {
    ingredient: 'Beurre',
    quantity: '30',
    unit: 'grammes'
  }, {
    ingredient: 'Fraise',
    quantity: 6
  }],
  time: 50,
  description: "Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
  appliance: 'Four',
  ustensils: ['moule à tartelettes (6)', 'Casserolle']
}, {
  id: 8,
  name: 'Brownie',
  servings: 10,
  ingredients: [{
    ingredient: 'Noix',
    quantity: '180',
    unit: 'grammes'
  }, {
    ingredient: 'Chocolat noir',
    quantity: 150,
    unit: 'grammes'
  }, {
    ingredient: 'Beurre',
    quantity: 120,
    unit: 'grammes'
  }, {
    ingredient: 'Oeuf',
    quantity: 2
  }, {
    ingredient: 'Sucre en poudre',
    quantity: '110',
    unit: 'grammes'
  }, {
    ingredient: 'farine',
    quantity: 90,
    unit: 'grammes'
  }],
  time: 60,
  description: "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
  appliance: 'Four',
  ustensils: ['moule à gateaux', 'Casserolle']
}, {
  id: 9,
  name: 'Salade Méditerannéene fraiche au chèvre',
  servings: 4,
  ingredients: [{
    ingredient: 'Concombre',
    quantity: 1
  }, {
    ingredient: 'Olives'
  }, {
    ingredient: 'Fromage de chèvre',
    quantity: 150,
    unit: 'grammes'
  }, {
    ingredient: 'Vinaigre Balsamic'
  }, {
    ingredient: "Huile d'olive"
  }, {
    ingredient: 'Basilic'
  }],
  time: 15,
  description: "Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
  appliance: 'Saladier',
  ustensils: ['cuillère en bois', 'couteau']
}, {
  id: 10,
  name: 'Tartiflette',
  servings: 4,
  ingredients: [{
    ingredient: 'Roblochon',
    quantity: '1'
  }, {
    ingredient: 'Pommes de terre',
    quantity: 4.5,
    unit: 'kg'
  }, {
    ingredient: 'Jambon fumé',
    quantity: 2,
    unit: 'tranches'
  }, {
    ingredient: 'Oignon',
    quantity: 300,
    unit: 'grammes'
  }, {
    ingredient: 'Vin blanc sec',
    quantity: 30,
    unit: 'cl'
  }],
  time: 60,
  description: "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
  appliance: 'Four',
  ustensils: ['plat à gratin', 'couteau', 'économe']
}, {
  id: 11,
  name: 'Salade tomate, mozzarella et pommes',
  servings: 4,
  ingredients: [{
    ingredient: 'Tomates cerises',
    quantity: 250,
    unit: 'grammes'
  }, {
    ingredient: 'Mozzarella',
    quantity: 150,
    unit: 'grammes'
  }, {
    ingredient: 'Jambon de parme',
    quantity: 4,
    unit: 'tranches'
  }, {
    ingredient: 'Pommes',
    quantity: 1
  }, {
    ingredient: 'Salade Verte',
    quantity: 1
  }, {
    ingredient: 'Vinaigrette',
    quantity: 5,
    unit: 'cl'
  }],
  time: 10,
  description: 'Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ',
  appliance: 'Saladier',
  ustensils: ['couteau', 'cuillère à melon']
}, {
  id: 12,
  name: 'Compote pomme rhubarbe',
  servings: 4,
  ingredients: [{
    ingredient: 'Rhubarbe',
    quantity: 160,
    unit: 'grammes'
  }, {
    ingredient: 'Pommes',
    quantity: 8
  }, {
    ingredient: 'Sucre vanillé',
    quantity: 6,
    unit: 'sachets'
  }, {
    ingredient: 'Eau',
    quantity: '0.5',
    unit: 'tasses'
  }],
  time: 40,
  description: "Éplucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
  appliance: 'Casserolle',
  ustensils: ['couteau', 'économe']
}, {
  id: 13,
  name: 'Salade mâchée de patates',
  servings: 2,
  ingredients: [{
    ingredient: 'Mâche',
    quantity: 60,
    unit: 'grammes'
  }, {
    ingredient: 'Pommes de terre',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Échalote',
    quantity: 2
  }, {
    ingredient: 'Vinaigre de cidre',
    quantity: 1,
    unit: 'cuillère à soupe'
  }, {
    ingredient: "Huile d'olive",
    quantity: 2,
    unit: 'cuillère à soupe'
  }],
  time: 40,
  description: "Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
  appliance: 'Casserolle',
  ustensils: ['couteau', 'saladier', 'cuillère en bois']
}, {
  id: 14,
  name: 'Galette Bretonne Saucisse et Fromage à raclette',
  servings: 2,
  ingredients: [{
    ingredient: 'Saucisse bretonne ou de toulouse',
    quantity: 2
  }, {
    ingredient: 'Farine de blé noir',
    quantity: 130,
    unit: 'grammes'
  }, {
    ingredient: 'Oeuf',
    quantity: 1
  }, {
    ingredient: 'Fromage à raclette',
    quantity: 300,
    unit: 'grammes'
  }, {
    ingredient: 'Oignon',
    quantity: 1
  }, {
    ingredient: 'Beurre',
    quantity: 75,
    unit: 'grammes'
  }],
  time: 100,
  description: "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
  appliance: 'Four',
  ustensils: ['poelle à frire', 'couteau']
}, {
  id: 15,
  name: 'Crêpes Chocolat Banane',
  servings: 10,
  ingredients: [{
    ingredient: 'Oeuf',
    quantity: 3
  }, {
    ingredient: 'Farine',
    quantity: 250,
    unit: 'grammes'
  }, {
    ingredient: 'Lait',
    quantity: 600,
    unit: 'ml'
  }, {
    ingredient: 'Beurre salé',
    quantity: 30,
    unit: 'grammes'
  }, {
    ingredient: 'Chocolat au lait',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Banane',
    quantity: 4
  }],
  time: 60,
  description: "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
  appliance: 'Poële à crêpe',
  ustensils: ['saladier', 'louche', 'cuillère en bois']
}, {
  id: 16,
  name: 'Gratin de pâtes à la tomate',
  servings: 2,
  ingredients: [{
    ingredient: 'Tomate',
    quantity: 500,
    unit: 'grammes'
  }, {
    ingredient: 'Mozzarella',
    quantity: 250,
    unit: 'grammes'
  }, {
    ingredient: 'Pennes',
    quantity: 500,
    unit: 'grammes'
  }, {
    ingredient: 'Basilic',
    quantity: 1,
    unit: 'tiges'
  }, {
    ingredient: "Huile d'olive",
    quantity: 2,
    unit: 'cuillère à soupe'
  }],
  time: 45,
  description: "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
  appliance: 'Four',
  ustensils: ['plat à gratin', 'couteau', 'râpe à fromage']
}, {
  id: 17,
  name: 'Smoothie à la fraise',
  servings: 6,
  ingredients: [{
    ingredient: 'Fraise',
    quantity: 500,
    unit: 'grammes'
  }, {
    ingredient: 'Pastèque',
    quantity: 0.5
  }, {
    ingredient: 'Jus de citron',
    quantity: 1,
    unit: 'cuillères à soupe'
  }, {
    ingredient: 'Glaçons',
    quantity: 8
  }, {
    ingredient: 'Menthe'
  }],
  time: 15,
  description: 'Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et déguster.',
  appliance: 'Blender',
  ustensils: ['verres', 'couteau', 'presse citron']
}, {
  id: 18,
  name: 'Smoothie ananas et vanille',
  servings: 5,
  ingredients: [{
    ingredient: 'Ananas',
    quantity: 1
  }, {
    ingredient: 'Glace à la vanille',
    quantity: 500,
    unit: 'ml'
  }, {
    ingredient: 'Lait',
    quantity: 50,
    unit: 'cl'
  }],
  time: 10,
  description: "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
  appliance: 'Blender',
  ustensils: ['verres', 'couteau']
}, {
  id: 19,
  name: 'Shake Banane Kiwi',
  servings: 4,
  ingredients: [{
    ingredient: 'Kiwi',
    quantity: 4
  }, {
    ingredient: 'Citron',
    quantity: 1
  }, {
    ingredient: 'Lait',
    quantity: 1,
    unit: 'litres'
  }, {
    ingredient: 'Sucre glace',
    quantity: 30,
    unit: 'grammes'
  }, {
    ingredient: 'Banane',
    quantity: 1
  }],
  time: 0,
  description: "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
  appliance: 'Blender',
  ustensils: ['couteau', 'verres', 'presse citron']
}, {
  id: 20,
  name: 'Pates Carbonara',
  servings: 5,
  ingredients: [{
    ingredient: 'Tagliatelles',
    quantity: 500,
    unit: 'grammes'
  }, {
    ingredient: 'Lardons',
    quantity: 150,
    unit: 'grammes'
  }, {
    ingredient: 'Crème fraîche',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Parmesan',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: "Huile d'olive",
    quantity: 1,
    unit: 'cuillères à soupe'
  }],
  time: 30,
  description: "Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crême fraiche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
  appliance: 'Sauteuse',
  ustensils: ['râpe à fromage', 'cuillère en bois']
}, {
  id: 21,
  name: 'Spaghettis à la bolognaise',
  servings: 4,
  ingredients: [{
    ingredient: 'Spaghettis',
    quantity: 400,
    unit: 'grammes'
  }, {
    ingredient: 'Oignon',
    quantity: 2
  }, {
    ingredient: 'Coulis de tomates',
    quantity: 300,
    unit: 'grammes'
  }, {
    ingredient: 'Viande hachée 1% de matière grasse',
    quantity: 400,
    unit: 'grammes'
  }, {
    ingredient: 'Vin rouge',
    quantity: 20,
    unit: 'cl'
  }, {
    ingredient: 'Crème fraîche',
    quantity: 1,
    unit: 'cuillères à soupe'
  }],
  time: 30,
  description: 'Cuisiner la viande hachée dans une poelle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraiche à la viande hachée. Serivir.',
  appliance: 'Casserolle',
  ustensils: ['cuillère en bois', 'louche', 'couteau']
}, {
  id: 22,
  name: 'Fondant au chocolat',
  servings: 4,
  ingredients: [{
    ingredient: 'Beurre',
    quantity: 160,
    unit: 'grammes'
  }, {
    ingredient: 'Chocolat noir',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Farine',
    quantity: 50,
    unit: 'grammes'
  }, {
    ingredient: 'Oeuf',
    quantity: 4
  }, {
    ingredient: 'Sucre',
    quantity: 150,
    unit: 'grammes'
  }],
  time: 30,
  description: "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crême dessert.",
  appliance: 'Four',
  ustensils: ['moule à gateaux', 'fouet', 'Casserolle']
}, {
  id: 23,
  name: 'Quiche lorraine',
  servings: 4,
  ingredients: [{
    ingredient: 'Pâte brisée',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Lardons',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Beurre',
    quantity: 30,
    unit: 'grammes'
  }, {
    ingredient: 'Oeuf',
    quantity: 3
  }, {
    ingredient: 'Crème fraîche',
    quantity: 20,
    unit: 'cl'
  }, {
    ingredient: 'Lait',
    quantity: 20,
    unit: 'cl'
  }],
  time: 60,
  description: "Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
  appliance: 'Four',
  ustensils: ['moule à gateaux', 'rouleau à patisserie', 'fouet']
}, {
  id: 24,
  name: 'Salade de pâtes',
  servings: 4,
  ingredients: [{
    ingredient: 'Thon en miettes',
    quantity: 160,
    unit: 'grammes'
  }, {
    ingredient: 'Maïs',
    quantity: 60,
    unit: 'grammes'
  }, {
    ingredient: 'Tomate',
    quantity: 1
  }, {
    ingredient: 'Concombre',
    quantity: 0.5
  }, {
    ingredient: 'Macaronis',
    quantity: 300,
    unit: 'grammes'
  }, {
    ingredient: 'Mayonnaise',
    quantity: 2,
    unit: 'cuillères à soupe'
  }],
  time: 40,
  description: 'Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.',
  appliance: 'Saladier',
  ustensils: ['couteau', 'cuillère en bois']
}, {
  id: 25,
  name: 'Cookies',
  servings: 4,
  ingredients: [{
    ingredient: 'Sucre',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Beurre',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Farine',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Chocolat noir en pepites',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Oeuf',
    quantity: 1
  }],
  time: 30,
  description: "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
  appliance: 'Four',
  ustensils: ['fouet', 'saladier', 'plaque de cuisson']
}, {
  id: 26,
  name: 'Soupe de tomates',
  servings: 2,
  ingredients: [{
    ingredient: 'Tomate',
    quantity: 6
  }, {
    ingredient: 'Pommes de terre',
    quantity: 1
  }, {
    ingredient: "Huile d'olive"
  }, {
    ingredient: 'Oignon',
    quantity: 1
  }, {
    ingredient: 'Ail',
    quantity: 1,
    unit: 'gousses'
  }],
  time: 25,
  description: "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
  appliance: 'Mixer',
  ustensils: ['cocotte minute', 'couteau']
}, {
  id: 27,
  name: "Soupe à l'oseille",
  servings: 4,
  ingredients: [{
    ingredient: 'Oseille',
    quantity: 2
  }, {
    ingredient: 'Oeuf',
    quantity: 1
  }, {
    ingredient: 'Crème fraîche',
    quantity: 4,
    unit: 'cuillère à soupe'
  }, {
    ingredient: 'Vermicelles',
    quantity: 1,
    unit: 'verres'
  }, {
    ingredient: 'Beurre salé',
    quantity: 50,
    unit: 'grammes'
  }],
  time: 15,
  description: "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crême fraîche",
  appliance: 'Casserolle',
  ustensils: ['couteau', 'cuillère en bois']
}, {
  id: 28,
  name: 'Soupe de poireaux',
  servings: 4,
  ingredients: [{
    ingredient: 'Poireau',
    quantity: 3
  }, {
    ingredient: 'Pommes de terre',
    quantity: 400,
    unit: 'grammes'
  }, {
    ingredient: 'Oseille',
    quantity: 75,
    unit: 'grammes'
  }, {
    ingredient: 'Beurre',
    quantity: 50,
    unit: 'grammes'
  }, {
    ingredient: 'Crème fraîche',
    quantity: 10,
    unit: 'cl'
  }],
  time: 80,
  description: "Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
  appliance: 'Mixer',
  ustensils: ['Casserolle', 'couteau']
}, {
  id: 29,
  name: 'Houmous Express',
  servings: 2,
  ingredients: [{
    ingredient: 'Pois chiches',
    quantity: 1,
    unit: 'boites'
  }, {
    ingredient: 'Ail',
    quantity: 1,
    unit: 'gousses'
  }, {
    ingredient: 'Citron',
    quantity: 2
  }, {
    ingredient: "Huile d'olive"
  }, {
    ingredient: 'Paprika'
  }],
  time: 30,
  description: "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
  appliance: 'Mixer',
  ustensils: ['cuillère en bois', 'presse citron']
}, {
  id: 30,
  name: 'Purée de pois cassés',
  servings: 4,
  ingredients: [{
    ingredient: 'Pois Cassé',
    quantity: 500,
    unit: 'grammes'
  }, {
    ingredient: 'Oignon',
    quantity: 1
  }, {
    ingredient: 'Ail',
    quantity: 2,
    unit: 'gousses'
  }],
  time: 60,
  description: "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
  appliance: 'Mixer',
  ustensils: ['Casserolle', 'cuillère en bois']
}, {
  id: 31,
  name: 'Jardinière de légumes',
  servings: 4,
  ingredients: [{
    ingredient: 'Carotte',
    quantity: 2
  }, {
    ingredient: 'Pommes de terre',
    quantity: 2
  }, {
    ingredient: 'Haricots verts',
    quantity: 150,
    unit: 'grammes'
  }, {
    ingredient: 'Petits poids',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Lardons',
    quantity: 150,
    unit: 'grammes'
  }],
  time: 60,
  description: "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier",
  appliance: 'Poële',
  ustensils: ['couteau', 'économe']
}, {
  id: 32,
  name: 'Croque Monsieur à la dinde',
  servings: 4,
  ingredients: [{
    ingredient: 'Pain de mie',
    quantity: 8,
    unit: 'tranches'
  }, {
    ingredient: 'Blanc de dinde',
    quantity: 4,
    unit: 'tranches'
  }, {
    ingredient: 'Emmental',
    quantity: 8,
    unit: 'tranches'
  }, {
    ingredient: 'Gruyère',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Lait',
    quantity: 5,
    unit: 'cl'
  }, {
    ingredient: 'Noix de muscade',
    quantity: 1,
    unit: 'pincées'
  }],
  time: 20,
  description: "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.",
  appliance: 'Four',
  ustensils: ['râpe à fromage', 'cuillère à soupe', 'couteau']
}, {
  id: 33,
  name: 'Sandwich au saumon fumé',
  servings: 4,
  ingredients: [{
    ingredient: 'Pain de mie',
    quantity: 8,
    unit: 'tranches'
  }, {
    ingredient: 'Saumon Fumé',
    quantity: 4,
    unit: 'tranches'
  }, {
    ingredient: 'Feuilles de laitue',
    quantity: 4
  }, {
    ingredient: 'Fromage blanc',
    quantity: 4,
    unit: 'cuillères à soupe'
  }, {
    ingredient: 'Jus de citron',
    quantity: 1,
    unit: 'cuillères à soupe'
  }],
  time: 5,
  description: "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
  appliance: 'Four',
  ustensils: ['couteau', 'cuillère en bois']
}, {
  id: 34,
  name: 'Purée de patate douce',
  servings: 4,
  ingredients: [{
    ingredient: 'Patate douce',
    quantity: 800,
    unit: 'grammes'
  }, {
    ingredient: 'Crème fraîche',
    quantity: 20,
    unit: 'cl'
  }, {
    ingredient: "Huile d'olive"
  }, {
    ingredient: 'Orange',
    quantity: 1
  }],
  time: 25,
  description: "Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserolle d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez. Pressez l'orange et ajouter le jus à l'ensemble. Servir.",
  appliance: 'Mixer',
  ustensils: ['couteau', 'économe', 'cuillère en bois']
}, {
  id: 35,
  name: 'Purée de carottes',
  servings: 2,
  ingredients: [{
    ingredient: 'Carotte',
    quantity: 6
  }, {
    ingredient: 'Pommes de terre',
    quantity: 1
  }, {
    ingredient: 'Beurre',
    quantity: 20,
    unit: 'grammes'
  }, {
    ingredient: 'Crème fraîche',
    quantity: 2,
    unit: 'cuillères à soupe'
  }, {
    ingredient: 'Cumin',
    quantity: 1,
    unit: 'cuillères à café'
  }, {
    ingredient: 'Noix de muscade',
    quantity: 1,
    unit: 'pincées'
  }],
  time: 25,
  description: 'Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade.',
  appliance: 'Mixer',
  ustensils: ['cocotte minute', 'couteau', 'cuillère en bois']
}, {
  id: 36,
  name: 'Lasagne Courgettes et Chèvre',
  servings: 2,
  ingredients: [{
    ingredient: 'Courgette',
    quantity: 2
  }, {
    ingredient: 'Fromage de chèvre',
    quantity: 4
  }, {
    ingredient: 'Lait',
    quantity: 25,
    unit: 'cl'
  }, {
    ingredient: 'Lasagnes',
    quantity: 5,
    unit: 'feuilles'
  }, {
    ingredient: 'Gruyère',
    quantity: 40,
    unit: 'grammes'
  }, {
    ingredient: 'Maïzena',
    quantity: 1,
    unit: 'cuillères à soupe'
  }],
  time: 35,
  description: 'Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes.',
  appliance: 'Four',
  ustensils: ['plat à gratin', 'râpe à fromage', 'fouet']
}, {
  id: 37,
  name: 'Courgettes farcies au boeuf',
  servings: 2,
  ingredients: [{
    ingredient: 'Courgette',
    quantity: 2
  }, {
    ingredient: 'Viande hachée',
    quantity: 600,
    unit: 'grammes'
  }, {
    ingredient: "Huile d'olive",
    quantity: 25,
    unit: 'cl'
  }, {
    ingredient: 'Oignon',
    quantity: 1
  }, {
    ingredient: 'Coulis de tomates',
    quantity: 20,
    unit: 'cl'
  }, {
    ingredient: 'Gruyère',
    quantity: 50,
    unit: 'grammes'
  }],
  time: 60,
  description: "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé",
  appliance: 'Four',
  ustensils: ['couteau', 'cuillère en bois', 'Poelle à frire']
}, {
  id: 38,
  name: 'Pain Perdu',
  servings: 4,
  ingredients: [{
    ingredient: 'Pain',
    quantity: 6,
    unit: 'tranches'
  }, {
    ingredient: 'Lait',
    quantity: 25,
    unit: 'cl'
  }, {
    ingredient: 'Oeuf',
    quantity: 3
  }, {
    ingredient: 'Sucre roux',
    quantity: 75,
    unit: 'grammes'
  }],
  time: 20,
  description: 'Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir',
  appliance: 'Four',
  ustensils: ['fouet', 'bol', 'cuillère à soupe']
}, {
  id: 39,
  name: 'Crumble aux pommes',
  servings: 40,
  ingredients: [{
    ingredient: 'Pomme',
    quantity: 2
  }, {
    ingredient: 'Farine',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Beurre',
    quantity: 50,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre roux',
    quantity: 80,
    unit: 'grammes'
  }],
  time: 40,
  description: 'Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four',
  appliance: 'Four',
  ustensils: ['saladier', 'couteau', 'fouet']
}, {
  id: 40,
  name: 'Limonade',
  servings: 4,
  ingredients: [{
    ingredient: 'Eau',
    quantity: 1,
    unit: 'Litres'
  }, {
    ingredient: 'Citron Vert',
    quantity: 3
  }, {
    ingredient: 'Sucre en poudre',
    quantity: 4,
    unit: 'cuillères à café'
  }, {
    ingredient: 'Bicarbonate',
    quantity: 1,
    unit: 'cuillères à café'
  }],
  time: 10,
  description: "Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.",
  appliance: 'Saladier',
  ustensils: ['cuillère en bois']
}, {
  id: 41,
  name: 'Mousse au chocolat',
  servings: 4,
  ingredients: [{
    ingredient: 'Oeuf',
    quantity: 3
  }, {
    ingredient: 'Chocolat noir',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre vanillé',
    quantity: 1,
    unit: 'sachets'
  }],
  time: 20,
  description: "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
  appliance: 'Casserolle',
  ustensils: ['fouet', 'spatule', 'verres']
}, {
  id: 42,
  name: 'Charlotte au poires',
  servings: 3,
  ingredients: [{
    ingredient: 'Chocolat',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Oeuf',
    quantity: 3
  }, {
    ingredient: 'Poires au jus',
    quantity: 0.5,
    unit: 'boites'
  }, {
    ingredient: 'Boudoirs',
    quantity: 15
  }],
  time: 60,
  description: 'Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.',
  appliance: 'Moule à charlotte',
  ustensils: ['saladier', 'couteau', 'fouet']
}, {
  id: 43,
  name: 'Tarte au citron',
  servings: 6,
  ingredients: [{
    ingredient: 'Pâte brisée',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre',
    quantity: 150,
    unit: 'grammes'
  }, {
    ingredient: 'Beurre fondu',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Oeuf',
    quantity: 3
  }, {
    ingredient: 'Citron'
  }],
  time: 50,
  description: 'Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ',
  appliance: 'Four',
  ustensils: ['rouleau à patisserie', 'moule à tarte', 'presse citron']
}, {
  id: 44,
  name: 'Crème déssert au chocolat',
  servings: 6,
  ingredients: [{
    ingredient: 'Lait',
    quantity: 1,
    unit: 'litres'
  }, {
    ingredient: 'Chocolat',
    quantity: 200,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Beurre',
    quantity: 50,
    unit: 'grammes'
  }, {
    ingredient: 'farine',
    quantity: 40,
    unit: 'grammes'
  }],
  time: 15,
  description: 'Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres',
  appliance: 'Casserolle',
  ustensils: ['cuillère en bois']
}, {
  id: 45,
  name: 'Crème patissière',
  servings: 8,
  ingredients: [{
    ingredient: 'Lait',
    quantity: 50,
    unit: 'cl'
  }, {
    ingredient: 'Oeuf',
    quantity: 2
  }, {
    ingredient: 'Farine',
    quantity: 30,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre',
    quantity: 80,
    unit: 'grammes'
  }],
  time: 30,
  description: "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
  appliance: 'Casserolle',
  ustensils: ['fouet', 'saladier']
}, {
  id: 46,
  name: 'Far breton',
  servings: 6,
  ingredients: [{
    ingredient: 'Farine',
    quantity: 250,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre',
    quantity: 150,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre vanillé',
    quantity: 1,
    unit: 'sachets'
  }, {
    ingredient: 'Oeuf',
    quantity: 4
  }, {
    ingredient: 'Lait',
    quantity: 1,
    unit: 'litre'
  }, {
    ingredient: 'Pruneaux',
    quantity: 100,
    unit: 'grammes'
  }],
  time: 60,
  description: 'Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes',
  appliance: 'Four',
  ustensils: ['fouet', 'moule', 'verres']
}, {
  id: 47,
  name: 'Mousse au citron',
  servings: 6,
  ingredients: [{
    ingredient: 'Jus de citron',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Mascarpone',
    quantity: 250,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre',
    quantity: 100,
    unit: 'grammes'
  }, {
    ingredient: 'Crème fraîche',
    quantity: 20,
    unit: 'cl'
  }],
  time: 5,
  description: 'Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraiche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir',
  appliance: 'Saladier',
  ustensils: ['fouet', 'verres', 'cuillère en bois']
}, {
  id: 48,
  name: 'Pizza',
  servings: 4,
  ingredients: [{
    ingredient: 'Pâte à pizza',
    quantity: 1
  }, {
    ingredient: 'Tomates pelées',
    quantity: 1,
    unit: 'boites'
  }, {
    ingredient: 'Lardons',
    quantity: 1,
    unit: 'barquettes'
  }, {
    ingredient: 'Champignons de paris',
    quantity: 1,
    unit: 'boites'
  }, {
    ingredient: 'Gruyère',
    quantity: 200,
    unit: 'grammes'
  }],
  time: 40,
  description: 'Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes',
  appliance: 'Four',
  ustensils: ['rouleau à patisserie', 'râpe à fromage', 'couteau']
}, {
  id: 49,
  name: 'Smoothie tropical',
  servings: 4,
  ingredients: [{
    ingredient: 'Bananes',
    quantity: 2
  }, {
    ingredient: 'Kiwis',
    quantity: 3
  }, {
    ingredient: 'Mangue',
    quantity: 1
  }, {
    ingredient: 'Ananas',
    quantity: 4,
    unit: 'tranches'
  }, {
    ingredient: 'Miel',
    quantity: 2,
    unit: 'cuillères à soupe'
  }],
  time: 0,
  description: "Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
  appliance: 'Blender',
  ustensils: ['couteau', 'verres']
}, {
  id: 50,
  name: 'Frangipane',
  servings: 2,
  ingredients: [{
    ingredient: 'Pâte feuilletée',
    quantity: 400,
    unit: 'grammes'
  }, {
    ingredient: 'Oeuf',
    quantity: 6
  }, {
    ingredient: "Poudre d'amendes",
    quantity: 500,
    unit: 'grammes'
  }, {
    ingredient: 'Beurre',
    quantity: 500,
    unit: 'grammes'
  }, {
    ingredient: 'Sucre glace',
    quantity: 500,
    unit: 'grammes'
  }],
  time: 60,
  description: "Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
  appliance: 'Four',
  ustensils: ['rouleau à patisserie', 'fouet']
}];
exports.recipes = recipes;
},{}],"../js/generatelisteners.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateListeners = generateListeners;

var _functions = require("./functions.js");

var _generateCards = require("./generateCards.js");

var _dropdownElements = require("./dropdownElements.js");

/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable no-tabs */
// import { recipes } from './recipes.js'
// const filtredRecipes = recipes

/**
 * @function generateListeners
 * fonction permettant de filtrer les recettes au click
 * @param {parameters} dropDownMenuItems - recettes filtrées
 */
function generateListeners(dropDownMenuItems, filtredRecipes) {
  dropDownMenuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      if (event.target.parentNode.id === 'menu__ingredients') {
        _functions.filters.ingredients.push(event.target.textContent);
      } else if (event.target.parentNode.id === 'menu__appliances') {
        _functions.filters.appliances = event.target.textContent;
      } else if (event.target.parentNode.id === 'menu__ustensils') {
        _functions.filters.ustensils.push(event.target.textContent);
      }

      var newRecipes = (0, _functions.filter)(filtredRecipes, _functions.filters);
      (0, _generateCards.generateCards)(newRecipes);
      (0, _dropdownElements.dropdownTags)(newRecipes);
      var dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items');
      generateListeners(dropDownMenuItems, newRecipes);
    });
  });
}
},{"./functions.js":"../js/functions.js","./generateCards.js":"../js/generateCards.js","./dropdownElements.js":"../js/dropdownElements.js"}],"../js/searchTags.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerateSearchedTags = void 0;

var _dropdownElements = require("./dropdownElements.js");

var _dropdown = require("./dropdown.js");

var _functions = require("./functions.js");

var _generateCards = require("./generateCards.js");

var _generatelisteners = require("./generatelisteners.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GenerateSearchedTags = /*#__PURE__*/function () {
  function GenerateSearchedTags(filtredRecipes) {
    _classCallCheck(this, GenerateSearchedTags);

    this.tagsIngredients();
    this.tagsAppliances();
    this.tagsUstensils();
    this.deleteTags(filtredRecipes);
  }

  _createClass(GenerateSearchedTags, [{
    key: "tagsIngredients",
    value: function tagsIngredients() {
      document.querySelector('#menu__ingredients').addEventListener('click', function (e) {
        document.querySelector('#tags').insertAdjacentHTML('afterbegin', "\n\t\t  <ul class=\"tags__ul tags__ul--ingredients\">\n\t\t\t<li data-ingredients=\"".concat(e.target.textContent, "\" class=\"tags__li tags__li--ingredients\">").concat(e.target.textContent, "\n\t\t\t<i class=\"far fa-times-circle tags__li__close\"></i>\n\t\t\t</li>\n\t\t  </ul>"));
      });
    }
  }, {
    key: "tagsAppliances",
    value: function tagsAppliances() {
      document.querySelector('#menu__appliances').addEventListener('click', function (e) {
        document.querySelector('#tags').insertAdjacentHTML('afterbegin', "\n\t\t  <ul class=\"tags__ul tags__ul--appliances\">\n\t\t\t<li data-appliances=\"".concat(e.target.textContent, "\" class=\"tags__li tags__li--appliances\">").concat(e.target.textContent, "\n\t\t\t<i class=\"far fa-times-circle tags__li__close\"></i>\n\t\t\t</li>\n\t\t  </ul>"));
      });
    }
  }, {
    key: "tagsUstensils",
    value: function tagsUstensils() {
      document.querySelector('#menu__ustensils').addEventListener('click', function (e) {
        document.querySelector('#tags').insertAdjacentHTML('afterbegin', "\n\t\t  <ul class=\"tags__ul tags__ul--ustensils\">\n\t\t\t<li data-ustensils=\"".concat(e.target.textContent, "\" class=\"tags__li tags__li--ustensils\">").concat(e.target.textContent, "\n\t\t\t<i class=\"far fa-times-circle tags__li__close\"></i>\n\t\t\t</li>\n\t\t  </ul>"));
      });
    }
  }, {
    key: "deleteTags",
    value: function deleteTags(filtredRecipes) {
      document.addEventListener('click', function (e) {
        var tagsNode = e.target.classList[2];

        if (tagsNode === 'tags__li__close') {
          // on supprime le tag
          e.target.parentNode.remove(); // on recupere tous les tags qu'il reste

          var tagsElts = document.querySelectorAll('.tags__li');
          _functions.filters.ingredients = Array.from(tagsElts).filter(function (elt) {
            return elt.dataset.ingredients;
          }).map(function (elt) {
            return elt.dataset.ingredients;
          });
          _functions.filters.ustensils = Array.from(tagsElts).filter(function (elt) {
            return elt.dataset.ustensils;
          }).map(function (elt) {
            return elt.dataset.ustensils;
          });
          var appliances = Array.from(tagsElts).filter(function (elt) {
            return elt.dataset.appliances;
          }).map(function (elt) {
            return elt.dataset.appliances;
          });
          _functions.filters.appliances = appliances.length > 0 ? appliances[0] : '';
          console.log(_functions.filters);
          var recipes = (0, _functions.filter)(filtredRecipes, _functions.filters);
          console.log(recipes);
          (0, _generateCards.generateCards)(recipes);
          (0, _dropdownElements.dropdownTags)(recipes);
          var buttonDropdown = document.querySelectorAll('.dropdown__icon');
          buttonDropdown.forEach(function (button) {
            button.addEventListener('click', function (event) {
              (0, _dropdown.openDropdown)(event);
            });
          });
          var dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items');
          (0, _generatelisteners.generateListeners)(dropDownMenuItems, recipes);
        }
      });
    }
  }]);

  return GenerateSearchedTags;
}();

exports.GenerateSearchedTags = GenerateSearchedTags;
},{"./dropdownElements.js":"../js/dropdownElements.js","./dropdown.js":"../js/dropdown.js","./functions.js":"../js/functions.js","./generateCards.js":"../js/generateCards.js","./generatelisteners.js":"../js/generatelisteners.js"}],"../js/generateListeners.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateListeners = generateListeners;

var _functions = require("./functions.js");

var _generateCards = require("./generateCards.js");

var _dropdownElements = require("./dropdownElements.js");

/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable no-tabs */
// import { recipes } from './recipes.js'
// const filtredRecipes = recipes

/**
 * @function generateListeners
 * fonction permettant de filtrer les recettes au click
 * @param {parameters} dropDownMenuItems - recettes filtrées
 */
function generateListeners(dropDownMenuItems, filtredRecipes) {
  dropDownMenuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      if (event.target.parentNode.id === 'menu__ingredients') {
        _functions.filters.ingredients.push(event.target.textContent);
      } else if (event.target.parentNode.id === 'menu__appliances') {
        _functions.filters.appliances = event.target.textContent;
      } else if (event.target.parentNode.id === 'menu__ustensils') {
        _functions.filters.ustensils.push(event.target.textContent);
      }

      var newRecipes = (0, _functions.filter)(filtredRecipes, _functions.filters);
      (0, _generateCards.generateCards)(newRecipes);
      (0, _dropdownElements.dropdownTags)(newRecipes);
      var dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items');
      generateListeners(dropDownMenuItems, newRecipes);
    });
  });
}
},{"./functions.js":"../js/functions.js","./generateCards.js":"../js/generateCards.js","./dropdownElements.js":"../js/dropdownElements.js"}],"../js/mainSearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainSearch = mainSearch;

var _functions = require("./functions.js");

var _recipes = require("./recipes.js");

var _normalize = require("./normalize.js");

var _generateCards = require("./generateCards.js");

var _dropdownElements = require("./dropdownElements.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// recuperer recettes affichées
function getRecipes() {
  var selectedRecipes = [];
  var card = document.querySelectorAll('.card');
  var allCards = Array.from(card);
  allCards.forEach(function (card) {
    var cardId = card.id;

    for (var i = 0; i < _recipes.recipes.length; i++) {
      var recipeId = "article-".concat(_recipes.recipes[i].id);

      if (cardId === recipeId) {
        selectedRecipes.push(_recipes.recipes[i]);
      }
    }
  });
  return selectedRecipes;
}

function mainSearch(e) {
  // e.preventDefault
  var searchInput = document.getElementById('mainSearch');
  var text = searchInput.values;
  var tags = (0, _functions.filter)(); // fonction pour récupérer l'array de tous les tags affichés?

  var filtredRecipes; // addeventlistener sur keyup pour suppression

  searchInput.addEventListener('keyup', function (e) {
    var keyCode = e.code;

    if (keyCode === 'Backspace' || keyCode === 'Delete') {
      outcome(tags, _recipes.recipes);
    }
  }); // si saisie > 3 characters

  if (text.lenght >= 3) {
    var searchText = (0, _normalize.normalize)(text);
    var array = searchText.split(' ');
    var arrayText = (0, _normalize.remove)(array);
    arrayText.forEach(function (element) {
      tags.push(element);
    });
    tags = _toConsumableArray(new Set(tags));
    filtredRecipes = getRecipes();
    outcome(tags, filtredRecipes);
  } else {
    outcome(tags, _recipes.recipes);
  }
}

var mainText = document.getElementById('mainSearch');
mainText.addEventListener('keyup', function (e) {
  var keyCode = e.code;

  if (keyCode === 'Escape') {
    var tags = (0, _functions.filter)(); // fonction pour récupérer l'array de tous les tags affichés?

    outcome(tags, _recipes.recipes);
  }
}); // fonction pour trouver recette en fonction du mot saisi + tags

function findRecipes(array, someRecipes) {
  var allRecipes = document.querySelector('.allRecipesCards');
  var selectedRecipes = [];
  var index = 0;

  for (var i = 0; i < someRecipes.length; i++) {
    var recipe = (0, _normalize.concatenation)(someRecipes[i]);
    var counter = matchingWords(array, recipe);

    if (counter === array.length) {
      selectedRecipes.push(someRecipes[i]);
      index++;
    }
  }

  allRecipes.innerHTML = '';
  (0, _generateCards.generateCards)(selectedRecipes);
  (0, _dropdownElements.dropdownTags)(selectedRecipes);

  if (index === 0) {
    allRecipes.style.display = 'flex';
    allRecipes.style.justifyContent = 'center';
    allRecipes.innerHTML = '<p class="noresult">Auncune recette ne correspond à votre recherche...</br>Vous pouvez chercher "Tarte aux pommes", "poisson", etc. </br></br>Pour afficher à nouveau toutes les recettes, veuillez cliquer sur le logo en haut de la page.';
    (0, _dropdownElements.dropdownTags)(_recipes.recipes);
  }
} // fonction permettant de vérifier la présence de chaque élément de l'array 'input'


function matchingWords(array, recipe) {
  var counter = 0;

  for (var j = 0; j < array.length; j++) {
    if (recipe.indexOf(array[j]) !== -1) {
      counter++;
    }
  }

  return counter;
}

function outcome(tags, recipes) {
  findRecipes(tags, recipes);
} // 3 lettres d'écritent on récupère l'entrée du clavier puis on recherche dans les recettes
// une fois filtrer même principe que d'ajouter les recettes avec les tags
// limonade tester titre salez tester description
// appeler filter et modifier avec mainSearch déja présent ou fonction a part pour que ce soir moins lourd aussi dans functions.
// rappeler  generateCards(recipes)  dropdownTags(recipes) comme dans searchTags
},{"./functions.js":"../js/functions.js","./recipes.js":"../js/recipes.js","./normalize.js":"../js/normalize.js","./generateCards.js":"../js/generateCards.js","./dropdownElements.js":"../js/dropdownElements.js"}],"../js/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtredRecipes = void 0;

var _generateCards = require("./generateCards.js");

var _dropdown = require("./dropdown.js");

var _dropdownElements = require("./dropdownElements.js");

var _recipes = require("./recipes.js");

var _searchTags = require("./searchTags.js");

var _generateListeners = require("./generateListeners.js");

var _mainSearch = require("./mainSearch.js");

/* eslint-disable no-new */
var filtredRecipes = _recipes.recipes; // display cards with recipes

exports.filtredRecipes = filtredRecipes;
(0, _generateCards.generateCards)(filtredRecipes);
(0, _dropdownElements.dropdownTags)(filtredRecipes);
new _searchTags.GenerateSearchedTags(filtredRecipes); // Ouverture et fermeture des dropdowns ___________________________

var buttonDropdown = document.querySelectorAll('.dropdown__icon');
buttonDropdown.forEach(function (button) {
  button.addEventListener('click', function (event) {
    (0, _dropdown.openDropdown)(event);
  });
});
var dropDownMenuItems = document.querySelectorAll('.dropdown__menu__items');
(0, _generateListeners.generateListeners)(dropDownMenuItems, filtredRecipes); // add_event_listener pour recherche principale

var mainText = document.getElementById('mainSearch');
mainText.addEventListener('input', function (event) {
  (0, _mainSearch.mainSearch)(event);
}); // function to close the dropdown on click with the uparrow

var close = document.querySelectorAll('.form__arrow');
close.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    document.getElementById('search__Ingredients').style.display = 'none';
    document.getElementById('search__appliances').style.display = 'none';
    document.getElementById('search__ustensils').style.display = 'none';
    document.getElementById('menu__ingredients').style.display = 'none';
    document.getElementById('menu__appliances').style.display = 'none';
    document.getElementById('menu__ustensils').style.display = 'none';
    document.getElementById('arrowDown__ingredients').style.display = 'flex';
    document.getElementById('arrowDown__appliances').style.display = 'flex';
    document.getElementById('arrowDown__ustensils').style.display = 'flex';
  });
});
},{"./generateCards.js":"../js/generateCards.js","./dropdown.js":"../js/dropdown.js","./dropdownElements.js":"../js/dropdownElements.js","./recipes.js":"../js/recipes.js","./searchTags.js":"../js/searchTags.js","./generateListeners.js":"../js/generateListeners.js","./mainSearch.js":"../js/mainSearch.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
<<<<<<< HEAD
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52907" + '/');
=======
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64936" + '/');
>>>>>>> parent of 3cebdb8 (update filters)

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/index.js"], null)
//# sourceMappingURL=/js.fcffc47e.js.map