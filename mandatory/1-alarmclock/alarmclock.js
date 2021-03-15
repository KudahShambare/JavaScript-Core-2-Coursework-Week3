function setAlarm() {
  /*
. When the `Set Alarm` button is clicked, get the value of the input field
2. When you have the input field value, set the title to the correct value
3. Work out how to update the `Time Remaining` title every second
4. When the remaining time left is 0, play the alarm sound

  */
  let setAlarmButton = document.getElementById("set");
  let userTime = document.getElementById("alarmSet");
  let remainingTime = document.getElementById("timeRemaining");
  setAlarmButton.addEventListener("click", function () {
    setInterval(function () {
      if (userTime.value > 0) {
        userTime.value--;
        remainingTime.innerHTML = "Time Remaining: 00:" + userTime.value;
      } else {
        remainingTime.innerHTML = "Time Remaining: 00:00";
        playAlarm();
        userTime.reset();
      }
    }, 1000);
  });
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
