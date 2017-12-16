// create questions for game

var questionsAnswersPair = [
      // start of question 1
  {
    question: "In the Lion King, where does Mufasa and his family live?",
    answers: {
      a: "Lion Locks"
      b: "Prime Sock"
      c: "Pride Rock"
      d: "Where Lions Walk"
    },
    correctAnswer: "c"
  },
    // start of question 2
  {
    question: "What was the name of the dragon (god wanna be) in Mulan and who provided his voice?",
    answers: {
      a: "Muhu by Tony Goldwyn"
      b: "Mushu by Eddie Murphy"
      c: "Wahzu by Tom Hanks"
      d: "Numu by Tim Allen"
    },
    correctAnswer: "b"
  },
    // start of question 3
    {
      question: "During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
      answers: {
        a: "Gold"
        b: "Yellow"
        c: "Sparkle"
        d: "Bright Glow"
      },
      correctAnswer: "a"
]

function buildQuiz(){
    // place to store HTML output
    var output = [];

    // for each question...
    questionsAnswersPair.forEach(
      (currentQuestion, questionNumber) {
        // store list of answer choices
        var answers = [];

        // for each available answer
        for(letters in currentQuestion.answers){

          // add HTML radio button
          answers.push(
            <label>
            <input type="radio" name="question$(questionNumber)" value
            <
          )
        }

      }
    )
}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
