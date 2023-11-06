// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

const studentsList = [
  // Добавьте сюда объекты студентов
  {
    name: 'Иван',
    surName: 'Иванович',
    lastName: 'Иванов',
    birstDate: new Date(1998, 4, 8),
    yearStart: Number(2016, 8, 1),
    faculty: 'Экономический',
  },
  {
    name: 'Светлана',
    surName: 'Дмитриевна',
    lastName: 'Смирнова',
    birstDate: new Date(2003, 11, 21),
    yearStart: Number(2023, 8, 1),
    faculty: 'Биологический',
  },
  {
    name: 'Ангелина',
    surName: 'Александровна',
    lastName: 'Цветкова',
    birstDate: new Date(2008, 5, 2),
    yearStart: Number(2022),
    faculty: 'Медицинский',
  },
  {
    name: 'Дмитрий',
    surName: 'Владимирович',
    lastName: 'Серогодский',
    birstDate: new Date(2000, 9, 27),
    yearStart: Number(2018, 8, 1),
    faculty: 'Журналистики',
  },
  {
    name: 'Владислава',
    surName: 'Алексеевна',
    lastName: 'Дроздова',
    birstDate: new Date(2003, 4, 2),
    yearStart: Number(2021, 8, 1),
    faculty: 'Исторический',
  },
]

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
  inputYearStart = document.createElement('input'),
  yearStartError = document.createElement('label'),
  inputFaculty = document.createElement('input'),
  facultyError = document.createElement('label'),
  formBtn = document.createElement('button'),
  filterTitle = document.createElement('h3'),
  sortAgeBtn = document.createElement('button'),
  sortYearStartBtn = document.createElement('button'),
  filterForm = document.createElement('form'),
  filterFIOInput = document.createElement('input'),
  filterFacultyInput = document.createElement('input'),
  filterYearStartInput = document.createElement('input'),
  filterYearEndInput = document.createElement('input')

titleForm.textContent = 'Добавить студента'
formBtn.textContent = 'Добавить'

nameError.textContent = 'Введите имя'
lastnameError.textContent = 'Введите фамилию'
BDError.textContent = 'Введите дату рождения'
yearStartError.textContent = 'Введите год начала обучения'
facultyError.textContent = 'Введите факультет'

filterTitle.textContent = 'Фильтрация студентов'
sortAgeBtn.textContent = 'По возрасту'
sortYearStartBtn.textContent = 'По году начала обучения'
filterFIOInput.placeholder = 'По ФИО'
filterFacultyInput.placeholder = 'По факультету'
filterYearStartInput.placeholder = 'По году начала обучения'
filterYearEndInput.placeholder = 'По году окончания обучения'

form.classList.add('mb-3')
inputName.classList.add('form-control', 'mb-3')
inputSurName.classList.add('form-control', 'mb-3')
inputLastName.classList.add('form-control', 'mb-3')
inputBD.classList.add('form-control', 'mb-3')
inputYearStart.classList.add('form-control', 'mb-3')
inputFaculty.classList.add('form-control', 'mb-3')
formBtn.classList.add('btn', 'btn-primary')
sortAgeBtn.classList.add('btn', 'btn-primary', 'btn-age', 'mb-3')
sortYearStartBtn.classList.add('btn', 'btn-primary', 'mb-3')
filterFIOInput.classList.add('form-control', 'mb-3')
filterFacultyInput.classList.add('form-control', 'mb-3')
filterYearStartInput.classList.add('form-control', 'mb-3')

nameError.classList.add('invalid-feedback')
lastnameError.classList.add('invalid-feedback')
BDError.classList.add('invalid-feedback')
yearStartError.classList.add('invalid-feedback')
facultyError.classList.add('invalid-feedback')

inputYearStart.setAttribute('min', '2000')
inputYearStart.setAttribute('max', new Date().getFullYear())

inputName.type = 'text'
inputSurName.type = 'text'
inputLastName.type = 'text'
inputBD.type = 'date'
inputYearStart.type = 'number'
inputFaculty.type = 'text'
formBtn.type = 'submit'
filterYearStartInput.type = 'number'

inputName.placeholder = 'Имя'
inputSurName.placeholder = 'Отчество'
inputLastName.placeholder = 'Фамилия'
inputBD.placeholder = 'Дата рождения'
inputYearStart.placeholder = 'Год начала обучения'
inputFaculty.placeholder = 'Факультет'

listData.append(titleForm)
form.append(nameError)
form.append(inputName)
form.append(inputSurName)
form.append(lastnameError)
form.append(inputLastName)
form.append(BDError)
form.append(inputBD)
form.append(yearStartError)
form.append(inputYearStart)
form.append(facultyError)
form.append(inputFaculty)
form.append(formBtn)
listData.append(form)
listData.append(filterTitle)
listData.append(sortAgeBtn)
listData.append(sortYearStartBtn)
filterForm.append(filterFIOInput)
filterForm.append(filterFacultyInput)
filterForm.append(filterYearStartInput)
listData.append(filterForm)


// Создание элементов
const table = document.createElement('table'),
  tableCaption = document.createElement('caption'),
  tableThead = document.createElement('thead'),
  tableThFIO = document.createElement('th'),
  tableThBD = document.createElement('th'),
  tableThYearStart = document.createElement('th'),
  tableThFaсulty = document.createElement('th'),
  tableTbody = document.createElement('tbody')


