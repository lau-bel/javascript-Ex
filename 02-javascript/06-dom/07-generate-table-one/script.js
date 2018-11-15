/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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

for (var i = 0; i<2; i++){
  var row = document.createElement("tr");
  for (var j=0; j<2; j++) {
    var cell = document.createElement('td');
    var cellText= document.createTextNode ("cell in row" + i + ",column" + j);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tblBody.appendChild(row);

}

tbl.appendChild(tblBody);
div1.appendChild(tbl);
tbl.setAttribute ("border", "2");

})();
