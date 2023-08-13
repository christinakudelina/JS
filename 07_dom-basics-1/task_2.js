// Залание 2
let studentObj = {
  name: 'Игорь',
  age: 17
 }


function createStudentCard(studentObj) {
  let div = document.createElement('div');

  let h2 = document.createElement('h2');
  h2.textContent = studentObj.name
  div.append(h2)

  let span = document.createElement('span')
  span.textContent = studentObj.age
  div.append(span)

  return div
}

document.body.append(createStudentCard(studentObj));

