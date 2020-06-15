'use strict';

//============hm_1-1=============

let name = 'Генератор защитного поля';
let price = 1000;
let str = `Выбран «Генератор защитного поля», цена за штуку ${price} кредитов`;
console.log(str);

price = 2000;
str = `Выбран «Генератор защитного поля», цена за штуку ${price} кредитов`;
console.log(str);

//============hm_1-2=============

(function rezult() {
  const total = 10;
  const ordered = 50;
  if (total < ordered) {
    return "На складе недостаточно твоаров!";
  } else {
    return "Заказ оформлен, с вами свяжется менеджер";
  }
}());

//============hm_1-3=============

(function identified() {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  let inputPassword = prompt(`Input Password`);
  if (inputPassword === ADMIN_PASSWORD) {
    return alert('Добро пожаловать!');
  } else if (inputPassword === null) {
    return alert('Отменено пользователем!');
  } else {
    return alert('Доступ запрещен, неверный пароль!');
  }
}());

//============hm_1-4=============

let credits = 23580;
let pricePerDroid = 3000;

let maxDroid = Math.floor(credits / pricePerDroid);
let totalPrice = prompt('Какое количество дроидов Вы хотите купить?');

(function buy() {
  if (totalPrice === null) {
    alert('Отменено пользователем!');
  } else if (totalPrice <= maxDroid) {
    let balance = credits - (totalPrice * pricePerDroid);
    alert(`Вы купили ${totalPrice} дроидов, на счету осталось ${balance} кредитов.`);
  } else {
    alert('Недостаточно средств на счету!');
  }
}());

//============hm_1-5=============

const inputСountry = prompt(`Укажите страну доставки`);

const strLower = inputСountry.toLowerCase();
let newStr = strLower[0].toUpperCase() + strLower.substring(1);

switch (newStr) {
  case 'Китай':
    alert('Доставка в Китай будет стоить 100 кредитов');
    break;

  case 'Чили':
    alert('Доставка в Чили будет стоить 250 кредитов');
    break;

  case 'Австралия':
    alert('Доставка в Австралию будет стоить 170 кредитов');
    break;

  case 'Индия':
    alert('Доставка в Индию будет стоить 80 кредитов');
    break;

  case 'Ямайка':
    alert('Доставка в Ямайку будет стоить 120 кредитов');
    break;

  default:
    alert('В вашей стране доставка не доступна');
};


//============hm_1-6=============

(function input() {
  let total = 0;
  while (true) {
    let input = prompt('Введите число!');
    if (input === null) {
      alert(`Общая сумма чисел равна ${total}`);
      break;
    }
    input = Number(input);
    if (input === 0 || input) {
      total += +input;
    } else {
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }
  }
}());