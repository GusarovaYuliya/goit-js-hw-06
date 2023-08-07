// HTML містить порожній список ul#ingredients.
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('ingredients');

ingredients.
  ingredients
ForEach(ingredient => {

  const liElement = document.createElement('li');
  liElement.

    textContent = ingredient;
  liElement.

    classList.add('item');
  ulElement.ForEach

  appendChild(liElement);
})
