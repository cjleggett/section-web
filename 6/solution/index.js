var currentNumber;

document.addEventListener('DOMContentLoaded', () => {
    newGame();
    document.querySelector('#new').addEventListener('click', newGame);
    document.querySelector('#guess').addEventListener('click', handleGuess);
});

newGame = () => {
    currentNumber = Math.floor(Math.random() * 100000) + 1;
    message = document.querySelector("#message")
    message.innerHTML = ""
    message.style.color = 'black'
    document.querySelector('input').disabled = false;
}

handleGuess = () => {
    input = document.querySelector('input');
    const guess = input.value;
    const message = document.querySelector("#message");
    if (guess < currentNumber) {
        message.innerHTML = "Too Low...";
    } else if (guess > currentNumber) {
        message.innerHTML = "Too High...";
    } else {
        message.innerHTML = `YOU GOT IT! THE NUMBER WAS ${currentNumber}!`;
        message.style.color = "#99ff33"
        input.disabled = true;
    }
}