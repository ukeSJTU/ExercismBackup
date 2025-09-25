//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (seq1, seq2) => {
  if (seq1.length !== seq2.length) {
    throw new Error('strands must be of equal length')
  }

  let hammingDistance = 0;
  
  for (let i = 0; i < seq1.length; i++) {
    if (seq1[i] !== seq2[i]) {
      hammingDistance++;
    }
  }
  
  return hammingDistance;
};
