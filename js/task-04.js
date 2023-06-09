const counterValue = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

incrementButton.addEventListener('click', function () {
  currentValue += 1;
  counterValue.textContent = currentValue;
});

decrementButton.addEventListener('click', function () {
  if (currentValue > 0) {
    currentValue -= 1;
    counterValue.textContent = currentValue;
  }
});