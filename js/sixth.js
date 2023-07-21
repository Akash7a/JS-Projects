const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const checkAnswerBtn = document.querySelector(".check-answer");
const resultPara = document.getElementById("result");
const warningPara = document.getElementById("warning");
const newQuestionBtn = document.querySelector(".new-question");
const previousResultList = document.getElementById("previous-result-list");

let preResultContainer = [];
let number1, number2, result;

function generateQuestion() {
    number1 = getRandomNumber(1, 10);
    number2 = getRandomNumber(1, 20);
    result = number1 * number2;

    questionElement.innerHTML = `<h3>What is ${number1} multiplied by ${number2}?</h3>`;
    resultPara.innerText = "";
    warningPara.innerText = "";
    answerInput.value = "";
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (isNaN(userAnswer)) {
        warningPara.innerText = `Please enter a number`;
    } else if (userAnswer === result) {
        resultPara.innerText = `Congratulations! You guessed it right👏👏 Do some more questions.`;
    } else if (userAnswer < result) {
        warningPara.innerText = `Your number is less than the result`;
    } else {
        warningPara.innerText = `Your number is higher than the result`;
    }

    // Clear the input field after checking the answer
    answerInput.value = "";

    // Add the result to the previous results array
    preResultContainer.push({
        number1,
        number2,
        userAnswer,
        result,
        isCorrect: userAnswer === result
    });

    // Display the previous results
    displayPreviousResults();

    // Change the question after checking the answer
    generateQuestion();
}

function displayPreviousResults() {
    previousResultList.innerHTML = preResultContainer.map((res, index) => {
        const resultText = res.isCorrect ? "Correct" : "Incorrect";
        return `<li>Question ${index + 1}: ${res.number1} x ${res.number2} = ${res.userAnswer}. Your answer was ${resultText}.</li>`;
    }).join('');
}

checkAnswerBtn.addEventListener("click", checkAnswer);
newQuestionBtn.addEventListener("click", generateQuestion);

// Generate the first question on page load
generateQuestion();