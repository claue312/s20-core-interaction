// // total height of time section
// 	var times = document.getElementById("times")
// 	var timesTotalHeight = times.offsetHeight;
// 	// var delay = times.keyframes.timesTotalHeight;
	
// 	setInterval(function(){
// 		var myDate = new Date;
// 		var hoursInSeconds = myDate.getHours()*60*60;
// 		var minutesInSeconds = myDate.getMinutes()*60;
// 		var seconds = myDate.getSeconds() + minutesInSeconds + hoursInSeconds;

// //time is sped up x10 
// 		var percentage = seconds;
// 		console.log(percentage)
		

// 		times.style.height =  Math.round(timesTotalHeight * percentage) + "px";

// 	}, 1000)


let times = document.getElementById("times")

// Delay time loading so it can run time check function first
setTimeout(function() {
  times.style.opacity = '1';
}, 1000);

// Round time to see what quarter hour we are nearest
let roundTime = (hours, minutes, minutesToRound) => {

  // Convert hours and minutes to minutes
  time = (hours * 60) + minutes;
  let rounded = Math.round(time / minutesToRound) * minutesToRound;

  let roundedHours = Math.floor(rounded / 60)
  let roundedMinutes = rounded % 60

  return (roundedHours + ':' + roundedMinutes)
}

// Checks time, changes 'times' position
let changeTime = () => {
  let d = new Date(),
    hours = d.getHours(),
    minutes = d.getMinutes();

  // Round time to 15 minutes using function above
  let roundedTime = roundTime(hours, minutes, 15)

  // Find element that matches the current time
  let currentTime = document.querySelectorAll("[data-time='" + roundedTime + "']")[0]

  if (!!currentTime) {
    // Get position of current time element
    let topPos = currentTime.offsetTop

    // Set position of times element from above position
    times.style.transform = "translateY(-" + topPos + "px)";
  }
}

// Run above on page load
changeTime();
// Create interval to only run every 10 seconds
setInterval(changeTime, 10000);