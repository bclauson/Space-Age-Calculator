export default class SpaceAge {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.mercuryAge = Math.round(age * 0.24);
  }

}