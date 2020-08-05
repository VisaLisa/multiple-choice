//select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("questionImage");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");

const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("c");

//CREATE QUESTIONS
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Hyper text Markup Language",
        choiceB : "Hyperlinks and Text Markup Languages",
        choiceC : "Home Tool Markup Language",
        correct : "A";

    },
    {
        question : "This is the 2nd questons",
        imgSrc : "img/picture2.png",
        choiceA : "The 1st choice",
        choiceB : "The 2nd choice",
        choiceC : "The answer",
        correct : "C";
    },
];

let lastQuestionIndex = question.length - 1;
let runningQuestionIndex = 0;

function renderQuestions(){
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = "<img.src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question+ "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
//progress render
function progressRender(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progressRender.innerHTML += "<div class='prog' id=" + qIndex + "></div>"; 
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}

function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

//Counter Render
const questionTime = 10;
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;
function counterRender(){
    if( count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count++;

    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            questionRender();
        } else{ clearInterval(TIMER);
        }
    }

}
