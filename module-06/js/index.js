import {
  default as users
} from './users.js'


//!=====================hw6-1==============================

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

//!=====================hw6-2==============================
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));

//!=====================hw6-3==============================

const getUsersWithGender = (users, gender) => {
  const result = users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name)
    }
    return acc
  }, []);
  return result
};

console.log(getUsersWithGender(users, 'male'));

//!=====================hw6-4==============================

const getInactiveUsers = users => {
  const result = users.reduce((acc, user) => {
    if (!user.isActive) {
      acc.push(user)
    }
    return acc
  }, []);
  return result
};

console.log(getInactiveUsers(users));

//!=====================hw6-5==============================

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

//!=====================hw6-6==============================

const getUsersWithAge = (users, min, max) => {
  const result = users.reduce((acc, user) => {
    if (user.age > min && user.age < max) {
      acc.push(user)
    }
    return acc
  }, []);
  return result
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

//!=====================hw6-7==============================

const calculateTotalBalance = users => {
  const result = users.reduce((acc, user) => {
    acc += user.balance
    return acc
  }, 0);
  return result
};

console.log(calculateTotalBalance(users));

//!=====================hw6-8==============================

const getUsersWithFriend = (users, friendName) => {

  const result = users.reduce((acc, user) => {
    user.friends.includes(friendName) ? acc.push(user.name) : null
    return acc
  }, []);

  return result;
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

//!=====================hw6-9==============================

const getNamesSortedByFriendsCount = users => {

  users.sort((a, b) => a.friends.length - b.friends.length);
  return users.map(elem => elem.name);

};

console.log(getNamesSortedByFriendsCount(users));

//!=====================hw6-10==============================

const getSortedUniqueSkills = users => {
  return users.reduce((acc, user) => {

    user.skills.forEach((skill) => {
      (!acc.includes(skill)) ? acc.push(skill): null
    });

    return acc.sort();
  }, []);
};

console.log(getSortedUniqueSkills(users));