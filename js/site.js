//get values from the page for start and ending inputs
const getValues = () => {
  let fizzValue = document.getElementById('fizzValue').value;
  let buzzValue = document.getElementById('buzzValue').value;

  //input validation, parse into integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  //integer check:
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    //generateNumbers, or fizzBuzz
    let fbArray = fizzBuzz(fizzValue, buzzValue);

    displayData(fbArray);
  } else {
    alert('You must enter integers');
  }
};

const fizzBuzz = (fizzValue, buzzValue) => {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    let value =
      (i % fizzValue === 0 ? 'Fizz' : '') +
        (i % buzzValue === 0 ? 'Buzz' : '') || i;
    returnArray.push(value);
  }
  return returnArray;
};
//empty string '' evaluates to false

//loop over the array and create a tablerow for each item.
const displayData = (fbArray) => {
  let tableBody = document.getElementById('results');

  //get the template row
  let templateRow = document.getElementById('fbTemplate');

  //clear the table
  tableBody.innerHTML = '';

  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    //grab the td's to put into the array
    let rowCols = tableRow.querySelectorAll('td');

    //add css styling with classList.add
    rowCols[0].classList.add(fbArray[index]);
    //column 1 on the table, etc...
    rowCols[0].textContent = fbArray[index];

    rowCols[1].classList.add(fbArray[index + 1]);
    rowCols[1].textContent = fbArray[index + 1];

    rowCols[2].classList.add(fbArray[index + 2]);
    rowCols[2].textContent = fbArray[index + 2];

    rowCols[3].classList.add(fbArray[index + 3]);
    rowCols[3].textContent = fbArray[index + 3];

    rowCols[4].classList.add(fbArray[index + 4]);
    rowCols[4].textContent = fbArray[index + 4];

    tableBody.appendChild(tableRow);
  }
};
