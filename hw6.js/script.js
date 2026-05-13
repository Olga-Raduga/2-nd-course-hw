
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

