
//q3
var i;
for (i = 1; i <= 10; i++) {
    document.write(i + '<br>')}

// Q4)
var num = prompt('Enter a number to show its multiplication table: ');
var len = prompt('Enter length of multiplication table: ');
document.write('Multiplication table of ' + num + '<br>');
document.write('Lenth ' + len + '<br>' + '<br>');
var i;
for (i = 1; i <= len; i++) {
    document.write(num + 'X' + i + '=' + num * i + '<br>');
}
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
var i;
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>')
}
for (i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>')
}


var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var b = prompt('Welcome to ABC Bakery. What do you want to order Sir/Ma' + "'" + 'am');
var i;
for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
        alert(b + 'availabe at index ' + i + ' of our bakery.');
        break;
    }
    else {
        alert('We are Sorry. ' + b + ' is not available at our bakery.')
    }
}
var a = [24, 53, 78, 91, 12];
var i, j;
var f;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[i] > a[j]) {
            f = a[j];
        }
    }
}
document.write('The Smallest number is ' + f+"<br>");




var i;
for (i = 1; i <= 50; i++) 
    document.write(5 * i + ', ');
    var a = [24, 53, 78, 91, 12];

var i, j;
var f;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[i] < a[j]) {
            f = a[j];
        }
    }
}
document.write('The largest number is ' + f+"<br>");

var i;
/*document.write('Counting: ' + '<br>' + '<br>');
for (i = 1; i <= 20; i++) {
    document.write(i + ', ');
}

document.write('Reverse Counting: ' + '<br>' + '<br>');
for (i = 20; i >= 1; i--) {
    document.write(i + ', ');
}

document.write('Even: ' + '<br>' + '<br>');
for (i = 0; i <= 20; i + 2) {
    document.write(i + ', ');
}

document.write('Odd: ' + '<br>' + '<br>');
for (i = 1; i < 20; i + 2) {
    document.write(i + ', ');
}

document.write('Series:' + '<br>' + '<br>');
for (i = 2; i <= 20; i + 2) {
    document.write(i + 'k, ');
}*/