tableCaption.textContent = 'Список студентов';
tableThFIO.textContent = 'ФИО'
tableThBD.textContent = 'Дата рождения'
tableThYearStart.textContent = 'Годы обучения'
tableThFaсulty.textContent = 'Факультет'

tableThead.append(tableThFIO)
tableThead.append(tableThBD)
tableThead.append(tableThYearStart)
tableThead.append(tableThFaсulty)
table.append(tableCaption)
table.append(tableThead)
table.append(tableTbody)
listData.append(table)

table.classList.add('table', 'table-hover', 'table-active', 'table-bordered')
tableCaption.classList.add('caption-top')

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем,
// как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент
//  с информацией и пользователе.У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {
  const userTr = document.createElement('tr'),
    userTdFIO = document.createElement('td'),
    userTdBd = document.createElement('td'),
    userTdYearStart = document.createElement('td'),
    userTdFaculty = document.createElement('td')

  let yearEnd = studentObj.yearStart + 4

  let cours = new Date().getFullYear() + 1 - new Date(studentObj.yearStart)

  if (cours == 0) {
    cours++
  }

  if (new Date(yearEnd, 8, 1) < new Date().setMonth(8, 1)) {
    cours = 'закончил'
  } else {
    cours = `${cours}` + ' ' + 'курс'
  }

  userTdFIO.textContent = studentObj.fio.trim()
  userTdBd.textContent = studentObj.birstDate.toLocaleDateString() + ' ' + (`(${studentObj.age} лет)`)
  userTdYearStart.textContent = studentObj.yearStart + ' ' + '-' + ' ' + `${yearEnd}` + ' ' + `(${cours})`
  userTdFaculty.textContent = studentObj.faculty

  tableTbody.append(userTr)
  userTr.append(userTdFIO)
  userTr.append(userTdBd)
  userTr.append(userTdYearStart)
  userTr.append(userTdFaculty)

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
    user.fio = user.name + ' ' + user.surName + ' ' + user.lastName
    user.age = new Date().getFullYear() - user.birstDate.getFullYear()
  }

  // сортировка
  copeStudentsList = copeStudentsList.sort(function (a, b) {
    let sort = a[sortCol] < b[sortCol]
    if(sortDir == false) sort = a[sortCol] > b[sortCol]
    if (sort) return -1
  })

  // фильтрация
  if(filterFIOInput.value.trim() !== ''){
    copeStudentsList = filter(copeStudentsList, 'fio', filterFIOInput.value)
  }

  if(filterFacultyInput.value.trim() !== ''){
    copeStudentsList = filter(copeStudentsList, 'faculty', filterFacultyInput.value)
  }

  if(filterYearStartInput.value.trim() !== ''){
    copeStudentsList = filterDate(copeStudentsList, 'yearStart', filterYearStartInput.value)
  }

  // отрисовка
  for (const user of copeStudentsList) {
    getStudentItem(user)
  }
}

renderStudentsTable(studentsList)

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы,
// в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте
// объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы
// студентов, созданную на этапе 4.

function addStudent(array) {
  array.push(
    {
      name: inputName.value.trim(),
      surName: inputSurName.value.trim(),
      lastName: inputLastName.value.trim(),
      birstDate: new Date(inputBD.value.trim()),
      yearStart: Number(inputYearStart.value.trim()),
      faculty: inputFaculty.value.trim(),
    }
  )

  renderStudentsTable(array)

  inputName.value = ''
  inputSurName.value = ''
  inputLastName.value = ''
  inputBD.value = ''
  inputYearStart.value = ''
  inputFaculty.value = ''

  removeError()
}

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

  if (inputYearStart.value.trim() !== '') {
    yearStartError.classList.remove('error')
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

  if (inputYearStart.value.trim() == '') {
    yearStartError.classList.add('error')
  }

  if (inputFaculty.value.trim() == '') {
    facultyError.classList.add('error')
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault()
  addError()
  removeError()

  if (inputName.value !== '' && inputLastName.value !== '' && inputBD.value
    !== '' && inputYearStart.value !== '' && inputFaculty.value !== '') {
    addStudent(studentsList)
  }
})

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.
sortAgeBtn.addEventListener('click', function(){
  sortCol = 'age'
  sortDir = !sortDir
  renderStudentsTable(studentsList)
})

sortYearStartBtn.addEventListener('click', function(){
  sortCol = 'yearStart'
  sortDir = !sortDir
  renderStudentsTable(studentsList)
})

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
function filter(arr, prop, value){
   return arr.filter(function(user) {
    if (user[prop].includes([value])) return true
  });
}
function filterDate(arr, prop, value){
  return arr.filter(function(user) {
    if (user[prop] == value) return true
  });
}

filterForm.addEventListener('submit', function (event) {
  event.preventDefault()
})

filterFIOInput.addEventListener('input', function(){
  renderStudentsTable(studentsList)
})

filterFacultyInput.addEventListener('input', function(){
  renderStudentsTable(studentsList)
})

filterYearStartInput.addEventListener('input', function(){
  renderStudentsTable(studentsList)
})

filterYearEndInput.addEventListener('input', function(){
  renderStudentsTable(studentsList)
})
