let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
 ]

function filter(arr, prop, value){
  // Здесь решение задачи
  // arr - массив объектов
  // prop - свойство по которому производится фильтрация
  // value - значение свойства по которому производится фильтрация
  let newList = []
  for (let item of arr) {
    if ((item[prop]).includes(value) == true) newList.push(item)
  }
  return newList
}

let result = filter(objects, 'name', 'Иван');
console.log(result);
