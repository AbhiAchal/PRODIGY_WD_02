var startTime, currentTime, timer;
var laps = [];

function start() {
  startTime = Date.now() - (currentTime || 0);
  clearInterval(timer);
  timer = setInterval(updateDisplay, 10);
}

function pause() {
  clearInterval(timer);
  currentTime = Date.now() - startTime;
}

function reset() {
  clearInterval(timer);
  currentTime = 0;
  laps = [];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  var lapTime = currentTime || Date.now() - startTime;
  laps.push(lapTime);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(formatTime(lapTime)));
  document.getElementById("laps").appendChild(li);
}

function updateDisplay() {
  currentTime = Date.now() - startTime;
  document.getElementById("display").textContent = formatTime(currentTime);
}

function formatTime(time) {
  var milliseconds = Math.floor((time % 1000) / 10);
  var seconds = Math.floor((time / 1000) % 60);
  var minutes = Math.floor((time / (1000 * 60)) % 60);
  var hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  return (
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2) +
    "." +
    ("0" + milliseconds).slice(-2)
  );
}