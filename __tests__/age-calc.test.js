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

  test('Should recieve the age and expected age in Mercury years', () => {
    expect(reusableSpace.mercuryAge).toEqual(5);
    expect(reusableSpace.mercuryExpect).toEqual(18);
  });

  test('Should recieve the age and expected age in Venus Years', () => {
    expect(reusableSpace.venusAge).toEqual(14);
    expect(reusableSpace.venusExpect).toEqual(47);
  });

  test('Should recieve the age and expected age in Mars Years', () => {
    expect(reusableSpace.marsAge).toEqual(41);
    expect(reusableSpace.marsExpect).toEqual(141);

  });
});
