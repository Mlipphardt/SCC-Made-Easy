var dropthedot = document.getElementById("dropthedot");
var recordfloor = document.getElementById("recordfloor");
var totaltime = document.getElementById("totaltime");
var dropthedotbutton = document.getElementById("dropthedotbutton");
var recordfloorbutton = document.getElementById("recordfloorbutton");
var totaltimebutton = document.getElementById("totaltimebutton");
var time = 0;
var timerInterval;

function chartme(number, totalhrs) {
  return number / (60 * totalhrs);
}

function findfloor(timing) {
  return 1 / (timing * 60);
}

function totaltimer(score, seconds) {
  return score * (60 / seconds);
}

function timerReset() {
  clearInterval(timerInterval);
  time = 0;
  document
    .getElementById("timerdisplay")
    .textContent("Click 'start' to initiate timer.");
}

function timerStop() {
  clearInterval(timerInterval);
}

function countup() {
  time++;
  document
    .getElementById("timer-display")
    .textContent("Time: " + time + " seconds.");
}

document
  .getElementById("start-timer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    timerInterval = setIntervbal(countup, 1000);
  });

document
  .getElementById("stop-timer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    timerStop();
  });

document
  .getElementById("reset-timer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    timerReset();
  });

document
  .getElementById("dropthedotbutton")
  .addEventListener("click", function () {
    var dot = prompt("Enter your frequency data.");
    var floor = prompt("Enter the record floor in hours.");
    dropthedot.textContent = chartme(dot, floor);
  });

recordfloorbutton.addEventListener("click", function () {
  var floor = prompt("What is the record floor in hours?");
  recordfloor.textContent = findfloor(floor);
});

totaltimebutton.addEventListener("click", function () {
  var score = prompt("What was the frequency");
  var timing = prompt("What was the duration of the timing in seconds?");
  totaltimetext.textContent = totaltimer(score, timing);
});
