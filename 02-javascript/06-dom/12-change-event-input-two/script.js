/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var password = document.getElementById('pass-one');
  var passwordContent = password.value;
  password.setAttribute("maxlength" , 20);


  document.getElementById('pass-one').addEventListener("keyup",function(){
    passwordContent = password.value;
    var count = document.getElementById('validity');


if(passwordContent.length >= 8 && (passwordContent.match(/(\d+)/).length >= 2)){
count.innerHTML = "ok";
}

else {
count.innerHTML = "non valable" ;
}

});
})();
