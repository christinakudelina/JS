// Задание 1
function createStudentCard(name, age) {
  let div = document.createElement('div');
  document.body.append(div);

  let h2 = document.createElement('h2');
  h2.textContent = name
  div.append(h2)

  let span = document.createElement('span')
  span.textContent = age
  div.append(span)
}

createStudentCard('Игорь', 17)
