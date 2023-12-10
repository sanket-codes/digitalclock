const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const ap = document.querySelector("#ap");
const tday = document.querySelector("#tday");
const tdate = document.querySelector("#tdate");
const tyear = document.querySelector("#tyear");


setInterval(() => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();

  if (currentHour == 0) {
    currentHour = 12;
    ap.innerHTML = "AM";
  } else if (currentHour > 12) {
    currentHour -= 12;
    ap.innerHTML = "PM";
  } else {
    ap.innerHTML = "AM";
  }

  hour.innerHTML = (currentHour < 10 ? "0" : "") + currentHour;
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  let currentDate = currentTime.getDate();

  tdate.innerHTML = (currentDate < 10 ? "0" : "") + currentDate;

  tyear.innerHTML = currentTime.getFullYear();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  tday.innerHTML = weekday[currentTime.getDay()];
}, 1000);
