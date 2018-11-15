/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var div1 = document.getElementById("target");
  var tbl= document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 1; i<11; i++){
    var row = document.createElement("tr");
    for (var j=1; j<11; j++) {
      var cell = document.createElement('td');
      var result = i*j;
      var cellText= document.createTextNode (i + "x" + j + "=" + result);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);

  }
console.log("hello");

  tbl.appendChild(tblBody);
  div1.appendChild(tbl);
  tbl.setAttribute ("border", "2");
})();
