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
