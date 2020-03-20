// Automatic Slideshow - change image every 5 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); //秒數設定 毫秒, 1000毫秒 = 1秒
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace("w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
// var login = document.getElementById('mbLogin');     //會員登入變數
var modal = document.getElementById("ticketModal"); //票券訂購變數

window.onclick = function(event) {
  // if (event.target == login) { //如果是會員登入視窗
  //   login.style.display = "none";
  // }
  if (event.target == modal) {
    //如果是票券訂購視窗
    modal.style.display = "none";
  }
};