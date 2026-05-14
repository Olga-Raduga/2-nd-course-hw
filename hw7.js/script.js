
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
