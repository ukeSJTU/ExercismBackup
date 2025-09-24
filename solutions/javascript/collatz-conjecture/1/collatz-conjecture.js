//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if (number <= 0 || !Number.isInteger(number)) {
    throw new Error('Only positive integers are allowed');
  }
  
  let cnt = 0;

  while (number != 1) {
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = 3 * number + 1;
    }
    cnt = cnt + 1;
  }

  return cnt;
};
