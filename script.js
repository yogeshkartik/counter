let pause = false;
let x = 1;

const counterElement = document.getElementById("counter");
const lapCounterElement = document.querySelector(".lap");
const intervalId = null;

const startCount = document.getElementById("start-count");
const pauseResume = document.getElementById("pause-resume");
const resetCount = document.getElementById("reset-count");
const lapCount = document.getElementById("lap-count");

startCount.addEventListener("click", startCounter);
// pauseResume.addEventListener("click", pauseResume);
resetCount.addEventListener("click", resetCounter);
lapCount.addEventListener("click", lapCounter);

function startCounter() {
  intervalId= setInterval(() => {
    
    counterElement.innerText = x;
    x++;
  }, 1000);
}

function pauseCount() {
  if (pause) {
    pause = false;
    counter();
  } else {
    pause = true;
    counter();
  }
}

function resetCounter() {
  clearInterval(intervalId);
  x = 0;
  counterElement.innerText = x;
}

function lapCounter() {
  const p = document.createElement("p");
  p.textContent = x;
  lapCounterElement.appendChild(p);
}
