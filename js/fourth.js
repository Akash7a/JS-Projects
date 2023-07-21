{
    let randomNumber = parseInt((Math.random() * 100 + 1).toFixed(0));
    let submit = document.querySelector("#subt");
    let userInput = document.querySelector("#user-input");
    let resultParas = document.querySelector(".result-paras");
    let guessSlot = document.querySelector("#guesses");
    let lastResult = document.querySelector("#lastResult");
    let lowOrHi = document.querySelector(".lowOrHigh");

    let p = document.createElement("p");

    let playGame = true;
    let prevGuesses = [];
    let numOfGuesses = 1;

    if (playGame) {
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
        });
    }

    function validateGuess(guess) {
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
        } else if (guess < 1) {
            alert("Please enter a number greater than 1.");
        } else if (guess > 100) {
            alert("Please enter a number less than 100.");
        } else {
            prevGuesses.push(guess);
            if (numOfGuesses > 10) {
                displayGuess(guess);
                displayMessage(`Game over. The random number was ${randomNumber}`);
                endGame();
            } else {
                displayGuess(guess);
                checkGuess(guess);
            }
        }
    }

    function checkGuess(guess) {
        if (guess === randomNumber) {
            displayMessage("You guessed it right👏👏");
            endGame();
        } else if (guess < randomNumber) {
            displayMessage("You guessed too low. Try again.");
        } else if (guess > randomNumber) {
            displayMessage("You guessed too high. Try again.");
        }
    }

    function displayGuess(guess) {
        userInput.value = "";
        guessSlot.innerHTML += `${guess} ,`;
        numOfGuesses++;
        lastResult.innerHTML = `${11 - numOfGuesses}`;
    }

    function displayMessage(message) {
        lowOrHi.innerHTML = `<h3>${message}</h3>`;
    }

    function endGame() {
        userInput.value = "";
        userInput.setAttribute("disabled", "");
        p.classList.add("button");
        p.innerHTML = '<h3 id="newGame">Start new Game</h3>';
        resultParas.appendChild(p);
        playGame = false;
        newGame();
    }

    function newGame() {
        let newGameButton = document.querySelector("#newGame");
        newGameButton.addEventListener("click", () => {
            randomNumber = parseInt(Math.random() * 100 + 1);
            prevGuesses = [];
            guessSlot.innerHTML = "";
            numOfGuesses = 1;
            lastResult.innerHTML = `${11 - numOfGuesses}`;
            userInput.removeAttribute("disabled");
            resultParas.removeChild(p);
            playGame = true;
        });
    }
}
