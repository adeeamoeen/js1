// Chapter # 1:-
// Assignment # 1:-

// Q1)
alert("Assalam-o-alikum!")

// Q2)
alert("Error! Please enter a valid password.")

// Q3)
alert("Welcome to JS Land...\nHappy Coding!")

// Q4)
alert("Welcome to JS Land...")
alert("Happy Coding!")

// Q5)
console.log("Hello...I can run JS through my web browser's console")





// Chapter # 2:-
// Assignment # 2:-

// Q1)
var username

// Q2)
var myName = ("Adeea Moeen")

// Q3)
var message = ("Hello World")
alert(message)

// Q4)
var name = ("Adeea")
var age = ("20 years old")
var certification = ("Certified Mobile Application Development")
alert(name)
alert(age)
alert(certification)

// Q5)
var a = ("PIZZA")
alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// Q6)
var email = ("adeeakarachipakistan@gmail.com")
alert("My email address is " + email)

// Q7)
var book = ("A smarter way to learn JavaScript")
alert("I am trying to learn from the Book " + book)

// Q8)
document.write( " <h2>Yah! I can write HTML content through JavaScript</h2>" + "<br>")

// Q9)
var pattern = ("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬")
alert(pattern)
document.write(pattern)





// Chapter # 3:-
// Assignment # 3:-

// Q1)
var age = (20)
alert("I am " + age + " years old")

// Q2)
var track = (14)
alert("You have visited this site " + track + " times.")

// Q3)
var birthYear = (2003)
document.write("<br><br>" + "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number")

// Q4)
var name = ("ayesha").bold()
var product = ("asscessories(s)").bold()
var quantity = ("5").bold()
document.write("<br>" + name + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "<br><br>")





// Chapter # 4:-
// Assignment # 4:-

// Q1)
var a, b, c;

// Q2)
var a, b, c, d, e;      //Legal
// var 1a,? b, !c, "d,-e;  //Illegal

// Q3)
var heading = ("<h1>Rules for naming JS variables</h1>" + "<br>").bold()
document.write(heading)
document.write("<br>" + "<h4>Variable names can only contain, numbers, $ and _. For example $my_1stVariable</h4>")
document.write("<br>" + "<h4>Variables must begin with a letter, $, or _. For example $name, _name or name</h4>")
document.write("<br>" + "<h4>Variable names are case sensitive</h4>")
document.write("<br>" + "<h4>Variable names should not be JS keywords</h4>" + "<br><br>")





// Chapter # 5:-
// Assignment # 5:-

// Q1)
var num1 = 3
var num2 = 5
document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))

