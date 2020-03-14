$(function () {



    $("form").on("submit", function (e) {
        e.preventDefault();
        var userAnswer = [];
        var inputs = $(".user_answer");
        for(var i = 0; i < inputs.length; i++){
            userAnswer.push(inputs[i].value);
        }
        console.log(userAnswer);
    });

    function generateRandomNum() {
        var randomNum = [];
        for(var i = 0; i < 4; i++){
            randomNum.push(Math.floor(Math.random() * 10));
        }
        return randomNum;
    }

    console.log(generateRandomNum())
});