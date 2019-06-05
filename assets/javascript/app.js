$(document).ready(function(){
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var counter = 0;
    var time = 0;
    var timer = 5;
    var imagesWin = ["assets/images/1win.gif", "assets/images/2win.gif", "assets/images/3win.gif", "assets/images/4win.gif", "assets/images/5win.gif"];
    var imagesLose = ["assets/images/1lose.gif", "assets/images/2lose.gif", "assets/images/3lose.gif", "assets/images/4lose.gif", "assets/images/5lose.gif"];

    var questions = [
        "Question 1", "Question 2"
    ];

    var answersArray = [
        ["Answer1", "Answer2", "Answer3", "Answer4"],
        ["Answer1", "Answer2", "Answer3", "Answer4"]
    ];

    var correctAnswersArray = [
        "Answer2",
        "Answer3"
    ];

    //To hide the start button
    $("#startGame").on("click", function (event) {
        $("#startGame").hide();
        clock();
        generatePage();
    });

    //Set 30 second timer to function;
    function clock() {
        time = setInterval(thirty, 1000);
        function thirty() {
            if (timer === 0) {
                clearInterval(time);
                questionTimeout();
            }
            if (timer > 0) {
                timer--;
                console.log(timer);
            }
            $(".timer").text(timer);
        }
    }

    function generatePage() {
        gamePage = "<h1 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
            timer + "</span></h1><h3 class='text-center'>" + questions[counter] +
            "</h3><div class='container qButtons'><button class='answer'>1. " + answersArray[counter][0] +
            "</button><button class='answer'>2. " + answersArray[counter][1] +
            "</button><button class='answer'>3. " + answersArray[counter][2] +
            "</button><button class='answer'>4. " + answersArray[counter][3] +
            "</button></div>";
        $(".gameID").html(gamePage);
    };

    function correctAnswer(){
        console.log("correct")
    }

    function questionTimeout() {
        unanswered++;
        gamePage = "<h1 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
            timer + "</span></h1><h3 class='text-center'>Times Up!</h3>" +
            "<h3>The answer is: " + correctAnswersArray[counter] + "</h3>" +
            "<div id='image-holder' class='text-center'>" + "</div>"
            displayLoseImage();
            $(".gameID").html(gamePage);
            // setTimeout(wait, 5000);
    };
    
    function displayLoseImage() {
        $("#image-holder").html("<img src=" + imagesLose[counter] + " width='400px'>");
    }
    function displayWinImage() {
        $("#image-holder").html("<img src=" + imagesWin[counter] + " width='400px'>");
    }

    // $("body").on("click", "#answer", function(event){

    // });
});