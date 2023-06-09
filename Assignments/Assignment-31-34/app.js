     //Assignment-31-34 DATE METHODS

//Q-1  Write a program that displays current date and time in your browser.

document.write("<h3>Task-1</h3>");

var date = new Date();
var month = date.getMonth();
console.log(month);


//Q-2 Write a program that alerts the current month in words. 
//For example December

document.write("<h3>Task-2</h3>");


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const ndate = new Date();
let mname = month[ndate.getMonth()];

alert( "Current Month Is : " + mname);

//Q-3 Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show 
//Sun.
document.write("<h3>Task-3</h3>");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date();
let day = weekday[date.getDay()];
alert( "Today  Is : " + day);


//Q-4 . Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today

document.write("<h3>Task-4</h3>");

var currentDate = new Date();
var dayIndex = currentDate.getDay();
if (dayIndex === 6 || dayIndex === 0) {
    document.write("It's Fun day");

}
alert("It's Fun day");

//Q-5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

document.write("<h3>Task-5</h3>");

var currentDate = new Date();
var nedate = currentDate.getDate();
if (nedate < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

//Q-6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like 
//to represent the Date object

document.write("<h3>Task-6</h3>");

var cuuentDate = new Date();
var millisecondsSince1970 = cuuentDate.getTime();
var minutesSince1970 = Math.floor( millisecondsSince1970/ (1000 * 60));
document.write("Current Date  : " + currentDate );
document.write(" <br> Elapsed milliseconds  Since January  1, 1970 : " + millisecondsSince1970 );
document.write(" <br> Elapsed minutes  Since January  1, 1970 : " +  minutesSince1970  );

//Q-7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

document.write("<h3>Task-7</h3>");

var currentTime = new Date();
var hour = currentTime.getHours();
if (hour > 12) {
  alert("It's PM");
} else {
  alert("It's AM");
}

//Q-8 Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named 
//laterDate.

document.write("<h3>Task-8</h3>");

const laterDate= new Date(2020, 11, 31);
console.log(laterDate);

//Q-9 Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015


document.write("<h3>Task-9</h3>");

var startingDate = new Date(2015, 5, 18);
var currentDate = new Date();
var timeDiff = currentDate.getTime() - startingDate.getTime();
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
alert( daysPassed);

//Q-10 Write a program that displays in your browser the seconds that elapsed between the reference date and the 
//beginning of 2015

document.write("<h3>Task-10</h3>");

var referenceDate = new Date("January 1, 1970");
var beginningOf2015 = new Date("January 1, 2015");
var timeDiff = (beginningOf2015.getTime() - referenceDate.getTime()) / 1000;
document.write("On Reference Date : " + beginningOf2015 + "," + "<br>" +timeDiff + " Seconds Had Passed Since Beginning Of 2015");

//Q-11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and 
//finally display the date object in your browser.

document.write("<h3>Task-11</h3>");

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Date and Time " + currentDate);

//Q-12 Write a program that creates a date object and show the 
//date in an alert box that is reset to 100 years back?

document.write("<h3>Task-12</h3>");

var cDate = new Date();
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);

alert(cDate + " <br> 100 Year Back Is : " + currentDate);

//Q-13 Write a program to ask the user about his age. Calculate and show his birth year in your browser

document.write("<h3>Task-13</h3>");

var age = prompt(" Your Age Please?");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your Age Is  " + age + ".");
document.write("Your birth year is " + birthYear + ".");



//Q-14 Write a program to generate your K-Electric bill in yourbrowser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
document.write("<h3>Task-14</h3>");


//a. Customer Name

var cName= prompt("Enter Customer Name.");

//b. Current Month 

var cMonth=prompt("Enter Month Name.");

//c. Number of units
 var numberOfUnits= parseFloat(prompt("Enter Number Of Units."));
//d. Charges per unit

var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
//e. Net Amount Payable (within Due Date)

var netAmountPayable = numberOfUnits * chargesPerUnit;
//f. Late Payment Surcharge
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

//g. Gross Amount Payable (after Due Date)
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

//Where,
//Net Amount Payable (within Due Date) = Number of units * Charges per unit
//& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
document.write("<h2>K-Electric Bill</h2>");
document.write("<br>  <b> Customer Name: " +"<b>" + cName );
document.write("<br> Month: " +"<b>" + cMonth );
document.write("<br>Number of Units: " +"<b>"  + numberOfUnits);
document.write("<br>Charges per Unit: "+"<b>"  + chargesPerUnit  + "<br>");
document.write(" <br> <br> Net Amount Payable (within Due Date): "+"<b>"  + netAmountPayable );
document.write("<br>Late Payment Surcharge: " +"<b>"  + latePaymentSurcharge );
document.write("<br>Gross Amount Payable (after Due Date): " +"<b>" + grossAmountPayable);