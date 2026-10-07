// import {
//   formatDateToRU,
//   formatDateToUS,
// } from "https://cdn.jsdelivr.net/gh/mailjuly1-star/lybraryFormatDate@main/formatDate.js";

import { formatDateToRU, formatDateToUS } from "./lib/formatDate/formatDate.js";
let country = "ru";
const currentDate = new Date();

const formatDate = (date, country) => {
  switch (country) {
    case "us":
      return formatDateToUS(date);

    case "ru":
      return formatDateToRU(date);
    default:
      return formatDateToRU(date);
  }
};

const now = formatDate(currentDate, country);

document.getElementById("now").innerText = now;
