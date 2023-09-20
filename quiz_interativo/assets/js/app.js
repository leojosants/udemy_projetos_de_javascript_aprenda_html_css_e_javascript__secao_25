// 
import { questions } from "./questions_db.js";

/*
    select elements
*/
const question_element = document.querySelector('[data_question]');
const choice_elements = document.querySelectorAll('[data_choice]');
const score_elements = document.querySelector('[data_score]');
const wrong_elements = document.querySelector('[data_wrong]');
const next_button = document.querySelector('[data_next]');

/*
    global variables
*/
let current_question = 0;
let score = 0;
let wrong = 0;
let answer_chosen = false;

/*
    functions
*/
// 
const loadQuestion = () => {
    const current_question_data = questions[current_question];
    question_element.innerText = current_question_data.question;

    const choices = shuffleArray(current_question_data.choices);

    for (let i = 0; i < choice_elements.length; i++) {
        choice_elements[i].innerText = choices[i];
    }

    answer_chosen = false;
};

//
const shuffleArray = (array) => {
    let current_index = array.length;
    let temporary_value;
    let random_index;

    while (0 !== current_index) {
        random_index = Math.floor(Math.random() * current_index);
        current_index -= 1;
        temporary_value = array[current_index];
        array[current_index] = array[random_index];
        array[random_index] = temporary_value;
    };

    return array;
};

// 
loadQuestion();

/*
    events
*/