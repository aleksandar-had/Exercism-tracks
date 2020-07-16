//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ARAB_TO_ROMAN = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export const toRoman = (arabicNumber) => {
  let romanNumber = "";
  let number = arabicNumber;
  for (const [arabicValue, romanValue] of ARAB_TO_ROMAN) {
    while (number >= arabicValue) {
      romanNumber += romanValue;
      number -= arabicValue;
    }
  }
  return romanNumber;
};
