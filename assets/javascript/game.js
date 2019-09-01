//Global Variables
var randNum = 0;
var score = 0;
var mAndm1 = 0;
var mAndm2 = 0;
var mAndm3 = 0;
var mAndm4 = 0;
var wins = 0;
var losses = 0;

//Start game
function startGame() {
    //random number
    randNum = Math.floor(Math.random() * 102) + 12;
    score = 0;
    //random numbers for buttons
    mAndm1 = Math.floor(Math.random() * 9) + 1;
    mAndm2 = Math.floor(Math.random() * 9) + 1;
    mAndm3 = Math.floor(Math.random() * 9) + 1;
    mAndm4 = Math.floor(Math.random() * 9) + 1;
    //update numbers on site
    updateSite();
}

//checks if user wins or losses
function checkStatus() {
    $("#status").text("");
    //if the score is equal to the randNumb they win
    if(score === randNum) {
        won();
        //display that they won
        $("#status").text("You Won! :)");
        //if the score is greater than the randNum they've overshot and lost
    } else if (score > randNum) {
        lost();
        //display they have lost
        $("#status").text("You Lost! :(");
    }
    updateSite();
}

function won() {
    wins++;
    startGame();
}

function lost() {
    losses++;
    startGame();
}

//All 4 functions add the mAndm button's values to the score and 
//calls the checkStatus function to handle the new score

function checkmAndm1() {
    score += mAndm1;
    checkStatus();
}

function checkmAndm2() {
    score += mAndm2;
    checkStatus();
}

function checkmAndm3() {
    score += mAndm3;
    checkStatus();
}

function checkmAndm4() {
    score += mAndm4;
    checkStatus();
}

function updateSite() {
    $("#randomNum").text(randNum);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#total").text(score);
}

