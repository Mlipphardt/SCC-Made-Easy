window.onload = function () {
  var dropthedot = document.getElementById("dropthedot");
  var recordfloor = document.getElementById("recordfloor");
  var totaltime = document.getElementById("totaltime");
  var dropthedotbutton = document.getElementById("dropthedotbutton");
  var recordfloorbutton = document.getElementById("recordfloorbutton");
  var totaltimebutton = document.getElementById("totaltimebutton");
  var time = 0;
  var timerInterval;

  function chartme(number, minutes) {
    return number / minutes;
  }

  function findfloor(timing) {
    return 1 / timing;
  }

  function totaltimer(score, seconds) {
    return score * (60 / seconds);
  }

  function timerReset() {
    clearInterval(timerInterval);
    time = 0;
    document.getElementById("timer-display").textContent =
      "Click 'start' to initiate timer.";
  }

  function timerStop() {
    clearInterval(timerInterval);
  }

  function countup() {
    time++;
    document.getElementById("timer-display").textContent =
      "Time: " + time + " seconds.";
  }

  document
    .getElementById("start-timer-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      timerInterval = setInterval(countup, 1000);
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
      var dot = document.getElementById("dot-frequency").value.trim();
      var floor = document.getElementById("dot-floor").value.trim();
      console.log(dot);
      console.log(floor);
      dropthedot.textContent = chartme(dot, floor);
    });

  recordfloorbutton.addEventListener("click", function () {
    var floor = document.getElementById("floor-minutes").value.trim();
    recordfloor.textContent = findfloor(floor);
  });

  totaltimebutton.addEventListener("click", function () {
    var score = document.getElementById("tt-frequency").value.trim();
    var timing = document.getElementById("tt-floor").value.trim();
    totaltimetext.textContent = totaltimer(score, timing);
  });
};
