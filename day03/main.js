// cria um objeto de valores onde tem questões e respostas
const questions = [
 {
  question: " Question: What is the capital of Germany?",
  answers: [
   { text: "Berlin", correct: true },
   { text: "Madrid", correct: false },
   { text: "Paris", correct: false },
   { text: "Rome", correct: false },
  ],
 },
 {
  question: " Question: Which planet is known as the Red Planet?",
  answers: [
   { text: "Venus", correct: false },
   { text: "Mars", correct: true },
   { text: "Jupiter", correct: false },
   { text: "Saturn", correct: false },
  ],
 },
 {
  question: ' Question: Who wrote the play "Romeo and Juliet"?',
  answers: [
   { text: "Jane Austen", correct: false },
   { text: "Charles Dickens", correct: false },
   { text: "William Shakespeare", correct: true },
   { text: "Mark Twain", correct: false },
  ],
 },
 {
  question: " Question: What is the main component of Earths atmosphere?",
  answers: [
   { text: "Hydrogen", correct: false },
   { text: "Oxygen", correct: false },
   { text: "Carbon Dioxide", correct: false },
   { text: "Nitrogen", correct: true },
  ],
 },
 {
  question: " Question: What is the largest ocean on Earth?",
  answers: [
   { text: "Indian Ocean", correct: false },
   { text: "Atlantic Ocean", correct: false },
   { text: "Arctic Ocean", correct: false },
   { text: "Pacific Ocean", correct: true },
  ],
 },
];
// Tras os elementos html para o js para manipular eles ao decorrer do codigo, essa importação sendo feita por meio do metodo getElementById
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

// Contadores aue serão usados
let currentQuestionIndex = 0;
let score = 0;

// Função que inicia o quiz
function startQuiz() {
  // usa dos dois contadores
  currentQuestionIndex = 0;
  score = 0;
  // aplica o valor dentro do elemento button para next question quando a função for chamada
  nextButton.innerHTML = "Next Question";
  // chama a função showquestion
  showQuestion();
}

// cria a função showQuestion()
function showQuestion() {
  // chama a função reset state
  resetState();
  // atribui a variavel os valores dos indexs de dentro do objeto questions -> sendo esse objeto convertido em "array"
  let currentQuestion = questions[currentQuestionIndex];
  // numero de questões que serão exibidas
  let questionNo = currentQuestionIndex + 1;
  // adiciona ao html os elementos, sendo ele o numero da questão, um ponto e o elemento question dentro da variavel currentQuestion
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  // criando os button de respostas das pergutas -> sendo feita em um loop, onde enquanto tiver algo dentro do campo answers será criado um button com resposta com base na questão que se está sendo aplicada para o usuario interagir
  
  currentQuestion.answers.forEach((answers) => {
    // cria um elemento button
    const button = document.createElement("button");
    // adiciona o elemento uma  resposta a um button, isso feito até que todas as alternativas dentro do answers estejam visiveis para o usuario
    button.innerHTML = answers.text;
    // adiciona a classe btn ao elemento button
    button.classList.add("btn");
    //adicona o button dentro do elemento answerButton do html
    answerButton.appendChild(button);
    // vai validar a resposta se estiver correto
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    };
    // vai selecionar a o button que estiver correto
    button.addEventListener("click", selectAnswer);
  });
};
// vau resetar o estilo do button q vai pra proxima questão
function resetState() {
  // amuda o display do elemento button
  nextButton.style.display = "none";
  // cria um loop  baseado no primeiro button
  while (answerButton.firstChild) {
    // remove o primeiro button do elemento
    answerButton.removeChild(answerButton.firstChild);
  };
};

// cria a função de selecionar a resposta com base em um evento representado pelo e
function selectAnswer(e) {
  // cria uam constant onde caso o evento seja um click baseado no target será atribuido a uma variavel
  const selectedBtn = e.target;
  // cria uma constante que recebe um valor onde se o button selecionado for o correto com base no valor bool do texr dentro do array de resposta vai atribuir a uma variavel
  const isCorrect = selectedBtn.dataset.correct === "true";
  // cria uma codição onde se a resposta estiver correto, vai adicionar a classe correct ao elemento selecionado com um contador de quantidade de vezes que selecionou uma opção correta 
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    // caso o button/resposta seja selecionado for incorreta aplica a classe incorrect ao elemento dentro do html
    selectedBtn.classList.add("incorrect");
  }
  // cria um array com base nos filhos selecionados, tendo um loop, que vai ver contabilizar se vai estar certo. e com isso aplicar o correct, e depois desabilitar o button se for verdadeiro, e depois vai desabilitar o button
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
    button.classList.add("correct");
  }
    button.disabled = true;
  });
  // habilita o button de passar para a proxima questão
  nextButton.style.display = "block";
}
// função de mensagem do final em relação a pontuação
function showScore() {
  // reseta os elementos
  resetState();
  // aplica um texto dentro do elemento onde vai exibir a quantidade de acertos baseados na quantidade de questões dentro do arrau de questões
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
