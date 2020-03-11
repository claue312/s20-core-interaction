
let times = document.getElementById("times")

// Delay
setTimeout(function() {
  times.style.opacity = '1';
}, 1000);

// Round nearest .25 hour
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

  // Round time to 15 minutes using changeTime
  let roundedTime = roundTime(hours, minutes, 15)

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
setInterval(changeTime, 10000);