
// example for a function:
function adding(number1, number2){
	console.log(number1 + number2)
}

adding(2,2)
adding(20000, -222)





// the timeUnit function takes in a number and an html element:
function timeUnit(output, ourHtmlElement){
	
	// and replace the current seconds value
	if(output < 10){
		ourHtmlElement.innerHTML = "0" + output;
	}else{
		ourHtmlElement.innerHTML = output;	
	}	
}

// get html elements
var milliseconds = document.getElementById("milliseconds")
var seconds = document.getElementById("seconds")
var minutes = document.getElementById("minutes")
var hours = document.getElementById("hours")
var day = document.getElementById("weekday")
var monthDay = document.getElementById("monthday")

// weekday items
var weekDays = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"]


function weekDay(dayIndex, dayElement){
	dayElement.innerHTML = weekDays[dayIndex] + "day"
}

/* clock function */
function Clock(){

	var currentDate = new Date;

	// each timeUnit calls the timeUnit function from above and 
	// passes a number and html element to set
	timeUnit(currentDate.getMilliseconds(), milliseconds)
	timeUnit(currentDate.getSeconds(), seconds)
	timeUnit(currentDate.getMinutes(), minutes)
	timeUnit(currentDate.getHours(), hours)

	weekDay(currentDate.getDay(), day)
	monthDay.innerHTML = currentDate.getDate()


}

// run the clock function every 10 milliseconds:
setInterval(Clock, 1000)

// run the clock function every second:
// setInterval(Clock, 1000)


// function myWindow(){

// 	window.onload = function() {
// var lineHeight = document.querySelector(".times p").clientHeight;
// var viewHeight = window.innerHeight;
// var slider = document.querySelector(".times");
// var time = (slider.offsetHeight * 100 + viewHeight * 10) / 20000.0; // 500px / sec

// slider.style.animationDuration = time + "s";
// }





var currentDate = new Date ().getHours();
var currentDate = new Date ();
if (currentDate.getMinutes() == 15 || currentDate.getMinutes() == 47) {


  (document.body) 

document.body.style.backgroundColor =  "rebeccapurple";
	 }




//change background color with time:

 // <-- // var currentDate = new Date ().getHours();
// if (currentDate < 23) {


//  (document.body) 


// document.body.style.backgroundColor =  "black";
// 	 }


// var currentDate = new Date ().getHours();
// if (2 >= currentDate && currentDate < 3){
// 	if (document.body) {

// document.body.style.backgroundColor =  "#AA0000";
// 	}} //
-->
