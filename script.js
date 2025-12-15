let pause = false;
let x = 1;

const counterElement = document.getElementById("counter");
const lapCounterElement = document.querySelector(".lap");
let intervalId = null;

const startCount = document.getElementById("start-count");
const pauseResume = document.getElementById("pause-resume");
const resetCount = document.getElementById("reset-count");
const lapCount = document.getElementById("lap-count");

startCount.addEventListener("click", startCounter);
// pauseResume.addEventListener("click", pauseResume);
resetCount.addEventListener("click", resetCounter);
lapCount.addEventListener("click", lapCounter);

function startCounter() {
  if (intervalId !== null) return; // This is important to prevent to create a new interval
  // else if we click on start button twice or more it will increase counter

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
  intervalId = null;
  x = 0;
  counterElement.innerText = x;
}

function lapCounter() {
  const p = document.createElement("p");
  p.textContent = x;
  lapCounterElement.appendChild(p);
}
