// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
let cardCount,
  arrNumber = [],
  cardsArr = [],
  firstCard = null,
  secondCard = null;

function createNumbersArray(count) {
  for (let i = 1; i <= count / 2; i++) {
    arrNumber.push(i);
    arrNumber.push(i);
  }
  return arrNumber;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

function createGame(container) {
  // создаём форму для настройки игры
  const form = document.createElement('form');
  form.classList.add('form');
  const input = document.createElement('input');
  input.placeholder = `Введите количество карт по горизонтали и вертикали`;
  input.classList.add('form-input');
  input.type = 'number';

  const span = document.createElement('span')
  span.textContent = 'количество карт должно быть от 2-10'
  span.classList.add('span')

  const button = document.createElement('button');
  button.textContent = 'Начать игру';
  button.classList.add('btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })

  button.addEventListener('click', () => {

    let column = 2

    if (input.value !== '' && input.value !== null && input.value <= 10 && input.value > 1 && input.value % 2 == 0) {
      cardCount = input.value;

      if (input.value == 2) {
        column = 2
      }
      if (input.value == 4) {
        column = 4
      }
      if (input.value == 6) {
        column = 6
      }
      if (input.value == 8) {
        column = 8
      }
      if (input.value == 10) {
        column = 10
      }

      input.value = ''
    } else {

      if (cardCount = 4 || input.value == '') {
        column = 4
      }
      input.value = ''
    }

    cardWrapper.style = `grid-template-columns: repeat(${column}, 68px);`

    createNumbersArray(cardCount * cardCount);
    shuffle(arrNumber);
    for (const num of arrNumber) {
      cardsArr.push(newCard(num));
    }

    form.remove()
    input.remove()
    span.remove()
    button.remove()
  })

  // создаём обёртку для карточек
  const cardWrapper = document.createElement('ul');
  cardWrapper.classList.add('card-wrapper');

  form.append(input, span, button);
  container.append(form, cardWrapper);

  function newCard(number) {
    // создаём карточку игры
    let cardGame = document.createElement('li');
    cardGame.classList.add('card', 'closed');
    cardGame.textContent = number;

    document.getElementById('game');
    game.append(cardGame);
    const wrap = document.querySelector('.card-wrapper');
    wrap.append(cardGame);

    cardGame.addEventListener('click', () => {
      cardGame.classList.add('open');

      // если карты не совпали удаляем класс
      if (firstCard !== null && secondCard !== null) {
        if (firstCard.textContent != secondCard.textContent) {
          firstCard.classList.remove('open');
          secondCard.classList.remove('open');
          firstCard = null;
          secondCard = null;
        }
      }

      function startGame(card) {
        if (firstCard == null) {
          firstCard = card
        } else {
          if (secondCard == null) {
            secondCard = card
          }
        }

        // если карты совпали добавляем класс
        if (firstCard !== null && secondCard !== null) {
          if (firstCard.textContent == secondCard.textContent) {
            firstCard.classList.add('match');
            secondCard.classList.add('match');
            firstCard = null;
            secondCard = null;
          }
        }

        if (document.querySelectorAll('.card.match').length == cardsArr.length) {
          const endText = document.createElement('div');
          endText.textContent = 'Победа!🥳'
          endText.classList.add('end-text')

          const btnFirst = document.createElement('button')
          btnFirst.textContent = 'Начать сначала'
          btnFirst.classList.add('btn-first')

          document.body.append(endText, btnFirst)

          btnFirst.addEventListener('click', () => {
            container.innerHTML = ''
            cardCount,
              arrNumber = [],
              cardsArr = [],
              firstCard = null,
              secondCard = null

            createGame(container)
            endText.remove()
            btnFirst.remove()
          })
        }

      }
      startGame(cardGame)
    })
  }
}
createGame(document.getElementById('game'));









