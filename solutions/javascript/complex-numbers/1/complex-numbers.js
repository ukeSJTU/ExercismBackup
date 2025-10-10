//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real = 0, imag = 0) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(other) {
    return new ComplexNumber(this._real + other._real, this._imag + other._imag);
  }

  sub(other) {
    return new ComplexNumber(this._real - other._real, this._imag - other._imag);
  }

  div(other) {
    const denominator = other._real * other._real + other._imag * other._imag;
    
    if (denominator === 0) {
      throw new Error('Division by zero');
    }
    
    const real = (this._real * other._real + this._imag * other._imag) / denominator;
    const imag = (this._imag * other._real - this._real * other._imag) / denominator;
    
    return new ComplexNumber(real, imag);
  }

  mul(other) {
    const real = this._real * other._real - this._imag * other._imag;
    const imag = this._imag * other._real + this._real * other._imag;
    return new ComplexNumber(real, imag);
  }

  get abs() {
    return Math.sqrt(this._real * this._real + this._imag * this._imag);
  }

  get conj() {
    return new ComplexNumber(this._real, 0 - this._imag);
  }

  get exp() {
    const expReal = Math.exp(this._real);
    const real = expReal * Math.cos(this._imag);
    const imag = expReal * Math.sin(this._imag);
    
    return new ComplexNumber(real, imag);
  }
}
