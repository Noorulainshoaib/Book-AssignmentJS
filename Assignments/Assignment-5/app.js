     //Assignment-5 MATH EXPRESSIONS


  //Q-1    Write a program that take two numbers & add them in a 
//new variable. Show the result in your browser
document.write("<h3>Task-1</h3>");
document.write("<h2>Addition </h2>");
var x=prompt("Enter A Number");
var y=prompt("Enter One More Number");
var num1= parseInt(x);
var num2= parseInt(y);
var result=num1+num2;
document.write(" Sum Of " +    x    + " And "  +   y    + " Is " +   result  + "<br>");


//Q-2 Repeat task1 for subtraction, multiplication, division & modulus.
document.write("<h3>Task-2</h3>");
document.write("<h2> Subtraction </h2>");
var a=prompt("Enter A Number");
var b=prompt("Enter One More Number");
var num1= parseInt(a);
var num2= parseInt(b);
var result=num1-num2;
document.write(" Subtraction Of " +    a  + " And "  +   b    + " Is " +   result  + "<br>");


document.write("<h2> Multiplication </h2>");
var num1= parseInt(a);
var num2= parseInt(b);
var result=num1*num2;
document.write(" Multiplication Of " +    a  + " And "  +   b  + " Is " +   result  + "<br>");


document.write("<h2> Division </h2>");
var num1= parseInt(a);
var num2= parseInt(b);
var result=num1/num2;
document.write(" Division Of " +    a   + " And "  +   b  + " Is " +   result  + "<br>");

document.write("<h2> Modulus </h2>");
var num1= parseInt(a);
var num2= parseInt(b);
var result=num1%num2;
document.write(" Modulus Of " +    a   + " And "  +   b  + " Is " +   result  + "<br>");



//Q-3 Do the following using JS Mathematic Expressions
//a. Declare a variable.
document.write("<br>");
document.write("<h3>Task-3</h3>");

var variable;

//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

document.write("Value after variable declaration is " +variable+'<br>');


//c. Initialize the variable with some number.

var value=20;

//d. Show the value of variable in your browser like “Initial value: 5”.

document.write(" Initial value: " +  value +'<br>');

//e. Increment the variable.

var i =3;

//f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write(" Value after increment is " + i +'<br>');

//g. Add 7 to the variable.
 
var variable =x + 7;

//h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write(" Value after addition is: " + x +'<br>');

//i. Decrement the variable.

var d= 13;

//j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("Value after decrement is: " + d +'<br>');

//k. Show the remainder after dividing the variable’s value by 3. 
 var remainder= y % 3; 

//l. Output : “The remainder is : 0”.

document.write("Remainder after dividing by 3: "+ remainder +'<br>')

//Q-4 Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 
//tickets to a movie. Example output:

document.write("<h3> Task-4 </h3>");
var price=600;
var five_ticketPrice=5*600;
document.write(" Total Cost to Buy 5 Tickets To A Movie Is " + five_ticketPrice + "Rs ." + "<br>");

//Q-5 Write a script to display multiplication table of any number in your browser.
document.write("<h3>Task-5</h3>");
document.write('<h4>Table Of 6</h4>');
for(i=1;i<11;i++){
    multi=i*6;
    document.write(6 +"x"+ i+'='+multi+"<br>");
}

//Q-6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”


document.write("<h3>Task-6</h3>");

var celcius= 10;
var fahrenheit= (celcius *9/5)+32;
document.write("10 C is "+fahrenheit+"F"+"<br>");

var C=(fahrenheit-32)*5/9;
document.write(fahrenheit+"F is "+ C + "C" +"<br>");

//Q-7  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store 
//the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.

document.write("<h3>Task-7</h3>");

var pitem_1=345;
var pitem_2=620;
var oquantity_1=10;
var oquantity_2=6;
var shippingcharges=610;
var total_cost= (pitem_1*oquantity_1)+(pitem_2*oquantity_2)+shippingcharges;
document.write("Price Of Item 1 Is "+ pitem_1  +"<br>");
document.write("Quantity Of Item 1 Is "+ oquantity_1 +"<br>");
document.write("Price Of Item 2 Is "+ pitem_2  +"<br>");
document.write("Quantity Of Item 2 Is "+ oquantity_2 + "<br>");
document.write("Shipping Charges "+ shippingcharges + "<br>" );
document.write("Total Amount Is " + total_cost + "<br>");

//Q-8 . Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in 
//your browser

document.write("<h3>Task-8</h3>");

var t_marks=1000;
var o_marks=890;
var percentage= (o_marks/t_marks)*100; 

document.write("Total Marks: " + t_marks +"<br>");
document.write("Obtained Marks: " + o_marks +"<br>");
document.write("Percentage : " + percentage +"<br>");


//Q-9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
//Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h3>Task-9</h3>");
var o_doller=  104.80;
var o_riyal=  28;
var t_currency= (o_doller*10)+(o_riyal*25);
document.write("Total Currency in Pkr : "+ t_currency + "<br>");

//Q-10 Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

document.write("<h3>Task-10</h3>");
var s=610;
document.write(((s+5)*10)/2);

//Q-11 The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.

document.write("<h3>Task-11</h3>");
var c_year=2023;
 

//b. Store their birth year in a variable.

var b_year=prompt("Please Enter Your Birth Year");

//c. Calculate their 2 possible ages based on the stored values.

 var Age= c_year - b_year ;

//Output them to the screen like so: “They are either NN or NN years old”.

document.write('Current Year : 2023<br>Birth Year: '+ b_year +'<br>Your age is: '+ Age );

//Q-12 The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.

document.write("<h3>Task-12</h3>");
var rad= prompt("Enter Radius Of A Circle");
document.write('Radius Of A Circle Is: '+ rad + "<br>" );

//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
var c=2*3.142*rad;
document.write('Circumference Of A Circle Is: '+ c + "<br>");
//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
 
var AreaOfACircle= 3.142*rad*2;
document.write('Area Of A Crircle: '+ AreaOfACircle + "<br>");


//Q-13 The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//a. Store your favorite snack into a variable

document.write("<h3>Task-13</h3>");
var snack="Dairy Milk";
document.write("Favorite Snack is :" + snack + "<br>");

//b. Store your current age into a variable.

var c_age=21;
document.write("Your Cuurent Age is : " + c_age + "<br>" );

//c. Store a maximum age into a variable.

var max_age=65;
document.write("Maximum Age is :" + max_age + "<br>" );

//d. Store an estimated amount per day (as a number).

var amount_perday= 2;
document.write(" Amount Of Snacks Per Day is : " + amount_perday + "<br>" );

//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var yearLeft= max_age-c_age;
var daysLeft= yearLeft*365;
var total_snack= daysLeft*amount_perday;
document.write('You will need'+ total_snack +' '+ snack + 'to last you until the ripe old age of ' + max_age + '.' );