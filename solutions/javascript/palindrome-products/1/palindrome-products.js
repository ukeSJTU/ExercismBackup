export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    return new Palindromes(minFactor, maxFactor);
  }

  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  isPalindrome(n) {
    const s = String(n);
    return s === s.split('').reverse().join('');
  }

  findAll() {
    if (this.min > this.max) {
      throw new Error('min must be <= max');
    }

    const map = new Map();

    for (let i = this.min; i <= this.max; i++) {
      for (let j = i; j <= this.max; j++) {
        const p = i * j;
        if (this.isPalindrome(p)) {
          if (!map.has(p)) map.set(p, []);
          map.get(p).push([i, j]);
        }
      }
    }

    return map;
  }

  get smallest() {
    const map = this.findAll();
    if (map.size === 0) return { value: null, factors: [] };
    
    const min = Math.min(...map.keys());
    return { value: min, factors: map.get(min) };
  }

  get largest() {
    const map = this.findAll();
    if (map.size === 0) return { value: null, factors: [] };
    
    const max = Math.max(...map.keys());
    return { value: max, factors: map.get(max) };
  }
}
