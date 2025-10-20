export const valid = (cardNumber) => {
  // Strip spaces from the input
  const strippedNumber = cardNumber.replace(/ /g, '');
  
  // Check if length is 1 or less
  if (strippedNumber.length <= 1) {
    return false;
  }
  
  // Check if all characters are digits
  if (!/^\d+$/.test(strippedNumber)) {
    return false;
  }
  
  // Convert string to array of digits
  const digits = strippedNumber.split('').map(Number);
  
  // Process digits from right to left
  let sum = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    
    // Calculate position from the right (0-indexed)
    const positionFromRight = digits.length - 1 - i;
    
    // Double every second digit from the right (odd positions when 0-indexed)
    if (positionFromRight % 2 === 1) {
      digit *= 2;
      // If result is greater than 9, subtract 9
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
  }
  
  // Check if sum is evenly divisible by 10
  return sum % 10 === 0;
};
