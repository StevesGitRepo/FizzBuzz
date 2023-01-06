//get values from the page for start and ending inputs
const getValues = () => {
  let fizzValue = document.getElementById('fizzValue').value;
  let buzzValue = document.getElementById('buzzValue').value;

  //input validation, parse into integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  //integer check:
  //alert('The sum is:' (startValue + endValue));

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    //generateNumbers, or fizzBuzz
    let fbArray = fizzBuzz(fizzValue, buzzValue);

    displayData(fbArray);
  } else {
    alert('You must enter integers');
  }

  //range limits check and alert message
  // if (fizzValue < 1 || buzzValue > 100) {
  //   alert('Type a number between 1 and 100');
  // }
};

const fizzBuzz = (fizzValue, buzzValue) => {
  let returnArray = [];

  //check to see if divisible by both (3 and 5)
  //check to see if divisible by fizz value (3)
  //check to see if divisible by buzz value (5)

  for (let i = 1; i <= 100; i++) {
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push('FizzBuzz');
    } else if (i % fizzValue == 0) {
      returnArray.push('Fizz');
    } else if (i % buzzValue == 0) {
      returnArray.push('Buzz');
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
};

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
