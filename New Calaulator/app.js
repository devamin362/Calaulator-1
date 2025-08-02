let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateDisplay('');
}

function performOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (previousInput === '' || currentInput === '' || operator === '') return;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  updateDisplay(result);
  previousInput = '';
  currentInput = '';
  operator = '';
}