// Q2)
var num1 = 3
var num2 = 5
document.write("<br>" + "Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
document.write("<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
document.write("<br>" + "Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
document.write("<br>" + "Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2))

// Q3)
var number
document.write("<br>" + "<br>" + "Value after variable declaration is " + number)
number = 5
document.write("<br>" + "Initial value: " + number)
document.write("<br>" + "Value after increment is: " + ++number)
var number1 = number + 7
document.write("<br>" + "Value after addition is: " + number1)
document.write("<br>" + "Value after decrement is: " + --number1)
document.write("<br>" + "The remainder is: " + number1 % 3)

// Q4)
var cost = 600
var ticket = 5
document.write("<br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + "PKR")

// Q5)
var i
document.write("<br>" + "<br>" + "<h2>Table of 4</h2>" + "<br>")
for (i = 1; i <= 10; i++) {
    document.write("4x" + i + "=" + 4 * i + "<br>")
}

// Q6)
var celsius = 25
document.write("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F")
var fahrenheit = 70
document.write("<br>" + fahrenheit + "°F is " + (fahrenheit - 32) * 5 / 9 + "°C")

// Q7)
document.write("<br>" + "<br>" + "<h2>Shopping Cart</h2>" + "<br>")
var pi1 = 650, pi2 = 100, oi1 = 3, oi2 = 7, sc = 100
document.write("<br>" + "Price of item 1 is " + pi1)
document.write("<br>" + "Ordered quantity of item 1 is " + oi1)
document.write("<br>" + "Price of item 2 is " + pi2)
document.write("<br>" + "Ordered quantity of item 2 is " + oi2)
document.write("<br>" + "Shiping charges " + sc)
document.write("<br>" + "<br>" + "Total cost of your order is " + ((pi1 * oi1) + (pi2 * oi2) + sc))

// Q8)
document.write("<br>" + "<br>" + "<h2>Marks Sheet</h2>" + "<br>")
var marksobtained = 804
var totalmarks = 980
document.write("<br>" + "Total marks " + totalmarks)
document.write("<br>" + "Marks obtained " + marksobtained)
document.write("<br>" + "Percentage: " + (marksobtained / totalmarks * 100) + "%")

// Q9)
document.write("<br>" + "<br>" + "Currency in PKR" + "<br>")
var dollar = 10, saudiriyal = 25
document.write("<br>" + "Total currency in PKR:" + ((dollar * 255) + (saudiriyal * 76.83)))

// Q10)
var integer = 9
document.write("<br>" + "<br>" + (((integer + 5) * 10) / 2))

// Q11)
document.write("<br>" + "<br>" + "<h2>Age Calculator</h2>" + "<br>")
var currentyear = 2023, birthyear = 2003
document.write("<br>" + "Current year: " + currentyear)
document.write("<br>" + "Birth year: " + birthyear)
document.write("<br>" + "Your age is: " + (currentyear - birthYear))

// Q12)
document.write("<br>" + "<br>" + "<h2>The Geometrizer</h2>" + "<br>")
var radius = 20
document.write("<br>" + "Radius of cicle is:" + radius)
document.write("<br>" + "The circumference is:" + (2 * 3.1415926535897932 * radius))
document.write("<br>" + "The area is:" + (3.1415926535897932 * radius * radius))

// Q13)
document.write("<br>" + "<br>" + "<h2>The Lifetime Supply Calculator</h2>" + "<br>")
var snack = ("chocolate chip")
var age = 20, maxage = 80, perday = 3
document.write("<br>" + "Favourite Snack: " + snack)
document.write("<br>" + "Current age: " + age)
document.write("<br>" + "Estimated Maximum Age: " + maxage)
document.write("<br>" + "Amount of snack per day: " + perday)
document.write("<br>" + "You will need " + ((maxage - age) * perday) + " " + snack + " to last you until the ripe old age of " + maxage)





// Chapter # 6-9:-
// Assignment # 6:-

// Q1)
var a = 10
document.write("<br>" + "<br>" + "<h2>Result:</h2>" + "<br>")
document.write("<br>" + "The value of a is: " + a)
document.write("<br>" + "<br>" + "------------------------------" + "<br>")
document.write("<br>" + "The value of ++a is: " + (++a))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of a++ is: " + (a++))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of --a is: " + (--a))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of a-- is: " + (a--))
document.write("<br>" + "Now the value of a is: " + a)

// Q2)
var a = 2, b = 1
var result = --a - --b + ++b + b--
//       3 =  1  -  0  +  1  + 1 
document.write("<br>" + "<br>" + "a is: " + a)
document.write("<br>" + "b is: " + b)
document.write("<br>" + "result is: " + result)

// Q3)
var name1 = prompt("What is your name?")
document.write("<br>" + "<br>" + "Assalam-o-alikum " + name1 + "!" + "<br>")

// Q5)
var tabnum = +prompt("Enter a number: ")
if (tabnum) {
    document.write("<br>" + "Table of " + tabnum + " is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + tabnum + "x" + i + "=" + (tabnum * i));
    }
}
else {
    document.write("<br>" + "<h2>Table of 5 is:-</h2>")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + "5x" + i + "=" + (5 * i));
    }
}
document.write("<br><br>")

