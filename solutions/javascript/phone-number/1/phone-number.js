export const clean = (phoneNumber) => {
  if (!phoneNumber) {
    throw new Error('Input is required');
  }

  // Remove all punctuation and spaces
  let cleaned = phoneNumber.replace(/[\s\.\-\(\)]/g, '');
  
  // Check for invalid characters (letters)
  if (/[a-zA-Z]/.test(cleaned)) {
    throw new Error('Letters not permitted');
  }
  
  // Remove + sign if present
  cleaned = cleaned.replace(/\+/g, '');
  
  // Check for other invalid characters (punctuation)
  if (/[^0-9]/.test(cleaned)) {
    throw new Error('Punctuations not permitted');
  }
  
  // Check length constraints
  if (cleaned.length < 10) {
    throw new Error('Must not be fewer than 10 digits');
  }
  
  if (cleaned.length > 11) {
    throw new Error('Must not be greater than 11 digits');
  }
  
  // Handle country code
  if (cleaned.length === 11) {
    // Check if it starts with 1 (valid country code)
    if (cleaned[0] !== '1') {
      throw new Error('11 digits must start with 1');
    }
    // Remove the country code
    cleaned = cleaned.substring(1);
  }
  
  // Validate area code (first digit must be 2-9)
  if (cleaned[0] === '0') {
    throw new Error('Area code cannot start with zero');
  }
  if (cleaned[0] === '1') {
    throw new Error('Area code cannot start with one');
  }
  
  // Validate exchange code (fourth digit must be 2-9)
  if (cleaned[3] === '0') {
    throw new Error('Exchange code cannot start with zero');
  }
  if (cleaned[3] === '1') {
    throw new Error('Exchange code cannot start with one');
  }
  
  return cleaned;
};
