// create variables for game
var position = 0;
var correctAnswer = 0;
var trivia;
var trivia_status;
var choices;
var choiceA;
var choiceB;
var choiceC;



// create a multimentional array of ..questions [index:0] along with the Choice A[index:1], Choice B [index:2], Choice C [index:3] and answer [index:4] for game
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
        if(position >= questions.length){
          trivia_question.innerHTML = "<h2> You got "+correctAnswer+" of "+ questions.length+" questions correct!</h2>";
          triviaReturn("trivia_progress").innerHTML= "Final Score!";
          position = 0;
          correctAnswer = 0;
          return false;

        }

        triviaReturn("trivia_progress").innerHTML = "Question " +(position+1)+" of "+questions.length;
        question = questions[position][0];
        choiceA = questions[position][1];
        choiceB = questions[position][2];
        choiceC = questions[position][3];
        trivia_question.innerHTML = "<h3>"+question+"</h3>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'A'> "+choiceA+"<br>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'B'> "+choiceB+"<br>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'C'> "+choiceC+"<br>";
        trivia_question.innerHTML += "<button onclick= 'checkAnswer()'> Submit Answer </button>";
        if(position >= question.length){
          trivia_question.innerHTML = "<h2> You got "+correctAnswer+" of "+question.length+"question correct!</h2>"};



};

function checkAnswer(){
  choices = document.getElementsByName('choices');
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == questions[position][4]){
    correctAnswer++;
  }
  position++;
  formulateQuestion();
};


// timer properties

var timeLeft = 20;
var elem = document.getElementById('trivia_timer');
var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft === 0) {
    trivia_question.innerHTML = "<h2> You got "+correctAnswer+" of "+ questions.length+" questions correct!</h2>";
    triviaReturn("trivia_progress").innerHTML= "Final Score!";
    position = 0;
    return false;
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
};

function stop() {
 clearInterval(intervalId);
};



window.addEventListener("load", formulateQuestion, false)
