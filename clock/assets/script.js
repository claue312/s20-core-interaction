
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