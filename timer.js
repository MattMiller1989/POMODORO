var clockTime=60;
setInterval(updateClock,1000);
function play(){} 
function updateClock(){
    dispClock();
    clockTime--;
}
function dispClock(){
    let minutes = Math.floor(clockTime / 60);
    let mString= zeroPad(minutes);
    let seconds = clockTime % 60;
    let sString = zeroPad(seconds);
    let timeString = mString + ":" + sString;
    document.getElementById("time").innerHTML = timeString;
}

function zeroPad (n) {
    if (n < 10) {
        return "0" + n.toString();
    } else {
        return n.toString();
    }
}