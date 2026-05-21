//задание 1
//Сортировка массива объектов по возрасту
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log("Задание 1:");
console.log("Исходный массив:", people);
people.sort(function (a, b) {
    return a.age - b.age;
});
console.log("Отсортированный массив (по возрастанию возраста):", people);
//задание 2
//Реализация собственной функции
function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function customFilter(array, ruleFunction) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (ruleFunction(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}
console.log("\nЗадание 2:");
const numbersForFilter = [3, -4, 1, 9];
console.log("Исходный массив чисел:", numbersForFilter);
console.log("Фильтрация по положительным числам:", customFilter(numbersForFilter, isPositive));

const peopleForFilter = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log("\nИсходный массив людей:", peopleForFilter);
console.log("Фильтрация по мужскому полу:", customFilter(peopleForFilter, isMale));
//задание 3
//Интервал и отложенное выполнение
console.log("\nЗадание 3:");
let counter = 0; 
const totalIntervals = 10;
const intervalId = setInterval(() => {
    const now = new Date();
    console.log(`[${now.toLocaleTimeString()}] Текущая дата и время.`);
    counter++;
    if (counter === totalIntervals) {
        clearInterval(intervalId);
        setTimeout(() => {
            console.log("30 секунд прошло.");
        }, 0); 
    }
}, 3000); 
//задание 4
//Задержка выполнения функции с setTimeout
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}
console.log("\nЗадание 4:");
console.log("Вызов delayForSecond...");

delayForSecond(function () {
    console.log('Привет, Глеб!');
});
//задание 5
//Исправление порядка выполнения с setTimeout
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); } 
    }, 1000)   
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

console.log("\nЗадание 5:");
console.log("Ожидаем вывода приветствия через 1 секунду...");
delayForSecond(function () {
    sayHi('Глеб');
});
