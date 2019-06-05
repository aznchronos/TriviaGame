var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 0;
var time = 0;
var timer = 30;

var questions = [
    "Question 1", "Question 2"
];

var answers = [
    ["Answer1", "Answer2", "Answer3", "Answer4"]
    ["Answer1", "Answer2", "Answer3", "Answer4"]
];

var correctAnswers = [
    "Answer2",
    "Answer3"
];

//To hide the start button
$("#startGame").on("click", function(event){
    $("#startGame").hide();
    //timer();
    generatePage();
});

//Set 30 second timer to function;
function timer() {
    time = setInterval(thirty, 1000);
    function thirty() {
        if(timer === 0) {
            clearInterval(time);
            questionTimer();
        }
        if (timer > 0) {
            timer--;
        }
        $("#timer").html(timer);
        alert("Test");
    }
}

function generatePage(){
    console.log(counter);
    gamePage = "<h1 id='timer' class='text-center'>Time Remaining: <span id='timer'>" +
        timer + "</span></h1><h3 class='text-center'>" + questions[counter] +
        "</h3><h3 class='answer'>1. " + answers[counter][0] +
        "</h3><h3 class='answer'>2. " + answers[counter][1] +
        "</h3><h3 class='answer'>3. " + answers[counter][2] +
        "</h3><h3 class='answer'>4. " + answers[counter][3] +
        "</h3>";
    $(".gameID").html(gameHTML);
    console.log("Test2" + counter);

};
// $("body").on("click", "#answer", function(event){

// });