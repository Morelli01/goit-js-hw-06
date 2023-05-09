const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

// Порахувати і вивести кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Для кожного елемента li.item вивести заголовок і кількість елементів
categoriesItems.forEach((item) => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});