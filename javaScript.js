const dayEl = document.getElementById("showDay");
const hourEl = document.getElementById("showHours");
const minuteEl = document.getElementById("showMinutes");
const secondEl = document.getElementById("showSeconds");

const year = "1 Jan 2022";

	function countDate(){
		const newYear = new Date(year);
		const thisDate = new Date();
		
		const miSeconds = (newYear-thisDate)/1000;
		
		const days = Math.floor(miSeconds / 3600/ 24);
		const hours = Math.floor(miSeconds / 3600 )%24;
		const minutes = Math.floor(miSeconds / 60 )%60;
		const seconds = Math.floor (miSeconds) %60;
		
		dayEl.innerHTML = days;
		hourEl.innerHTML = hours;
		minuteEl.innerHTML = minutes;
		secondEl.innerHTML = seconds;
	}
	
	countDate();
	
	setInterval(countDate, 1000); 