// Задание 4
let btn = document.querySelector('.btn')

// это была практика)
btn.style.padding = '10px';
btn.style.borderRadius = '10px'
btn.style.backgroundColor = 'plum'
btn.style.borderColor = 'plum'
btn.style.color = 'darkviolet'
btn.style.cursor = 'pointer'

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
  document.body.append(list)

  for (let student of listArr) {
    list.append(createStudentCard(student))
  }
  return list
}

function onClick() {
  createStudentsList(allStudents)
}

btn.addEventListener('click', onClick)

