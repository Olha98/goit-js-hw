'use strict'

//!=================hw3-1===============is work

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const kays = Object.entries(user);
console.log(kays);

//!=================hw3-2===============is work

function countProps(obj) {
  return (Object.keys(obj).length);
};

console.log(countProps({
  name: 'Mango',
  age: 2
}));

console.log(countProps({}));

console.log(countProps({
  mail: 'poly@mail.com',
  isOnline: true,
  score: 500
}));

//!=================hw3-3===============is work

const findBestEmployee = function (employees) {
  let maxNum = 0;
  let str = [];

  for (let key in employees) {
    if (employees[key] > maxNum) {
      console.log(employees[key]);

      maxNum = employees[key];
      console.log(maxNum);
      str = [key];
    }
  }
  return str.join('');
}

console.log(
  findBestEmployee({
    ann: 2988,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

//!=================hw3-4===============is work

const countTotalSalary = function (employees) {
  const kays = Object.values(employees);
  let total = 0;
  for (let key of kays) {
    total += Number(key);
  }
  console.log(total);
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

//!=================hw3-5=============== is work

const products = [{
    name: 'Радар',
    price: 1300,
    quantity: 4
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 2
  },
];

const getAllPropValues = function (arr, prop) {
  let newArr = []
  for (let array of arr) {
    newArr.push(array[prop]);
  }
  console.log(newArr);
};

console.log(getAllPropValues(products, 'name'));

//!=================hw3-6===============is work

const products = [{
    name: 'Радар',
    price: 1300,
    quantity: 4
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 2
  },
];

const calculateTotalPrice = function (allProdcuts, productName) {

  for (let prodcuts of allProdcuts) {
    if (prodcuts.name === productName) {
      console.log(prodcuts.price * prodcuts.quantity);
    };
  }
};

console.log(calculateTotalPrice(products, 'Захват'));

//!=================hw3-7===============

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const account = {
  id: 0,
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    this.id += 1;
    console.log("id:", this.id);
    return {
      id: this.id,
      type,
      amount,
    };
  },
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(newTransaction);
  },
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("На вашем счету недостаточно средств.");
    } else {
      this.balance -= amount;
      const newTransaction = this.createTransaction(
        amount,
        Transaction.WITHDRAW
      );
      this.transactions.push(newTransaction);
    }
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {

    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },
};

account.deposit(200);
account.deposit(300);
account.deposit(400);
account.withdraw(200);
account.withdraw(300);
account.withdraw(400);
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal("withdraw"));
console.log(account);

//!=================hw3-8*===============

const register = {
  modules: [{
      module1: {
        homeTaskCount: 3,
        doneTasks: 2,
      },
    },
    {
      module2: {
        homeTaskCount: 5,
        doneTasks: 3,
      },
    },
    {
      module3: {
        homeTaskCount: 3,
        doneTasks: 2,
      },
    },
    {
      module4: {
        homeTaskCount: 5,
        doneTasks: 0,
      },
    },
    {
      module5: {
        homeTaskCount: 3,
        doneTasks: 0,
      },
    },
    {
      module6: {
        homeTaskCount: 7,
        doneTasks: 0,
      },
    },
  ],
  currentModule: 3,
  score: 0, //percentages
  // посчитать какой процент выполнения курса у студента от общей программы курса,
  // посчитать текцщий процент выполнения ДЗ студентом исходя из того, что пройдено всего 3 модуля курса
  // предусмотреть возможность добавления и удаления из/в курс новых модулей
  // предусмотреть возможность добавления и изменения новых заданий в конкретный модуль
  getTotalPercentage() {
    let moduleLength = this.modules.length;
    this.score = Math.round((this.currentModule / moduleLength) * 100);
    return `${this.score}%`;
  },

  getStudentDonePercentage() {
    let totalSumTask = 0;
    let totalDoneTask = 0;
    for (const module of this.modules) {
      let values = Object.values(module);
      values = values[0];
      for (const task in values) {
        if (task === "homeTaskCount") {
          totalSumTask += values[task];
        }
        if (task === "doneTasks") {
          totalDoneTask += values[task];
        }
      }
    }
    let donePercentage = `${Math.round((totalDoneTask / totalSumTask) * 100)}%`;
    return donePercentage;
  },

  addNewModule() {
    let result = {};
    let moduleNum = `module${this.modules.length + 1}`;
    result[moduleNum] = {
      homeTaskCount: 0,
      doneTasks: 0,
    };
    return this.modules.push(result);
  },
  removeModule(module) {
    let remove = [];
    for (let element of this.modules) {
      if (Object.keys(element).includes(module)) {
        let spliceIndex = this.modules.indexOf(element);
        remove.push(this.modules.splice(spliceIndex, 1));
      }
    }
    return remove;
  },

  changeTaskInModule(module, task) {
    let newModule = {};
    for (let element of this.modules) {
      if (Object.keys(element).includes(module)) {
        let newValue = Object.values(element);
        newValue = newValue[0];
        newValue.homeTaskCount = task;
        newModule = newValue;
      }
    }
    return newModule;
  },
};

register.getTotalPercentage();
console.log(register.getTotalPercentage());
register.getStudentDonePercentage();
console.log(register.getStudentDonePercentage());
register.addNewModule();
console.log(register.addNewModule());
register.removeModule("module7");
console.log(register.removeModule("module3"));
register.changeTaskInModule("module3", 20);
console.log(register.changeTaskInModule("module3", 20));
console.log(register);