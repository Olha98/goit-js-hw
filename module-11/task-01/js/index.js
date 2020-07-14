import {
  colors
} from './colors.js'

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector("[data-action = 'start']"),
  btnStop: document.querySelector("[data-action = 'stop']"),
}

refs.btnStop.addEventListener('click', stopChangeColor);

const maxColor = colors.length - 1;
const minColor = 0;

let numColor;
const randomIntegerFromInterval = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  numColor = num;
};

let timerId;
const startChangeColor = () => {
  let i = 0;
  timerId = setInterval(function () {
    randomIntegerFromInterval(minColor, maxColor);
    refs.body.style.backgroundColor = colors[numColor];
    console.log(i++)
  }, 1000);


  refs.btnStart.removeEventListener('click', startChangeColor);
  refs.btnStop.addEventListener('click', startChangeColor);
};

refs.btnStart.addEventListener('click', startChangeColor);

function stopChangeColor() {
  clearInterval(timerId);
  
  refs.btnStart.addEventListener('click', startChangeColor);
  refs.btnStop.removeEventListener('click', startChangeColor);
};