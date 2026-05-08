
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