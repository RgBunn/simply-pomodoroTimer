const timeContainer = document.querySelector("#time-left");
const startButton = document.querySelector("#btn-start");
const stopButton = document.querySelector("#btn-stop");
const resetButton = document.querySelector("#btn-reset");

let interval;
let timerStart = 1500;
let timeLeft = timerStart;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timeContainer.innerHTML = formattedTime;
}
function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = timerStart;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = timerStart;
  updateTimer();
}
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
