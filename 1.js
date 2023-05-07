const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ingredientsList.appendChild(li);
});