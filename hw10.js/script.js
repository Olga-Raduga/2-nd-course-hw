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
