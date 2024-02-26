//use column number to determine how many boxes in a row
//use row number to determine how many times the first row is repeated
let gridContainer = document.querySelector('.main-container');

function createGrid (rows, columns) {
  //set 100 as the max number of rows or columns allowed
  if (rows > 100) rows = 100;
  if (columns > 100) columns = 100;

  //copies the first completed row for the number of rows needed
  for(let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.className = "row-container";

    //creates a full row (number of columns)
    for (let j = 0; j < columns; j++) {
      let square = document.createElement('div');

      //to give a visual representation of the squares
      square.style = "height: 20px; width: 20px; border: 1px solid black"; 
      square.textContent = i + 1;

      row.appendChild(square);
    }
    gridContainer.appendChild(row);
  }
}

createGrid(16, 16)