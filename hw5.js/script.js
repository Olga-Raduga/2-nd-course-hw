
//задание 1
//«Привет» дважды
let i = 0
while (i < 2) {
    console.log('Привет');
    i++;
}
//задание 2
//Цифры от 1 до 5
let i = 1;
while (i <=5) {
    console.log(i);
    i++;
}
//задание 3
//Числа от 7 до 22
let i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}
//задание 4
//Зарплаты сотрудников (for-in)
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let name in obj) {
    console.log(name + " — зарплата " + obj[name] + " долларов");
}
//задание 5
//Делим 1000 на 2 пока не станет меньше 50
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
console.log("Результат: " + n);
console.log("Количество итераций: " + num);
//задание 6
//Пятницы месяца
const firstFriday = 2;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
}
//дополнительное задание 1
//Вычитать 7 из 100 пока не станет меньше 0
let k = 100;
let num = 0;
while (k >= 0) {
    k = k - 7;
    num++;
}
console.log("Результат: " + k);
console.log("Количество итераций: " + num);
//дополнительное задание 2
//Месяцы с порядковым номером
const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
console.log("Месяцы года и их порядковые номера:");
for (let i = 0; i < months.length; i++) {
    const monthNumber = i + 1;
    console.log(`${months[i]} - ${monthNumber}-й месяц`);
}
//дополнительное задание 3
//Объект «Книга»
const book = {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "Роман"
};
console.log("Информация о книге:");
for (const property in book) {
    if (Object.hasOwnProperty.call(book, property)) {
        const value = book[property];
        let propertyDescription = property;
        if (property === 'title') propertyDescription = 'Название';
        if (property === 'author') propertyDescription = 'Автор';
        if (property === 'year') propertyDescription = 'Год издания';
        if (property === 'genre') propertyDescription = 'Жанр';
        console.log(`${propertyDescription}: ${value}`);
    }
}
//дополнительное задание 4
//Массив из 10 случайных чисел, найти минимум
const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Сгенерированный массив случайных чисел:" + numbers);
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log("Минимальное число: " + min);