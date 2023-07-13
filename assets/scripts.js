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

// if back button is hit on high score page
     var renderStartPage = function () {
          containerHighScoresEl.classList.add("hide")
          containerHighScoresEl.classList.remove("show")
          containerHighScoresEl.classList.remove("show")
          containerStartEl.classList.remove("hide")
          containerStartEl.classList.add("show")
          containerScoreEl.removeChild(containerScoreEl.lastChild)
          questionIndex = 0
          gameover = ""
          timerEl.textContent = 0 
          score = 0

     if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide")
     }
     if (wrongEl.className = "show") {
          wrongEl.classList.remove("show");
          wrongEl.classList.add("hide");
     }
     };

     //every second, check if game-over is true, or if there is time left.
     var setTime = function () {
          timeleft = 60;

          var timercheck = setInterval(function() {
               timerEl.innerText = timeleft;
               timeleft--
             
               if (gameover) {
                   clearInterval(timercheck)
               }
              
               if (timeleft < 0) {
                   showScore()
                   timerEl.innerText = 0
                   clearInterval(timercheck)
               }
             
               }, 1000)

     };

     var startGame = function() {
          //add classes to show/hide start and quiz screen
          containerStartEl.classList.add('hide');
          containerStartEl.classList.remove('show');
          containerQuestionEl.classList.remove('hide');
          containerQuestionEl.classList.add('show');
          //Shuffle the questions so they show in random order
          allQuestions = questions.sort(() => Math.random() - 0.5)
          setTime()
          setQuestion()
        };

        var setQuestion = function() {
          resetAnswers()
          displayQuestion(allQuestions[questionIndex])
        };
        // remove answer buttons
        var resetAnswers = function() {
          while (answerbuttonsEl.firstChild) {
              answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
          };
        };
        //display question information (including answer buttons)
        var displayQuestion = function(index) {
          questionEl.innertext = index.q
          for (var i = 0; i < index.choices.length; i++) {
               var answerbutton = document.createElement('button')
               answerbutton.innerText = index.choices[i].choice
               answerbutton.classList.add('btn')
               answerbutton.classList.add('answerbtn')
               answerbutton.addEventListener("click", answerCheck)
               answerbuttonsEl.appendChild(answerbutton)
               }
        };

        //display correct! on screen
var answerCorrect = function() {
     if (correctEl.className = "hide") {
         correctEl.classList.remove("hide")
         correctEl.classList.add("banner")
         wrongEl.classList.remove("banner")
         wrongEl.classList.add("hide")
         }
     };

     //display wrong! on screen
var answerWrong = function() {
     if (wrongEl.className = "hide") {
         wrongEl.classList.remove("hide")
         wrongEl.classList.add("banner")
         correctEl.classList.remove("banner")
         correctEl.classList.add("hide")
     }
   };

   //check if answer is correct    
var answerCheck = function(event) {
     var selectedanswer = event.target
         if (allQuestions[questionIndex].a === selectedanswer.innerText){
             answerCorrect()
             score = score + 7
         }
   
         else {
           answerWrong()
           score = score - 1;
           timeleft = timeleft - 3;
       };
   
     //go to next question, check if there is more questions
       questionIndex++
         if  (allQuestions.length > questionIndex + 1) {
             setQuestion()
         }   
         else {
            gameover = "true";
            showScore();
             }
   }
   
     //Display total score screen at end of game
   var showScore = function () {
     containerQuestionEl.classList.add("hide");
     containerEndEl.classList.remove("hide");
     containerEndEl.classList.add("show");
   
     var scoreDisplay = document.createElement("p");
     scoreDisplay.innerText = ("Your final score is " + score + "!");
     containerScoreEl.appendChild(scoreDisplay);
   }       
   
   //create high score values
   var createHighScore = function(event) { 
     event.preventDefault() 
     var initials = document.querySelector("#initials").value;
     if (!initials) {
       alert("Enter your intials!");
       return;
     }
   
   formInitials.reset();
   
   var HighScore = {
   initials: initials,
   score: score
   } 
   
   //push and sort scores
   HighScores.push(HighScore);
   HighScores.sort((a, b) => {return b.score-a.score});
   
   //clear visibile list to resort
   while (listHighScoreEl.firstChild) {
    listHighScoreEl.removeChild(listHighScoreEl.firstChild)
   }
   //create elements in order of high scores
   for (var i = 0; i < HighScores.length; i++) {
   var highscoreEl = document.createElement("li");
   highscoreEl.ClassName = "high-score";
   highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
   listHighScoreEl.appendChild(highscoreEl);
   }
   
   saveHighScore();
   displayHighScores();
   
   }
   //save high score
   var saveHighScore = function () {
     localStorage.setItem("HighScores", JSON.stringify(HighScores))
         
   }
   
   //load values/ called on page load
   var loadHighScore = function () {
     var LoadedHighScores = localStorage.getItem("HighScores")
         if (!LoadedHighScores) {
         return false;
     }
   
     LoadedHighScores = JSON.parse(LoadedHighScores);
     LoadedHighScores.sort((a, b) => {return b.score-a.score})
   
   
     for (var i = 0; i < LoadedHighScores.length; i++) {
         var highscoreEl = document.createElement("li");
         highscoreEl.ClassName = "high-score";
         highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
         listHighScoreEl.appendChild(highscoreEl);
   
         HighScores.push(LoadedHighScores[i]);
         
     }
   }  
   
   //display high score screen from link or when intiials entered
   var displayHighScores = function() {
   
     containerHighScoresEl.classList.remove("hide");
     containerHighScoresEl.classList.add("show");
     gameover = "true"
   
     if (containerEndEl.className = "show") {
         containerEndEl.classList.remove("show");
         containerEndEl.classList.add("hide");
         }
     if (containerStartEl.className = "show") {
         containerStartEl.classList.remove("show");
         containerStartEl.classList.add("hide");
         }
         
     if (containerQuestionEl.className = "show") {
         containerQuestionEl.classList.remove("show");
         containerQuestionEl.classList.add("hide");
         }
   
     if (correctEl.className = "show") {
         correctEl.classList.remove("show");
         correctEl.classList.add("hide");
     }
   
     if (wrongEl.className = "show") {
         wrongEl.classList.remove("show");
         wrongEl.classList.add("hide");
         }
     
   }
   //clears high scores
   var clearScores = function () {
     HighScores = [];
   
     while (listHighScoreEl.firstChild) {
         listHighScoreEl.removeChild(listHighScoreEl.firstChild);
     }
   
     localStorage.clear(HighScores);
   
   } 
   
   loadHighScore()
     
   //on start click, start game
   btnStartEl.addEventListener("click", startGame)
   //on submit button -- enter or click
   formInitials.addEventListener("submit", createHighScore)
   //when view high-scores is clicked
   ViewHighScoreEl.addEventListener("click", displayHighScores)
   //Go back button
   btnGoBackEl.addEventListener("click", renderStartPage)
   //clear scores button
   btnClearScoresEl.addEventListener("click", clearScores)