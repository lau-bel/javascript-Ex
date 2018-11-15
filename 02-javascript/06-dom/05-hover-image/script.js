/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  var img1 = document.getElementsByTagName("img")[0];
  var inter1 = img1.getAttribute("src");
  var inter2 = img1.getAttribute("data-hover");
  document.getElementsByTagName("img")[0].addEventListener("mouseover", function(){
  img1.setAttribute("src",inter2);
   //inter1 = inter2;

});
})();
