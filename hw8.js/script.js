//задание 1
//Преобразовываем строку ‘js’ в верхний регистр
const originalString = 'js';
const upperCaseString = originalString.toUpperCase();
console.log("Задание 1:");
console.log(`Исходная строка: '${originalString}', в верхнем регистре: '${upperCaseString}'`);
//2й вариант
console.log('js'.toUpperCase());
//задание 2
//Фильтрация массива строк по началу
function filterByStartString(stringArray, prefix) {
    const lowerCasePrefix = prefix.toLowerCase();
    const filteredArray = stringArray.filter(str => {
        return str.toLowerCase().startsWith(lowerCasePrefix);
    });
    return filteredArray;
}
const words = ["JavaScript", "Java", "Python", "C++", "JSP"];
const searchPrefix = "j";

const resultWords = filterByStartString(words, searchPrefix);

console.log("\nЗадание 2:");
console.log("Исходный массив строк:", words);
console.log(`Строка для поиска начала: '${searchPrefix}'`);
console.log("Отфильтрованный массив:", resultWords);
// 2
const moreWords = ["Apple", "Apricot", "Banana", "Avocado"];
const searchPrefix2 = "A";
const resultWords2 = filterByStartString(moreWords, searchPrefix2);
console.log("\nИсходный массив строк:", moreWords);
console.log(`Строка для поиска начала: '${searchPrefix2}'`);
console.log("Отфильтрованный массив:", resultWords2);
//задание 3
//Округление числа
const numberToRound = 32.58884;
console.log("\nЗадание 3:");
console.log(`Исходное число: ${numberToRound}`);
const floorValue = Math.floor(numberToRound);
console.log(`Округлено до меньшего целого (Math.floor): ${floorValue}`);

const ceilValue = Math.ceil(numberToRound);
console.log(`Округлено до большего целого (Math.ceil): ${ceilValue}`);

const roundValue = Math.round(numberToRound);
console.log(`Округлено до ближайшего целого (Math.round): ${roundValue}`);
//задание 4
//Минимальное и максимальное значения
const numbersForMinMax = [52, 53, 49, 77, 21, 32];

console.log("\nЗадание 4:");
console.log("Массив чисел:", numbersForMinMax);

const minValue = Math.min(...numbersForMinMax); // Используем spread-оператор (...)
console.log(`Минимальное значение: ${minValue}`);

const maxValue = Math.max(...numbersForMinMax); 
console.log(`Максимальное значение: ${maxValue}`);
//задание 5
//Случайное число от 1 до 10
function logRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("\nЗадание 5:");
    console.log(`Случайное число от 1 до 10: ${randomNumber}`);
}
logRandomNumber();
logRandomNumber();
//задание 6
//Массив случайных чисел с длиной, зависящей от входного числа
function generateRandomArray(maxNumber) {
    const arrayLength = Math.floor(maxNumber / 2);
    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * maxNumber);
        randomArray.push(randomNumber);
    }
    return randomArray;
}
//Пример использования
const inputNumber = 10;
const generatedArray = generateRandomArray(inputNumber);

console.log("\nЗадание 6:");
console.log(`Входное число: ${inputNumber}`);
console.log(`Сгенерированный массив (длина ${generatedArray.length}, числа от 0 до ${inputNumber - 1}):`, generatedArray);
//задание 7
//Случайное число в диапазоне
function getRandomNumberInRange(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
//Пример использования
const minRange = 5;
const maxRange = 10;
const randomInRange = getRandomNumberInRange(minRange, maxRange);

console.log("\nЗадание 7:");
console.log(`Случайное число в диапазоне от ${minRange} до ${maxRange}: ${randomInRange}`);

const minRange2 = 20;
const maxRange2 = 25;
const randomInRange2 = getRandomNumberInRange(minRange2, maxRange2);
console.log(`Случайное число в диапазоне от ${minRange2} до ${maxRange2}: ${randomInRange2}`);
//задание 8
//Выводим текущую дату
const currentDate = new Date();
console.log("\nЗадание 8:");
console.log("Текущая дата и время:", currentDate);

console.log(new Date());
//задание 9
//Дата через 73 дня
const currentDate9 = new Date();
console.log("\nЗадание 9:");
console.log("Текущая дата:", currentDate9.toLocaleDateString()); 
const futureDate = new Date(currentDate9);
futureDate.setDate(currentDate9.getDate() + 73);
console.log(`Дата через 73 дня: ${futureDate.toLocaleDateString()}`);