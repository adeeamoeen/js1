var city = prompt("What is your city name?")
if (city === "Karachi" || city === "karachi") {
    alert("Welcome to city of lights" )
}
else {
    alert("welcome to "+city)
}


var gender1 = prompt("What is your gender?")
if (gender1 === "Male" || gender1 === "male") {
    alert("Good Morning Sir" )
}
else if (gender1 === "Female" || gender1 === "female") {
    alert("Good Morning Ma’am" )
}

// Q3)
var signalcolor = prompt("Tell the color of traffic signal on road?")
if (signalcolor === "Red" || signalcolor === "red") {
    alert("Stop")
}
else if (signalcolor === "Yellow" || signalcolor === "yellow") {
    alert("Ready to go!")
}
else if (signalcolor === "Green" || signalcolor === "green") {
    alert("go")
}

// Q4)
var fuel = prompt("Remaining fuel in your car in litres")
if (fuel < 1) {
    alert("Please refill the fuel in your car")
}

// Q5)

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");       
}

// b 
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");      
}

// c 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");        
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");      
}

// d 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");       
}

// e
if (true) {
    alert("True");        
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");       
}

// Q6)
var som1 = +prompt("Marks obtained in Subject 1: ")
var stm1 = +prompt("Total marks in Subject 1: ")
var som2 = +prompt("Marks obtained in Subject 2: ")
var stm2 = +prompt("Total marks in Subject 2: ")
var som3 = +prompt("Marks obtained in Subject 3: ")
var stm3 = +prompt("Total marks in Subject 3: ")
var percentage1 = (som1 + som2 + som3) / (stm1 + stm2 + stm3) * 100
document.write("Marks Sheet" + "<br><br>")
document.write("Total marks : " + (stm1 + stm2 + stm3) + "<br>")
document.write("Marks obtained : " + (som1 + som2 + som3) + "<br>")
document.write("Percentage : " + percentage1 + "%" + "<br>")
if (percentage1 < '100' && percentage1 >= '80') {
    document.write("Grade : A-one" + "<br>")
    document.write("Remarks : Excellent" + "<br>")
}
else if (percentage1 < '80' && percentage1 >= '70') {
    document.write("Grade : A" + "<br>")
    document.write("Remarks : Good" + "<br>")
}
else if (percentage1 < '70' && percentage1 >= '60') {
    document.write("Grade : B" + "<br>")
    document.write("Remarks : You need to improve" + "<br>")
}
else if (percentage1 < '60' && percentage1 >= '0') {
    document.write("Grade : Fail" + "<br>")
    document.write("Remarks : Sorry" + "<br>")
}

// Q7)
var secretNumber = 5
var guessSecretNumber = +prompt("Guess the Secret Key")
var guessSecretNumberAddOne = (guessSecretNumber - 1)
if (secretNumber === guessSecretNumber) {
    alert("Bingo! Correct answer")
}
else if (secretNumber === guessSecretNumberAddOne) {
    alert("Close enough to the correct answer")
}

// Q8)
var number2 = +prompt("Enter any number: ")
if (number2 % 3 === 0) {
    alert(number2 + " is divisible by 3")
}
else {
    alert(number2 + " is not divisible by 3" )
}

// Q9)
var number3 = +prompt("Enter any number to check if it is even or odd: ")
if (number3 % 2 === 0) {
    alert(number3 + " is an even number")
}
else {
    alert(number3 + " is an odd number")
}

// Q10)
var temp = prompt("Tell us the temperature")
if (temp > 40) {
    alert("today weather is hot")
}
else if (temp > 30) {
    alert("The Weather is mostly cloudy")
}
else if (temp > 20) {
    alert("Today’s Weather is rainy")
}
else if (temp > 10) {
    alert("OMG! Today’s weather is snowy")
}

// Q11)
var numcal1 = +prompt("Enter first number: ")
var numcal2 = +prompt("Enter second number: ")
var operator = prompt("Enter an operator: ")
if (operator === "+") {
    alert ( numcal1 + numcal2 )
}
if (operator === "-") {
    alert ( numcal1 - numcal2 )
}
if (operator === "*") {
    alert ( numcal1 * numcal2 )
}
if (operator === "/") {
    alert ( numcal1 / numcal2)
}
if (operator === "%") {
    alert( numcal1 % numcal2 )
}





