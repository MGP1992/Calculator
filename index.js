const keys = Array.from(document.querySelectorAll('.btn'));
const calculatorDisplay = document.querySelector('.screendisplay')

function pressKey(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.classList.add('pressed');
    if (e.key  == 'c'){
      calculatorDisplay.textContent = "";
    }else if (e.key == 'Delete' ) { 
      deleteLast();
    }else if (e.key == '='){
      calculateSum();  
    }else {updateDisplay(e.key);}
    
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pressed');
  }

function add(num1,num2) {
  return ((parseFloat(num1) + parseFloat(num2)));    
};

function subtract(num1,num2) {
  return (parseFloat(num1 - num2));   
};

function divide(num1,num2) {
  return (parseFloat(num1 / num2));  
};

function multiply(num1,num2) {
  return (parseFloat(num1 * num2));    
};

function updateDisplay (number) {
  calculatorDisplay.textContent += number;
  calculatorDisplay.classList.add("screendisplay");
}

function deleteLast() {
  let currentDisplay = calculatorDisplay.textContent;
  let updatedDisplay = currentDisplay.substring(0, currentDisplay.length - 1);
  calculatorDisplay.textContent = updatedDisplay;
}

function calculateSum() {
  let currentDisplay = calculatorDisplay.textContent;
  let newDisplay;

  for (let i = 0; i < currentDisplay.length; i++) {
    let valueBeforeOperator = currentDisplay.substring(0,i)
    let valueAfterOperator = currentDisplay.substring(i+1)
    if(currentDisplay[i] === '*') {
      newDisplay = multiply(valueBeforeOperator,valueAfterOperator)
      calculatorDisplay.textContent = newDisplay;
    }else if(currentDisplay[i] === '/') {
      newDisplay = divide(valueBeforeOperator,valueAfterOperator)
      calculatorDisplay.textContent = newDisplay;
    }else if(currentDisplay[i] === '+') {
      newDisplay = add(valueBeforeOperator,valueAfterOperator)
      calculatorDisplay.textContent = newDisplay;
    }else if(currentDisplay[i] === '-') {
      newDisplay = subtract(valueBeforeOperator,valueAfterOperator)
      calculatorDisplay.textContent = newDisplay;
    }
  };
};


 

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', (e) => e.target.classList.add('pressed')));
window.addEventListener('keydown', pressKey);



