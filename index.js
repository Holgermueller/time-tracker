"use strict";

async function fetchJsonFile() {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("daily").style.color = "hsl(0, 0%, 100%)";

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

  document.getElementById("socialCurrent").innerHTML =
    data[4].timeframes.daily.current + "hrs";
  document.getElementById("socialPrevious").innerHTML =
    "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

  document.getElementById("selfCareCurrent").innerHTML =
    data[5].timeframes.daily.current + "hrs";
  document.getElementById("selfCarePrevious").innerHTML =
    "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
}

// Daily

const showDaily = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("daily").style.color = "hsl(0, 0%, 100%)";
  document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)";
  document.getElementById("monthly").style.color = "hsl(235, 45%, 61%)";

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

  document.getElementById("socialCurrent").innerHTML =
    data[4].timeframes.daily.current + "hrs";
  document.getElementById("socialPrevious").innerHTML =
    "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

  document.getElementById("selfCareCurrent").innerHTML =
    data[5].timeframes.daily.current + "hrs";
  document.getElementById("selfCarePrevious").innerHTML =
    "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
};

// Weekly

const showWeekly = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("daily").style.color = "hsl(235, 45%, 61%)";
  document.getElementById("weekly").style.color = "hsl(0, 0%, 100%)";
  document.getElementById("monthly").style.color = "hsl(235, 45%, 61%)";

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

  document.getElementById("socialCurrent").innerHTML =
    data[4].timeframes.weekly.current + "hrs";
  document.getElementById("socialPrevious").innerHTML =
    "Yesterday - " + data[4].timeframes.weekly.previous + "hrs";

  document.getElementById("selfCareCurrent").innerHTML =
    data[5].timeframes.weekly.current + "hrs";
  document.getElementById("selfCarePrevious").innerHTML =
    "Yesterday - " + data[5].timeframes.weekly.previous + "hrs";
};

// Monthly

const showMonthly = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("daily").style.color = "hsl(235, 45%, 61%)";
  document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)";
  document.getElementById("monthly").style.color = "hsl(0, 0%, 100%)";

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

  document.getElementById("socialCurrent").innerHTML =
    data[4].timeframes.monthly.current + "hrs";
  document.getElementById("socialPrevious").innerHTML =
    "Yesterday - " + data[4].timeframes.monthly.previous + "hrs";

  document.getElementById("selfCareCurrent").innerHTML =
    data[5].timeframes.monthly.current + "hrs";
  document.getElementById("selfCarePrevious").innerHTML =
    "Yesterday - " + data[5].timeframes.monthly.previous + "hrs";
};

fetchJsonFile();
