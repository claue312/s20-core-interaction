
var container = document.getElementById('container')

	for (var i = 0; i < 50; i++) {

	    var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		var sizes = Math.round(Math.random()*10);
		var deg = Math.round(Math.random()*90);

		container.insertAdjacentHTML(`afterend`,`

		<div 
		class= "mommy1"
		style="
			background-color: rgb( ${g}, ${b}, ${r});
			color= rgb( ${r}, ${g}, ${b});
			font-size=${sizes}rem;
			transform: rotate( ${deg})deg;
			border-radius: ${deg}vw;"
		></div>
		<div 
		// id="kid1"
		style="
			background-color: rgb( ${r}, ${g}, ${b});
			transform: rotate( ${deg})deg;
			height:${sizes}rem;
			"
		></div>
		<div 
		class="mommy2"
		style="
			background-color: rgb( ${r}, ${g}, ${b});
			width:${sizes}rem;
			height:${sizes}rem;
			transform: rotate( ${deg})deg;
			"
		></div>
		<div 
		id="kid2"
		style="
			background-color: rgb( ${r}, ${g}, ${b});
			width:${sizes}rem;
			height:${sizes}rem;
			transform: rotate( ${deg})deg;
			"
		></div>

		`) /*you can write html in the template literals*/
}




