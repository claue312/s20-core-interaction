// if (stemHeight > 10 || ){

// console.log(overflow)
// } 




var stem = document.getElementById("stem1");

// var stem = document.querySelectorAll("#stem1, #stem2, #stem3, #stem4, #stem5");
console.log(stem)

// stem.style.borderBottom = "solid " + stemHeight + 5 + "vw white";

var stemHeight = 1;

setInterval(function(){

	stem.style.borderTop = "solid " + stemHeight + "vw brown";
	stemHeight = stemHeight + 1;
	

}, 500)














// /* DOM Selection */

// // Document Selection Model

// var plant = document.getElementById("stem");
// console.log(plant)

// /* Dom Manipulation */

// // ad or remove a class

// // if(plant.classList.add("night")){
// // 	plant.classList.remove("night");

// // }else{
// // 	plant.classList.add("night");
// // }

// //inline styles:

// /* cssc: 
// #tribeca-loft{
	

// } */

// // plant.style.color = "black";

// // setTimeout(function(){
// // 	// anything in here happens after 1 second:

// // 	plant.style.color = "blue";

// // }, 1000);


// var grow = .1;


// setInterval(function(){

// 	plant.style.backgroundColor = "solid " + grow + ".8vw white";
// 	// plant.style.width = "5px"
// 	plant.style.border = "solid " + grow + "1px #00793E";

// 	grow = grow + .1;

// }, 1000)

// setInterval(function(){

// 	plant.style.borderBottom = "solid " + grow + "rem #268D5B";
// 	plant.style.width = "5px";

// 	grow = grow + .1;

// }, 1000)
















