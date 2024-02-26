//use column number to determine how many boxes in a row
//use row number to determine how many times the first row is repeated
let gridContainer = document.querySelector('.main-container');
let reset = document.querySelector('.btn');

reset.addEventListener('click', () => getRowsCols());

//use mouseover event listener to add or remove class from divs with square class
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
  //set rows or columns to 100 if not provided
  if (rows === 0) rows = 100;
  if (columns === 0) columns = 100;

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
      square.className = 'square';
      square.style = `min-width: ${1000 / columns}px;`;

      //attach squares to the row div
      row.appendChild(square);
    }
    //attach row divs to the main grid container
    gridContainer.appendChild(row);
  }
  return gridContainer;
}

function getRowsCols () {
  //removes the previous grid
  gridContainer.textContent = '';

  let rowNum = Number(prompt('How many rows? 100 is the max.'));
  let colNum = Number(prompt('How many columns? 100 is the max.'));

  if(rowNum > 100 || colNum > 100) {
    alert('100 is the max. Any input over 100 is automatically scaled to 100.');
  }
  createGrid(rowNum, colNum);
}

//create initial grid using default values for rows and columns
createGrid(100, 100);