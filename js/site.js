//get values from the page for start and ending inputs
const getValues = () => {
  let fizzValue = document.getElementById('fizzValue').value;
  let buzzValue = document.getElementById('buzzValue').value;
  let numbers = fizzBuzz(fizzValue, buzzValue);

  //input validation, parse into integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  //integer check:
  //alert('The sum is:' (startValue + endValue));

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    //generateNumbers, or fizzBuzz
    let fbArray = FizzBuzz(fizzValue, buzzValue);
    displayData(fbArray);
  } else {
    alert('You must enter integers');
  }

  //range limits check and alert message
  if (fizzValue < 1 || buzzValue > 100) {
    alert('Type a number between 1 and 100');
  }
};

const fizzBuzz = (fizzValue, buzzValue) => {
  let returnArray = [];

  //check to see if divisible by both (3 and 5)
  //check to see if divisible by fizz value (3)
  //check to see if divisible by buzz value (5)

  for (let i = 1; i < 100; i++) {
    if (i % fizzValue === 0 && i % buzzValue === 0) {
      returnArray.push('FizzBuzz');
    } else if (i % fizzValue === 0) {
      returnArray.push('Fizz');
    } else if (i % buzzValue === 0) {
      returnArray.push('Buzz');
    } else {
      returnArray.push(i);
    }
  }
};

//loop over the array and create a tablerow for each item.
const displayData = (numbers) => {
  let templateRows = '';

  for (let i = 0; i < numbers.length; i++) {
    let className = number;
    let number = numbers[i];

    if (number % 1 === 0) {
      let number = numbers[i];
    } else {
      if (number % 3 === 0) {
        className = 'Fizz';
      }

      if (number % 5 === 0) {
        className = 'Buzz';
      }

      if (number % 15 === 0) {
        className = 'FizzBuzz';
      }
    }

    //add
    templateRows += `<tr><td class="${className}">${number}</td>
    <td class="${className}">${number}</td>
    <td class="${className}">${number}</td>
    <td class="${className}">${number}</td>
    <td class="${className}">${number}</td></tr>`;
  }

  document.getElementById('results').innerHTML = templateRows;
};
