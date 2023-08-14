
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputElement = document.getElementById('validation-input');

    inputElement.addEventListener('blur', function () {
      const desiredLength = parseInt(inputElement.getAttribute('data-length'));
      const inputValue = inputElement.value.trim();
      const currentLength = inputValue.length;

      if (currentLength === desiredLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
      } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
      }
    });