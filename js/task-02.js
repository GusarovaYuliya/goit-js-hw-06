const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// / HTML містить порожній список ul#ingredients.
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ul = document.getElementById("ingredients");

const liElements = ingredients.map(ingredient => {
  const li = document.createElement("li"); 
  li.textContent = ingredient; 
  li.classList.add("item");
  return li;
});


ul.append(...liElements);






