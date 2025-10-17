const hamburger=document.getElementById('hamburger');
const navMenu=document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', ()=> {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
}

// Gallery functionality
const images = [
  {
    id: 1,
    src: "image1.jpg",
    category: "Festivals"
  },
  {
    id: 2,
    src: "image2.jpg",
    category: "Landmarks"
  },
  {
    id: 3,
    src: "image3.jpg",
    category: "Artifacts"
  }
];

function displayImages(category) {
  const gallery = document.getElementById("gallery-images");
  gallery.innerHTML = "";
  const filteredImages = images.filter(image => image.category === category);
  filteredImages.forEach(image => {
    const img = document.createElement("img");
    img.src = image.src;
    gallery.appendChild(img);
  });
}

document.getElementById("festivals-btn").addEventListener("click", () => {
  displayImages("Festivals");
});

document.getElementById("landmarks-btn").addEventListener("click", () => {
  displayImages("Landmarks");
});

document.getElementById("artifacts-btn").addEventListener("click", () => {
  displayImages("Artifacts");
});

// Quiz functionality
const quizQuestions = [
  {
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Port Harcourt", "Kano"],
    answer: 1
  },
  {
    question: "What is the largest ethnic group in Nigeria?",
    options: ["Hausa", "Igbo", "Yoruba", "Fulani"],
    answer: 0
  }
];

let currentQuestion = 0;

function displayQuizQuestion(index) {
  const question = document.getElementById("question");
  question.textContent = quizQuestions[index].question;
  const options = document.querySelectorAll("#quiz button");
  options.forEach((option, i) => {
    option.textContent = quizQuestions[index].options[i];
  });
}

displayQuizQuestion(currentQuestion);

document.querySelectorAll("#quiz button").forEach((option, i) => {
  option.addEventListener("click", () => {
    const result = document.getElementById("result");
    if (i === quizQuestions[currentQuestion].answer) {
      result.textContent = "Correct!";
    } else {
      result.textContent = "Incorrect!";
    }
    currentQuestion = (currentQuestion + 1) % quizQuestions.length;
    displayQuizQuestion(currentQuestion);
  });
});