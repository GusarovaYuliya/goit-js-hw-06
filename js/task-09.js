// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formDataObject = {};

  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  if (!formDataObject.email || !formDataObject.password) {
    alert('All fields must be filled in.');
    return;
  }

  console.log(formDataObject);

  loginForm.reset();
});
