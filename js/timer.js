var days = undefined;
var hours = undefined;
var minutes = undefined;
var seconds = undefined;

var count = 0;
var timeout;
var intervalId;

//future
var countDownDate = new Date();
var x;
var nowCopy = undefined;
var y;
var now;

var month = document.getElementById("month");
var day = document.getElementById("day");
var year = document.getElementById("year");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

// Set the date we're counting down to
validation = () => {
  if (
    month.value === "" ||
    year.value === "" ||
    day.value === "" ||
    hour.value === "" ||
    minute.value === "" ||
    second.value === ""
  ) {
    alert("Musst du das Formular ausfüllen!");
  } else {
    saveDate();
  }
};

saveDate = () => {
  countDownDate = new Date(
    `${month.value} ${day.value}, ${year.value}, ${hour.value}:${minute.value}:${second.value}`
  ).getTime();
  console.log(countDownDate);
  // Update the count down every 1 second
  x = setInterval(function () {
    // Get today's date and time
    if (nowCopy == undefined) {
      nowCopy = new Date().getTime();
    }
    now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const testmsg = `day ${days}, hr ${hours}, min ${minutes}, sec ${seconds}`;
    console.log("Fecha INicial: " + now);
    console.log("Fecha Tope(INPUT): " + countDownDate);
    console.log(testmsg);

    // Output the result in an element with id="demo"
    document.getElementById("tbl-out").innerHTML = `
      <table class="tbl-out">
              <tr id="output">
                <td>${days}</td>
                <td>${hours}:</td>
                <td>${minutes}:</td>
                <td>${seconds}</td>
              </tr>
              <tr class="base">
                <td>DAYS</td>
                <td>HOURS</td>
                <td>MINUTES</td>
                <td>SECONDS</td>
              </tr>
            </table>`;
    // If the count down is over, write some text
    if (days == 0 && hours == 0 && minutes == 0 && seconds < 10) {
      const timer = document.getElementById("circle");
      var myInterval = setInterval(color10P, 500);
      color10P();
      color10P = () => {
        timer.style.backgroundColor =
          timer.style.backgroundColor == "red" ? "black" : "red";
      };
    }
    if (days == 0 && hours == 0 && minutes == 0 && seconds < 7) {
      const timer = document.getElementById("circle");
      timer.style.backgroundColor = "rgb(102, 35, 35)";
      console.log("funcion2");
    }
    if (days == 0 && hours == 0 && minutes == 0 && seconds < 4) {
      const timer = document.getElementById("circle");
      timer.style.backgroundColor = "rgb(78, 22, 22)";
      console.log("funcion3");
    }
    if (distance < 1) {
      clearInterval(x);
      document.getElementById(
        "cont-fire"
      ).innerHTML = `<img src="images/explode.png" style="width: 100%;">`;
    }
  }, 1000);
};
var defaultSec = 0;
defaultTime = () => {
  defaultSec = 30;
  month.value = "12";
  day.value = countDownDate.getDay() + 4;
  year.value = countDownDate.getFullYear();
  hour.value = countDownDate.getHours();
  minute.value = countDownDate.getMinutes() + 1;
};
defaultTime();
var pauseTimer = () => {
  clearInterval(x);
  clearInterval(intervalId);
  document.getElementById("cont-cables").innerHTML = `
  
              <img src="images/c-cuted.png" alt=""/>
              <img src="images/c-red.png" alt="" />
              <img src="images/c-green.png" alt="" />
              <img src="images/c-brown.png" alt="" />
              <img src="images/c-white.png" alt="" />
            `;
  document.getElementById(
    "cont-fire"
  ).innerHTML = `<img  src="images/congratulation.png" style="width: 100%;">`;
};

var oppo = 3;
boom = () => {
  oppo--;
  if (oppo === 2) {
    document.getElementById("life3").style.visibility = "hidden";
  } else {
    if (oppo === 1) {
      document.getElementById("life3").style.visibility = "hidden";
      document.getElementById("life2").style.visibility = "hidden";
    }
  }
  if (oppo === 0) {
    clearInterval(x);
    document.getElementById(
      "cont-fire"
    ).innerHTML = `<img src="images/explode.png" style="width: 100%;">`;
  }
};

nuevoDefault = () => {
  const timer = document.getElementById("circle");

  var sound = document.getElementById("aud");
  console.log(sound);
  var count;
  var maxCount = 20;

  setDisplay(maxCount);
  count = maxCount;

  // Verwende die Referenz 'updateCounter', um die Funktion f체r sp채ter zu registrieren.
  intervalId = setInterval(updateCounter, 1000); // Jede Sekunde: aktualisiere den Z채hler und die Anzeige.

  function updateCounter() {
    count = count - 1;

    setDisplay(count);
  }
  function setDisplay(info) {
    document.getElementById("tbl-out").innerHTML = `
  <table class="tbl-out">
          <tr id="output">
            <td>00</td>
            <td>00:</td>
            <td>00:</td>
            <td>${info}</td>
          </tr>
          <tr class="base">
            <td>DAYS</td>
            <td>HOURS</td>
            <td>MINUTES</td>
            <td>SECONDS</td>
          </tr>
        </table>`;
    if (info < 10 && info > 7) {
      timer.style.backgroundColor = "rgb(102, 35, 35)";
      console.log(info);
    } else if (info < 8 && info > 4) {
      timer.style.backgroundColor = "brown";
      sound.play();
      console.log(info);
    } else if (info < 4 && info > 1) {
      timer.style.backgroundColor = "rgb(78, 22, 22)";
    } else if (info < 1) {
      console.log(info);
      clearInterval(intervalId);
      document.getElementById(
        "cont-fire"
      ).innerHTML = `<img src="images/explode.png" style="width: 100%;">`;
    }
  }
};
