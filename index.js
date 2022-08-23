function pressKey(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.classList.add('pressed');
}

  
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pressed');
  }

const keys = Array.from(document.querySelectorAll('.btn'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', pressKey);
