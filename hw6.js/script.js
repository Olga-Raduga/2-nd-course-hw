
//задание 1
//меньшее из двух чисел
function getMin(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}
console.log(getMin(8, 4));
console.log(getMin(6, 6));
console.log(getMin(3, 9));

//задание 2
//четное или нечетное
function checkEven(n) {
    if (n % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}
console.log(checkEven(4));
console.log(checkEven(7));
console.log(checkEven(0));

//задание 3
//функция-квадрат числа
function printSquare(num) {
    console.log(num * num);
}
function getSquare(num) {
    return num * num;
}
printSquare(5);
let result = getSquare(5);
console.log(result);
console.log(result + 10);

//задание 4
//Возраст пользователя
function checkAge() {
let age = Number(prompt("Сколько вам лет?"));
if (age < 0) {
    alert("Вы ввели неправильное значение");
} else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
} else {
    alert("Добро пожаловать!");
}
}
checkAge();

//задание 5
//функция-проверяет, являются ли переданные параметры корректными числами.
function multiply(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return "Одно или оба значения не являются числом";
    }
    return Number(a) * Number(b);
}
console.log(multiply(3, 4));
console.log(multiply("abc", 4));
console.log(multiply("2", "5")); 

//задание 6
//функция-с проверкой
function getCube() {
    let input = prompt("Введите число:");
    let n = Number(input);
    if (isNaN(n)) {
        return "Переданный параметр не является числом";
    }
    return n + " в кубе равняется " + (n * n * n);
}
for (let i = 0; i <= 10; i++) {
    console.log(i + " в кубе равняется " + (i * i * i));
}

