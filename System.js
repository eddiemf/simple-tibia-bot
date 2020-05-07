import shell from 'shelljs';
import { pause } from './utils/index.js';

export class System {
  static click() {
    shell.exec(`cliclick -e 180 c:.`);
  }

  static async pressKey(key, timesToPress = 1) {
    for (let keyPresses = 0; timesToPress < keyPresses; keyPresses++) {
      shell.exec(`cliclick kp:${key}`);
      await pause(100, 200);
    }
  }

  static type(text) {
    shell.exec(`cliclick t:${text}`);
  }

  static moveMouse(x, y) {
    shell.exec(`cliclick -e 180 m:${x},${y}`);
  }

  static startMouseDrag(x = '.', y = '.') {
    shell.exec(`cliclick -e 180 dd:${x},${y}`);
  }

  static releaseMouseDrag(x = '.', y = '.') {
    shell.exec(`cliclick -e 180 du:${x},${y}`);
  }

  static getColorAtPosition(x, y) {
    return shell.exec(`cliclick cp:${x},${y}`).stdout.trim();
  }

  static getMousePosition() {
    return shell
      .exec(`cliclick p`)
      .stdout.replace('\n', '')
      .split(',')
      .map((val) => +val);
  }
}
