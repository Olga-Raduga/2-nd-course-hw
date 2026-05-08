
//задание 1
//программа проверки правильности введенного пароля
let password = 'пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    alert('Пароль введен верно');
}
else {
    alert('Пароль введен неправильно')
}
//задание 2
//переменная с, записываем с больше 0 и меньше 10
let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}
//задание 3
//две переменные — d и e 
let d = 50;
let e = 150;
if (d > 100 || e > 100) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}
//задание 4
//Исправление кода
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//задание 5
//Используем оператор switch
let monthNumber = Number(prompt('Введите номер месяца (от 1 до 12)'));
if (monthNumber <= 0 || monthNumber > 12) {
    alert('Такого месяца не существует');
}
else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('осень');
            break;
    }
}
//дополнительное задание 1
//программа, проверяющая число на четность/нечетность
let num = prompt('Пожалуйста, введите любое число');
if (isNaN(Number(num))) {
    alert('Это не число!');
}
else {
    if (Number(num) % 2 === 0) {
        alert('Число чётное');
    }
    else {
        alert('Число нечётное')
    }
}
//дополнительное задание 2
//программа, которая определяет, чем пользуется клиент (iOS или Android)
let clientOS = 1;
if (clientOS === 1) {
    console.log('Установите версию приложения для iOS по ссылке');
}
else {
    console.log('Установите версию приложения для Android по ссылке')
}