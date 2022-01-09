import SpaceAge from './../src/SpaceAge.js';

describe('Space Age', () => {
  let reusableSpace;
  let aboveExpected;

  beforeEach(() => {
    reusableSpace = new SpaceAge(22,75);
    aboveExpected = new SpaceAge(82,75);
  });

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

  test('Should recieve the age and expected age in Jupiter Years', () => {
    expect(reusableSpace.jupiterAge).toEqual(261);
    expect(reusableSpace.jupiterExpect).toEqual(890);
  });

  test('Should recieve the years expected left to live', () => {
    expect(reusableSpace.yearsLeft).toEqual(53);
  });

  test('Should recieve the years expected left on each planet', () => {
    expect(reusableSpace.mercuryLeft).toEqual(13);
    expect(reusableSpace.venusLeft).toEqual(33);
    expect(reusableSpace.marsLeft).toEqual(100);
    expect(reusableSpace.jupiterLeft).toEqual(629);
  });

  test('Should recieve the years past expected age if above expectancy', () => {
    expect(aboveExpected.yearsLeft).toEqual(7);
  });

});
