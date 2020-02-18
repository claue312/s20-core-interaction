// comments!

// comment

// Variables

// Strings


var greeting = 'hello';
	greeting = greeting + ' hows it goin';

// numbers

var week = -4.2;
week = week*2;
week = week/2;
week = week + 2;
week = week * (2+6);
week = week -1;

var weeklyGreeting = greeting + " " + week;

console.log(greeting, week, weeklyGreeting);

var time = 44;
var output = time + "rem"; // 44rem

// '4' !==4

// Booleans

var open = false;
var closed = true;

console.log(open);

// Arrays 
//Array is a list

var myArray = ['apples', 'oranges', 'pears', 4];

console.log(myArray[1]);

// Objects

var myObject = {
	code: "fun",
	class: "even more fun",

};

console.log (myObject.class);


/* Conditionals */ 

var smallNumber = 50;
	name = 'Erin';
	hairColor = 'Brown';


// == is an approx. equal sign
// === absolutely equal
// > and >= 
// < and <= 
// !== 
// !== absolute not equal to
// && (and) can be used to combine conditions
// || (or)

// if(smallNumber === 50 || !== 'Erin'){

// 	if(name === 'Erin'){
// 		name = name + " " + 'McGee';

// }

// 	console.log(name)



// }else if(hairColor === 'Brown'){

// 	console.log(hairColor)


// }else{
// 	console.log(hairColor, name)
// }

/* DOM Selection */

// Document Selection Model

var loft = document.getElementByID("#tribeca-loft .window .window:nth-of-type(3)");

var firstWindow = document.querySelector(".window");
var allWindows = document.querySelectorAll(".window");

console.log(firstWindow);
console.log(allWindows);


/* Dom Manipulation */

// ad or remove a class

if(loft.classList.add("night")){
	loft.classList.remove("night");

}else{
	loft.classList.add("night");
}

/* cssc: 
#tribeca-loft{
	

} */


loft.style.borderTop = "solid 1rem pink";

setTimeout(function(){
	// anything in here happens after 1 second:
	loft.style.borderTop = "solid 1rem red";

}, 1000);


var roofHeight = 1;


setInterval(function(){

	loft.style.borderTop = "solid " + "1rem red";

	roofHeight = roofHeight + 1;

}, 1000)













