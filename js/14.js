
document.write('<br>' + '<br>')
var qual = ('Qualification:' + '<br>').bold()
document.write(qual )
var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
var i;
for (i = 0; i < qualification.length; i++) {
    document.write((i + 1) + ') ' + qualification[i] + "<br>")
}

// Q8)

var w =('Name: Score: Percentage:' ).bold()
document.write(w + "<br>")
var names = ["sania", "ayesha", "fatima"]
var Score =('score:'+ '<br>').bold()
var obtainedscores = [ 320, 230, 480]
var totalmarks1 = 500
var percentagearray
for (i = 0; i < 3; i++) {
    document.write("Score of " + names[i] + " is " + obtainedscores[i] + ". Percentage: " + (obtainedscores[i] / totalmarks1 * 100) + "%" + "<br>" +"<br>")
}

 //q9
 document.write(' color do you want to add' + '<br>')
var color = ['Red', 'Green', 'Blue']
document.write(color + "<br>" )
var a = prompt('What color do you want to add to the beginning?')
color.unshift(a);
document.write(color + "<br>" )
var b = prompt('What color do you want to add to the end?')
color.push(b)
document.write(color + "<br>" )
color.unshift('Pink', 'Orange');
document.write(color + "<br>" )
color.shift(0);
document.write(color + "<br>" )
color.pop()
document.write(color + "<br>" )
var d = prompt('What color do you want to add?')
var e = prompt('Give the position of color: ')
var f = parseInt(e)
color.splice(f, 0, d)
document.write(color + "<br>" + "<br>" )
document.write('Color do you want to delete' + '<br>' +'<br>')
var g = prompt('What color do you want to delete?')
var h = prompt('Give the position of color: ')
var i = parseInt(e)
color.slice(i, 0, g)
document.write(color + "<br>")

// Q10)
document.write('Score of Students:' + '<br>')
var std_score = [320, 230, 480, 120]
document.write('Scores of Students: ' + std_score + "<br>")
var sort_score = std_score.sort()
document.write('Ordered Scores of Students:' + '<br>').bold()
document.write('Ordered Scores of Students: ' + sort_score + '<br>')

// Q11)
document.write( '<br>')
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
document.write('Cities List: ' + '<br>' + cities + '<br>')
var sel_cities = cities.slice(1, 4)
document.write( '<br>')
document.write('Selected Cities: ' + '<br>' + sel_cities + "<br>")

// Q12)
var arr = ['This ', ' is ', ' my ', 'cat'];
document.write('Array: ' + '<br>' + arr + "<br>");
var join = arr.join(' ');
document.write('String: ' + '<br>' + join + "<br>");

// Q13)
var a = [];
var i;
for (i = 0; i < 4; i++) {
    a.push(prompt("Enter Devices:"));
}
for (i = 0; i < 4; i++) {
    document.write('Out: ' + '<br>' + a[i] + "<br>");
}

// Q14)
var a = [];
var i;
for (i = 0; i < 4; i++) {
    a.push(prompt("Enter Devices:"));
}
for (i = a.length - 1; i >= 0; i--) {
    document.write('Out: ' + '<br>' + a[i] + "<br>");
}

