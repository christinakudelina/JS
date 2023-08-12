// Задача 3

let allStudents = [
  {name: 'Валя', age: 11},
  {name: 'Таня',age: 24},
  {name: 'Рома',age: 21},
  {name: 'Надя', age: 34},
  {name: 'Антон', age: 7}
 ]

 function createStudentsList(listArr) {

  let list = document.createElement('ul')
  document.body.append(list)

  for (let student of listArr) {
    let item = document.createElement('li')
    list.append(item)

    let h2 = document.createElement('h2')
    h2.textContent = student.name
    item.append(h2)

    let span = document.createElement('span')
    span.textContent = `Возраст: ${student.age} лет`
    item.append(span)
  }
 }

 createStudentsList(allStudents)
