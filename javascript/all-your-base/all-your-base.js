//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function checkInput(digits, inputBase, outputBase) {
  if (
    inputBase <= 1 ||
    inputBase == undefined ||
    !Number.isInteger(inputBase)
  ) {
    throw new Error("Wrong input base");
  }
  if (
    outputBase <= 1 ||
    outputBase == undefined ||
    !Number.isInteger(outputBase)
  ) {
    throw new Error("Wrong output base");
  }
  if (
    digits.length === 0 ||
    digits.some((digit) => digit < 0 || digit >= inputBase) ||
    (digits.length > 1 && digits[0] === 0)
  ) {
    throw new Error("Input has wrong format");
  }
  return;
}

export const convert = (digits, inputBase, outputBase) => {
  checkInput(digits, inputBase, outputBase);

  if (digits.length === 1 && digits[0] === 0) return [0];
  let numBaseTen = digits.reduce((val, digit) => val * inputBase + digit, 0);
  let result = [];
  while (numBaseTen > 0) {
    result.push(numBaseTen % outputBase);
    numBaseTen = Math.floor(numBaseTen / outputBase);
  }
  return result.reverse();
};
