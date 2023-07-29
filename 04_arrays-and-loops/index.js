// Задача 1
function result(n, m, count) {
    let array = [];

    for(let i = 0; i < count; i++) {
        array.push(Math.round(Math.random() * (m - n) + n))
    }
    return array
}
console.log(result(0, 100, 100))
console.log(result(2, 5, 50))
console.log(result(100, -5, 70))
console.log(result(-3, -10, 42))

// Задача 2
let count = [1,2,3,4,5];

for (let i = 0; i < count.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = count[i];
    count[i] = count[j];
    count[j] = temp;
}
console.log(count)

// Задача 3
let n = 3
n = count.findIndex(i => i === n)
    if (n !== -1) {
        console.log(`индекс элемента = ${n}`)
    } else {
        console.log('элемент не найден')
    }

// Задача 4
let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53]
let arr2 = [12, 44, 23, 5]

let arrAll = arr1.concat(arr2)
console.log(arrAll)
