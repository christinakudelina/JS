let data = localStorage.getItem('todoData');

// создаём массив в который будем отправлять объект
let newCaseArr = [],
  listName = ''

if (data !== '' && data !== null) {
  newCaseArr = JSON.parse(data)
}

(function () {
  // создаём и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаём и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    // делаем кнопку не активной
    button.disabled = true;

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    input.addEventListener('input', function () {
      if (input.value !== '') {
        button.disabled = false
      } else {
        button.disabled = true
      }
    })

    return {
      form,
      input,
      button,
    }

  }

  // создаём и возвразаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return (list);
  }

  function createTodoItem(obg) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент который, красиво покажет их в одной грппе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его правой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = obg.name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    if (obg.done == true) item.classList.add('list-group-item-success')

    // добавляем обработчики на кнопки
    doneButton.addEventListener('click', function () {
      item.classList.toggle('list-group-item-success');

      for (const listItem of newCaseArr) {
        if (listItem.id == obg.id) {
          listItem.done = !listItem.done
        }
      }
      saveList(newCaseArr, listName)
    });
    deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        item.remove();

        for (let i = 0; i < newCaseArr.length; i++) {
          if (newCaseArr[i].id == obg.id) {
            newCaseArr.splice(i, 1)
          }
        }
        saveList(newCaseArr, listName)
      }
    });

    // вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события ножатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  function generateId(maxId) {
    let max = 0
    for (const item of maxId) {
      if (item.id > max) {
        max = item.id
      }
    }
    return max + 1
  }

  function saveList(arr, keyName) {
    localStorage.setItem(keyName, JSON.stringify(arr));
  }

  function createTodoApp(container, title = 'Список дел', keyName, defArr = []) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    listName = keyName;
    newCaseArr = defArr;

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    let localData = localStorage.getItem(listName);

    if (localData !== null && localData !== '') {
      newCaseArr = JSON.parse(localData)
    }

    for (const itemList of newCaseArr) {
      let todoItem = createTodoItem(itemList);
      todoList.append(todoItem.item)
    }

    // браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function (e) {
      // эта строчка необходима, чтобы предотвратить стандартные действия браузера
      // в данном случае мы не хотим, чтобы страница перезагружалась при отправки формы
      e.preventDefault();

      // игнорируем создание элемента, если пользователь ничего не ввёл в поле
      if (!todoItemForm.input.value) {
        return;
      }

      // создаём объек
      let newCaseObg = {
        id: generateId(newCaseArr),
        name: todoItemForm.input.value,
        done: false,
      };

      let todoItem = createTodoItem(newCaseObg);

      newCaseArr.push(newCaseObg);

      saveList(newCaseArr, listName);

      // создаём и добавляем в список новое дело с названием из поля для ввода
      todoList.append(todoItem.item);

      todoItemForm.button.disabled = true;
      // обнуляем значение в поле, чтобы не прищлось стирать его вручную
      todoItemForm.input.value = '';
    });
  }

  window.createTodoApp = createTodoApp;

})();

