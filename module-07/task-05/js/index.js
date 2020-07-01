'use strict'

const perentElement = document.querySelector('.root');
perentElement.insertAdjacentHTML('afterbegin', `<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>`)

const outputRef = document.querySelector('#name-output');
const inputRef = document.querySelector('#name-input');


inputRef.addEventListener('input', event => {
  outputRef.textContent = event.target.value;
  window.classList.add('js-bg-color');
});

inputRef.addEventListener('input', event => {
  let inputValue = outputRef.textContent = event.target.value;
  inputValue.length === 0 ? outputRef.textContent = 'незнакомец' : null;
});