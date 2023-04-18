const setTime = document.getElementById("setTime");
const timeContainer = document.getElementById("timeContainer");
let interval;
let second;
let isRun = false;
setTime.addEventListener("click", () => {
  second = prompt("Write second");
  timeContainer.innerHTML = second;
  interval = startTimer();
});

const startTimer = () => {
  isRun = true;
  return setInterval(timer, 1000);
};

pause.addEventListener("click", () => {
  if (isRun) {
    clearInterval(interval);
    pause.innerHTML = "Start";
    isRun = false;
  } else {
    interval = startTimer();
    pause.innerHTML = "Pause";
  }
});

const timer = () => {
  second = second - 1;

  if (second < 0) {
    alert("я всё");
    clearInterval(interval);
    return;
  }

  timeContainer.innerHTML = second;
};
