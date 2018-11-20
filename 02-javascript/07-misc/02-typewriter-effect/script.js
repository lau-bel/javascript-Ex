/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var valuetarget = document.getElementById('target').innerHTML;
  //sélectionner le innerHTML du contenant que je veux changer (Id).
  var letters = valuetarget.split("");
  // créer l'array a partir du contenu de l'ID (grâce a split divisant les caractères).
  var targetEl = document.getElementById('target');
  // sélectionner le contenant de ce que je veux changer
  targetEl.innerHTML ="";
  //enlever ce qu'il y a dans ce contenant
  targetEl.style.fontFamily = "Inconsolata, sans-serif";
  //changer la fonts du contenant (visant le contenu).
  var x = 0;
  // créer une variable pour débuter au niveau 0 de l'array.

  function typeWriter(){
    //je crée une fonction que je nomme typewriter (j'aurais pu l'appeler prout)
    setTimeout(function () {
//pour que la fonction première soit exécutée dans un temps donné (avec un délais : 100 ms)
      var letter = document.createElement("span");
      // variable associant chaque élément de l'array une balise span.
      targetEl.appendChild(letter);
      // ma balise span devient l'enfant du contenant principal sélectionné.
      letter.innerHTML = letters[x];
      // je fais en sorte que le contenu des span soit égal à chaque élément de l'array.
      x++;
      //j'effectue ceci (fonction typewriter.)  pour chaque élement de l'array l'un a la suite de l'autre.
      if (x < letters.length){

        typeWriter();
// la fonction typewriter est lancée à chaque fois que l'élément est plus petit que tous les éléments de l'array/
    }
  }, 100);
  }
  typeWriter();
// j'appelle la fonction.



})();
