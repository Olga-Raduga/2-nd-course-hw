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