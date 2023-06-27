// Задание 1 Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками

let x1 = 8;
let y1 = 1;

let x2 = 5;
let y2 = 1;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

let area = Math.sqrt(Math.pow(cathetus1, 2) * Math.pow(cathetus2, 2));

console.log('Площадь прямоугольника', area);


//Задание 2 Вычислите дробные части чисел a и b с точностью n

let a = 13.123456789;
let b = 2.123;
let n = 5;

let aNormalized = Math.floor(
  a % 1 * Math.pow(10, n)
);

let bNormalized = Math.floor(
  b % 1 * Math.pow(10, n)
);

console.log('Исходные числа равны', a === b);
console.log('Числа равны', aNormalized === bNormalized);
console.log('Первое число больше', aNormalized > bNormalized);
console.log('Первое число меньше', aNormalized < bNormalized);
console.log('Первое число больше или равно', aNormalized >= bNormalized);
console.log('Первое число меньше или равно', aNormalized <= bNormalized);
console.log('Числа не равны', aNormalized !== bNormalized);

// Задание 3 Генератор случайных чисел

let num1 = 0;
let num2 = 100;

let range = Math.abs(num2 - num1);

let num1Random = Math.round((Math.random() * range) + Math.min(num2, num1));
let num2Random = Math.round((Math.random() * range) + Math.min(num2, num1));

console.log(num1Random);
console.log(num2Random);

console.log('Числа равны', num1Random === num2Random);
console.log('Первое число больше', num1Random > num2Random);
console.log('Первое число меньше', num1Random < num2Random);
console.log('Первое число больше или равно', num1Random >= num2Random);
console.log('Первое число меньше или равно', num1Random <= num2Random);
console.log('Числа не равны', num1Random !== num2Random);



