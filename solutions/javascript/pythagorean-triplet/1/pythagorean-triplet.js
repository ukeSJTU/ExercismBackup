export function triplets({ minFactor = 1, maxFactor, sum }) {
  const results = [];
  
  // If maxFactor is not provided, calculate a reasonable upper bound
  const max = maxFactor !== undefined ? maxFactor : Math.floor(sum / 2);
  
  // Iterate through possible values of a
  // a must be less than sum/3 (since a < b < c and a+b+c=sum)
  const maxA = Math.min(max, Math.floor(sum / 3));
  
  for (let a = minFactor; a <= maxA; a++) {
    // For a given a and sum, we can derive b using the Pythagorean theorem
    // a² + b² = c² and a + b + c = sum
    // Therefore: c = sum - a - b
    // Substituting: a² + b² = (sum - a - b)²
    // Solving for b: b = (sum² - 2*sum*a) / (2*sum - 2*a)
    
    // But it's more efficient to iterate and check
    const maxB = Math.min(max, Math.floor((sum - a) / 2));
    
    for (let b = a + 1; b <= maxB; b++) {
      const c = sum - a - b;
      
      // Check all constraints
      if (c > b && 
          c >= minFactor && 
          c <= max && 
          a * a + b * b === c * c) {
        results.push(new Triplet(a, b, c));
      }
    }
  }
  
  return results;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
