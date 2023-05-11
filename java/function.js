let allDate = new Date();

let monthArr = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = allDate.getDate();
let month = allDate.getMonth();
let year = allDate.getFullYear();
let fullDate = `${monthArr[month]} ${date} ${year}`;
document.querySelector(".date").innerHTML = fullDate;

setInterval(() => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    document.querySelector(".format").innerHTML = "PM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.querySelector(".hours").innerHTML = hours + ":";
  document.querySelector(".minutes").innerHTML = minutes + ":";
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);

let timerContainer = document.getElementById("timercontainer");
let stopWatchContainer = document.getElementById("stopWatchcontainer");

timerContainer.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".timer").style.display = "block";
  document.querySelector(".txt").style.display = "none";
});

stopWatchContainer.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".stopWatch").style.display = "block";
  document.querySelector(".txt").style.display = "none";
});
let timerback = document.getElementById("timer-back");
timerback.addEventListener("click", () => {
  document.querySelector(".timer").style.display = "none";
  document.querySelector(".container").style.display = "block";
  document.querySelector(".txt").style.display = "block";
});
let stopWatchback = document.getElementById("stopWatch-back");
stopWatchback.addEventListener("click", () => {
  document.querySelector(".stopWatch").style.display = "none";
  document.querySelector(".container").style.display = "block";
  document.querySelector(".txt").style.display = "block";
});

//stopwatch function
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let msecond = document.getElementById("msecond");
let start = document.getElementById("start-btn");
let stop = document.getElementById("stop-btn");
let reset = document.getElementById("reset-btn");

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

start.addEventListener("click", function () {
  timer = true;
  stopwatch();
});

stop.addEventListener("click", function () {
  timer = false;
});

reset.addEventListener("click", function () {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  hour.textContent = "00 : ";
  minute.textContent = "00 : ";
  second.textContent = "00 : ";
  msecond.textContent = "00";
});

function stopwatch() {
  if (timer) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }

    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;
    let countString = count;

    if (hr < 10) {
      hrString = "0" + hrString;
    }

    if (min < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    hour.textContent = hrString + " : ";
    minute.textContent = minString + " : ";
    second.textContent = secString + " : ";
    msecond.textContent = countString;
    setTimeout(stopwatch, 10);
  }
}

// timer function
let hours = document.getElementById("hours-timer");
let minutes = document.getElementById("minutes-timer");
let seconds = document.getElementById("seconds-timer");
let setbtn = document.getElementById("set-timer");
let timerresult = document.querySelector(".timer-result");
let timerStartBtn = document.getElementById("timerStart-btn");
let timerResetBtn = document.getElementById("timerReset-btn");
timerStartBtn.disabled = true;
function on() {
  hours.disabled = false;
  minutes.disabled = false;
  seconds.disabled = false;
  timerStartBtn.disabled = false;
  hours.style.border = "2px solid black";
  minutes.style.border = "2px solid black";
  seconds.style.border = "2px solid black";
  if ((timerStartBtn.disabled = true)) {
    timerStartBtn.disabled = false;
  }
}

function startTimerBtn() {
  setbtn.disabled = true;
  hours.style.border = "none";
  minutes.style.border = "none";
  seconds.style.border = "none";
  logic();
}

function showingresult() {
  timerresult.innerHTML =
    (hours.value > 1 ? hours.value : "0" + hours.value) +
    ":" +
    (minutes.value > 9 ? minutes.value : "0" + minutes.value) +
    ":" +
    (seconds.value > 9 ? seconds.value : "0" + seconds.value);
}

function logic() {
  hours.disabled = true;
  minutes.disabled = true;
  seconds.disabled = true;
  timerStartBtn.disabled = true;
  let date = new Date();
  let countDown = new Date();
  countDown.setTime(
    date.getTime() +
      hours.value * 60 * 60 * 1000 +
      minutes.value * 60 * 1000 +
      seconds.value * 1000 +
      1 * 1000
  );

  var x = setInterval(function () {
    let current = new Date().getTime();

    let diff = countDown - current;

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    // console.log(hours, minutes, seconds);
    timerresult.innerHTML =
      (hours > 1 ? hours : "0" + hours) +
      " : " +
      (minutes > 9 ? minutes : "0" + minutes) +
      "  : " +
      (seconds > 9 ? seconds : "0" + seconds);

    timerResetBtn.addEventListener("click", () => {
      clearInterval(x);
      setbtn.disabled = false;
      timerStartBtn.disabled = true;
      timerresult.innerHTML = "00 : 00 : 00";
    });

    // let audio = ("Bell.mp3")
    if (hours == "00" && minutes == "00" && seconds == "00") {
      clearInterval(x);
      timerStartBtn.disabled = true;
      setbtn.disabled = false;
      // audio.play()
    }
  }, 1000);
}
