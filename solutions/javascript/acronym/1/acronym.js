//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  const withoutApostrophes = phrase.replace(/'/g, '');

  const words = withoutApostrophes.match(/[a-zA-Z]+/g);

  if (!words) {
    return '';
  }

  const acronym = words
    .map(word => word[0].toUpperCase())
    .join('');

  return acronym;
};
