/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById('run').addEventListener("click", function(){

    var colorClick = Math.floor((Math.random() * 255));
    var colorClick2 = Math.floor((Math.random() * 255));
    var colorClick3 = Math.floor((Math.random() * 255));

   var color = "rgb(" + colorClick + "," + colorClick2 + "," + colorClick3 + ")";
   document.documentElement.style.backgroundColor = color;

});



})();
