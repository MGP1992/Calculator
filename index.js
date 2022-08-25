const keys = Array.from(document.querySelectorAll('.btn'));
const calculatorDisplay = document.querySelector('.screendisplay')

function pressKey(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.classList.add('pressed');
    console.log(e.key);
    if (e.key  == 'c'){
      calculatorDisplay.textContent = "";
    }
    else if (e.key == 'Delete' ) { 
      deleteLast();
    
    }
    
    else {updateDisplay(e.key);}
    
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pressed');
  }

function add(num1,num2) {
  return (num1 + num2);    
};

function subtract(num1,num2) {
  return (num1 - num2);   
};

function divide(num1,num2) {
  return (num1 / num2);  
};

function multiply(num1,num2) {
  return (num1 * num2);    
};

function operate(num1,num2,operator) {
  switch (operator) {
    case '+':
      return add(num1,num2);
      
    case '-':
      return subtract(num1,num2);
      
    case '/':
      return divide(num1,num2);
      b
    case '*':
      return multiply(num1,num2);
      
    default: throw new Error("Invalid operator")
  }
};

function updateDisplay (number) {
  calculatorDisplay.textContent += number;
  calculatorDisplay.classList.add("screendisplay");
}

function deleteLast() {
  let string = calculatorDisplay.textContent;
  let newString = string.substring(0, string.length - 1);
  calculatorDisplay.textContent = newString;
}


 

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', (e) => e.target.classList.add('pressed')));
window.addEventListener('keydown', pressKey);



