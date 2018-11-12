/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById('run').addEventListener("click", function(){

      var IdsList = [];

    for (var i = 1; i<=10; i++){
        var tmp = Math.floor(Math.random() * 100);
        document.getElementById("n-"+i).innerHTML = tmp;
        IdsList.push (tmp);

      }

      document.getElementById("min").innerHTML = Math.min(...IdsList);
      document.getElementById("max").innerHTML = Math.max(...IdsList);
      var sum = IdsList.reduce((a,b) => a+b,0);
      document.getElementById("sum").innerHTML = sum;
      document.getElementById("average").innerHTML = sum /10;

console.log (IdsList);



  /*  var IdsList = [];

for (var i = 1; i<=10; i++){
    document.getElementById("n-"+i).innerHTML = Math.floor(Math.random() * 100);
    IdsList.push(document.getElementById("n-"+i).innerHTML);

}

   document.getElementById("min").innerHTML = Math.min(IdsList);
   document.getElementById("max").innerHTML = Math.max(IdsList);
   document.getElementById("sum").innerHTML = IdsList.reduce(reducer);
  document.getElementById("average").innerHTML = */


  });
})();
