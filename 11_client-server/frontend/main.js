const SERVER_URL = 'http://localhost:3000'

// отправление данных на сервер
async function serverAddStudent(obg) {
  let response = await fetch(SERVER_URL + '/api/students', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obg),
  })

  let data = await response.json()

  return data
}

// данные с сервера
async function serverGetStudents() {
  let response = await fetch(SERVER_URL + '/api/students', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  })

  let data = await response.json()

  return data
}

// удаление данных
async function serverDeleteStudent(id) {
  let response = await fetch(SERVER_URL + '/api/students/' + id, {
    method: "DELETE",
  })

  let data = await response.json()

  return data
}

let serverData = await serverGetStudents()

// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).
// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

let studentsList = []

if (serverData) {
  studentsList = serverData
}

let sortCol = 'age',
  sortDir = true


const listData = document.getElementById('content')

// Создаём форму для добавления студента
const titleForm = document.createElement('h1'),
  form = document.createElement('form'),
  inputName = document.createElement('input'),
  nameError = document.createElement('label'),
  inputSurName = document.createElement('input'),
  inputLastName = document.createElement('input'),
  lastnameError = document.createElement('label'),
  inputBD = document.createElement('input'),
  BDError = document.createElement('label'),
  inputstudyStart = document.createElement('input'),
  studyStartError = document.createElement('label'),
  inputFaculty = document.createElement('input'),
  facultyError = document.createElement('label'),
  formBtn = document.createElement('button'),
  filterTitle = document.createElement('h3'),
  sortAgeBtn = document.createElement('button'),
  sortstudyStartBtn = document.createElement('button'),
  filterForm = document.createElement('form'),
  filterFIOInput = document.createElement('input'),
  filterFacultyInput = document.createElement('input'),
  filterstudyStartInput = document.createElement('input'),
  filterYearEndInput = document.createElement('input')

titleForm.textContent = 'Добавить студента'
formBtn.textContent = 'Добавить'

nameError.textContent = 'Введите имя'
lastnameError.textContent = 'Введите фамилию'
BDError.textContent = 'Введите дату рождения'
studyStartError.textContent = 'Введите год начала обучения'
facultyError.textContent = 'Введите факультет'

filterTitle.textContent = 'Фильтрация студентов'
sortAgeBtn.textContent = 'По возрасту'
sortstudyStartBtn.textContent = 'По году начала обучения'
filterFIOInput.placeholder = 'По ФИО'
filterFacultyInput.placeholder = 'По факультету'
filterstudyStartInput.placeholder = 'По году начала обучения'
filterYearEndInput.placeholder = 'По году окончания обучения'

form.classList.add('mb-3')
inputName.classList.add('form-control', 'mb-3')
inputSurName.classList.add('form-control', 'mb-3')
inputLastName.classList.add('form-control', 'mb-3')
inputBD.classList.add('form-control', 'mb-3')
inputstudyStart.classList.add('form-control', 'mb-3')
inputFaculty.classList.add('form-control', 'mb-3')
formBtn.classList.add('btn', 'btn-primary')
filterFIOInput.classList.add('form-control', 'mb-3')
filterFacultyInput.classList.add('form-control', 'mb-3')
filterstudyStartInput.classList.add('form-control', 'mb-3')

nameError.classList.add('invalid-feedback')
lastnameError.classList.add('invalid-feedback')
BDError.classList.add('invalid-feedback')
studyStartError.classList.add('invalid-feedback')
facultyError.classList.add('invalid-feedback')

inputstudyStart.setAttribute('min', '2000')
inputstudyStart.setAttribute('max', new Date().getFullYear())

inputName.type = 'text'
inputSurName.type = 'text'
inputLastName.type = 'text'
inputBD.type = 'date'
inputstudyStart.type = 'number'
inputFaculty.type = 'text'
formBtn.type = 'submit'
filterstudyStartInput.type = 'number'

inputName.placeholder = 'Имя'
inputSurName.placeholder = 'Отчество'
inputLastName.placeholder = 'Фамилия'
inputBD.placeholder = 'Дата рождения'
inputstudyStart.placeholder = 'Год начала обучения'
inputFaculty.placeholder = 'Факультет'

