import { pause } from './utils/index.js';
import { System } from './System.js';

export class Client {
  static hasExcessiveMana() {
    const excessiveManaPosition = { x: 113, y: 1186 };
    const excessiveManaColor = '67 64 192';
    const colorExcessiveManaPosition = System.getColorAtPosition(
      excessiveManaPosition.x,
      excessiveManaPosition.y
    );

    return colorExcessiveManaPosition === excessiveManaColor;
  }

  static eatFood() {
    System.type(process.env.FOOD_HK);
  }

  static castRuneSpell() {
    System.type(process.env.RUNE_HK);
  }

  static equipRing() {
    System.type(process.env.RING_HK);
  }

  static equipSoftBoots() {
    System.type(process.env.SOFT_BOOTS_HK);
  }

  static castManaDumpSpell() {
    System.type(process.env.MANA_DUMP_HK);
  }

  static async dumpMana() {
    for (let i = 0; i < 5; i++) {
      Client.castManaDumpSpell();
      await pause(2100, 2400);
    }
  }

  static isLoggedIn() {
    const chatBoxPosition = { x: 113, y: 1105 };
    const chatBoxColor = '54 54 54';
    const colorAtChatBoxPosition = System.getColorAtPosition(chatBoxPosition.x, chatBoxPosition.y);

    return colorAtChatBoxPosition === chatBoxColor;
  }

  static isInCharacterSelectionScreen() {
    return System.getColorAtPosition(877, 443) === '54 54 54';
  }

  static async logIn() {
    await System.pressKey('esc', 3);
    await pause(200, 400);
    System.type(process.env.PASSWORD);
    await pause(200, 400);
    await System.pressKey('enter');
    await pause(5000, 10000);

    if (!Client.isInCharacterSelectionScreen()) {
      await pause(200, 400);
      await Client.logIn();
      return;
    }

    await System.pressKey('arrow-down', process.env.CHARACTER_POSITION - 1);
    await pause(200, 400);
    await System.pressKey('enter');
    await pause(8000, 10000);

    if (!Client.isLoggedIn()) {
      await pause(200, 400);
      await Client.logIn();
    }
  }
}
