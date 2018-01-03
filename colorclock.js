'use strict';

function colorClock() {

	/* Time variables */
	
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();	
	
	/* Display clock */
		
	if (seconds < 10) {seconds = '0' + seconds;}
	if (minutes < 10) {minutes = '0' + minutes;}
	if (hours < 10) {hours = '0' + hours;}
	let clockFace = hours +':' + minutes +':' + seconds;
	document.getElementById('clock').innerHTML = clockFace;
  
	setTimeout(function() {colorClock();}, 1000);
	
	var hexColor = '#' + hours + minutes + seconds;  
	document.getElementsByTagName('body')[0].style.background = hexColor;     

	/*Handle clock*/
	
	const secHandle = document.querySelector('#sec-handle');
	const minHandle = document.querySelector('#min-handle');
	const hoursHandle = document.querySelector('#hours-handle');
	
	let secDegrees = (seconds / 60) * 360 + 90;
	secHandle.style.transform = `rotate(${secDegrees}deg)`;
	
	let minDegrees = (minutes / 60) * 360 + 90;
	minHandle.style.transform = `rotate(${minDegrees}deg)`;

	let hoursDegrees = (hours / 12) * 360 + 90;
	hoursHandle.style.transform = `rotate(${hoursDegrees}deg)`;
}

colorClock();
setInterval(colorClock,1000);