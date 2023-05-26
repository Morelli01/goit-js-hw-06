const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById('ingredients');
const fragment = document.createDocumentFragment(); 

ingredients.forEach(function (ingredient) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  fragment.appendChild(li); 
});

ingredientsList.appendChild(fragment);