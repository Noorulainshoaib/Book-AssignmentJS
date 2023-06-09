     //Assignment-35-48 FUNCTION

 //Q-1 Write a function that displays current date & time in your browser
 
 document.write("<h3>Task-1</h3>");


  function current() {
    var nDate = new Date();
    var time = nDate.toLocaleString(); // returns the date and time both.
    document.write(time);
  }
  

  
  //Q-2 Write a function that takes first & last name and then it greets the user using his full name
  document.write("<h3>Task-2</h3>");

  function greet() {
    var firstName = prompt("Enter Your First Name");
    var lastName = prompt("Enter Your Last Name");
    document.write("Welcome ! To Our Website  " + firstName  + lastName + '<br>');
  }
  greet();

  //Q-3  Write a function that adds two numbers (input by user) and returns the sum of two numbers

  document.write("<h3>Task-3</h3>");
  document.write("<h4>Sum Of Two Numbers</h4>");


  var input1 = prompt("Enter num 1");
  var input2 = prompt("Enter num 2");
  add(input1, input2);
  

  function add(x, y) {
    var x,y;
    var sum = parseInt(x) + parseInt(y);
    document.write("The Sum Of The Two Numbers Is :  " + sum);
  }

  //Q-4 Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and 
 //show the desired result in your browser



 function multiplyBy()
 {
         num1 = document.getElementById("firstNumber").value;
         num2 = document.getElementById("secondNumber").value;
         document.getElementById("result").innerHTML = num1 * num2;
 }
 
 function divideBy() 
 { 
         num1 = document.getElementById("firstNumber").value;
         num2 = document.getElementById("secondNumber").value;
 document.getElementById("result").innerHTML = num1 / num2;

 }

function additionBy()
 {
         num1 = document.getElementById("firstNumber").value;
         num2 = document.getElementById("secondNumber").value;
         document.getElementById("result").innerHTML = num1 + num2;
 }
 
 //Q-5  Write a function that squares its argument.

 document.write("<h3>Task-5</h3>");

 var squareNum = prompt("Enter The Value For Squaring");
 var answer = square(squareNum);
 document.write("The Square Of The Value Is : " + answer);

 function square(y) {
    return y * y;
  }
 

 //Q-6 Write a function that computes factorial of a number

 document.write("<h3>Task-6</h3>");

 function computeFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  var factorial = 1;
  for (var i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}


 //Q-7 Write a function that take start and end number as inputs & display counting in your browser
 document.write("<h3>Task-7</h3>");

 var a = prompt("Enter Starting Number Of The Counting");
 var z = prompt("Enter The End Of The Counting");
for (i = a; i < z; i++) {
  document.write(i + "<br>");
}

 //Q-8 Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
//Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare()

document.write("<h3>Task-8</h3>");

var base = prompt("Enter The Value For Base");
var perpendicular = prompt("Enter The Value For Perpendicular");

function hypotenuse(base, perpendicular) {
  function calculateSquare(side) {
    return side * side;
  }
  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  document.write("Hypotenuse : " + hypotenuse);
}
hypotenuse(base, perpendicular);

//Q-9 Write a function that calculates the area of a rectangle.
 //A = width * height
 //Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables

document.write("<h3>Task-9</h3>");

var height = prompt("Enter Height Of Rectangle.");
var width = prompt("Enter Width Of A Rectangle.");
function area(height, width) {
 return height * width;
        }
function perimeter(height, width) {
    return 2*( height + width);
  }
        
document.writeln('The Area Of A Rectangle is : ' + area(height, width));         
 document.writeln('<br> The Parameter Of A Rectangle is : ' + perimeter(height, width));


 //Q-10 Write a JavaScript function that checks whether a passed string is palindrome or not?

 document.write("<h3>Task-10</h3>");

 function check_Palindrome(str_entry){
  
     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;

    if(cstr==="") {
      console.log("Nothing found!");
      return false;
    }

    if ((cstr.length) % 2 === 0) {
      ccount = (cstr.length) / 2;
    } else {

      if (cstr.length === 1) {
        console.log("Entry is a palindrome.");
        return true;
      } else {

        ccount = (cstr.length - 1) / 2;
      }
    }
 
    for (var x = 0; x < ccount; x++) {
  
      if (cstr[x] != cstr.slice(-1-x)[0]) {
        console.log("Entry is not a palindrome.");
        return false;
      }
    }
    console.log("The entry is a palindrome.");
    return true;
  }

 //Q-11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'

document.write("<h3>Task-11</h3>");

function capitalizeFirstLetter(str) {
  var words = str.split(' '); // Split the string into an array of words
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    words[i] = capitalizedWord;
  }
  var result = words.join(' ');
  return result;
}
var input = prompt("Enter A Sentence:");
document.write( "Example String  :" + input + "<br>")
var output = capitalizeFirstLetter(input);
document.write("Expected Output:" + output);


//Q-12 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//EXAMPLE STRING : 'Web Development Tutorial'
//EXPECTED OUTPUT : 'Development'

document.write("<h3>Task-12</h3>");

function findLongestWord(str) {
  var words = str.split(' ');
  var longestWord = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
var input = prompt("Enter a sentence:");
document.write(" Example String  :" + input + "<br>")
var output = findLongestWord(input);
document.write("Expected Output:", output);


//Q-13 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
//Sample arguments : 'JSResourceS.com', 'o'

document.write("<h3>Task-13</h3>");

function countLetterOccurrences(str, letter) {
  var count = 0;
  var lowerStr = str.toLowerCase();
  var lowerLetter = letter.toLowerCase();
  for (var i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerLetter) {
      count++;
    }
  }
  return count;
}
var inputString = 'JSResourceS.com';
var inputLetter = 'o';
var occurrenceCount = countLetterOccurrences(inputString, inputLetter);
document.write("Number of occurrences:" + occurrenceCount);

//Q-14 Create 2 functions that calculate properties of a circle, using the definitions here.Create a function called calcCircumference:
//• Pass the radius to the function.
//• Calculate the circumference based on the radius, and output "The circumference is NN".
//Create a function called calcArea:
//• Pass the radius to the function.
//• Calculate the area based on the radius, and output "The area is NN".
//Circumference of circle = 2πr
//Area of circle = πr2

document.write("<h3>Task-14</h3>");

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The Circumference Is " + circumference);
}
function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("The Area Is " + area);
}
var radius = parseFloat(prompt("Enter The Radius Of The Circle:"));
calcCircumference(radius);
calcArea(radius);



