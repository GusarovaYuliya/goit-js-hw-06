// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
    const changeColorButton = document.querySelector('.change-color');
    const bodyElement = document.body;

    changeColorButton.addEventListener('click', function () {
      const randomColor = getRandomHexColor();
      bodyElement.style.backgroundColor = randomColor;
      colorSpan.textContent = randomColor;
    });