//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const lowerSentence = sentence.toLowerCase();

  const letterSet = new Set();

  for (let char of lowerSentence) {
    if (char >= 'a' && char <= 'z') {
      letterSet.add(char);
    }
  }

  return letterSet.size === 26;
};
