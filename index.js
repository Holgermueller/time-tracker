"use strict";

async function fetchJsonFile() {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data);
}

const loadDaily = () => {
  // This will load on page load.
};

const showDaily = () => {
  console.log("daily");
};

const showWeekly = () => {
  console.log("weekly");
};

const showMonthly = () => {
  console.log("monthly");
};

fetchJsonFile();
