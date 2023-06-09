    //Assignment-26-30 Maths Method


    //Q-1 Write a program that takes a positive integer from user & display the following in your browser.
    document.write("<h3>Task-1</h3>");

    var  positiveInt = prompt("Enter A Positive Integer:");

//a. number

var number = parseInt(positiveInt);

//b. round off value of the number

var roundValue = Math.round(positiveInt);

//c. floor value of the number

var floorValue = Math.floor(positiveInt);

//d. ceil value of the number

var ceilValue = Math.ceil(positiveInt);

document.write("Number : " + number + "<br>");
document.write("<br> Round Value : " + roundValue + "<br>");
document.write(" <br>Floor Value : " + floorValue + "<br>");
document.write(" <br> Ceil Value : " + ceilValue + "<br>");


//Q-2 Write a program that takes a negative floating point number from user & display the following in your browser.

document.write("<h3>Task-2</h3>");
var negativeInt = prompt("Enter A Negative Floating-Point Number:");

//a. number

var number = parseFloat(negativeInt);

//b. round off value of the number

var roundedValue = Math.round(negativeInt);

//c. floor value of the number

var floorValue = Math.floor(negativeInt);

//d. ceil value of the number

var ceilValue = Math.ceil(negativeInt);

document.write("<br> Number: " + number + "<br>");
document.write("<br> Rounded Value: " + roundedValue + "<br>");
document.write("<br> Floor Value: " + floorValue + "<br>");
document.write("<br> Ceil Value: " + ceilValue + "<br>");

//Q-3. Write a program that displays the absolute value of a number.E.g. absolute value of -4 is 4 & absolute value of 5 is 5

document.write("<h3>Task-3</h3>");

var usernumb = prompt("Enter a number:");
var number = parseFloat(usernumb);
var absoluteValue = Math.abs(number);
document.write("Absolute Value  " + number + " is " + absoluteValue);

//Q-4 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:


document.write("<h3>Task-4</h3>");

var x= Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 10 + 1);
document.write("Random Dice Value Is: " + x + "<br>");
document.write("Random Dice Value Is: " + y);


//Q-5 Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your
//browser

document.write("<h3>Task-5</h3>");

var prob1 = Math.floor(Math.random() * 2) +1;

var prob2 = Math.floor(Math.random() * 2) +1;

if( prob1 === prob2){
   document.write('2 Random Coin Value : Tail' + '<br>' );
}else{
   document.write('1 Random Coin Value : Head ');
 }


 //Q-6 . Write a program that shows a random number between 1 and 100 in your browser

 document.write("<h3>Task-6</h3>");

 var x = Math.floor((Math.random() * 100) + 1);
 document.write("Random Number Between 1 to 100: " + x );

 //Q-7 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
//a. 50
//b. 50kgs
//c. 50.2kgs
//d. 50.2kilograms
 
 document.write("<h3>Task-7</h3>");

 var userInput = prompt("Enter Your Weight:");
var weight = parseFloat(userInput);
document.write("The Weight Of User Is: " + weight + " kilograms");

//Q-8  Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret 
//number, congratulate the user

document.write("<h3>Task-8</h3>");

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt("Guess The Secret Number Between 1 to 10:");
var userGuess = parseInt(userInput);
if (userGuess === secretNumber) {
  document.write("Bingo! You Guess It!.");
} else {
  document.write("Sorry, Your Guess Is Incorrect. Better Luck Next Time ");
}