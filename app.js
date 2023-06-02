var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    displayTime(elapsedTime);
  }, 10);
  toggleButtons(true);
}

function stopTimer() {
  clearInterval(timerInterval);
  toggleButtons(false);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime(elapsedTime);
  toggleButtons(false);
}

function displayTime(time) {
  var hours = Math.floor(time / 3600000);
  var minutes = Math.floor((time % 3600000) / 60000);
  var seconds = Math.floor((time % 60000) / 1000);
  var milliseconds = Math.floor((time % 1000) / 10);
  
  var formattedTime =
    leadingZero(hours) + ":" +
    leadingZero(minutes) + ":" +
    leadingZero(seconds) + "." +
    leadingZero(milliseconds);
  
  document.getElementById("display").textContent = formattedTime;
}

function leadingZero(number) {
  return number < 10 ? "0" + number : number;
}

function toggleButtons(running) {
  document.getElementById("startButton").disabled = running;
  document.getElementById("stopButton").disabled = !running;
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);
