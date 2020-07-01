'use strict'

const perentElement = document.querySelector('#counter');

const addValue = document.createElement('button');
addValue.classList.add('btn_1');
addValue.type = "button";
addValue.setAttribute('data-action', 'decrement');
addValue.textContent = '-1';

const createSpan = document.createElement('span');
createSpan.id = 'value';
createSpan.textContent = '0';

const removeValue = document.createElement('button');
removeValue.classList.add('btn_2');
removeValue.type = "button";
removeValue.setAttribute('data-action', 'increment');
removeValue.textContent = '+1';

perentElement.append(addValue, createSpan, removeValue);

let addValueRef = document.querySelector('.btn_1');
let removeValueRef = document.querySelector('.btn_2');

let counterValue = 0;

addValueRef.addEventListener('click', event => {
  createSpan.textContent = `${counterValue -= 1}`
});

removeValue.addEventListener('click', event => {
  createSpan.textContent = `${counterValue += 1}`
});