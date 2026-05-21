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
