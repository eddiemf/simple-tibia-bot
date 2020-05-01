export const pause = (minTime, maxTime = null) => new Promise((resolve) => {
  const time = maxTime ? getRandomInt(minTime, maxTime) : minTime;
  setTimeout(resolve, time)
});
