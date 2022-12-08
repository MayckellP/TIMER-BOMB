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
    if (info < 10) {
      timer.style.backgroundColor = "rgb(102, 35, 35)";
    }
    if (info < 7) {
      timer.style.backgroundColor = "brown";
    }
    if (info < 4) {
      timer.style.backgroundColor = "rgb(78, 22, 22)";
    }
    if (info < 0) {
      clearInterval(intervalId);
      document.getElementById(
        "cont-fire"
      ).innerHTML = `<img id="boomfin" class="m-auto" src="images/explode.png">`;
    }
  }
};

/*var newTimer;
reloadTimer = () => {
  //information from stopping point

  //add this inf to
  var distance = countDownDate - nowCopy;
  newTimer;
  const initialDay = Math.floor(distance / (1000 * 60 * 60 * 24));
  const initialHour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const initialMinute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const initialSecond = Math.floor((distance % (1000 * 60)) / 1000);

  const capture_day = days;
  const capture_hour = hours;
  const capture_minute = minutes;
  const capture_second = seconds;

  var fyear = parseInt(year.value);
  var fmonth = parseInt(month.value);
  var fday = parseInt(day.value);
  var fhour = parseInt(hour.value) - initialHour;
  var fminute = parseInt(minute.value) - initialMinute;
  var fsecond = parseInt(second.value) - initialSecond;

  var resfyear = fyear;
  var resfmonth = fmonth;
  var resfday = fday;
  var resfhour = fhour + capture_hour;
  var resfminute = fminute + capture_minute;
  var resfsecond = fsecond + capture_second;

  const resDay = initialDay - capture_day;
  const resHour = initialHour - capture_hour;
  const resMin = initialMinute - capture_minute;
  const resSec = initialSecond - capture_second;

  var newDay = day.value;
  var newHour = parseInt(hour.value) - resHour;
  var newMin = parseInt(minute.value) - resMin;
  var newSec = parseInt(second.value) - resSec;
  var newYear = year.value;
  var newMonth = month.value;

  console.log("/-------------------------------------");
  console.log(
    `Fecha 1 Tope ${month.value} ${day.value}, ${year.value}, ${hour.value}:${minute.value}:${second.value}`
  );
  console.log(
    `Distancia Total: ${initialDay}, ${initialHour}:${initialMinute}:${initialSecond}`
  );
  console.log(
    `Tiempo Pausado: ${capture_day}, ${capture_hour}:${capture_minute}:${capture_second}`
  );
  console.log(`Tiempo Consumido: ${resDay}, ${resHour}:${resMin}:${resSec}`);
  console.log(
    `Fecha 2 Tope: ${newMonth} ${newDay}, ${newYear}, ${newHour}:${newMin}:${newSec}`
  );
  console.log(
    `Tiempo a Sumar: ${fmonth} ${fday}, ${fyear}, ${fhour}:${fminute}:${fsecond}`
  );
  console.log(
    `Fecha Inicial: ${resfmonth} ${resfday}, ${resfyear}, ${resfhour}:${resfminute}:${resfsecond}`
  );

  newTimer = new Date(
    `${month.value} ${day.value}, ${year.value}, ${newHour}:${newMin}:${newSec}`
  ).getTime();

  console.log("Fecha Inicial: " + nowCopy);
  console.log("Fecha Tope(NEW INPUT) " + newTimer);

  y = setInterval(function () {
    var newInital = new Date(
      `${resfmonth}-${resfday}-${resfyear}, ${resfhour}:${resfminute}:${resfsecond}`
    ).getTime();
    var instance = newTimer - newInital;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(instance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (instance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    var minutes = Math.floor((instance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((instance % (1000 * 60)) / 1000);

    var testmsg = `day ${days}, hr ${hours}, min ${minutes}, sec ${seconds}`;
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
      timer.style.backgroundColor = "rgb(131, 51, 51)";
      console.log("funcion1");
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
    /*if (instance < 1) {
      clearInterval(y);
      document.getElementById(
        "cont-fire"
      ).innerHTML = `<img class="m-auto" src="images/explode.png" alt="">`;
    }
  }, 1000);
};*/
