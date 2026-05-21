//задание 1
//Скрытие и показ текста
const heading = document.querySelector('#heading1');
const btn = document.querySelector('#toggleButton1');
btn.addEventListener('click', function () {
    if (heading.style.display === 'none') {
        heading.style.display = 'block';
        btn.textContent = 'Скрыть';
    } else {
        heading.style.display = 'none';
        btn.textContent = 'Показать';
    }
});

//задание 2
//изменить цвет текста
const paragraph2 = document.querySelector('#myParagraph2');
const changeColorButton2 = document.querySelector('#changeColorButton2');
changeColorButton2.addEventListener('click', function () {
    paragraph2.style.color = 'blue';
});

//задание 3
//Динамическое изменение текста
const heading3 = document.querySelector('#myHeading3');
const changeTextButton3 = document.querySelector('#changeTextButton3');
changeTextButton3.addEventListener('click', function () {
    heading3.textContent = 'Привет, мир!';
});

//задание 4
//Поиск и изменение элементов по классу
const descriptionElements = document.querySelectorAll('.description');
descriptionElements.forEach(element => {
    element.textContent = 'Измененный текст';
});

//задание 5
//Работа с querySelectorAll
const descriptionParagraphs = document.querySelectorAll('#task5-container .description');
descriptionParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Новый текст';
});

//задание 6
//Добавление нового элемента в DOM
const addElementButton6 = document.querySelector('#addElementButton6');
const container6 = document.querySelector('#container6'); 
addElementButton6.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    container6.appendChild(newParagraph);
});