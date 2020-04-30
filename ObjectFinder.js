// import cv from 'opencv4nodejs';

export class ObjectFinder {
  async findExerciseDummy(image) {
    // // const screenMatrix = await cv.imdecodeAsync(image);
    // const screenMatrix = cv.imread('./screen-big.png');
    // await cv.imwriteAsync('./screen-color.jpg', screenMatrix);
    // // const mask = cv.imread('./dummy-big.png');
    // const dummyMatrix = cv.imread('./dummy1.png');
    // // const grayScreenMatrix = screenMatrix.cvtColor(cv.COLOR_BGR2GRAY);
    // let matched;
    // try {
    //   matched = screenMatrix.matchTemplate(dummyMatrix, cv.TM_CCORR_NORMED);
    // } catch (e) {
    //   console.log(e);
    // }

    // const minMax = matched.minMaxLoc();
    // const {
    //   maxLoc: { x, y },
    // } = minMax;
    // console.log(minMax);

    // // Draw bounding rectangle
    // screenMatrix.drawRectangle(
    //   new cv.Rect(x, y, dummyMatrix.cols, dummyMatrix.rows),
    //   new cv.Vec(0, 255, 0),
    //   2,
    //   cv.LINE_8
    // );

    // // Open result in new window
    // await cv.imwriteAsync('./matched.jpg', matched);
    // await cv.imwriteAsync('./newscreen.jpg', screenMatrix);
    // // cv.imshow('dummy', screenMatrix);
    // // cv.waitKey();

    // hardcoded values
    const position = { x: 729, y: 527 };

    return position;
  }
}

// const objectFinder = new ObjectFinder();
// objectFinder.findExerciseDummy();
