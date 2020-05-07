import { getRandomNumber } from "./getRandomNumber.js";

export const pause = (minTime, maxTime = null) => new Promise((resolve) => {
  const time = maxTime ? getRandomNumber(minTime, maxTime) : minTime;
  setTimeout(resolve, time)
});
