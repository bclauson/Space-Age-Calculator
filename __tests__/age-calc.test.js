import SpaceAge from './../src/space.js';

describe('Space Age', () => {
  let reusableSpace;

  beforeEach(() => {
    reusableSpace = new SpaceAge(22,75);
  })

  test('Should construct a SpaceAge object with constructor', () => {
    console.log(reusableSpace);
  });

});