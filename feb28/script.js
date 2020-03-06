var counter = 0;

function timeUnit(output, secondsOrMinutes){
//this is an argument^
	//take it to the current count
	//then add a 0 to the front
	//and replace the current seconds value



	if(output < 10) {
		secondsOrMinutes.innerHTML = "0" + output;
		//"09"
	}else{
		secondsOrMinutes.innerHTML = output;
		//10-60+
	}

}

var hourCounter = 0;
var counter = 0;
var minuteCounter = 0; 
var minutes = document.getElementbyId("minutes")
var seconds = document.getElementbyId("seconds")

function myRepeater(){
	// console.log(counter)
	timeUnit(counter, seconds)
	counter = counter + 1;
	

	if(counter === 60){
		counter = 0;
		minuteCounter = minuteCounter + 1;
		timeUnit(minuteCounter, minutes);
	}

	if(counter === 60){
		var minutes = document.getElementbyId("minutes")
		timeUnit(1, minutes)
	}
}

setInterval(myRepeater, 100)

/*clock*/


function clock(){

	var currentDate = new Date;

	timeUnit(currentDate.getMinutes(), minutes)
	timeUnit(currentDate.getSeconds(), seconds)

}


	setInterval(clock, 1000)

//parenthesis() make the function run immediately
//comma makes you do it when the interval tells you to