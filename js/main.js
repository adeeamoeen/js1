// Prompt the user for a positive integer
var userInput = prompt("Enter a positive integer:");

// Parse the user input as an integer
var number = parseInt(userInput);

// Calculate the round off value
var roundValue = Math.round(number);

// Calculate the floor value
var floorValue = Math.floor(number);

// Calculate the ceiling value
var ceilValue = Math.ceil(number);

// Display the results in the browser
document.write("<h3>Number: " + number + "</h3>");
document.write("<h3>Round Off Value: " + roundValue + "</h3>");
document.write("<h3>Floor Value: " + floorValue + "</h3>");
document.write("<h3>Ceil Value: " + ceilValue + "</h3>");

// Prompt the user for a negative integer
var number = prompt("Enter a negative integer:");

// Convert the input to a number
number = parseInt(number);

// Display the number
document.write("Number: " + number + "<br>");

// Calculate the round off value
var roundOff = Math.round(number);
document.write("Round off value: " + roundOff + "<br>");

// Calculate the floor value
var floorValue = Math.floor(number);
document.write("Floor value: " + floorValue + "<br>");

// Calculate the ceil value
var ceilValue = Math.ceil(number);
document.write("Ceil value: " + ceilValue + "<br>");

// Prompt the user for a number
var number = prompt("Enter a number:");

// Convert the input to a number
number = parseFloat(number);

// Calculate the absolute value
var absoluteValue = Math.abs(number);

// Display the result
document.write("The absolute value of " + number + " is " + absoluteValue);


// Generate a random number between 1 and 6 (inclusive) to simulate a dice roll
var diceValue = Math.floor(Math.random() * 6) + 1;

// Display the dice value in the browser
document.write("The value of the dice is: " + diceValue);

// Generate a random number between 0 and 1 to simulate a coin toss
var coinValue = Math.random();

// Determine the value of the coin (heads or tails)
var coinResult = coinValue < 0.5 ? "Heads" : "Tails";

// Display the coin value in the browser
document.write("The value of the coin is: " + coinResult);

function tossCoin() {
    // Generate a random number between 0 and 1
    var randomValue = Math.random();
    
    // Set the coin value based on the random number
    var coinValue;
    if (randomValue < 0.5) {
      coinValue = "Heads";
    } else {
      coinValue = "Tails";
    }
    
    // Display the coin value in the browser
    document.getElementById("coinValue").innerHTML = "Coin value: " + coinValue;}

    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
      
    // Display the random number in the browser
    document.getElementById("randomNumber").innerHTML = "Random number: " + randomNumber;