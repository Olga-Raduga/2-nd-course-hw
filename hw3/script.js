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

