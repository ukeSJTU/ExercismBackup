//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n == 0) {
    return [];
  }

  const triangle = [];

  for (let i = 0; i < n; i++) {
    const row = []

    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        row.push(1);
      } else {
        const leftValue = triangle[i - 1][j - 1];
        const rightValue = triangle[i - 1][j];
        row.push(leftValue + rightValue);
      }
    }
    triangle.push(row);
  }
  return triangle;
};
