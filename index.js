function pressKey(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.classList.add('pressed');
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


const keys = Array.from(document.querySelectorAll('.btn'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', (e) => e.target.classList.add('pressed')));
window.addEventListener('keydown', pressKey);
