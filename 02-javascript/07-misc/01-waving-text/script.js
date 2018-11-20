/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var valuetarget = document.getElementById('target').innerHTML;
//recupération de l'intérieur de l'ID target = text d'origine.
var letters = valuetarget.split("");
//création d'un array par le split en lettres du texte origine (valuetarget).
var targetEl = document.getElementById('target');
//création variable récupère l'élément IdTarget (pour placer des choses dedans)
 targetEl.innerHTML ="";
// comme array créé plus besoin du texte d'origine dans l'élément d'origine.


for (var x = 0 ; x<letters.length ; x++){
  //for loop va exécuter pour chaque lettre (=x) de l'array(=letters).
  var letter = document.createElement("span");
  //création variable pour taguer (span) à chaque lettre (donc chaque tour) de l'array.
  targetEl.appendChild(letter);
  //span inséré dans le contenant d'origine.
  letter.innerHTML = letters[x];
  // chaque span est associé à une lettre de l'array.
  letter.style.fontSize = Math.floor((Math.random()* 10 + 20))+ "px";
  // span je lui associe une fontsize random entre 40 et 10.
}


})();
