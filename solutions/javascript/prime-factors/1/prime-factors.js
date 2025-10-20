export const primeFactors = (number) => {
  const factors = [];
  
  if (number <= 1) {
    return factors;
  }
  
  let remaining = number;
  
  // Check for factor 2
  while (remaining % 2 === 0) {
    factors.push(2);
    remaining = remaining / 2;
  }
  
  // Check for odd factors starting from 3
  // Only need to check up to sqrt(remaining)
  let divisor = 3;
  while (divisor * divisor <= remaining) {
    while (remaining % divisor === 0) {
      factors.push(divisor);
      remaining = remaining / divisor;
    }
    divisor += 2; // Skip even numbers
  }
  
  // If remaining > 1, then it's a prime factor itself
  if (remaining > 1) {
    factors.push(remaining);
  }
  
  return factors;
};
