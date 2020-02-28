/* comments
	- february 14
	- core lab
 */

// this is also a comment

// Variables

// strings

var greeting = 'hello!';
greeting = greeting + ' how are you doing?';

// numbers

var week = -4.2;

week = week * 2;
week = week / 2;
week = week + 2;
week = week * (2 + 6);
week = week - 1;
var weeklyGreeting = greeting + " " + week;

console.log(greeting, week, weeklyGreeting);

var time = 44;
var output = time + "rem"; // 44rem

// '4' !== 4

// booleans

var open = false;
var closed = true;

console.log(open);

// arrays
// array is a list:
var myArray = ['apples', 'oranges', 'pears', 4];

console.log(myArray[1]);

// objects
// objects are collections:
var myObject = {
	code : "fun",
	class : "even more fun",
	list : ["string", "another", "string"]
};

console.log(myObject.class);

/* Conditionals */

var smallNumber = 50,
	name = "Lukas",
	hairColor = "Blonde";

// == is an approx. equal sign
// === absolutely equal
// > and >=
// < and <=
// != approximate not equal to
// !== absolute not equal to

// && (and) can be used to combine conditions
// || (or) either condition can be true

if(smallNumber === 50 || name !== 'Lukas'){
	
	if(name === 'Lukas'){
		name = name + ' Eigler-Harding';
	}

	console.log(name)

}else if(hairColor === 'Blonde'){

	console.log(hairColor)

}else{
	// default
	console.log(hairColor, name)
}



/* DOM Selection */

// Document Object Model

var loft = document.getElementById("tribeca-loft");
console.log(loft)

var firstWindow = document.querySelector("#tribeca-loft .window:nth-of-type(3)");
var allWindows = document.querySelectorAll(".window");

console.log(firstWindow);
console.log(allWindows);


/* DOM Manipulation */

// add or remove a class

/*

	check if the loft has the class night

	if the loft has the class night: take it away

	if the loft doesnt have the class night: add it

*/

if(loft.classList.contains("night")){
	loft.classList.remove("night");
}else{
	loft.classList.add("night");
}


//inline styles:
loft.style.borderTop = "solid 1rem pink";

/*
css:
#tribeca-loft{
	border-top: ;
}

*/


setTimeout(function(){
	// anything in here happens after 1 second:
	loft.style.borderTop = "solid 1rem red";

}, 1000);


var roofHeight = 1;

setInterval(function(){

	loft.style.borderTop = "solid " + roofHeight + "rem red";

	roofHeight = roofHeight + 1;

}, 1000)









