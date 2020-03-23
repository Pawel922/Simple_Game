$(function () {

    var randomNum = generateRandomNum();
    console.log(randomNum);

    $("#numbers").on("submit", function (e) {
        e.preventDefault();
        var inputs = $(".user_answer");
        for(var i = 0; i < inputs.length; i++){
            var numValueOfInput = parseInt(inputs[i].value);
            if(numValueOfInput === randomNum[i]){
                inputs[i].style.background = "green";
            } else {
                inputs[i].style.background = "red";
            }
        }
    });

    $("#hints").on("submit", function (e) {
        e.preventDefault();
        var inputs = $(".user_selection");
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].checked){
                switch (inputs[i].getAttribute("value")){
                    case "odd-or-even":
                        checkEvenOrOdd();
                        break;
                    case "divided-by-three":
                        checkIfDividedByThree();
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
        for(var i = 0; i < 4; i++){
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

    function checkIfDividedByThree(){
        if(convertToNum() % 3 === 0){
            showHint("Divided by 3")
        } else {
            showHint("Not divided by 3");
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

    function checkIfDividedByFour(){
        if(convertToNum() % 4 === 0){
            showHint("Divided by 4")
        } else {
            showHint("Not divided by 4");
        }
    }

    function showHint(content) {
        var paragraphElement = $("<p>");
        var divisionElement = $("#hint_content");
        console.log(divisionElement);
        paragraphElement.text(content);
        divisionElement.append(paragraphElement);
    }
});