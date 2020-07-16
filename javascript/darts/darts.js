//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  if (!(Number(x) === x && Number(y) === y)) return null;

  const distToCenter = Math.sqrt(x ** 2 + y ** 2);
  if (distToCenter <= 1) return 10;
  else if (distToCenter <= 5) return 5;
  else if (distToCenter <= 10) return 1;
  return 0;
};
