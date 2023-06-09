       //Assignment-13-15 

//Q-1-2 Declare an empty array using JS literal notation to store student names in future

document.write("<h3>Task-1-2</h3>");

let firstArr = [];
let secondArr = ["Ahmed", "Bilal"];

//Q-3 Declare and initialize a strings array.

document.write("<h3>Task-3</h3>");

var x =["Ahmed", "Abdullah" ,"Bilal"];

//Q-4 Declare and initialize a numbers array.

document.write("<h3>Task-4</h3>");

var n=[6 ,10 ];

//Q-5 Declare and initialize a boolean array.

document.write("<h3>Task-5</h3>");

var b=[true, false, true, false];

//Q-6 Declare and initialize a mixed array.

document.write("<h3>Task-6</h3>");

var mixedArray = [1, "Ahmed",  true];

//Q-7 Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like

document.write("<h3>Task-7</h3>");

var education=[' SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD']
document.write("<h2>Qualifications:</h2>");
for (var i = 0; i < education.length; i++) {
  document.write((i + 1) + ") " + education[i] + "<br>");
}

//Q-8 Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

document.write("<h3>Task-8 </h3>");

var studentNames = ["Ahmed", "Bilal", "Saad"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  document.write("Score Of " + studentNames[i] + " Is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
}

//Q-9 Initialize an array with color names. Display the arrayelements in your browser.

document.write("<h3>Task-9 </h3>");

var colors = ["Yellow", "Purple", "Pink", "Green", "Peach"];
console.log(colors);


//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.

var nColor = prompt("Enter A Color To Add To The Beginning Of The Array");
colors.unshift(nColor);
console.log(colors);


//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the 
//updated array in your browser.
var nColor = prompt("Enter A Color To Add To The End Of The Array:");
colors.push(nColor);
console.log(colors);

//c. Add two more color to the beginning of the array. Display the updated array in your browser.

colors.unshift("Red", "Blue", "Orange");
console.log(colors)

//d. Delete the first color in the array. Display the updatedarray in your browser.

colors.shift();
console.log(colors);


//e. Delete the last color in the array. Display the updatedarray in your browser.

colors.pop();
console.log(colors);

//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.


var index = parseInt(prompt("Enter An Index To Add A Color:"));
var nColor = prompt("Enter A Color Name:");
colors.splice(index, 0, nColor);
console.log(colors);

//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
//remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your browser.

var index = parseInt(prompt("Enter An Index To Delete Colors:"));
var count = parseInt(prompt("Enter How Many Colors To Delete:"));
colors.splice(index, count);
console.log(colors);


//Q-10 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method

document.write("<h3>Task-10</h3>");



var studentScores =[320 , 280 , 480 , 900];
document.write("Scores Of Students : " , studentScores + "<br>" );
studentScores.sort();
document.write("Order Of Scores Of Student: " , studentScores)

//Q-11 Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

document.write("<h3>Task-11</h3>");


let cities= [ "Paris" , "Karachi" , "Islamabad" , "Lahore" , "Istanbul" ]
let selectedCities = cities.slice(0, 3); 
console.log(selectedCities);
document.write("Cities List : <br>" + cities );
document.write("<br> Selected Cities List : <br>" + selectedCities);


//Q-12 Write a program to create a single string from the below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

document.write("<h3>Task-12</h3>");
var array = ["This ", " is ", " my ", " cat"];
var str = array.join(""); 
console.log(str);


document.write("Array : <br>" + array );
document.write("<br> String : <br>" + str);

//Q-13Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
document.write("<h3>Task-13</h3>");



var array =["Ahmed", "Abdullah", "Bilal", "Shaheer"];
var str = array.join(""); 
console.log(str);


document.write("Names : <br>" + array );

//Q-14 Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In  First Out

document.write("<h3>Task-14</h3>");

arr = [1, 2, 3, 4];
arr.reverse();
arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
console.log(arr1);
console.log(arr);
document.write("Numbers : <br>" + arr1);
document.write("<br> Reverse : <br>" + arr );


//Q-5 Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your 
//browser using document.write() method

document.write("<h3>Task-15</h3>");

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select id='phoneList'>");
for (var i = 0; i < phones.length; i++) {
  document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");