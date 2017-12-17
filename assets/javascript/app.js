// create variables for game
var questionNumber = 0;
var correctAnswer = 0;
var indexPosition = 0;
var trivia;
var trivia_status;
var question;
var userSelectedChoice;
var choices;
var choiceA;
var choiceB;
var choiceC;



// create a multimentional array of questions [index:0] along with the Choice A[index:1], Choice B [index:2], Choice C [index:3] and answer [index:4] for game
var questions =[
    //array 0
      ["In the Lion King, where does Mufasa and his family live?","Lion Locs","Prime Sock","Pride Rock","C"],
  //array 1
      ["What was the name of the dragon (god wanna be) in Mulan and who provided his voice?","Muhu by Tony Goldwyn","Mushu by Eddie Murphy","Wahzu by Tom Hanks", "B" ],
  // array 2
      [ "During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?","Gold","Yellow","Sparkle", "A"  ],
  // array 3
      ["Who was the FIRST Disney princess based on a real historical figure?", "Mulan", "Snow White", "Pocahontas", "C"],
  // array 4
      ["Cruella de Vil is the villain in which Disney movie", "101 Dalmations", "Pinocchio", "Lady and the Tramp", "A"],
  // array 5
  ["What is the name of the boy who owns Buzz Lightyear in the movie Toy Story?","Andy", "Zack", "Jack", "A"],
  // array 6
  ["What does Cinderella's fairy godmother turn into a carriage?", "A horse", "A pumpkin", "A star in the sky", "B"]
];

function triviaReturn(x){
  return document.getElementById(x);
};

function formulateQuestion(){
        trivia = triviaReturn("trivia_question");
        triviaReturn("trivia_progress").innerHTML = "Question " +(questionNumber+1)+" of "+questions.length;
        question = questions[indexPosition][0];
        choiceA = questions[indexPosition][1];
        choiceB = questions[indexPosition][2];
        choiceC = questions[indexPosition][3];
        questions[indexPosition][3];
        trivia_question.innerHTML = "<h3>"+question+"</h3>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'A'> "+choiceA+"<br>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'B'> "+choiceB+"<br>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'C'> "+choiceC+"<br>";
        trivia_question.innerHTML += "<button onclick=' checkAnswer()'> Submit Answer </button>";

}

function checkAnswer(){
  userSelectedChoice = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      userSelectedChoice = choices[i].value;
    }
  }
  if (userSelectedChoice == questions[indexPosition][4]){
    correctAnswer++;
  }
  questionNumber++;
  formulateQuestion();

}

window.addEventListener("load", formulateQuestion, false)


//
// var questionsAnswersPair = [
//       // start of question 1
//   {
//     question: "In the Lion King, where does Mufasa and his family live?",
//     answers: {
//       a: "Lion Locks"
//       b: "Prime Sock"
//       c: "Pride Rock"
//       d: "Where Lions Walk"
//     },
//     correctAnswer: "c"
//   },
//     // start of question 2
//   {
//     question: "What was the name of the dragon (god wanna be) in Mulan and who provided his voice?",
//     answers: {
//       a: "Muhu by Tony Goldwyn"
//       b: "Mushu by Eddie Murphy"
//       c: "Wahzu by Tom Hanks"
//       d: "Numu by Tim Allen"
//     },
//     correctAnswer: "b"
//   },
//     // start of question 3
//     {
//       question: "During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
//       answers: {
//         a: "Gold"
//         b: "Yellow"
//         c: "Sparkle"
//         d: "Bright Glow"
//       },
//       correctAnswer: "a"
// ]
//
// function buildQuiz(){
//     // place to store HTML output
//     var output = [];
//
//     // for each question...
//     questionsAnswersPair.forEach(
//       (currentQuestion, questionNumber) {
//         // store list of answer choices
//         var answers = [];
//
//         // for each available answer
//         for(letters in currentQuestion.answers){
//
//           // add HTML radio button
//           answers.push(
//             <label>
//             <input type="radio" name="question$(questionNumber)" value="${letter}">
//             ${letter}:
//             ${currentQuestion.answer[letter]}
//           </label>
//         );}
//
//       }
//     )
// }
//
// function showResults(){}
//
// // display quiz right away
// buildQuiz();
//
// // on submit, show results
// submitButton.addEventListener('click', showResults);
