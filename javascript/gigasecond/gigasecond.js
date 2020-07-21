//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let gs = 1 * 10 ** 9;

export const gigasecond = (date) => {
  let after = date.getTime() + gs * 1000; // pre-UNIX epoch times are handled without issues
  return new Date(after);
};
