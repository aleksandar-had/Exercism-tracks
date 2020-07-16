//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c];
  }

  sideIsZeroNegative() {
    return this.sides.some((side) => side <= 0);
  }
  sidesAreEqual() {
    return new Set(this.sides).size === 1;
  }
  twoSidesAreEqual() {
    return new Set(this.sides).size === 2;
  }
  triangleIsViolating() {
    let sortedSides = this.sides.sort((a, b) => a - b);
    return sortedSides[0] + sortedSides[1] <= sortedSides[2];
  }

  isEquilateral() {
    if (this.sideIsZeroNegative() || this.triangleIsViolating()) {
      return false;
    } else if (this.sidesAreEqual()) {
      return true;
    }
    return false;
  }

  isIsosceles() {
    if (this.sideIsZeroNegative() || this.triangleIsViolating()) {
      return false;
    } else if (this.twoSidesAreEqual() || this.sidesAreEqual()) {
      return true;
    }
    return false;
  }

  isScalene() {
    if (
      this.sideIsZeroNegative() ||
      this.triangleIsViolating() ||
      this.twoSidesAreEqual() ||
      this.sidesAreEqual()
    ) {
      return false;
    }
    return true;
  }
}
