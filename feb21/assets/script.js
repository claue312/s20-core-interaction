console.log("hello!");


var myString = "this is a string";

var myBoolean = true
var myOtherBoolean = false;

var myFloat = 1.234567;
var myInterger = 5; // whole numbers;

var myArray = ["apple", "orange", "pear"];

var myObjects = {
	key: "a value",
	anArray : ["my", "array"],
	aNumber : 22


};

// console.log(myObjects)

var square = document.getElementById("square"); //one specific element, knows its the period

var circle = document.querySelectorAll(".circle"); // newer 

var red = 255;
var green = 0;
var blue = 0;

var towardsBlue = true;

//adding and removing classes 
square.classList.add("circle") 
square.classList.remove("cirle")

// square.style.backgroundColor = "rgb(" + red + "," + green + "," blue + ")";




setInterval(function(){

	square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // template literal

	blue = blue + 40;

	red = red - 40;


	if(towardsBlue == true){
		blue = blue + 40;
		red = red - 40;
	}else{
		blue = blue - 40;
		red = red + 40;
	}
	// if we reach the maximums, switch direction
	if(blue >= 244 && red <= 0){
		towardsBlue = false;
	}else if(red >= 255 && blue <= 0){
		towardsBlue = true;
	}






}, 500) // repetition 


/* NEW SECTION */

var j = 0;

while( j < 10 ){

	//do something
	console.log(i)

	j = j + 1;

}

console.log("circle: ", circle.length)


//for loop // knows to add one each time


for (var i = 0; i < circle.length; i++) {

	circle[i].style.borderWidth = (i + 1)*2 + "px";

}

// innerHTML adds content 

var title = document.querySelector("h1");

console.log(title.innerHTML)

title.innerHTML = "Hiiiiiiiiii everyone";
title.innerHTML += "Hiiiiiiiiii everyone";

title.innerHTML = "wait, " + title.innerHTML;

// insertAdjacentHTML

var container = document.getElementById("container")

container.insertAdjacentHTML('beforeend', `
	<div 
		class="circle">
						</div>`)

setInterval(function){

Math.round(Math.random()*255);

var r = Math.random()*255;
var g = Math.random()*255;
var b = Math.random()*255;


container.insertAdjacentHTML('beforeend', `
	<div class="circle"></div>`)

degrees = degrees + 5;

}, 1000

