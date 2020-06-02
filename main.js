$(function () {

    var randomNum = generateRandomNum();
    var trialNum = 6;
    showInfo("You have " + trialNum + " trials!" );
    clearContents();
    showDigits();

    $("#numbers").on("submit", function (e) {
        e.preventDefault();
        var inputs = $(".user_answer");
        var numOfCorrectAnswer = 0;
        for(var i = 0; i < inputs.length; i++){
            var numValueOfInput = parseInt(inputs[i].value);
            if(numValueOfInput === randomNum[i]) {
                numOfCorrectAnswer++;
            }
        }

        trialNum > 0 ? trialNum -- : trialNum = 0;

        if(numOfCorrectAnswer === randomNum.length){
            showInfo("Congratulations! You win!");
            for(var i = 0; i < inputs.length; i++) {
                inputs[i].style.background = "green";
            }
        } else if (trialNum !== 0) {
            var grammarCorrect = trialNum === 1 ? " trial!" : " trials!";
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

    $("#refresh").on("click", function () {
       location.reload(true);
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
            showHint("Even number", 1);
        } else {
            showHint("Odd number", 1);
        }
    }

    function checkIfDividedByFour(){
        if(convertToNum() % 4 === 0){
            showHint("Divided by 4", 2)
        } else {
            showHint("Not divided by 4", 2);
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

    function showHint(content, index) {
        $("#hint_" + index).text(content);
    }

    function clearHints() {
        $("#hint_1").empty();
        $("#hint_2").empty();
    }

    function showInfo(content) {
        var paragraphElement = $("<p>");
        var divisionElement = $("#score");
        divisionElement.empty();
        paragraphElement.text(content);
        divisionElement.append(paragraphElement);
    }

    function showDigits() {
        var tempArray = [];
        for(var i = 0; i < randomNum.length; i++) {
            tempArray[i] = randomNum[i];
        }
        var shuffleArray = shuffle(tempArray);
        var modifiedText = $("#digits p").text() + " " + shuffleArray;
        $("#digits p").text(modifiedText);
    }

    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function clearContents() {
        $(".user_answer").prop('value', 0);
        $("#hints input").prop('checked', false);
    }

});