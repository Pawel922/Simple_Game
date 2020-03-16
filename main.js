$(function () {

    var randomNum = generateRandomNum();
    console.log(randomNum);

    $("form").on("submit", function (e) {
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

});