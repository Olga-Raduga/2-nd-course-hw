
//задание 1
//массив до числа 10
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) break;
}

//задание 2
//индекс значения 4
const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) { console.log(i); break; }
}

const arr3 = [1, 5, 4, 10, 0, 3];
const valueToFind = 4;
const index = arr3.indexOf(valueToFind);
if (index !== -1) {
    console.log(`Индекс значения ${valueToFind} в массиве: ${index}`);
} else {
    console.log(`Значение ${valueToFind} не найдено в массиве.`);
}
//задание 3
//метода join
const arr4 = [1, 3, 5, 10, 20];
console.log(arr4.join(' '));

//задание 4
//многомерный массив
const matrix = [];
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) { row.push(1); }
    matrix.push(row);
}
console.log(matrix);

//задание 5
//три элемента со значением 2
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//задание 6
//удаляем букву 'a'из массива
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6 = arr6.filter(item => item !== 'a');
arr6.sort((a, b) => a - b);
console.log(arr6);

//задание 7
//Угадай число
const arr7 = [9, 8, 7, 6, 5];
const userInput7 = prompt('Угадай число:');
arr7.includes(parseInt(userInput7)) ? alert('Угадал') : alert('Не угадал');

//задание 8
//'fedcba'
const str8 = 'abcdef';
console.log(str8.split('').reverse().join(''));

//задание 9
//одномерный массив 
const arr9 = [[1, 2, 3], [4, 5, 6]];
console.log([...arr9[0], ...arr9[1]]);

//задание 10
//массив с произвольными числами
const numbers = [];
const arraySize = 10;
const maxRandomValue = 10;
for (let i = 0; i < arraySize; i++) {
    const randomNumber = Math.floor(Math.random() * maxRandomValue) + 1;
    numbers.push(randomNumber);
}
console.log("Исходный массив:");
console.log(numbers);
console.log("---");
for (let i = 0; i < numbers.length - 1; i++) {
    const currentElement = numbers[i];
    const nextElement = numbers[i + 1];
    const sum = currentElement + nextElement;
    console.log(`Элемент ${currentElement} (индекс ${i}) + Элемент ${nextElement} (индекс ${i + 1}) = ${sum}`);
}

//задание 11
//Функция возвращает новый массив
function getSquaresOfNumbers(numbersArray) {
const squaredNumbers = numbersArray.map(num => num * num);
    return squaredNumbers;
}
const originalNumbers = [1, 2, 3, 4, 5];
const squaredArray = getSquaresOfNumbers(originalNumbers);
console.log("Исходный массив чисел:", originalNumbers);
console.log("Массив квадратов чисел:", squaredArray);

const anotherArray = [-2, 0, 5, 10];
const squaredAnotherArray = getSquaresOfNumbers(anotherArray);
console.log("\nИсходный массив чисел:", anotherArray);
console.log("Массив квадратов чисел:", squaredAnotherArray);

//задание 12
//Функция-принимает массив строк, возвращает массив длины слов
function getStringLengths(stringArray) {
    const lengthsArray = stringArray.map(str => str.length);
    return lengthsArray;
}
const originalStrings = ["Привет", "мир", "JavaScript", "map", "функция"];
const lengthsOfStrings = getStringLengths(originalStrings);
console.log("Исходный массив строк:", originalStrings);
console.log("Массив длин строк:", lengthsOfStrings);

const otherStrings = ["один", "два", "три", "четыре", "пять"];
const lengthsOfOtherStrings = getStringLengths(otherStrings);
console.log("\nИсходный массив строк:", otherStrings);
console.log("Массив длин строк:", lengthsOfOtherStrings);

//задание 13
//Массив отрицательных чисел
function getNegativeNumbers(numbersArray) {
    const negativeNumbers = numbersArray.filter(num => num < 0);
    return negativeNumbers;
}
const originalNumbers13 = [1, -5, 4, -10, 0, 3, -2, -8];
const negativeArray = getNegativeNumbers(originalNumbers13);
console.log("Исходный массив (Задание 13):", originalNumbers13);
console.log("Массив отрицательных чисел:", negativeArray);

const anotherNumbers13 = [10, 20, 30, 40];
const negativeAnotherArray = getNegativeNumbers(anotherNumbers13);
console.log("\nИсходный массив чисел:", anotherNumbers13);
console.log("Массив отрицательных чисел:", negativeAnotherArray); 