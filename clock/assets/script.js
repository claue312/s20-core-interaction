    let timerId;

    function update() {
      let clock = document.getElementById('clock');
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      clock.children[0].innerHTML = hours;

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      let seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
      timerId = setInterval(update, 1000);
      update(); // <--  start right now, don't wait 1 second till the first setInterval works
    }

    function clockStop() {
      clearInterval(timerId);
    }

    clockStart();



	window.onload = function() {
var lineHeight = document.querySelector(".times p").clientHeight;
var viewHeight = window.innerHeight;
var slider = document.querySelector(".times");
var time = (slider.offsetHeight * 2.0 + viewHeight * 2) / 200.0; // 500px / sec

slider.style.animationDuration = time + "s";
}

<!-- 

	// <style>

	// 	#container{
	// 		height: 100px;
	// 		width: 98vw;
	// 		overflow: hidden;
	// 	}

	// 	#times{
	// 		position: relative;
	// 		width: 98vw;
	// 		height: 100%;/**/-
	// 	}


	// </style>


	// <div id="container">
	// <div id="times">
	// 		<p></p>
	// <p></p>
	// 	<p></p>
	// 	<p></p>
	// 	<p></p>
	// 	<p></p>
	// 	<p></p>
	// </div>

	// </div>onclick


 -->




// at midnight = begin scrolling <times> up 
// 'time' changes every 15 minutes or 90000 milliseconds
// 