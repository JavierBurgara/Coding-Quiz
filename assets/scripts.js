// Containers
var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
//buttons
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back")
var btnClearScoresEl = document.querySelector("#clear-high-scores")
//questions/answers element
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover
timerEl.innerText = 0;
//high score array
var HighScores = [];
//array for questions
var allQuestions
var questionIndex = 0

//the array of questions
var questions = [
    { q: "Which Nba team won the 2023 Finals?",
         a: "4. Denver Nuggets",
         choices: [{choice: '1. Warrior'}, {choice: '2. Lakers'}, {choice: '3. Maimi Heat'}, {choice: '4. Denver nuggets'}]
    },
    { q: "What year did the titanic sink?",
         a: "2. April,1912",
         choices: [{choice: '1. May 1934'}, {choice: '2. April,1912'}, {choice: '3. December 1947'}, {choice: '4. June 2023'}]
    },
    { q: "What year did Javier gradute?",
         a: "3. 2015",
         choices: [{choice: '1. 2014'}, {choice: '2. 2017'}, {choice: '3. 2015'}, {choice: '4. 2016'}]
    },
    { q: "How many stripes are there on the US flag?",
         a: "1. 13",
         choices: [{choice: '1. 13'}, {choice: '2. 1'}, {choice: '3. 41'}, {choice: '4. 50'}]
    },
        { q: 'How many days does it take for the Earth to orbit the Sun?', 
        a: '4. 365', 
        choices: [{choice: '1. 1'}, {choice: '2. 7'}, {choice: '3. 24'}, {choice: '4. 365'}]
     },
    { q: 'Name the longest river in the world? ', 
    a: '1. Nile River', 
    choices: [{choice: '1. Nile River'}, {choice: '2. Amazon River '}, {choice: '3. Mississippi river'}, {choice: '4. Yangtze River'}]
    },
    { q: 'Which of the following empires had no written language: Incan, Aztec, Egyptian, Roman?', 
    a: '4. Incan', 
    choices: [{choice: '1. Roman'}, {choice: '2. Egyptian'}, {choice: '3. Aztec'}, {choice: '4. Incan'}]
    },
    { q: 'When was Netflix founded?', 
    a: '3. 1997', 
    choices: [{choice: '1. 2001'}, {choice: '2. 2009'}, {choice: '3. 1997'}, {choice: '4. 2015'}]
     },
]

