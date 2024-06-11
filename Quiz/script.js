document.addEventListener("DOMContentLoaded", function() {
    const questions = [
      {
        question: "Question 1: How many languages are represented in the South African national anthem?",
        answers: ["4", "6", "5", "11"],
        correctAnswer: "5"
      },
      {
        question: "Question 2: What is the capital of South Africa?",
        answers: ["Durban", "Pretoria", "Cape Town", "Johannesburg"],
        correctAnswer: "Pretoria"
      },
      {
        question: "Question 3: What is the national animal of South Africa?",
        answers: ["Springbok", "Rhino", "Lion", "Elephant"],
        correctAnswer: "Springbok"
      },
      {
        question: "Question 4: What is the national bird of South Africa?",
        answers: ["King Fisher", "Hadeda", "Blue Crane", "Flamingo"],
        correctAnswer: "Blue Crane"
      },
      {
        question: "Question 5: What is the national flower of South Africa?",
        answers: ["Queen Protea", "Gerbera", "Sunflower", "King Protea"],
        correctAnswer: "King Protea"
      }
    ];
  
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const submitButton = document.getElementById("submit-btn");
  
    let result = 0;
  
    function displayQuestion(questionIndex) {
      const currentQuestion = questions[questionIndex];
      const questionElement = document.createElement("div");
      questionElement.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        <ul>
          ${currentQuestion.answers.map(answer => `<li><input type= "checkbox" value="${answer}">${answer}</li>`).join("")}
        </ul>
      `;
      questionContainer.innerHTML = "";
      questionContainer.appendChild(questionElement);
    }
  
    function evaluateAnswer(questionIndex, selectedAnswer) {
      const currentQuestion = questions[questionIndex];
      if (selectedAnswer === currentQuestion.correctAnswer) {
        result++;
        }
    }
  
    function displayResult() {
      const resultPercentage = (result/questions.length) * 100;
      resultContainer.textContent = `Your result is: ` + resultPercentage.toPrecision(2) + "%";
    }
  
    let currentQuestionIndex = 0;
    displayQuestion(currentQuestionIndex);
  
    submitButton.addEventListener("click", function() {
      const selectedAnswer = document.querySelector("input[type='checkbox']:checked");
      if (selectedAnswer) {
        evaluateAnswer(currentQuestionIndex, selectedAnswer.value);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuestion(currentQuestionIndex);
        } else {
          displayResult();
          questionContainer.innerHTML = "";
          submitButton.disabled = true;
        }
      } else {
        alert("Please select an answer.");
      }
    });
  });
  