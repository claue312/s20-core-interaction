var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}