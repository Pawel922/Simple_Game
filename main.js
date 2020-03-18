$(function () {

    var randomNum = generateRandomNum();
    console.log(randomNum);

    $("#numbers").on("submit", function (e) {
        e.preventDefault();
        var inputs = $(".user_answer");
        for(var i = 0; i < inputs.length; i++) {
            var numValueOfInput = parseInt(inputs[i].value);
            if(numValueOfInput === randomNum[i]){
                inputs[i].style.background = "green";
            } else {
                inputs[i].style.background = "red";
            }
        }
    });

    function generateRandomNum() {
        var randomNum = [];
        for(var i = 0; i < 4; i++) {
            randomNum.push(Math.floor(Math.random() * 10));
        }
        return randomNum;
    }

    function checkEvenOrOdd() {
        if(convertToNum() % 2 === 0){
            console.log("Even number");
        } else {
            console.log("Odd number");
        }
    }

    function checkIfDividedByThree() {
        if(convertToNum() % 3 === 0){
            console.log("Divided by 3");
        } else {
            console.log("Not divided by 3");
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

    checkIfDividedByThree();
    checkEvenOrOdd();

});