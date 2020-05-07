// Store default values in time of day variables
var wake = 8;
var noon = 12;
var lunch = noon;
var nap = 14;
var evening = 18;
var weeHours = 5;
var partyTime = 21;
var night = 23;
// Store default values for cat pic and message (for testing purposes)
var message = "Code is broken.";
var image = "cat image";	
// Get current time
var today = new Date();
var time = today.getHours();
// Connect to timeEvent and lolcat to manipulate message and cat pic
var timeEventJS = document.getElementById("timeEvent");
var lolcatImage = document.getElementById("lolcat");
// Store value of one second as 1000 for setInterval function
var oneSecond = 1000;
// Set isPartyTime to false
var isPartyTime = false;
// Connect to party button and time selectors
var partyButton = document.getElementById("partyTimeButton");
 
var showCurrentTime = function(){
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

var updateClock = function () {

	if(time == wake){
		message = "Good morning, Sunshine!";
		image = "https://cdn.pixabay.com/photo/2017/04/04/14/29/cat-2201460_1280.jpg";
	}
	else if (time == lunch){
		message = "Lunch time!";
		image = "https://cdn.pixabay.com/photo/2019/01/10/04/24/eyes-3924800_1280.jpg";
	}
	else if (time == nap){
		message = "Nap time!";
		image = "https://cdn.pixabay.com/photo/2016/07/29/09/37/cat-1551783_1280.jpg";
	}
	else if (time < weeHours){
		message = "You're awake at this hour?";
		image = "https://cdn.pixabay.com/photo/2015/11/23/10/39/cat-1058095_1280.jpg";
	}
	else if ((time > weeHours) && (time < noon)){
		message = "I'm going to need more coffee.";
		image = "https://cdn.pixabay.com/photo/2017/08/02/14/59/cat-2571971_1280.jpg";
	}
	else if ((time > noon) && (time < evening)){
		message = "What were we doing?";
		image = "https://cdn.pixabay.com/photo/2018/01/19/15/29/cat-3092650_1280.jpg";
	}
	else if ((time >= evening) && (time < partyTime)){
		message = "Good evening!";
		image = "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg";
	}
	else if (time >= partyTime && time < night){
		message = "IZ PARTEE TIME!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	}
	else{
		message = "Good night!";
		image= "https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089_1280.jpg";
	}

	timeEventJS.innerText = message; 
	lolcatImage.src = image;

	showCurrentTime();
};

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
      partyButton.innerText = "Party Over";
      // color of the button should be "#0A8DAB" (bonus!)
      partyButton.style.backgroundColor = "0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
      partyButton.innerText = "PARTY TIME!";
      // color of the button should be "#222" (bonus!)
      partyButton.style.backgroundColor = "#222";
   }
   updateClock();
};

var wakeUpEvent = function(){
	var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
	wake = wakeUpTimeSelector.value;

};

var lunchEvent = function(){
	var lunchTimeSelector = document.getElementById("lunchTimeSelector");
	lunch = lunchTimeSelector.value;
};

var napEvent = function(){
	var napTimeSelector = document.getElementById("napTimeSelector");
	nap = napTimeSelector.value;
};

updateClock();
partyButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
setInterval(updateClock, oneSecond);


