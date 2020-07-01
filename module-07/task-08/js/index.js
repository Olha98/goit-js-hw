const perentElement = document.querySelector('#controls');
const fragment = document.createDocumentFragment();

const inputRef = document.createElement('input');
inputRef.type = "number";
inputRef.min = "0";
inputRef.max = "100";
inputRef.step = "1";
inputRef.id = "value";

const buttonRenderRef = document.createElement('button');
buttonRenderRef.type = "button";
buttonRenderRef.id = "render";
buttonRenderRef.setAttribute('data-action', 'render')
buttonRenderRef.textContent = 'Создать';

const buttonDestroyRef = document.createElement('button');
buttonDestroyRef.type = "button";
buttonDestroyRef.id = "destroy";
buttonDestroyRef.setAttribute('data-action', 'destroy')
buttonDestroyRef.textContent = 'Очистить';

const divRef = document.createElement('div');
divRef.id = 'boxes';
perentElement.after(divRef);

fragment.append(inputRef, buttonRenderRef, buttonDestroyRef);
perentElement.append(fragment);

function createBoxes(amount) {
  let markup = ''
  let x = 20;
  for (let i = 0; i < amount; i += 1) {
    x += 10
    markup += `<div class="box" style="width: ${x}px; height: ${x}px; background-color: ${generateColor()};"></div>`
  }
  divRef.innerHTML = markup;
};

function generateColor() {
  return ('#' + Math.floor(Math.random() * 16777215).toString(16));
};

function destroyBoxes() {
  const removeBox = divRef.querySelector('.box');
  removeBox.classList = 'remove';
};

inputRef.addEventListener('focus', event => {
  buttonRenderRef.addEventListener('click', () => {
    console.log(event.target.value)
    createBoxes(event.target.value);
  });
});

buttonRenderRef.addEventListener('click', () => {
  buttonDestroyRef.addEventListener('click', () => {
    destroyBoxes();
  });
});