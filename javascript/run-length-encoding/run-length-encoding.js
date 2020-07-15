//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (data) => {
  return data.replace(/([a-zA-Z\s])\1+/g, function (match, p1) {
    return match.length + p1;
  });
};

export const decode = (compressed) => {
  return compressed.replace(/([1-9]|[1-9][0-9]+)([a-zA-Z\s])/g, function (
    match,
    len,
    p1
  ) {
    return p1.repeat(len);
  });
};
