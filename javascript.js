// Global Variables

var crystal = {
    blue:
    {
        name: "Blue" ,
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0 
    },
    red: 
    {
        name: "Red",
        value: 0 
    },
    orange:
    {
        name: "Orange",
        value: 0
    }
};
// Scores
var currentScore = 0;
var targetScore  = 0;
// W & L 
var winCount     = 0;
var lossCount    = 0;

// Functions
// Helper Function for random numbers
var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Start
// function startGame(){}
var startGame = function() {
    // Reset Current Score
    currentScore = 0;
    
    // Set a new Target Score (between 10-300)
    targetScore = getRandom(10, 300);
    

    // Set  different values for the crystals (1-34)
    crystal.blue.value =   getRandom(1, 32);
    crystal.orange.value = getRandom(1, 32);
    crystal.red.value =    getRandom(1, 32);
    crystal.green.value =  getRandom(1, 32);
    
    // Change the Html to reflect all of these Changes

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    //Testing CONSOLE
    console.log("Target score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Orange: " + crystal.orange.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value);
} 

// Responds
var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

    // Change HTML
    $("#yourScore").html(currentScore);

    // call checkWin
    checkWin();

    // TEST
    console.log("Your Score: " + currentScore);

}

// Check if User WON OR LOST
var checkWin = function() {
    // check if current score is larger than target
    if(currentScore > targetScore) {
        alert("sorry, you lost!");
        console.log("you lost");

        // Add to losses
        lossCount++;
        $("#loseCount").html(lossCount);


        // Restart 
       startGame();

    }
    
    else if (currentScore === targetScore) {
        alert("YEEEI YOU WON");
        console.log("YOU WIN");

        //  Add to wins
        winCount++;
        $("#winCount").html(winCount);


        // Restart
        startGame(); 
    }

}

// Main Process
// Runs the game first Time
startGame();

$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#orange").click(function() {
    addValues(crystal.orange);
});
$("#red").click(function() {
    addValues(crystal.red);
});
$("#green").click(function() {
    addValues(crystal.green);
});


