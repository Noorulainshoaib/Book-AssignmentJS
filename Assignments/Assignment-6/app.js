  //Assignment-6 MATH EXPRESSIONS

  //Q-1 Write a program to take a number in a variable, do ther equired arithmetic to display the following result in your browser
  document.write("<h3>Task-1</h3>");
  var a=10;
  document.write('Result: <br>The value of a is: '+ a);
  document.write('<br>----------------------<br>');
  document.write('<br>The value of ++a is: '+ ++a);
  document.write('<br>Now the value of a is: '+ a);
  
  document.write('<br> <br> The value of a++ is: '+ a++);
  document.write('<br> Now the value of a is: '+ a);
  
  document.write('<br><br> The value of --a is: '+ --a);
  document.write('<br> Now the value of a is: '+ a);
  
  document.write('<br><br>The value of a--'+ a--);
  document.write('<br>Now the value of a is: '+ a);

  //Q-2 What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--

document.write("<h3>Task-2</h3>");
var a=2, b=1;
document.write('<br>a is: '+ a);
document.write('<br>b is: '+ b);
var result = --a - --b + ++b + b--;
document.write('<br>result is: '+ result +'<br><br>');


//Q-3 Write a program that takes input a name from user & greet the user.
document.write("<h3>Task-3</h3>");
var inputname= prompt("Enter your name");
alert("Have A Wonderful Day !"+ inputname);

//4.

//Q-5  Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 
//should be displayed by default.

document.write("<h3>Task-4-5</h3>");
var inputNum= prompt("Enter a number");
var inputNum= +inputNum;
for(i=1;i<11;i++){
    multi=i*inputNum;
    document.write(inputNum +'x'+ i+'='+multi+'<br>');
}


//Q-6 Take
//a) Take three subjects name from user and store them in 3 different variables.

document.write("<h3>Task-6</h3>");

var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

//b) Total marks for each subject is 100, store it in another variable.

var totalMarks = 100;

//c) Take obtained marks for first subject from user and stored it in different variable.

var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));

//d) Take obtained marks for remaining 2 subjects from user and store them in variables.

var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));

//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td>Total</td><td>" + (3 * totalMarks) + "</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td>Percentage</td><td colspan='2'>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");