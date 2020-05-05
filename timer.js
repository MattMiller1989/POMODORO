let isBreak = false;
let workTime = 25*60;
let breakTime = 5*60;
let interval = null;
let isRunning=false;
var clockTime = workTime;
function play(){  
  isRunning=!isRunning;

  if(isRunning){
    if (interval == null){
        zeroClock();
        displayStatus();
        updateClock();
        interval = setInterval(updateClock,1000);
        
    }
  }else{

  }
  switchButton();

}
function decreaseWork()
{
  if (workTime > 60) {
    workTime-=60;
    document.getElementById("control-clock").innerHTML = getDisplayTime(workTime);
    if(!isBreak){
      if(clockTime>60)
       {
         clockTime-=60
         dispClock();
       } 
    }
  }
}
function increaseWork()
{
  if (workTime < 60*60) {
    workTime+=60;
    document.getElementById("control-clock").innerHTML = getDisplayTime(workTime);
    if(!isBreak){
      if(clockTime<60*60)
       {
         clockTime+=60
         dispClock();
       } 
    }
  }
}
function decreaseRest()
{
  if (breakTime > 60) {
    breakTime-=60;
    document.getElementById("rest-clock").innerHTML = getDisplayTime(breakTime);
    if(isBreak){
      if(clockTime>60)
       {
         clockTime-=60
         dispClock();
       } 
    }
  }

}
function increaseRest()
{
  if (breakTime < 60*60) {
    breakTime+=60;
    document.getElementById("rest-clock").innerHTML = getDisplayTime(breakTime);
    if(isBreak){
      if(clockTime<60*60)
       {
         clockTime+=60
         dispClock();
       } 
    }
  }

}
function switchButton(){
  let togButton= document.getElementById("play")
  if(isRunning){
      togButton.classList.add("pause");
  }else{
      togButton.classList.remove("pause");
  }
}
function stop() {
  zeroClock();
  dispClock();
  clearInterval(interval);
  interval = null;
  isRunning = false;
  switchButton();
}
function zeroClock(){
  if (isBreak) {
    clockTime = breakTime;
  } else {
    clockTime = workTime;
  }
}
function back(){
  zeroClock();
}

function forward() {
  switchMode();
}

function updateClock(){
  //console.log(clockTime);
  if( isRunning){
    if(clockTime < 0){
      switchMode();
    }
      dispClock();
      clockTime--;
  }
}

function displayStatus() {
  let statusDiv=document.getElementById("status")
  if(isBreak){
    statusDiv.innerHTML=" GET OFF MY CLOCK!"
  }else{
    statusDiv.innerHTML=" GET BACK TO WORK!!1!!"
  }
}

function switchMode()
{
  isBreak=!isBreak;

  zeroClock();

  displayStatus();
}
function dispClock(){
    let timeString = getDisplayTime(clockTime);
    document.getElementById("time").innerHTML = timeString;
}

function getDisplayTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let mString= zeroPad(minutes);
    let seconds = timeInSeconds % 60;
    let sString = zeroPad(seconds);
    let timeString = mString + ":" + sString;
    return timeString;
}

function zeroPad (n) {
    if (n < 10) {
        return "0" + n.toString();
    } else {
        return n.toString();
    }
}