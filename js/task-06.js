
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.

    #validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

const validationInput = document.querySelector('#validation - input');
const requiredLength = parseInt(validationInput.getAttribute('data-length'));
    
function updateValidationStyle(isValid) {
  validationInput.classList.remove('valid', 'invalid');
  validationInput.classList.add(isValid ? 'valid' : 'invalid');
    }
validationInput.addEventListener('blur', () => {
    const inputValue = validationInput.value;
    
    const isValid = inputValue.length === requiredLength;
    updateValidationStyle(isValid);
});

validationInput.addEventListener('focus', () => {
  validationInput.classList.remove('valid', 'invalid');
});
