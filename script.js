//use column number to determine how many boxes in a row
//use row number to determine how many times the first row is repeated
let gridContainer = document.querySelector('.main-container');

//add mouseover event listener to add a class to whatver the mouse hovers over
gridContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    if (e.target.classList.contains('colored')) {
      e.target.classList.remove('colored');
    }
    else {
      e.target.classList.add('colored');
    }
  };
})

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
      let square;
      square = document.createElement('div');
      square.className = 'square';

      //to give a visual representation of the squares
      square.style = "height: 20px; width: 20px; border: 1px solid black"; 

      //attach squares to the row div
      row.appendChild(square);
    }
    //attach row divs to the main grid container
    gridContainer.appendChild(row);
  }
}

createGrid(20, 20);