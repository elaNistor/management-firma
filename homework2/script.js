// Define time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define vars on display
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let status = "stopped";

// Chronometer functions
function chronometer() {
   
    seconds++;
    if(seconds / 60=== 1){
       seconds = 0;
       minutes++;

       if(minutes / 60=== 1){
          minutes = 0;
          hours++;
       }
    }
     
    //If sec/min/hours are only 1 digit add a leading 0 to the value
     if (seconds < 10){
         displaySeconds = "0" + seconds.toString();
     }
    else {
        displaySeconds = seconds;
    }
     
    if (minutes < 10){
         displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10){
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }


    document.getElementById("hours").innerText = displayHours;
    document.getElementById("minutes").innerText = displayMinutes;
    document.getElementById("seconds").innerText = displaySeconds
}


function play() {
    clearInterval(interval)
    interval = setInterval(chronometer, 1000);
}
function stop(){
    clearInterval(interval)


}
 function reset(){

    seconds = 0;
    minutes = 0;
    hours = 0;
    
    displaySeconds = 0;
    displayMinutes = 0;
    displayHours = 0;

    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

 }
