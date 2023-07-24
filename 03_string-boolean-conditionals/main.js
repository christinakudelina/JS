// Задача 1
    let password = ("1234-");

    console.log(`Пароль: ${password}`)

    if ((password.includes("-") || password.includes("_")) && password.length >= "4") {
        console.log('Пароль надёжный')
    } else {
        console.log ('Пароль недостаточно надёжный')
    }

    // Задача 2
    let userName ="Иван";
    let userSurname ="Смирнов";

    let firstName = userName.substring(0, 1);
    let lastName = userName.substring(1);

    let firstSurname = userSurname.substring(0, 1);
    let lastSurname = userSurname.substring(1);

    let correctName = firstName.toUpperCase() + lastName.toLowerCase();
    let correctSurname = firstSurname.toUpperCase() + lastSurname.toLowerCase();

    let resultNmae = correctName != userName || correctSurname != userSurname ? 'Имя было преобразовано' : 'Имя осталось без изменений';

    console.log(correctName, correctSurname, resultNmae)

    // Задача 3
    let num = "2";
    let evenNum = num % 2;

    if (evenNum === 0) {
      console.log('Число чётное')
    } else {
      console.log('Число нечётное')
    }


