            //Assignment -21-25 STRING METHODS

//Q-1 Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

document.write("<h3>Task-1</h3>");

var first_Name = prompt("Enter Your First Name");
var last_Name = prompt("Enter Your Last Name");
var fullName = first_Name + " " + last_Name;
alert(" Hello ! Have A Wonderful Day " +  fullName);

//Q-2 Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

document.write("<h3>Task-2</h3>");

var model = prompt("Enter Your Favorite Mobile Phone Model");
var len = model.length;
document.write("My Favorite Phone Is: " + model);
document.write("<br> Length Of String Is: " + len);

//Q-3 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

document.write("<h3>Task-3</h3>");

var word = "Pakistani";
var index = word.indexOf("n");

document.write("String : " + word );
document.write(" <br> Index Of Letter 'n' In  :"  + index);


//Q-4 Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

document.write("<h3>Task-4</h3>");

var str="Hello World";

var lastindex = str.lastIndexOf("l");

document.write("String: " + str + "<br>");
document.write("last String Of 'l' : " + lastindex);


//Q-5 Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

document.write("<h3>Task-5</h3>");

var word = "Pakistani";
var character = word.charAt(3);
document.write("String :" + word)
document.write(" <br> The Character At The Index 3 : " + character);

//Q-6 Repeat Q1 using string concat() method

document.write("<h3>Task-6</h3>");

var firstName = prompt("Enter Your First Name:");
var lastName = prompt("Enter Your Last Name:");
var fullName = firstName.concat(" ", lastName);
document.write("Welcome ! To Our Page " + fullName );

//Q-7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.


document.write("<h3>Task-7</h3>");

var city = "Hyderabad";
var n_Word = city.replace("Hyder", "Islam");
document.write( "City : " + city);
document.write(" <br> After Replacement: " + n_Word);

//Q-8 . Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

document.write("<h3>Task-8</h3>");

var message = "Ali And Sami Are Best Friends. They Play Cricket And Football Together.";
var n_Message = message.replace(/and/g, "&");
document.write("After replacement: " + n_Message);

//Q-9  Write a program that converts a string “472” to a number  472. Display the values & types in your browser.


document.write("<h3>Task-9</h3>");

var str = "472";
var numb = Number(str);
document.write("Value: " + numb + "<br>");
document.write("Type: " + typeof numb  + "<br> <br> ");
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br><br>");

//Q-10 Write a program that takes user input. Convert and show the input in capital letters

document.write("<h3>Task-10</h3>");


var x = prompt("Enter A Letter To Convert In Capital Letter : ");
var c_Letters = x.toUpperCase();
document.write("User Input :  " + x + "<br>" );
document.write("Upper Case : " + c_Letters);

//Q-11 Write a program that takes user input. Convert and show the input in title case.

document.write("<h3>Task-11</h3>");

var y = prompt("Enter A Sentence To Convert In Title Case: ");
var words = y.split(' ');
var titleCase = '';
for (i = 0; i < words.length; i++) {
  var word = words[i];
  var firstLetter = word.charAt(0).toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  var capitalizedWord = firstLetter + restOfWord;
  titleCase += capitalizedWord + ' ';
}
document.write("User Input :  " + y + "<br>" );
document.write("Title Case : " + titleCase);


//Q-12 Write a program that converts the variable num to string.var num = 35.36 ;Remove the dot to display “3536” display in your browse

document.write("<h3>Task-12</h3>");

var number= 35.36;
var result = number.toString().replace(".", "");
document.write("Number : " + number + "<br>");
document.write("Result: " + result);

//Q-13 Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
//For character codes of [@ .
    //Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 6

document.write("<h3>Task-13</h3>");

var username = prompt("Enter Your Name:");
var specialSymbols = ["@", ".", ",", "!"];

function isSpecialSymbol(char) {
  var charCode = char.charCodeAt(0);
  return (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64);
}

var containsSpecialSymbol = false;
for (var i = 0; i < username.length; i++) {
  if (isSpecialSymbol(username[i])) {
    containsSpecialSymbol = true;
    break;
  }
}

if (containsSpecialSymbol) {
  alert("Please enter A Valid Username Without Special Symbols [@ . , !]");
} else {
  alert("Username: " + username);
}

//Q-14 You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given 
//item is found in the list or not.Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:



var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter An Item To Search In The Bakery:");
var userInputLowercase = userInput.toLowerCase();
var isItemFound = false;
for (var i = 0; i < A.length; i++) {
  var currentItem = A[i].toLowerCase();
  if (currentItem === userInputLowercase) {
    isItemFound = true;
    break;
  }
}
if (isItemFound) {
  alert("Item Found In The List!");
} else {
  alert("Item Not Found In The List.");
}

//Q-15 Write a program to take password as an input from user. The password must qualify these requirements

document.write("<h3>Task-15</h3>");

var passward= prompt("Enter A Passward");
//a. It should contain alphabets and numbers

function isletter(character){
  return/[a-zA-Z]/.test(character);
}
//b. It should not start with a number

function isDigit(character){
  return/d/.test(character);
}
//c. It must at least 6 characters long If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII  table at the end of this document.


if (passward.length >=6 && isletter(passward[0]) && isletter(passward) && isDigit(passward) ){

  alert("Passward Is Valid :" + passward);
  }

  else {
   alert("Please Enter A Valid Passward :" + passward);
  }



 //Q-16 Write a program to convert the following string to an array using string split method.
//var university = “University of Karachi”;Display the elements of array in your browser


 document.write("<h3>Task-16</h3>");

 var university = "University Of Karachi";
 var array = university.split(" ");
 document.write("Array elements: " + array);

 //Q-17  Write a program to display the last character of a user input

  document.write("<h3>Task-17</h3>");
 
  var str = prompt("Enter A String:");
  var lastCharacter = str.charAt(str.length - 1);
  document.write(" <b> User Input: " + str);
  document.write(" <br> Last character: " + lastCharacter);

 //Q-18 . You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of 
//occurrences of word “the” in given string

document.write("<h3>Task-18</h3>");

var sentence = ("The Quick Brown Fox Jumps Over The Lazy Dog");
var lowercaseS = sentence.toLowerCase();
var word_Search = "the";
var regex = new RegExp("\\b" + word_Search + "\\b", "g");
var count = (lowercaseS.match(regex) || []).length;
document.write("<b> Text: " + sentence );
document.write( "<br> There Are " + count + " Occurrence(s) Of The Word 'the' ")