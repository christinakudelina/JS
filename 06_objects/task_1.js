// Обязательная часть задания
let user1 = {
  name: 'Игорь',
  age: 17
}

let user2 = {
  name: 'Оля',
  age: 21
}

function getOlderUser(userOne, userTwo){
  if (user1.age > user2.age) {
    return user1.name
  } else {
    return user2.name
  }

  }

let result = getOlderUser(user1, user2)
console.log('Старший пользователь:',result);


// // Не обязательная часть задания
let allUsers = [
  {
    name: 'Валя',
    age: 11
  },
  {
    name: 'Таня',
    age: 24
  },
  {
    name: 'Рома',
    age: 21
  },
  {
    name: 'Надя',
    age: 34
  },
  {
    name: 'Антон',
    age: 7
  }
]

function getOlderUserArray(usersArray){
  let arr = []
  for (let i of usersArray) {
    arr.push(i.age)
  }

  let max = usersArray.filter( user => user.age >= Math.max(...arr))[0].name
  return max
}

let result2 = getOlderUserArray(allUsers)
console.log('Старший пользователь:',result2);
