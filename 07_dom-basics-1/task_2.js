// Залание 2
let studentObj = {
  name: 'Игорь',
  age: 17
 }


function createStudentCard(studentObj) {
  let student = studentObj;
  let div = document.createElement('div');
  document.body.append(div);

  let h2 = document.createElement('h2');
  h2.textContent = student.name
  div.append(h2)

  let span = document.createElement('span')
  span.textContent = student.age
  div.append(span)
}

createStudentCard(studentObj)
