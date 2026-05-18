//задание 1
//Сортировка массива объектов по возрасту
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log("Задание 1:");
console.log("Исходный массив:", people);
people.sort(function (a, b) {
    return a.age - b.age;
});
console.log("Отсортированный массив (по возрастанию возраста):", people);
//задание 2
//Реализация собственной функции
function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function customFilter(array, ruleFunction) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (ruleFunction(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}
console.log("\nЗадание 2:");
const numbersForFilter = [3, -4, 1, 9];
console.log("Исходный массив чисел:", numbersForFilter);
console.log("Фильтрация по положительным числам:", customFilter(numbersForFilter, isPositive));

const peopleForFilter = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log("\nИсходный массив людей:", peopleForFilter);
console.log("Фильтрация по мужскому полу:", customFilter(peopleForFilter, isMale));
