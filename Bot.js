import takeScreenshot from 'screenshot-desktop';
import { ObjectFinder } from './ObjectFinder.js';
import { pause, click, pressKey, moveMouse } from './utils.js';

export class Bot {
  constructor() {
    this.objectFinder = new ObjectFinder();
    this.settings = {
      exerciseWeaponKey: 'f1',
    };
  }

  async trainSkills() {
    console.log('Starting exercise training script...');
    await pause(4000);

    const trainSkills = async () => {
      const screenshot = await takeScreenshot();
      const exerciseDummyPosition = await this.objectFinder.findExerciseDummy(screenshot);
      moveMouse(35, 986);
      await pause(1000, 2000);
      click();
      // pressKey(this.settings.exerciseWeaponKey);
      await pause(1000, 2000);
      moveMouse(exerciseDummyPosition.x, exerciseDummyPosition.y);
      await pause(1000, 2000);
      click();
    };

    trainSkills();
    setInterval(trainSkills, 60000);
  }
}
