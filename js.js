const table = document.createElement("table");
const tableBody = document.createElement("tbody");


function generateTable() {
  const klvo = document.getElementById('inpt').value;
    let row="", column="";
    for (let i = 0; i < klvo; i++) {
      row = document.createElement("div");
      for (let j = 0; j < klvo; j++) {
        column = document.createElement("button");
        row.appendChild(column);

      }
      tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
    table.setAttribute("border", "1");
    table.setAttribute("width", "600");
    table.setAttribute("height", "600");
}
function addStart(){

}
function addEnd(){
  
}
function RemoveTable(){
  table.removeChild(tableBody);
  document.body.removeChild(table);
}