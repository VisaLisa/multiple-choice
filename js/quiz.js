//select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


//CREATE QUESTIONS
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Hyper text Markup Language - Correct",
        choiceB : "Hyperlinks and Text Markup Languages",
        choiceC : "Home Tool Markup Language",
        correct : "A"

    },{
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "The 1st choice",
        choiceB : "The answer",
        choiceC : "The 3rd choice",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "The 1st choice",
        choiceB : "The 2nd choice",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
];

//create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

//render question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
//render progress  NOT SURE WHY NOT WORKING

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
//Counter Render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeUnit * count + "px";
        count++;

    }else{
        count = 0;
        //change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        } else{ 
            // end the quiz and show the score
            clearInterval(TIMER);
            renderScore();
        }
    }
}
//Start the Quiz
start.addEventListener("click", startQuiz);
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000ms = 1s
}
 
// //Check answer function
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        //answer is correct
        score++;
        //change progress color to green
        answerIsCorrect();
    } else{
        // answer is wrong
        //change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        renderScore();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// //Score Render 
function renderScore(){
    scoreDiv.style.display = "block";
    // calculate the amount of questions percent answered by the user
    let scorePerCent = Math.round(100 * score / questions.length);
    // choose imgage based on the scorePerCent
    let img = (scorePerCent >= 80 ) ? "img/5.png" :
        (scorePerCent >= 60 ) ? "img/4.png" :
        (scorePerCent >= 40 ) ? "img/3.png" :
        (scorePerCent >= 20 ) ? "img/2.png" :
        "img/1.png" ;
    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML +="<p>" + scorePerCent + "%</p>";
    
}

// //Ternary Operator
// //X = (Y == "one") ? 1 : 0; // condition ? ExprTrue : ExprFalse
