 //Assignment 9 to 10 USER INPUT & CONDITIONAL STATEMENT

 //Q-1 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
//“Welcome to city of lights”

document.write("<h3> Task-1</h3>");
var city=prompt("Enter The Name OF Your City");
if(city=='Karachi'){
    alert('Welcome To City Of Lights');
 }

 //Q-2 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
//user is female, give the message: Good Morning Ma’am.

document.write("<h3> Task-2</h3>");

var gender= prompt("Enter Your Gender");
if(gender=='male'){
alert("Good Morning Sir");
}
if(gender=='female'){
    alert("Good Morning Ma'am.");
}

//Q-3 Write a program to take input color of road traffic signal from the user & show the message according to this table:
document.write("<h3> Task-3</h3>");

var signalColor=prompt('Enter The Traffic Light Color\nRed\nYellow\nGreen');


if(signalColor=='red'){
    alert("Must Stop");
    }
    if(signalColor=='yellow'){
        alert("Ready To Move");
    }
    if (signalColor=='green'){
        alert("Move Now");
    }

    //Q-4 Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
  
    document.write("<h3> Task-4</h3>");

var fuel=prompt('Enter The Amount Of Remaining Fuel');

if(fuel < '0.25 L'){
    alert("Please Refill The Fuel In Your Car");
    }
 
//Q-5 Run this script, & check whether alert message would be displayed or not. Record the outputs.

document.write("<h3> Task-5</h3>");

//a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//e.
 if (true){
alert("True");
}
if (false){
alert("False");
}
//f. 
if("car" < "cat"){
alert("car is smaller than cat");
}

//Q-6 Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute 
//grade as per following table:
document.write("<h3> Task-6</h3>");

var sub1Marks= prompt("Enter subject 1 Marks");
var sub2Marks=prompt("Enter subject 2 Marks");
var sub3Marks=prompt("Enter subject 3 Marks");

var sub1Marks= parseInt(sub1Marks);
var sub2Marks= parseInt(sub2Marks);
var sub3Marks= parseInt(sub3Marks);
var marks_obt= sub1Marks + sub2Marks + sub3Marks;

var per=(marks_obt/300)*100;

document.write('Total marks : '+ 300);
document.write('<br>Marks obtained : '+ marks_obt );
document.write('<br><br>Percentage : '+ per);

//Show the total marks, marks obtained, percentage, grade &remarks like
if(80>per){
    document.write('<br>Grade:  A-one');
    document.write('<br>Reamrks : Excellent');
}
else
if(70>per){
    document.write('<br>Grade: A');
    document.write('<br>Reamrks : Good');
}
else
if(60>per){
    document.write('<br>Grade:  B');
    document.write('<br>Reamrks : You need to improve');
}
else
if(60<per){
    document.write('<br>Grade:  Fail');
    document.write('<br>Remarks : Sorry');
}

//Q-7 Guess game: Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correctanswer”.
//b. If the guessed number +1 is the secret number, show“Close enough to the correct answer”.
document.write("<h3> Task-7</h3>");
var secretNum=2;

var guessNum=prompt ('Guess The Secret Number Between 1 to 10');

//a. If user guesses the same number, show “Bingo! Correctanswer”.

if (guessNum == secretNum) {
    alert("Bingo! Correctanswer");
}
else

//b. If the guessed number +1 is the secret number, show“Close enough to the correct answer”.
 
if (guessNum == secretNum + 1 || guessNum == secretNum - 1) {
    alert("Close enough to the correct answer");
}

//Q-8 Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3
document.write("<h3> Task-8 </h3>");

var number = parseInt(prompt("Enter A Number  : "));


if (number % 3 === 0) {
alert(number + " is divisible by 3");
} else {
alert(number + " is not divisible by 3");
}

//Q-9 Write a program that checks whether the given input is an even number or an odd number.
document.write("<h3> Task-9</h3>");
var num= prompt ("Enter The Number");
  if(num%2==0)
  
    document.write(num + " is an Even Number");
  else
  
    document.write(num + " is an Odd Number");

  //Q-10  Write a program that takes temperature as input and shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”

document.write("<h3> Task-10</h3>");

//var temperature=prompt("Enter The Temperature");
//if(temperature > 40){
    //alert("It is too hot outside");
    //}
     //else if(temperature > 30 ){
        alert("The Weather today is Normal");
    //}
   // else if (temperature > 20 ){
        alert("Todays Weather is cool");
    //}
    //else if (temperature > 10  ){
        //alert("OMG! Todays weather is so Cool");
    //}

    //Q-11 Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:

    document.write("<h3> Task-11</h3>");
    //a. First number

    var num1 = prompt("Enter num1");
    
    //b. Second number

    var num2 = prompt("Enter num2");



//c. Operation (+, -, *, /, %) 

var sign = prompt("Enter the mathematical expression you want to use\n+\n-\n*\n/\n%");

//Compute & show the calculated result to user.


if (sign == '+') {
    var result = num1 + num2;
    alert(result);
}
else if (sign == '-') {
    var result = num1 - num2;
    alert(result);
}
else if (sign == '*') {
    var result = num1 * num2;
    alert(result);
}
else if (sign == '/') {
    var result = num1 / num2;
    alert(result);
}
else if (sign == '%') {
    var result = num1 % num2;
    alert(result);
}