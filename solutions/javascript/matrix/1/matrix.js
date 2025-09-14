//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matStr) {
    const rowStrings = matStr.split("\n");
  
  this.matrix = rowStrings.map(rowString => {
    return rowString.split(" ").map(str => Number(str));
  });
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    const result = [];
    const numCols = this.matrix[0].length;

    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      const column = [];

      for (let rowIndex = 0; rowIndex < this.matrix.length; rowIndex++) {
        column.push(this.matrix[rowIndex][colIndex]);
      }

      result.push(column);
    }
    return result;

    // return this.matrix[0].map((_, colIndex) => 
    // this.matrix.map(row => row[colIndex])
    // );
  }
}
