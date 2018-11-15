/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("run").addEventListener("click", function(){

var mdp1 = document.getElementById("pass-one");
var mdp2 = document.getElementById("pass-two");

if (mdp1 != mdp2){
  mdp1.setAttribute("class", "error");
  mdp2.setAttribute("class", "error");
}
console.log("hello");
});
})();
