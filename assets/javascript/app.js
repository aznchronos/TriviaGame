$(document).ready(function(){
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var counter = 0;
    var time = 0;
    var timer = 30;
    var started = false;
    var imagesWin = ["assets/images/1win.gif", "assets/images/2win.gif", "assets/images/3win.gif", "assets/images/4win.gif", "assets/images/5win.gif"];
    var imagesLose = ["assets/images/1lose.gif", "assets/images/2lose.gif", "assets/images/3lose.gif", "assets/images/4lose.gif", "assets/images/5lose.gif"];

    var questions = ["What sport is Michael Jordan best known for?",
        "What movie is Don Travolta's meme from?",
        "Which animal has at least 10 different vocalizations that are used to communicate?",
        "What is the Chemical Compound for Salt?",
        "What Animal is commonly associated to have 7 lives?"];
    var correctAnswersArray = ["Basketball", "Pulp Fiction", "Baboons", "NaCl", "Cats"];
    var answersArray = [
        ["Football", "Skiiball", "Baseball", "Basketball"],
        ["Grease", "Pulp Fiction", "Face/Off", "Staying Alive"],
        ["Chimpanzees", "Baboons", "Parrots", "Lemurs"],
        ["NaCl", "NaBr", "NaOH", "NaBrO"],
        ["Toucans", "Dogs", "Cats", "Horses"]
    ];

    //To hide the start button
    $("#startGame").on("click", function (event) {
        $("#startGame").hide();
        $("#image-holder").hide();
        started = true;
        generatePage();
    });

    $("body").on("click", ".answer", function(event){
        // Attempting to push value of button into choice array
        choice = $(this).text();
        if (choice === correctAnswersArray[counter]){
            correctAnswer();
            // console.log("Correct count: " + correct)

        } else if(choice !== correctAnswersArray[counter]) {
            incorrectAnswer();
            // console.log("Incorrect count: " + incorrect)
        }
    });

    //Set 30 second timer to function;
    function clock() {
        timer = 30;
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
            "</h3><div class='container qButtons'><button class='answer'>" + answersArray[counter][0] +
            "</button><button class='answer'>" + answersArray[counter][1] +
            "</button><button class='answer'>" + answersArray[counter][2] +
            "</button><button class='answer'>" + answersArray[counter][3] +
            "</button></div>";
        $(".gameID").html(gamePage);
        clock();
    };

    function endGame() {
        gamePage = "<h1 class='text-center'>Thanks for Playing!</h1>" +
            "<h3 class='text-center'>Number Correct: " + correct + "</h3>" +
            "<h3 class='text-center'>Number Incorrect: " + incorrect + "</h3>" +
            "<h3 class='text-center'>Number Unanswered: " + unanswered + "</h3>" +
            "<div class='text-center'><button class='reset'>Reset?</button></div>";
            $(".gameID").html(gamePage);
            clearInterval(time);
            started = false;
            $(".reset").click(function(event){
                correct = 0;
                incorrect = 0;
                unanswered = 0;
                counter = 0;
                timer = 30;
                started = true;
                generatePage();
            });
    }

    function correctAnswer(){
        correct++;
        // console.log("correct answer: " + correctAnswersArray[counter]);
        gamePage = "<h1 class='text-center'>You Win!</h1>" +
            "<h3 class='text-center'>The answer is: " + correctAnswersArray[counter] + "</h3>" +
            "<div id='image-holder' class='text-center'></div>"
            $(".gameID").html(gamePage);
            displayWinImage();
            clearInterval(time);
            setTimeout(function(){
                wait();
            }, 5000);
    }

    function incorrectAnswer(){
        incorrect++;
        console.log("correct answer: " + correctAnswersArray[counter]);
        gamePage = "<h1 class='text-center'>You Lose!</h1>" +
            "<h3 class='text-center'>The answer is: " + correctAnswersArray[counter] + "</h3>" +
            "<div id='image-holder' class='text-center'></div>"
            $(".gameID").html(gamePage);
            displayLoseImage();
            clearInterval(time);
            setTimeout(wait, 5000);
    }

    function questionTimeout() {
        unanswered++;
        gamePage = "<h1 class='text-center'>Times Up!</h1>" +
            "<h3 class='text-center'>The answer is: " + correctAnswersArray[counter] + "</h3>" +
            "<div id='image-holder' class='text-center'></div>"
            $(".gameID").html(gamePage);
            displayLoseImage();
            clearInterval(time);
            setTimeout(wait, 5000);
    };
    
    function wait() {
        if(counter < questions.length - 1){
            counter++;
            clearInterval(time);
            timer = 30;
            generatePage();
        } else {
            endGame();
        }
    }
    
    function displayLoseImage() {
        $("#image-holder").html("<img src=" + imagesLose[counter] + " width='400px'>");
        $("#image-holder").show();
    }
    function displayWinImage() {
        $("#image-holder").html("<img src=" + imagesWin[counter] + " width='400px'>");
        $("#image-holder").show();
    }
});