var today = new Date();
var time = today.getHours();
var message = " ";
var noon = 12;
var nap = 14;
var evening = 18;
var party = 21;
var night = 23;
var timeEventJS = document.getElementById("timeEvent");

if(time < noon){
	message = "Good morning, Sunshine!";
}
else if ((time >= noon) && (time < (noon + 1))){
	message = "Lunch time!";
}
else if ((time >= nap) && (time < (nap + 1))){
	message = "Nap time!";
}
else if ((time > noon) && (time < evening)){
	message = "Good day!";
}
else if ((time >= evening) && (time < party)){
	message = "Good evening!";
}
else if ((time >= party) && (time < night)){
	message = "Party time!";
}
else{
	message = "Good night!";
}

timeEventJS.innerText = message;
