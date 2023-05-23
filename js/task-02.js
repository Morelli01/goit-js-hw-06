
 const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
  ];

  const ingredientsList = document.getElementById('ingredients');

  ingredients.forEach(function (ingredient) {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('item');
    ingredientsList.appendChild(li);
  });