/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

export const square = (n) => {
  if (n < 1 || n > 64) {
    throw new Error('square must be between 1 and 64');
  }
  
  // The number of grains on square n is 2^(n-1)
  // Using BigInt to handle large numbers
  return 2n ** BigInt(n - 1);
};

export const total = () => {
  // Total grains on all 64 squares is 2^64 - 1
  // This is the sum of geometric series: 2^0 + 2^1 + 2^2 + ... + 2^63
  return 2n ** 64n - 1n;
};
