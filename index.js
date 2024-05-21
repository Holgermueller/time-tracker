"use strict";

async function fetchJsonFile() {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("workCurrent").innerHTML =
    data[0].timeframes.daily.current + "hrs";
  document.getElementById("workPrevious").innerHTML =
    "Last week - " + data[0].timeframes.daily.previous + "hrs";

  document.getElementById("playCurrent").innerHTML =
    data[1].timeframes.daily.current + "hrs";
  document.getElementById("playPrevious").innerHTML =
    "Last week - " + data[1].timeframes.daily.previous + "hrs";

  console.log(data);
}

const showDaily = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("workCurrent").innerHTML =
    data[0].timeframes.daily.current + "hrs";
  document.getElementById("workPrevious").innerHTML =
    "Last week - " + data[0].timeframes.daily.previous + "hrs";

  document.getElementById("playCurrent").innerHTML =
    data[1].timeframes.daily.current + "hrs";
  document.getElementById("playPrevious").innerHTML =
    "Last week - " + data[1].timeframes.daily.previous + "hrs";
};

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

  console.log("weekly");
};

const showMonthly = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  document.getElementById("workCurrent").innerHTML =
    data[0].timeframes.monthly.current + "hrs";
  document.getElementById("workPrevious").innerHTML =
    "Last week - " + data[0].timeframes.monthly.previous + "hrs";

  document.getElementById("playCurrent").innerHTML =
    data[1].timeframes.monthly.current + "hrs";
  document.getElementById("playPrevious").innerHTML =
    "Last week - " + data[1].timeframes.monthly.previous + "hrs";

  console.log("monthly");
};

fetchJsonFile();
