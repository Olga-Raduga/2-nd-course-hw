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


