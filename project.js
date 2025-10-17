// Get current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Quiz functionality
const questionElement = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const resultElement = document.getElementById('result');

const quizQuestions = [
    {
        question: 'What is the capital of Nigeria?',
        options: ['Lagos', 'Abuja', 'Kano', 'Port Harcourt'],
        answer: 1
    },
    {
        question: 'What is the largest ethnic group in Nigeria?',
        options: ['Hausa', 'Igbo', 'Yoruba', 'Fulani'],
        answer: 0
    },
    {
        question: 'What is the official language of Nigeria?',
        options: ['English', 'Hausa', 'Yoruba', 'Igbo'],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < quizQuestions.length) {
        questionElement.textContent = quizQuestions[currentQuestion].question;
        option1.textContent = quizQuestions[currentQuestion].options[0];
        option2.textContent = quizQuestions[currentQuestion].options[1];
        option3.textContent = quizQuestions[currentQuestion].options[2];
        option4.textContent = quizQuestions[currentQuestion].options[3];
    } else {
        questionElement.textContent = 'Quiz completed!';
        option1.style.display = 'none';
        option2.style.display = 'none';
        option3.style.display = 'none';
        option4.style.display = 'none';
        resultElement.textContent = `Your final score is ${score} out of ${quizQuestions.length}`;
    }
}

loadQuestion();

option1.addEventListener('click', () => {
    checkAnswer(0);
});

option2.addEventListener('click', () => {
    checkAnswer(1);
});

option3.addEventListener('click', () => {
    checkAnswer(2);
});

option4.addEventListener('click', () => {
    checkAnswer(3);
});

function checkAnswer(selectedOption) {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
        score++;
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = `Incorrect! The correct answer is ${quizQuestions[currentQuestion].options[quizQuestions[currentQuestion].answer]}`;
    }
    currentQuestion++;
    setTimeout(() => {
        resultElement.textContent = '';
        loadQuestion();
    }, 2000);
}

// Gallery functionality
const festivalsBtn = document.getElementById('festivals-btn');
const galleryImages = document.getElementById('gallery-images');

festivalsBtn.addEventListener('click', () => {
    // Add functionality for festivals button
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Add functionality to send the form data
    alert('Form submitted successfully!');
    contactForm.reset();
});