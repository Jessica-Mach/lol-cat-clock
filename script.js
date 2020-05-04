var today = new Date();
var time = today.getHours();
var message = " ";
var weeHours = 2;
var wake = 8;
var morning = wake + 1;
var noon = 12;
var nap = 14;
var evening = 18;
var party = 21;
var night = 23;
var timeEventJS = document.getElementById("timeEvent");
var lolcatImage = document.getElementById("lolcat");
var image = "cat image";
var oneSecond = 1000;

var showCurrentTime = function()
{
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

	if((time >= wake) && (time < morning)){
		message = "Good morning, Sunshine!";
		image = "https://cdn.pixabay.com/photo/2017/04/04/14/29/cat-2201460_1280.jpg";
	}
	else if ((time >= morning) && (time < noon)){
		message = "I'm going to need more coffee.";
		image = "https://cdn.pixabay.com/photo/2017/08/02/14/59/cat-2571971_1280.jpg";
	}
	else if ((time >= noon) && (time < (noon + 1))){
		message = "Lunch time!";
		image = "https://cdn.pixabay.com/photo/2019/01/10/04/24/eyes-3924800_1280.jpg";
	}
	else if ((time >= nap) && (time < (nap + 1))){
		message = "Nap time!";
		image = "https://cdn.pixabay.com/photo/2016/07/29/09/37/cat-1551783_1280.jpg";
	}
	else if ((time > noon) && (time < evening)){
		message = "What were we doing?";
		image = "https://cdn.pixabay.com/photo/2018/01/19/15/29/cat-3092650_1280.jpg";
	}
	else if ((time >= evening) && (time < party)){
		message = "Good evening!";
		image = "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg";
	}
	else if ((time >= party) && (time < night)){
		message = "IZ PARTEE TIME!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	}
	else if ((time >= weeHours) && (time < wake))
	{
		message = "You're awake at this hour?";
		image = "https://cdn.pixabay.com/photo/2015/11/23/10/39/cat-1058095_1280.jpg";
	}
	else{
		message = "Good night!";
		image= "https://cdn.pixabay.com/photo/2016/12/30/17/27/cat-1941089_1280.jpg";
	}

	timeEventJS.innerText = message;
	lolcatImage.src = image;

	showCurrentTime();
};
updateClock();

setInterval(updateClock, oneSecond);

