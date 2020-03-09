// total height of time section
	var times = document.getElementById("times")
	// var progress = document.getElementById("progress") //tried this for fun //
	var body = document.getElementsByTagName('body')[0]

	var timesTotalHeight = times.offsetHeight;
	
	setInterval(function(){
		var myDate = new Date;
		var hoursInSeconds = myDate.getHours()*60*60;
		var minutesInSeconds = myDate.getMinutes()*60;
		var seconds = myDate.getSeconds() + minutesInSeconds + hoursInSeconds;

//time is sped up x10 
		var percentage = seconds/86400 * 10;
		console.log(percentage)

//body.style.marginBottom = Math.round(timesTotalHeight*percentage) + "px"; ? 
body.style.marginBottom = Math.round(timesTotalHeight*percentage) + "px";
	// progress.style.height = Math.round(timesTotalHeight * percentage) + "px";


	}, 1000)

