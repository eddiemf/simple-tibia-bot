export class ObjectFinder {
  static async findExerciseDummy(image) {
    const position = { x: process.env.DUMMY_POS_X, y: process.env.DUMMY_POS_Y };

    return position;
  }
}
