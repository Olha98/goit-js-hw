'use strict'

const quantityСategories = document.querySelectorAll('.item');
console.log(`В списке ${quantityСategories.length} категории.`)

const firstElement = document.querySelector('ul');
const firstElementRaf = firstElement.firstElementChild;
const secondElementRaf = firstElementRaf.nextElementSibling;
const thirdElementRaf = secondElementRaf.nextElementSibling;
const fourthElementRaf = thirdElementRaf.nextElementSibling;


const create = (element) => {

  const childrenElement = element.querySelectorAll('li');
  const elementLength = childrenElement.length;
  const categories = element.querySelector('h2');
  const titleCategory = categories.textContent;

  const elementObj = {
    Категория: titleCategory,
    'Количество элементов': elementLength,
  };
  console.table(elementObj)
}
create(firstElementRaf);
create(secondElementRaf);
create(thirdElementRaf);