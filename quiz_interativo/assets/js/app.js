// 
import { questions_db } from "./questions_db.js";

/*
    select elements
*/
const question_elements = document.querySelector('[data_question]');
const choice_elements = document.querySelectorAll('[data_choice]');
const score_elements = document.querySelector('[data_score]');
const wrong_elements = document.querySelector('[data_wrong]');
const next_button = document.querySelector('[data_next]');

/*
    global variables
*/
let answer_chosen = false;
let current_question = 0;
let score = 0;
let wrong = 0;

/*
    functions
*/
const loadQuestion = () => { 
    const current_question_data = questions_db[current_question];
    question_elements.innerText = current_question_data.question;

    const choices = current_question_data.choices;

    for (let i = 0; i < choice_elements.length; i++) {
        choice_elements[i].innerText = choices[i];
    }

    answer_chosen = false;
};

loadQuestion();

/*
    events
*/