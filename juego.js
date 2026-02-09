const questions = [
  {
    question: "Nombre completo de Oscar",
    options: [
      "Oscar Ramses Muñiz Hernandez",
      "Oscar Javier Muñoz Hernandez",
      "Oscar Javier Muñiz Fernandez",
      "Oscar Javier Muñiz Hernandez"
    ],
    correctAnswer: "Oscar Javier Muñiz Hernandez"
  },
  {
    question: "Día en que nos hicimos novios...",
    options: [
      "12-09-23", 
      "02-10-23", 
      "22-09-23", 
      "02-09-23"
    ],
    correctAnswer: "02-09-23"
  },
  {
    question: "¿Dónde fue nuestra primera cita?",
    options: [
      "En la universidad", 
      "En una fiesta", 
      "En un parque", 
      "En un café"
    ],
    correctAnswer: "En un parque"
  },
  {
    question: "¿Cuál fue el primer regalo que me diste?",
    options: [
      "Taza de inge y rosas", 
      "Cautín Trupper", 
      "Ramo de flores", 
      "Peluche de unicornio"
    ],
    correctAnswer: "Taza de inge y rosas"
  },
  {
    question: "¿Lugar del primer beso?",
    options: [
      "En el parque Morelos",
      "En una fiesta borrachos",
      "En la terminal ABC del centro",
      "En la playa de Rosarito"
    ],
    correctAnswer: "En una fiesta borrachos"
  },
  {
    question: "¿Cuál es mi postre preferido?",
    options: [
      "Flan",
      "Fresas con crema",
      "Pastel de 3 leches",
      "Cupcake de chocolate"
    ],
    correctAnswer: "Flan"
  },
    {
    question: "¿Manga favorito?",
    options: [
      "Naruto",
      "Kingdom",
      "Berserk",
      "One Piece"
    ],
    correctAnswer: "Kingdom"
  },
    {
    question: "¿Perros o gatos?",
    options: [
      "Perros",
      "Gatos",
    ],
    correctAnswer: "Gatos"
  },
    {
    question: "¿Dónde nos conocimos?",
    options: [
      "Facebook",
      "Instagram",
      "Universidad",
      "En un oxxo"
    ],
    correctAnswer: "Facebook"
  },
    {
    question: "¿Qué tipo de música escucho más?",
    options: [
      "Regueton",
      "Cumbias",
      "Emo",
      "Rock"
    ],
    correctAnswer: "Emo"
  },
    {
    question: "¿Que serie podría ver mil veces?",
    options: [
      "Friends",
      "How I Meet Your Mother",
      "Breaking bad",
      "Game Of Thrones"
    ],
    correctAnswer: "How I Meet Your Mother"
  },
    {
    question: "¿Mi fruta favorita?",
    options: [
      "Uvas",
      "Melon",
      "Mangos",
      "Naranjas"
    ],
    correctAnswer: "Naranjas"
  },
    {
    question: "¿Cual de estas comidas preferiría comer?",
    options: [
      "Sopa de coditos",
      "Pizza de la de siempre",
      "Menudo rojo sin grano",
      "Birria"
    ],
    correctAnswer: "Birria"
  },
    {
    question: "¿Cual es mi numero de telefono?",
    options: [
      "6461423279",
      "6461722359",
      "6461425379",
      "6461422379"
    ],
    correctAnswer: "6461422379"
  },
    {
    question: "¿El apodo de mi carrito?",
    options: [
      "El chacalon",
      "El furioso",
      "El poderoso",
      "La carcacha"
    ],
    correctAnswer: "El poderoso"
  },
    {
    question: "¿Que fue lo primero que me gustó de ti en persona?",
    options: [
      "Tu rubor",
      "Tus ojos",
      "Tu cabello",
      "Tu sonrisa"
    ],
    correctAnswer: "Tu rubor"
  },
    {
    question: "¿Quien dijo TE AMO primero?",
    options: [
      "Javier",
      "Damaris",
    ],
    correctAnswer: "Damaris"
  },
    {
    question: "¿Que hicimos en nuestra primera cita?",
    options: [
      "Parque y frikiplaza",
      "Playa y walmart",
      "Carls Jr con las gemelas",
      "Paseo en el malecon de Ensenada"
    ],
    correctAnswer: "Parque y frikiplaza"
  },
    {
    question: "¿Quien casi no mandaba mensajes al inicio?",
    options: [
      "Javier",
      "Damaris",
    ],
    correctAnswer: "Damaris"
  },
    {
    question: "¿Que bebida preferiría tomar?",
    options: [
      "Agua de limon",
      "Limonada mineral",
      "Agua de guanabana",
      "Agua de frutas"
    ],
    correctAnswer: "Limonada mineral"
  },
    {
    question: "¿Que frase digo mucho?",
    options: [
      "Estoy cansado",
      "Tengo hambre",
      "Tengo sueño",
      "Todas las anteriores"
    ],
    correctAnswer: "Todas las anteriores"
  },
    {
    question: "¿Que plan nunca rechazo?",
    options: [
      "Ir a la playa",
      "Ir a comprar tacos",
      "Ir al cine",
      "Ir al mercado"
    ],
    correctAnswer: "Ir a comprar tacos"
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");
const progressElement = document.getElementById("progress");

function updateProgress() {
  const progress = ((currentQuestionIndex) / questions.length) * 100;
  progressElement.style.width = progress + "%";
}

function displayQuestion() {
  answered = false;
  nextButton.style.display = "none";
  resultElement.textContent = "";

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;

    button.addEventListener("click", () => {
      if (!answered) {
        checkAnswer(button, option);
      }
    });

    optionsElement.appendChild(button);
  });

  updateProgress();
}

function checkAnswer(button, selectedOption) {
  answered = true;
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = optionsElement.querySelectorAll("button");

  buttons.forEach(btn => btn.disabled = true);

  if (selectedOption === currentQuestion.correctAnswer) {
    button.classList.add("correct");
    resultElement.textContent = "💜 Respuesta correcta";
    score++;
  } else {
    button.classList.add("wrong");
    resultElement.textContent = "💔 Respuesta incorrecta";

    buttons.forEach(btn => {
      if (btn.textContent === currentQuestion.correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endGame();
  }
});

function endGame() {
  questionElement.textContent = "💜 Fin del juego 💜";
  optionsElement.innerHTML = `
    <p style="color:#fff; font-size:20px;">
      Tu puntuación fue <strong>${score}</strong> de <strong>${questions.length}</strong>
    </p>
    <p style="color:#fff;">
      ${score === questions.length ? "Me conoces demasiadoo 🥹" : "Aún así te amo mimor 😌"}
    </p>
  `;
  nextButton.style.display = "none";
  updateProgress();
}

displayQuestion();

