'use strict'

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let perentElement = document.querySelector('#ingredients');

const fragment = document.createDocumentFragment();

const result = ingredients.reduce((acc, ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  fragment.append(li);
  return acc;
}, fragment);

perentElement.appendChild(result);