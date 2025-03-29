const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerContainerElement = document.getElementById('answer-container');
const nextButton = document.getElementById('next-button');
const questionNumberElement = document.getElementById('question-number');
const socket = io();
const queryString = window.location.search;
let questionslist, currentQuestionIndex;
const urlParams = new URLSearchParams(queryString);
const playerID = urlParams.get('id');
const playerName = urlParams.get('name');
startGame();

function startGame() {
    questionslist = questions;
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    updateQuestionNumber();
    showQuestion(questionslist[currentQuestionIndex]);
}

function sendProgress() {
    const progressData = {
        userId: playerID, // Assuming playerID is defined and stored
        currentQuestion: currentQuestionIndex,
        totalQuestions: questionslist.length
    };

    socket.emit('submitProgress', progressData);
}

function showQuestion(question) {
    questionElement.innerText = question.question;

    // Shuffle answers before displaying them
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerContainerElement.appendChild(button);
    });
}


function updateQuestionNumber() {
    questionNumberElement.innerText = `${currentQuestionIndex + 1} / ${questionslist.length}`;
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerContainerElement.firstChild) {
        answerContainerElement.removeChild(answerContainerElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);

    Array.from(answerContainerElement.children).forEach(button => {
        button.disabled = true;
        setStatusClass(button, button.dataset.correct);
    });

    if (!correct) {
        nextButton.innerText = 'Restart';
    } else if (questionslist.length > currentQuestionIndex + 1) {
        nextButton.innerText = 'Next';
    } else {
        nextButton.innerText = 'Finish';
    }
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

nextButton.addEventListener('click', () => {
    if (nextButton.innerText.toLowerCase() === 'restart') {
        startGame();
    } else if (nextButton.innerText.toLowerCase() === 'finish') {
        currentQuestionIndex++;
        console.log("finished!")
    }
    else {
        currentQuestionIndex++;
        setNextQuestion();
    }
    sendProgress();
});

socket.on('gameWon', (data) => {
    const { winner, runnerUps } = data;
    let runnerUpsHtml = runnerUps?.join(' and ') || 'No runner-ups'; // Safely join runner-ups names
    document.body.style.backgroundColor = '#4CAF50';
    document.body.innerHTML = `
        <div class="win-container">
            <h1 class="win-message">${winner} WON!</h1>
            <p class="runner-ups">Runner-ups: ${runnerUpsHtml}</p>
            <a href="/" class="return-button">Return</a>
        </div>
    `;
});


function overrideskip() {
    currentQuestionIndex++
    setNextQuestion()
}
