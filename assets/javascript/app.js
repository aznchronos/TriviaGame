var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 0;
var time = 0;
var timer = 0;

$("#startGame").on("click", function(event){
    $("#startGame").hide();
});

//Set 30 second timer to function;
function timer() {
    time = setInterval(thirty, 1000);
    function thiry() {
        if(timer === 0) {
            clearInterval(time);
            questionTimer();
        } else if (timer > 0) {
            timer--;
        }
    }
}
