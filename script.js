let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

//Put the value 1-100 in rows
for (let i = 0; i < rows; i++) {
  let adressCol = document.createElement("div");
  adressCol.setAttribute("class", "address-col");
  adressCol.innerHTML = i + 1;
  addressColCont.appendChild(adressCol);
}

//Put the value A-Z in columns
for (let i = 0; i < cols; i++) {
  let adressRow = document.createElement("div");
  adressRow.setAttribute("class", "address-row");
  adressRow.innerHTML = String.fromCharCode(65 + i);
  addressRowCont.appendChild(adressRow);
}

//Build the Grid Container
for (let i = 0; i < rows; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true"); //Property to edit the content in cell
    rowCont.appendChild(cell);
    addListenerForAddressbarDisplay(cell, i, j);
  }
  cellCont.append(rowCont);
}

//Function to show row and column in address bar
function addListenerForAddressbarDisplay(cell, i, j) {
  cell.addEventListener("click", (e) => {
    let rowId = i + 1;
    let colId = String.fromCharCode(65 + j);
    addressBar.value = `${colId}${rowId}`;
  });
}
