'use strict'
const perentElement = document.querySelector('#root');
const inputRef = document.createElement('input');

inputRef.setAttribute('data-length', '6');
inputRef.id = 'validation-input'
inputRef.placeholder = 'Введи 6 символов';
perentElement.append(inputRef);



inputRef.addEventListener('blur', event => {
  let inputValue = event.target.value;
  
  if (inputValue.length === 6) {
    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid');
  }

  if (inputValue.length < 6) {
    inputRef.classList.remove('valid')
    inputRef.classList.add('invalid');
  }
});