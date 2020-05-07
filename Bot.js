import takeScreenshot from 'screenshot-desktop';
import { ObjectFinder } from './ObjectFinder.js';
import { pause } from './utils/index.js';
import { System } from './System.js';
import { Client } from './Client.js';

const FIVE_MINUTES = 300000;

export class Bot {
  async trainSkills() {
    console.log('Starting exercise training script...');
    await pause(4000);

    const trainSkills = async () => {
      if (!Client.isLoggedIn()) {
        await Client.logIn();
      }

      const screenshot = await takeScreenshot();
      const exerciseDummyPosition = await ObjectFinder.findExerciseDummy(screenshot);
      System.moveMouse(process.env.TRAINING_WEAPON_HK_POS_X, process.env.TRAINING_WEAPON_HK_POS_Y);
      await pause(1000, 2000);
      System.click();
      await pause(1000, 2000);
      System.moveMouse(exerciseDummyPosition.x, exerciseDummyPosition.y);
      await pause(1000, 2000);
      System.click();
    };

    trainSkills();
    setInterval(trainSkills, 60000);
  }

  async makeRunes() {
    console.log('Starting auto rune script...');
    await pause(4000);
    let lastManaDumpTimestamp = new Date();

    const makeRunes = async () => {
      if (!Client.isLoggedIn()) {
        await Client.logIn();
      }

      await pause(1000, 1400);
      Client.eatFood();
      await pause(1000, 1400);
      Client.castRuneSpell();
      await pause(1000, 1400);
      Client.equipRing();
      await pause(1000, 1400);
      Client.equipSoftBoots();
      await pause(1000, 1400);

      const now = new Date();
      if (now - lastManaDumpTimestamp >= FIVE_MINUTES) {
        await Client.dumpMana();
        lastManaDumpTimestamp = new Date();
      }
    };

    makeRunes();
    setInterval(makeRunes, 30000);
  }
}
