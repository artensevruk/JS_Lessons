const setTime = document.getElementById("setTime");
const timeContainer = document.getElementById("timeContainer");
let interval 
let secend;
let isRun = false ;
setTime.addEventListener("click", () => {
  secend = prompt("Write secend");
  timeContainer.innerHTML = secend;
  interval = startTimer();
});

const startTimer =() =>{
  isRun = true ;
  return setInterval(timer,1000);
}

pause.addEventListener("click", () => {
  if(isRun){
    clearInterval(interval);
    pause.innerHTML = "Return";
    isRun = false ;
  }
  else{
    interval = startTimer();
    pause.innerHTML = "Pause";
  }
});

// pause.addEventListener("dblclick", () => {
//   interval = startTimer();
//   pause.innerHTML = "Pause";
// });

const timer = () => {
  secend = secend - 1;

  if (secend < 0) {
    alert(" я всё ");
    clearInterval(interval);
    return
  }


  timeContainer.innerHTML = secend;
};
