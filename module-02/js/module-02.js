//!==============hw2-1==================

function logItems(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    let str = array[i];
    newArr.push([`${i+1} - ${str}`]);

  }
  console.log(newArr);
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

//!==============hw2-2==================

const calculateEngravingPrice = function (message, pricePerWord) {
  let arrStr = message.split(' ');
  let result = arrStr.length * pricePerWord;
  console.log(result);
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

//!==============hw2-3================== 

function findLongestWord(string) {
  var wholeArr = [];
  let str = string.split(' ');
  var tlength = 0;

  for (var i = 0; i < str.length; i++) {
    if (tlength < str[i].length) {
      tlength = str[i].length;
    }
  }

  for (var j = 0; j < str.length; j++) {
    if (str[j].length == tlength) {
      wholeArr.push(str[j]);
    }
  }

  if (wholeArr.length == 1) {
    return wholeArr[0];
  } else {
    return wholeArr;
  }
}

console.log(findLongestWord('The quick brownnhgnhgn fox jumped over the lazy dog'));

//!==============hw2-4==================

function formatString(string) {
  let str = string.length;
  if (str > 40) {
    return string.substr(0, 39) + '...';
  } else {
    return string
  }
}
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

//!==============hw2-5==================

function checkForSpam(message) {
  let str = message.toLowerCase();
  let newStr = str.replace(/[\[\]']+/g, '');
  let strIncludes1 = newStr.includes('spam');
  let strIncludes2 = newStr.includes('sale');

  return (strIncludes1 || strIncludes2) ? true : false;
}

console.log(checkForSpam('[SPAM] How to earn fast money?'));

//!==============hw2-6==================


let arrNum = [];

while (true) {
  let input = prompt('Please, input number' + ' \u{1F60E}');
  let notANumber = isNaN(input);
  if (input !== null && input !== '' && !notANumber) {
    arrNum.push(Number(input));

  } else if (input === null) {

    if (arrNum.length > 0) {
      let sumNum = 0;

      for (let num of arrNum) {
        sumNum += num;
      }
      alert(`Общая сумма чисел равна ${sumNum}` + ' \u{1F4B8}');
      break;

    } else {
      break;
    }
  } else {
    alert('Было введено не число, попробуйте еще раз' + ' \u{1F62B}');
    continue;
  }
};

//!==============hw2-7==================

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  let str = login.length;
  return (str >= 4 && str <= 16) ? true : false;
};

const isLoginUnique = function (allLogins, login) {
  let includesLogin = allLogins.includes(login);
  return (!includesLogin) ? true : false;
};

const addLogin = function (allLogins, login) {

  if (isLoginUnique(allLogins, login) === true && isLoginValid(login) === true) {
    console.log('Логин успешно добавлен!');
  };
  if (!isLoginUnique(allLogins, login)) {
    console.log('Такой логин уже используется!');
  };

  if (!isLoginValid(login)) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  };
};

console.log(addLogin(logins, 'gg'));
