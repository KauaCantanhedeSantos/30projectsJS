const questions = [
  {
    question: ' Question: What is the capital of Germany?',
    answers: [
      {text: "Berlin", correct: true},
      {text: "Madrid", correct: false},
      {text: "Paris", correct: false},
      {text: "Rome", correct: false},
    ]
  },
  {
    question: ' Question: Which planet is known as the Red Planet?',
    answers: [
      {text: "Venus", correct: false},
      {text: "Mars", correct: true},
      {text: "Jupiter", correct: false},
      {text: "Saturn", correct: false},
    ]
  },
  {
    question: ' Question: Who wrote the play "Romeo and Juliet"?',
    answers: [
      {text: "Jane Austen", correct: false},
      {text: "Charles Dickens", correct: false},
      {text: "William Shakespeare", correct: true},
      {text: "Mark Twain", correct: false},
    ]
  },
  {
    question: ' Question: What is the main component of Earths atmosphere?',
    answers: [
      {text: "Hydrogen", correct: false},
      {text: "Oxygen", correct: false},
      {text: "Carbon Dioxide", correct: false},
      {text: "Nitrogen", correct: true},
    ]
  },
  {
    question: ' Question: What is the largest ocean on Earth?',
    answers: [
      {text: "Indian Ocean", correct: false},
      {text: "Atlantic Ocean", correct: false},
      {text: "Arctic Ocean", correct: false},
      {text: "Pacific Ocean", correct: true},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next Question";
  showQuestion();
};

function showQuestion(){
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach(answers => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answers.correct){
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer)
  });
};

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
};

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true" ){
      button.classList.add("correct");
    } 
    button.disabled = true
  });

  nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}


nextButton.addEventListener("click",() => {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  } else {
    startQuiz();
  }
})

startQuiz();