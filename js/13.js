// Assignment # 12-13:-

// Q1)
var ch = prompt('Enter any character or number:');
var a = ch.charCodeAt(0);
if ((a >= 48) && (a <= 57)) {
    alert('Input is a number.')
}
else if ((a >= 65) && (a <= 90)) {
    alert('Input is an uppercase letter.')
}
else if ((a >= 97) && (a <= 122)) {
    alert('Input is lowercase letter.')
}
else {
    alert('Invalid input');
}

// Q2)
var int1 = +prompt("Enter first integer to be compared")
var int2 = +prompt("Enter second integer to be compared")
if (int1 > int2) {
    alert(int1 + " is larger than " + int2 )
}
else if (int1 < int2) {
    alert(int2 + " is larger than " + int1 )
}
else if (int1 == int2) {
alert(int1 + " is equal to " + int2 )
}

// Q3)
var integer1 = +prompt("Enter an integer")
if (integer1 > 0) {
    alert(int1 + " is larger than zero")
}
else if (integer1 < 0) {
    alert(int2 + " is smaller than zero" )
}
else if (integer1 == 0) {
    alert(int1 + " is equal to zero")
}

// Q4)
var char = prompt("Enter any character")
if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
    alert("It is a vowel")
}
else {
    alert("It is not a vowel")
}

// Q5)
var corpass = pakistan
var guesspass = prompt("Enter your password" + "<br>")
if (corpass === guesspass) {
    alert("Correct! The password you entered matches the original password" + "<br>")
}
else if (corpass !== guesspass) {
    alert("Incorrect password" + "<br>")
}
else {
    alert("Please enter your password" + "<br>")
}

// Q6)
var greeting, hour = 13
if (hour < 18) {
    greeting = "Good day"
}
else {
    greeting = "Good evening"
}

// Q7)
var time = prompt("Enter time in 2 hour format: ")
if (time >= 0000 && time < 1200) {
    alert("Good Morning!")
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!")
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening!")
}
else if (time >= 2100 && time < 2359) {
    alert("Good Night!")
}


