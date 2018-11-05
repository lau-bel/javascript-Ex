/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var age = prompt("Age?"),
      sexe = prompt("sexe?"),
      ville = prompt("ville?");


var confirmation = confirm (age + sexe + ville + "Confirmez votre ASV, cliquez ok!");
while (confirmation === false){
    age = prompt("Age?"),
    sexe = prompt("sexe?"),
    ville = prompt("ville?");
    confirmation = confirm(age + sexe + ville + "Confirmez votre ASV, cliquez ok!");
}
})();
