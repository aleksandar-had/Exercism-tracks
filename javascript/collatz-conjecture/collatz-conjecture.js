//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if (number <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  let steps = 0;
  let current = number;
  while (current !== 1) {
    current = current % 2 === 0 ? current / 2 : current * 3 + 1;
    steps++;
  }
  return steps;
};
