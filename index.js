"use strict";

async function fetchJsonFile() {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("workCurrent").innerHTML =
    data[0].timeframes.daily.current + "hrs";
  document.getElementById("workPrevious").innerHTML =
    "Yesterday- " + data[0].timeframes.daily.previous + "hrs";

  document.getElementById("playCurrent").innerHTML =
    data[1].timeframes.daily.current + "hrs";
  document.getElementById("playPrevious").innerHTML =
    "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

  document.getElementById("studyCurrent").innerHTML =
    data[2].timeframes.daily.current + "hrs";
  document.getElementById("studyPrevious").innerHTML =
    "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

  document.getElementById("exerciseCurrent").innerHTML =
    data[3].timeframes.daily.current + "hrs";
  document.getElementById("exercisePrevious").innerHTML =
    "Yesterday - " + data[3].timeframes.daily.previous + "hrs";

  console.log(data);
}

// Daily

const showDaily = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("workCurrent").innerHTML =
    data[0].timeframes.daily.current + "hrs";
  document.getElementById("workPrevious").innerHTML =
    "Yesterday - " + data[0].timeframes.daily.previous + "hrs";

  document.getElementById("playCurrent").innerHTML =
    data[1].timeframes.daily.current + "hrs";
  document.getElementById("playPrevious").innerHTML =
    "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

  document.getElementById("studyCurrent").innerHTML =
    data[2].timeframes.daily.current + "hrs";
  document.getElementById("studyPrevious").innerHTML =
    "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

  document.getElementById("exerciseCurrent").innerHTML =
    data[3].timeframes.daily.current + "hrs";
  document.getElementById("exercisePrevious").innerHTML =
    "Yesterday - " + data[3].timeframes.daily.previous + "hrs";
};

// Weekly

const showWeekly = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("workCurrent").innerHTML =
    data[0].timeframes.weekly.current + "hrs";
  document.getElementById("workPrevious").innerHTML =
    "Last week - " + data[0].timeframes.weekly.previous + "hrs";

  document.getElementById("playCurrent").innerHTML =
    data[1].timeframes.weekly.current + "hrs";
  document.getElementById("playPrevious").innerHTML =
    "Last week - " + data[1].timeframes.weekly.previous + "hrs";

  document.getElementById("studyCurrent").innerHTML =
    data[2].timeframes.weekly.current + "hrs";
  document.getElementById("studyPrevious").innerHTML =
    "Last week - " + data[2].timeframes.weekly.previous + "hrs";

  document.getElementById("exerciseCurrent").innerHTML =
    data[3].timeframes.weekly.current + "hrs";
  document.getElementById("exercisePrevious").innerHTML =
    "Yesterday - " + data[3].timeframes.weekly.previous + "hrs";

  console.log("weekly");
};

// Monthly

const showMonthly = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("workCurrent").innerHTML =
    data[0].timeframes.monthly.current + "hrs";
  document.getElementById("workPrevious").innerHTML =
    "Last month - " + data[0].timeframes.monthly.previous + "hrs";

  document.getElementById("playCurrent").innerHTML =
    data[1].timeframes.monthly.current + "hrs";
  document.getElementById("playPrevious").innerHTML =
    "Last month - " + data[1].timeframes.monthly.previous + "hrs";

  document.getElementById("studyCurrent").innerHTML =
    data[2].timeframes.monthly.current + "hrs";
  document.getElementById("studyPrevious").innerHTML =
    "Last month - " + data[2].timeframes.monthly.previous + "hrs";

  document.getElementById("exerciseCurrent").innerHTML =
    data[3].timeframes.monthly.current + "hrs";
  document.getElementById("exercisePrevious").innerHTML =
    "Yesterday - " + data[3].timeframes.monthly.previous + "hrs";

  console.log("monthly");
};

fetchJsonFile();
