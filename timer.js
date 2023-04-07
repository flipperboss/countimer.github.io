  let time = document.getElementById("current-time");

  setInterval(() => {
      let d = new Date(); 
  time.innerHTML = d.toLocaleTimeString();   
  },1000);

  // CODE FOR COUNTDOWN TIMER
  const timerDisplay = document.getElementById("timer");
  const startButton = document.getElementById("start-btn");
  const timeInput = document.getElementById("time-input");

  let countdown;

  function startTimer() {
    const minutes = parseInt(timeInput.value);

    if (isNaN(minutes)) {
      alert("Please enter a valid number!");
      return;
    }

    const seconds = minutes * 60;
    let timeLeft = seconds;
    clearInterval(countdown);

    countdown = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const remainingSeconds = timeLeft % 60;

      timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "00:00";
        // alert("Timer finished!");
    
      }
    }, 1000);
  }

  startButton.addEventListener("click", startTimer);
