let introductionEl = document.querySelector('#introduction');
let startQuizEl = document.querySelector('#startBtn')
let quizEl = document.querySelector('#quiz');
let totalScoreEl = document.querySelector('#totalScore');
let highScoresEl = document.querySelector('#highScores');
let viewHighScoresEl = document.querySelector('#viewHighScores');
let timeEl = document.querySelector('#time');
let scoreEl = document.querySelector('#score');
let saveScoreEl = document.querySelector('#saveScore');
let submitBtnEl = document.querySelector('#submitBtn');
let scoresEl = document.querySelector('#scores');
let returnBtnEl = document.querySelector('#returnBtn');
let clearBtnEl = document.querySelector('#clearBtn');
let answerBtnEl = document.querySelector('#answerBtn');

let questions = [
    {
    question: "What Javascript data type gives true or false?",
    answers: [
        {
            answer: "A) number",
            correct: false
        },
        {
            answer: "B) string",
            correct: false
        },
        {
            answer: "C) Boolean",
            correct: true
        },
        {
            answer: "D) Object",
            correct: false
        }
    ]
    },
    {
    question: "What is used for single line comments in JavaScript?",
    answers: [
        {
            answer: "A) <!-- --!>",
            correct: false
        },
        {
            answer: "B) /* */",
            correct: false
        },
        {
            answer: "C) !",
            correct: false
        },
        {
            answer: "D) //",
            correct: true
        }
    ]
    },
    {
    question: "An if statement is contained within: ",
    answers: [
        {
            answer: "A) ()",
            correct: false
        },
        {
            answer: "B) []",
            correct: false
        },
        {
            answer: "C) {}",
            correct: true
        },
        {
            answer: "D) //",
            correct: false
        }
    ]
    },
    {
    question: "Which of the following is a type of pop up box?",
    answers: [
        {
            answer: "A) Form",
            correct: false
        },
        {
            answer: "B) List",
            correct: false
        },
        {
            answer: "C) Prompt",
            correct: true
        },
    {
        answer: "D) Button",
        correct: false
    }
    ]
    }
]

let questionsIndex = 0;
let score = 0;
let timeRemaining = 0;
let scoreList = [];
let timeInterval;

function toggleSections(hiddenSection, shownSection) {
    hiddenSection.className = "hide";
    shownSection.classList.remove("hide");

    if (shownSection === introductionEl) {
        questionsIndex = 0;
        score = 0;
        timeRemaining = 0;
        document.querySelector("#time").text = timeRemaining;
    } else if (shownSection === quizEl) {
        createQuiz();
    } else if (shownSection === viewHighScoresEl) {
        createHighScoresList();
    }
}

function createQuiz(event) {
    event.preventDefault();
    let questionEl = document.createElement("h1");
    questionEl.className = "question";
    questionEl.textContent = questions[questionsIndex].question;
    quizEl.appendChild(questionEl);

    let answerEl = document.createElement("div");
    answerEl.className = "answers";
    for (var i=0; i < questions[questionsIndex].answers.length; i++) {
        let answerBtnEl = document.createElement("button");
        answerBtnEl.className = "answerBtn";
        answerBtnEl.setAttribute("data-answer-id", i);
        answerBtnEl.textContent = questions[questionsIndex].answers[i].answer;
        answerEl.appendChild(answerBtnEl);  
    }
    quizEl.appendChild(answerEl)

    let isCorrectEl = document.createElement("div");
    isCorrectEl.className = "isCorrect hide";
    isCorrectEl.id = "isCorrect";
    quizEl.appendChild(isCorrectEl);
}

function correctAnswer() {
    let isCorrectEl = document.querySelector("#isCorrect");
    if (isCorrectEl.classList == "isCorrect hide") {
        isCorrectEl.classList.remove("hide");
    }

    if (isCorrect) {
        isCorrectEl.innerHTML = "<p>Good Job!</p>";
    } else {
        isCorrectEl.innerHTML = "<p>Whoops, not quite!</p>"
        timeRemaining -= 10;
    }
}

// Start quiz
startQuizEl.onclick = createQuiz;

answerBtnEl.onclick = correctAnswer;
