// Задача 1
function getAge(birthYear) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentAge = currentYear - birthYear

  return currentAge
}

console.log(getAge(1998));
console.log(getAge(1991));
console.log(getAge(2007));

// Задача 2
function filter(whiteList, blackList) {
  let filteredEmails = [];
  for (let i = 0; i < whiteList.length; i++) {
    if (!blackList.includes(whiteList[i])) {
      filteredEmails.push(whiteList[i])
    }
  }
  return filteredEmails
}

let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let blackList = ['jsfunc@mail.ru','goodday@day.ru']
let result = filter(whiteList, blackList);
console.log(result)

// Задача 3
function arrSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array
}
console.log(arrSort([2,5,1,3,4]));
console.log(arrSort([12,33,3,44,100]));
console.log(arrSort([0,1]));
