//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const result = {};

  for (const [score, letters] of Object.entries(old)) {
    const points = parseInt(score);

    for (const letter of letters) {
      result[letter.toLowerCase()] = points;
    }
  }
  
  return result;
};
