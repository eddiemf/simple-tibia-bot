import shell from 'shelljs';

export const getColorAtPosition = (x, y) => shell.exec(`cliclick cp:${x},${y}`).stdout.trim();
export const pressKey = key => shell.exec(`cliclick kp:${key}`);
export const type = text => shell.exec(`cliclick t:${text}`);
export const moveMouse = (x, y) => shell.exec(`cliclick -e 180 m:${x},${y}`);
export const getMousePosition = () =>
  shell
    .exec(`cliclick p`)
    .stdout.replace('\n', '')
    .split(',')
    .map(val => +val);
export const startMouseDrag = (x = '.', y = '.') => shell.exec(`cliclick -e 180 dd:${x},${y}`);
export const releaseMouseDrag = (x = '.', y = '.') => shell.exec(`cliclick -e 180 du:${x},${y}`);
export const click = () => shell.exec(`cliclick -e 180 c:.`);
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const pause = (minTime, maxTime = null) => new Promise((resolve) => {
  const time = maxTime ? getRandomInt(minTime, maxTime) : minTime;
  setTimeout(resolve, time)
});
