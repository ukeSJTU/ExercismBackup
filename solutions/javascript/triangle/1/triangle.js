//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  _isValidTriangle() {
    const [a, b, c] = this.sides;
    
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }
    
    return (a + b > c) && (a + c > b) && (b + c > a);
  }

  get isEquilateral() {
    if (!this._isValidTriangle()) {
      return false;
    }
    
    const [a, b, c] = this.sides;
    return a === b && b === c;
  }

  get isIsosceles() {
    if (!this._isValidTriangle()) {
      return false;
    }
    
    const [a, b, c] = this.sides;
    return a === b || b === c || a === c;
  }

  get isScalene() {
    if (!this._isValidTriangle()) {
      return false;
    }
    
    const [a, b, c] = this.sides;
    return a !== b && b !== c && a !== c;
  }
}
