$(function () {
    function generateRandomNum() {
        var randomNum = "";
        for(var i = 0; i < 4; i++){
            randomNum += Math.floor(Math.random() * 10);
        }
    }
    generateRandomNum();
});