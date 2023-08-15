// Задача 3

let allStudents = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 }
]

function createStudentCard(studentObj) {
  let item = document.createElement('li');

  let h2 = document.createElement('h2');
  h2.textContent = studentObj.name
  item.append(h2)

  let span = document.createElement('span')
  span.textContent = studentObj.age
  item.append(span)

  return item
}

function createStudentsList(listArr) {
  let list = document.createElement('ul')

  for (let student of listArr) {
    list.append(createStudentCard(student))
  }
  return list
}

document.body.append(createStudentsList(allStudents))

