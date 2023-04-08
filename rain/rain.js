const button = document.querySelector("#playBtn");
button.addEventListener("click", function () {
   document.querySelector("#player").play();
   document.querySelector("#forestVideo").play();
});

const timer = 3;
let timeAmount = timer * 60;

function calcTime() {
   const countdown = document.querySelector("#countdown");
   let minutes = Math.floor(timeAmount / 60);
   let seconds = timeAmount % 60;

   if (seconds < 10) {
      seconds = "0" + seconds;
   }

   countdown.textContent = `${minutes} : ${seconds}`;
   timeAmount--;

   if (timeAmount < 0) {
      stopTimer();
      timeAmount = 0;
   }
   function stopTimer() {
      clearInterval(timerStop);
   }
}
let timerStop = setInterval(calcTime, 1000);
