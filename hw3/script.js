function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    while (true) {
        const input = prompt("Угадайте число от 1 до 100:");
        if (input === null) {
            alert("Игра завершена. До свидания!");
            break;
        }
        const guess = Number(input);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Введите число от 1 до 100!");
            continue;
        }
        attempts++;
        if (guess < randomNumber) {
            alert("Загаданное число БОЛЬШЕ. Попробуйте ещё раз!");
        } else if (guess > randomNumber) {
            alert("Загаданное число МЕНЬШЕ. Попробуйте ещё раз!");
        } else {
            alert("Поздравляем! Вы угадали число " + randomNumber + " за " + attempts + " попытки!");
            break;
        }
    }
}

function arithmeticGame() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, correctAnswer;
    if (operation === '+') {
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        correctAnswer = num1 + num2;
    } else if (operation === '-') {
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        correctAnswer = num1 - num2;
    } else if (operation === '*') {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 * num2;
    } else {
        num2 = Math.floor(Math.random() * 9) + 1;
        correctAnswer = Math.floor(Math.random() * 10) + 1;
        num1 = num2 * correctAnswer;
    }
    const userAnswer = prompt(`Реши пример: ${num1} ${operation} ${num2} = Ваш ответ?`);
    if (userAnswer === null) {
        alert("Игра прервана. Жаль, что вы уходите!");
        return;
    }
    if (parseInt(userAnswer) === correctAnswer) {
        alert('Отлично! Ваш ответ верный!');
    } else {
        alert(`Ошибка! Ваш ответ: ${userAnswer}. Правильный ответ: ${correctAnswer}`);
    }
}
//Игра 3
function reverseTextGame() {
    const text = prompt('Введи любой текст, и я его переверну:');
    if (text === null) {
        alert("Игра прервана. Жаль, что вы уходите!");
        return;
    }
    const reversedText = text.split('').reverse().join('');
    alert(`Ваш перевернутый текст: ${reversedText}`);
}
//Игра 4
function rockPaperScissorsGame() {
    const choices = ['камень', 'ножницы', 'бумага'];
    const userInput = prompt('Выбери: камень, ножницы или бумага').toLowerCase(); 
    if (userInput === null) return;
    const userChoice = userInput.toLowerCase().trim();
    if (!choices.includes(userChoice)) {
        alert('Некорректный ввод! Введи: камень, ножницы или бумага');
        return;
    }
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;
    if (userChoice === computerChoice) {
        result = 'Ничья!';
    } else if (
        (userChoice === 'камень' && computerChoice === 'ножницы') ||
        (userChoice === 'ножницы' && computerChoice === 'бумага') ||
        (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = 'Ты победил!';
    } else {
        result = 'Компьютер победил!';
    }
    alert(`Ты выбрал: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n\n${result}`);
}

//Игра 5
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"], correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
function startQuiz() {
    let correctAnswersCount = 0;
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        const promptMessage = `${currentQuestion.question}\n${currentQuestion.options.join('\n')}\n\nВведите номер вашего ответа (1, 2 или 3):`;
        const userAnswerString = prompt(promptMessage);
        if (userAnswerString === null) {
            alert("Викторина прервана. Спасибо за участие!");
            return;
        }
        const userAnswer = parseInt(userAnswerString);
        if (isNaN(userAnswer)) {
            alert(`Некорректный ввод для вопроса "${currentQuestion.question}". Ответ не засчитан.`);
        }
        else {
            if (userAnswer === currentQuestion.correctAnswer) {
                correctAnswersCount++;
                alert("Правильно!");
            }
            else {
                alert(`Неверно. Правильный ответ был: ${currentQuestion.correctAnswer}.`);
            }
        }
    }
    alert(`Викторина окончена! Вы ответили правильно на ${correctAnswersCount} из ${quiz.length} вопросов.`);
}