listData.append(titleForm)
form.append(nameError)
form.append(inputName)
form.append(inputSurName)
form.append(lastnameError)
form.append(inputLastName)
form.append(BDError)
form.append(inputBD)
form.append(studyStartError)
form.append(inputstudyStart)
form.append(facultyError)
form.append(inputFaculty)
form.append(formBtn)
listData.append(form)
listData.append(filterTitle)
filterForm.append(filterFIOInput)
filterForm.append(filterFacultyInput)
filterForm.append(filterstudyStartInput)
listData.append(filterForm)


// Создание элементов
const table = document.createElement('table'),
  tableCaption = document.createElement('caption'),
  tableThead = document.createElement('thead'),
  tableThFIO = document.createElement('th'),
  tableThBD = document.createElement('th'),
  tableThstudyStart = document.createElement('th'),
  tableThFaсulty = document.createElement('th'),
  tableTbody = document.createElement('tbody')

tableCaption.textContent = 'Список студентов';
tableThFIO.textContent = 'ФИО'
tableThBD.textContent = 'Дата рождения'
tableThstudyStart.textContent = 'Годы обучения'
tableThFaсulty.textContent = 'Факультет'

tableThead.append(tableThFIO)
tableThead.append(tableThBD)
tableThead.append(tableThstudyStart)
tableThead.append(tableThFaсulty)
table.append(tableCaption)
table.append(tableThead)
table.append(tableTbody)
listData.append(table)

table.classList.add('table', 'table-hover', 'table-active', 'table-bordered')
tableCaption.classList.add('caption-top')

tableThFIO.classList.add('sort')
tableThBD.classList.add('sort')
tableThstudyStart.classList.add('sort')
tableThFaсulty.classList.add('sort')

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем,
// как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент
//  с информацией и пользователе.У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {
  const userTr = document.createElement('tr'),
    userTdFIO = document.createElement('td'),
    userTdBd = document.createElement('td'),
    userTdstudyStart = document.createElement('td'),
    userTdFaculty = document.createElement('td'),
    tdDelete = document.createElement('td'),
    deleteBtn = document.createElement('button')

  let yearEnd = Number(studentObj.studyStart) + 4

  let cours = new Date().getFullYear() + 1 - studentObj.studyStart

  if (cours == 0) {
    cours++
  }

  if (new Date(yearEnd, 8, 1) < new Date().setMonth(8, 1)) {
    cours = 'закончил(a)'
  } else {
    cours = `${cours}` + ' ' + 'курс'
  }

  userTdFIO.textContent = studentObj.fio.trim()
  userTdBd.textContent = new Date(studentObj.birthday).toLocaleDateString() + ' ' + (`(${studentObj.age} лет)`)
  userTdstudyStart.textContent = studentObj.studyStart + ' ' + '-' + ' ' + `${yearEnd}` + ' ' + `(${cours})`
  userTdFaculty.textContent = studentObj.faculty
  deleteBtn.textContent = 'Удалить'

  tdDelete.classList.add('delete-td')
  deleteBtn.classList.add('btn', 'btn-danger')

  deleteBtn.addEventListener("click", async function () {
    await serverDeleteStudent(studentObj.id)
    userTr.remove()
  })

  tableTbody.append(userTr)
  tdDelete.append(deleteBtn)
  userTr.append(userTdFIO)
  userTr.append(userTdBd)
  userTr.append(userTdstudyStart)
  userTr.append(userTdFaculty)
  userTr.append(tdDelete)

  return userTr
}

