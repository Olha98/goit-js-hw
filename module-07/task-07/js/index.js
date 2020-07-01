'use strict'

const fragment = document.createElement('div');
fragment.classList = 'container';
const inputRef = document.createElement('input')
inputRef.id = 'font-size-control';
inputRef.type = 'range';

const brtRef = document.createElement('br');

const spanRef = document.createElement('span');
spanRef.textContent = 'Абракадабра';
spanRef.id = 'text';

fragment.append(inputRef, brtRef, spanRef);
const bodyRef = document.querySelector('body');
bodyRef.prepend(fragment);

inputRef.addEventListener("input", event => {
  spanRef.style.fontSize = event.currentTarget.value + "px";
});