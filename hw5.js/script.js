
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