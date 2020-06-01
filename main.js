$(function () {

    var randomNum = generateRandomNum();
    var trialNum = 6;
    showInfo("You have " + trialNum + " trials" );
    console.log(randomNum);

    $("#numbers").on("submit", function (e) {
        e.preventDefault();
        var inputs = $(".user_answer");
        var numOfCorrectAnswer = 0;
        for(var i = 0; i < inputs.length; i++){
            var numValueOfInput = parseInt(inputs[i].value);
            if(numValueOfInput === randomNum[i]){
                inputs[i].style.background = "green";
                numOfCorrectAnswer ++;
            } else {
                inputs[i].style.background = "red";
            }
        }

        trialNum > 0 ? trialNum -- : trialNum = 0;

        if(numOfCorrectAnswer === randomNum.length){
            showInfo("Congratulations! You win!")
        } else if (trialNum !== 0) {
            var grammarCorrect = trialNum === 1 ? " trial" : " trials";
            showInfo("You have " + trialNum + grammarCorrect);
        } else {
            showInfo("You lost!");

        }
    });

    $("#hints").on("submit", function (e) {
        e.preventDefault();
        clearHints();
        var inputs = $(".user_selection");
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].checked){
                switch (inputs[i].getAttribute("value")){
                    case "odd-or-even":
                        checkEvenOrOdd();
                        break;
                    case "divided-by-four":
                        checkIfDividedByFour();
                        break;
                }
            }
        }
    });

    function generateRandomNum() {
        var randomNum = [];
        for(var i = 0; i < 3; i++){
            randomNum.push(Math.floor(Math.random() * 10));
        }
        return randomNum;
    }

    function checkEvenOrOdd() {
        if(convertToNum() % 2 === 0){
            showHint("Even number");
        } else {
            showHint("Odd number");
        }
    }

    function checkIfDividedByFour(){
        if(convertToNum() % 4 === 0){
            showHint("Divided by 4")
        } else {
            showHint("Not divided by 4");
        }
    }

    function convertToNum(){
        var tempNum = 0;
        var index = randomNum.length - 1;
        for(var i = 0; i < randomNum.length; i++){
            tempNum += randomNum[i] * Math.pow(10, index);
            index --;
        }
        return tempNum;
    }

    function showHint(content) {
        var paragraphElement = $("<p>");
        var divisionElement = $("#hint_content");
        paragraphElement.text(content);
        divisionElement.append(paragraphElement);
    }

    function clearHints() {
        var divisionElement = $("#hint_content");
        divisionElement.empty();
    }

    function showInfo(content) {
        var paragraphElement = $("<p>");
        var divisionElement = $("#score");
        divisionElement.empty();
        paragraphElement.text(content);
        divisionElement.append(paragraphElement);
    }

});