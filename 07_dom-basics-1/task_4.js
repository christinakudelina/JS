// Задание 4
let btn = document.querySelector('.btn')
btn.style.padding = '10px';
btn.style.borderRadius = '10px'
btn.style.backgroundColor = 'plum'
btn.style.borderColor = 'plum'
btn.style.color = 'darkviolet'
btn.style.cursor = 'pointer'

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

 function onClick() {
  createStudentsList(allStudents)
 }

 btn.addEventListener('click', onClick)

