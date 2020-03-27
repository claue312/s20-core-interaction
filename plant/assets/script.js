// var stem = document.getElementById();

var stem = document.querySelectorAll("div");

console.log(stem)



var stemHeight = 1;

setInterval(function(){

	stem.style.borderBottom = "solid " + stemHeight + "rem green";
	stemHeight = stemHeight + 1;

}, 500)

