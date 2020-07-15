//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let digits = number.toString();
  let sum = 0;
  for (let i = 0, l = digits.length; i < l; i++) {
    sum += Number(digits[i]) ** l;
  }
  return sum === number;
};
