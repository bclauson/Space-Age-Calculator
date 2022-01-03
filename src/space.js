export default class SpaceAge {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.mercuryAge = Math.round(age * 0.24);
    this.mercuryExpect = Math.round(expectancy * 0.24);
    this.venusAge = Math.round(age * 0.62);
    this.venusExpect = Math.round(expectancy * 0.62);

  }

}