// Этап 4. Создайте функцию отрисовки всех студентов.
// Аргументом функции будет массив студентов.Функция должна использовать ранее
// созданную функцию создания одной записи для студента.Цикл поможет вам создать
// список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.
function renderStudentsTable(studentsArray) {
  tableTbody.innerHTML = ''
  // Копия массива
  let copeStudentsList = [...studentsArray]
  for (const user of copeStudentsList) {
    user.fio = user.name + ' ' + user.surname + ' ' + user.lastname
    user.age = new Date().getFullYear() - new Date(user.birthday).getFullYear()
  }

  // сортировка
  copeStudentsList = copeStudentsList.sort(function (a, b) {
    let sort = a[sortCol] < b[sortCol]
    if (sortDir == false) sort = a[sortCol] > b[sortCol]
    if (sort) return -1
  })

  // фильтрация
  if (filterFIOInput.value.trim() !== '') {
    copeStudentsList = filter(copeStudentsList, 'fio', filterFIOInput.value)
  }

  if (filterFacultyInput.value.trim() !== '') {
    copeStudentsList = filter(copeStudentsList, 'faculty', filterFacultyInput.value)
  }

  if (filterstudyStartInput.value.trim() !== '') {
    copeStudentsList = filterDate(copeStudentsList, 'studyStart', filterstudyStartInput.value)
  }

  // отрисовка
  for (const user of copeStudentsList) {
    getStudentItem(user)
  }
}

renderStudentsTable(studentsList)

function removeError() {
  if (inputName.value.trim() !== '') {
    nameError.classList.remove('error')
  }

  if (inputLastName.value.trim() !== '') {
    lastnameError.classList.remove('error')
  }

  if (inputBD.value.trim() !== '') {
    BDError.classList.remove('error')
  }

  if (inputstudyStart.value.trim() !== '') {
    studyStartError.classList.remove('error')
  }

  if (inputFaculty.value.trim() !== '') {
    facultyError.classList.remove('error')
  }
}

function addError() {

  if (inputName.value.trim() == '') {
    nameError.classList.add('error')
  }

  if (inputLastName.value.trim() == '') {
    lastnameError.classList.add('error')
  }

  if (inputBD.value.trim() == '') {
    BDError.classList.add('error')
  }

  if (inputstudyStart.value.trim() == '') {
    studyStartError.classList.add('error')
  }

  if (inputFaculty.value.trim() == '') {
    facultyError.classList.add('error')
  }
}

form.addEventListener('submit', async function (event) {
  event.preventDefault()
  addError()
  removeError()

  let newStudentObg = {
    name: inputName.value.trim(),
    surname: inputSurName.value.trim(),
    lastname: inputLastName.value.trim(),
    birthday: new Date(inputBD.value.trim()),
    studyStart: Number(inputstudyStart.value.trim()),
    faculty: inputFaculty.value.trim(),
  }

  if (inputName.value !== '' && inputLastName.value !== '' && inputBD.value
    !== '' && inputstudyStart.value !== '' && inputFaculty.value !== '') {
    let serverDataObg = await serverAddStudent(newStudentObg);
    serverDataObg.birthday = new Date(serverDataObg.birthday)

    studentsList.push(serverDataObg)
    renderStudentsTable(studentsList)
  }
  inputName.value = ''
    inputSurName.value = ''
    inputLastName.value = ''
    inputBD.value = ''
    inputstudyStart.value = ''
    inputFaculty.value = ''

    removeError()
})

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.
tableThFIO.addEventListener('click', function () {
  sortCol = 'name'
  sortDir = !sortDir
  renderStudentsTable(studentsList)
})

tableThBD.addEventListener('click', function () {
  sortCol = 'age'
  sortDir = !sortDir
  renderStudentsTable(studentsList)
})

tableThstudyStart.addEventListener('click', function () {
  sortCol = 'studyStart'
  sortDir = !sortDir
  renderStudentsTable(studentsList)
})

tableThFaсulty.addEventListener('click', function () {
  sortCol = 'faculty'
  sortDir = !sortDir
  renderStudentsTable(studentsList)
})

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
function filter(arr, prop, value) {
  return arr.filter(function (user) {
    if (user[prop].includes([value])) return true
  });
}
function filterDate(arr, prop, value) {
  return arr.filter(function (user) {
    if (user[prop] == value) return true
  });
}

filterForm.addEventListener('submit', function (event) {
  event.preventDefault()
})

filterFIOInput.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})

filterFacultyInput.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})

filterstudyStartInput.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})
