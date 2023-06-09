         //Assignment-45-48 EVENTS 



 //Q-1 Show an alert box on click on a link.

 //document.write("<h3>Task-1</h3>");

 function showAlert() {
        alert("Welcome ! To Our Mobile Website");
    }

 //Q-2 Display some Mobile images in browser. On click on an image Show the message in alert to user.

//document.write("<h3>Task-2</h3>");

function showAlert(message) {
        alert(message);
    }

 //Q-3 Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.



 function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}


 //Q-4 Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.


function changePicture() {
  var image = document.getElementById("image");
  image.src = "https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/08/Types-of-Light-Bulbs-H-28-08-1024x640.jpg";
}

function resetPicture() {
  var image = document.getElementById("image");
  image.src = "https://www.callhoover.com/wp-content/uploads/2021/10/Exploding-light-bulb.jpg";
}
 
 


 //Q-5 Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

 

 var counter = 0;
function increaseCounter() {
    counter++;
    updateCounter();
}
function decreaseCounter() {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
}
function updateCounter() {
    var counterElement = document.getElementById("counter");
    counterElement.innerHTML = counter;
}