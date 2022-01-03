export default class SpaceAge {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.mercuryAge = Math.round(age * 0.24);
    this.mercuryExpect = Math.round(expectancy * 0.24);
    this.venusAge = Math.round(age * 0.62);
    this.venusExpect = Math.round(expectancy * 0.62);
    this.marsAge = Math.round(age * 1.88);
    this.marsExpect = Math.round(expectancy * 1.88);
    this.jupiterAge = Math.round(age * 11.86);
    this.jupiterExpect = Math.round(expectancy * 11.86);
    if (this.expectancy > this.age) {
      this.yearsLeft = Math.round(expectancy - age);
    } else {
      this.yearsLeft = Math.round(age - expectancy);
    }
    this.mercuryLeft = Math.round(this.yearsLeft * 0.24);
    this.venusLeft = Math.round(this.yearsLeft * 0.62);
    this.marsLeft = Math.round(this.yearsLeft * 1.88);
    this.jupiterLeft = Math.round(this.yearsLeft * 11.86);
  }

}