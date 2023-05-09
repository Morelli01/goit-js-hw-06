
const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Створення елементу <li> з класом "item" для кожного інгредієнту в масиві
const ingredientsItems = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

// Вставка всіх елементів <li> одним разом в список ul#ingredients
ingredientsList.append(...ingredientsItems);