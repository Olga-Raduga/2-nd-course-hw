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