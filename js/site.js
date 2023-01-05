//get values from the page for start and ending inputs
const getValues = () => {
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;
  let numbers = generateNumbers(startValue, endValue);

  //input validation, parse into integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  //integer check:
  //alert('The sum is:' (startValue + endValue));

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //generateNumbers
  } else {
    alert('You must enter integers');
  }

  //range limits check and alert message
  if (startValue < 1 || endValue > 100) {
    alert('Type a number between 1 and 100');
  }

  displayNumbers(numbers);
};

const generateNumbers = (sValue, eValue) => {
  let numbers = [];

  for (let index = sValue; index < eValue; index++) {
    numbers.push[index];
  }

  return numbers;
};

const displayNumbers = (numbers) => {
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

    templateRows += `<tr><td class="${className}">${number}</td>
    <td class="${className}">${number}</td>
    <td class="${className}">${number}</td>
    <td class="${className}">${number}</td>
    <td class="${className}">${number}</td></tr>`;
  }

  document.getElementById('results').innerHTML = templateRows;
};
