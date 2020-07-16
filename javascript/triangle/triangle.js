//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c];
  }

  passTriangleInequality() {
    let [x, y, z] = this.sides.sort((a, b) => a - b);
    return x + y >= z;
  }

  countEqualSides() {
    if (new Set(this.sides).size === 1) {
      return 3;
    } else if (new Set(this.sides).size === 2) {
      return 2;
    }
    return 0;
  }

  triangleIsValid() {
    return (
      this.sides.every((side) => side > 0) && this.passTriangleInequality()
    );
  }

  isEquilateral() {
    return this.triangleIsValid() && this.countEqualSides() === 3;
  }

  isIsosceles() {
    return this.triangleIsValid() && this.countEqualSides() >= 2;
  }

  isScalene() {
    return this.triangleIsValid() && this.countEqualSides() === 0;
  }
}
