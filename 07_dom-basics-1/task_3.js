// Задача 3

let allStudents = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 }
]

function createStudentsList(listArr) {
  let list = document.createElement('ul')

  for (let student of listArr) {

    function createStudentCard(studentObj) {
      let item = document.createElement('li');

      let h2 = document.createElement('h2');
      h2.textContent = student.name
      item.append(h2)

      let span = document.createElement('span')
      span.textContent = student.age
      item.append(span)

      return item
    }
    list.append(createStudentCard(allStudents))
  }

  return list
}

document.body.append(createStudentsList(allStudents))

