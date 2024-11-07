
/* Get DOM Elements */
const secondHand = document.querySelector(".secondHand");
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");

// Helper function responsible for calculating the amount to rotate a hand
const calcDegrees = (time, max) => (time / max) * 360;

// checking 24 or 12 Hours
let conditon = true;
 

function updateClock() {
  // Create new Date object
  const currentTime = new Date();

   // AM PM Desider;
let apm = "";
 
  if(currentTime.getHours() >= 12)
   apm = " : PM";
  else
  apm = " : AM";
  

  // Get current seconds, minutes, & hours and calculate the degree shift
  const secondHandDegrees = calcDegrees(currentTime.getSeconds(), 60);
  const minuteHandDegrees = calcDegrees(currentTime.getMinutes(), 60);
  const hourHandDegrees = calcDegrees(
    currentTime.getHours() * 60 + currentTime.getMinutes(),
    720 // 12 hours * 60 minutes
  );

  console.log(minuteHandDegrees);
  console.log(hourHandDegrees);

  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;

// -------------------------------------------- 24 / 12       24                less 10      the time will 01-09          or 10-24                    12 hours
  document.getElementById("hours").innerHTML = (conditon) ? ((currentTime.getHours() < 10) ? "0" + currentTime.getHours() : currentTime.getHours()) : ((currentTime.getHours() == 0) ? "12" : ((currentTime.getHours() < 10) ? "0"+currentTime.getHours() : (currentTime.getHours() < 13) ? currentTime.getHours() :  (((currentTime.getHours()-12) > 10) ? currentTime.getHours() - 12 : "0"+ (currentTime.getHours() - 12))));
  document.getElementById("minutes").innerHTML = (currentTime.getMinutes() < 10) ? "0" + currentTime.getMinutes() : currentTime.getMinutes();
  document.getElementById("seconds").innerHTML = (currentTime.getSeconds() < 10) ? "0" + currentTime.getSeconds() : currentTime.getSeconds() ;
 
    document.getElementById("ampm").innerHTML = apm;

    if(conditon)
      document.getElementById("ampm").style.display="none";
    else
    document.getElementById("ampm").style.display="block";
 
}
 

// updateClock();
// conditon =false;

function sethour(){
  if(conditon){
    document.getElementById("hourtype").innerHTML = "24 Hours";
    conditon = false;
    condition = true;
    localStorage.setItem("clockType", "24hrs");
  }else{
    document.getElementById("hourtype").innerHTML = "12 Hours";
    conditon = true;
    condition = false;
    localStorage.setItem("clockType", "12hrs");
  }

  
}

if(localStorage.getItem("clockType") === "24hrs"){
  conditon = false;
  document.getElementById("hourtype").innerHTML = "24 Hours";
}else{
conditon = true;
updateClock();
}

// --------------------  Dark Theme  ------------------
let dark = true;
function darkLight(){
  if(dark){
    document.getElementById("dark-light").innerHTML = "LIGHT MODE";
    document.querySelector("body").style.backgroundColor="black";
    dark = false;
  }else{
    document.getElementById("dark-light").innerHTML = "DARK MODE";
    document.querySelector("body").style.backgroundColor="white";
    dark = true;
  }
  localStorage.setItem("dark", document.querySelector("body").style.backgroundColor );
}

if(localStorage.getItem("dark") === "black")
  dark = true;
  else
  dark = false;

  darkLight();



// update clock for each timed
setInterval(updateClock, 1000);

let chathams_blue = "#1A4B84";

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
  setTheme(localStorage.getItem("movie-theme") || chathams_blue);
