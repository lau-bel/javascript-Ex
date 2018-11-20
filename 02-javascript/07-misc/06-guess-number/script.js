/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var nummer = Math.floor((Math.random()* 100));

console.log(nummer);

var ask = prompt ("Entrez un numéro entre 1 et 100.");

var i = 1;

function questions() {

  if ( ask < nummer) {

    ask = prompt ("Entrez un numéro plus grand");
    i++;


  }

  else if (ask > nummer){

    ask = prompt ("Entrez un numéro plus petit");
    i++;
  }

  else {

    alert("bravo c'est le bon numéro! Vous avez réussi en "+i+" essais!");

  }

  questions();

}questions();

})();
