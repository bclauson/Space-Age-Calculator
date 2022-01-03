import SpaceAge from './../src/space.js';

describe('Space Age', () => {
  let reusableSpace;

  beforeEach(() => {
    reusableSpace = new SpaceAge(22,75);
  })

  test('Should construct a SpaceAge object with constructor', () => {
    console.log(reusableSpace);
  });

  test('Should recieve the age and expected age', () => {
    expect(reusableSpace.age).toEqual(22);
    expect(reusableSpace.expectancy).toEqual(75);
  });

});