//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  const aliquotSum = getAliquotSum(number);
  
  if (aliquotSum === number) {
    return 'perfect';
  } else if (aliquotSum > number) {
    return 'abundant';
  } else {
    return 'deficient';
  }
};

const getAliquotSum = (number) => {
  if (number === 1) {
    return 0;
  }

  let sum = 1;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      sum += i;

      if (i * i !== number) {
        sum += number / i;
      }
    }
  }
  return sum;
}