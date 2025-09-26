//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let result = '';

  if (number % 3 === 0) {
    result += "Pling";
  }

  if (number % 5 === 0) {
    result += "Plang";
  }

  if (number % 7 === 0) {
    result += "Plong";
  }

  if (result === '') {
    result = number.toString();
  }

  return result;
};
