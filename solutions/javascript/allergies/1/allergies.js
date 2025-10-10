//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergens = [
      { name: 'eggs', value: 1 },
      { name: 'peanuts', value: 2 },
      { name: 'shellfish', value: 4 },
      { name: 'strawberries', value: 8 },
      { name: 'tomatoes', value: 16 },
      { name: 'chocolate', value: 32 },
      { name: 'pollen', value: 64 },
      { name: 'cats', value: 128 }
    ];
  }

  list() {
    const allergies = [];
    
    for (const allergen of this.allergens) {
      if (this.score & allergen.value) {
        allergies.push(allergen.name);
      }
    }
    
    return allergies;
  }

  allergicTo(allergen) {
    const allergenData = this.allergens.find(item => item.name === allergen);
    
    if (!allergenData) {
      return false;
    }
    
    return Boolean(this.score & allergenData.value);
  }
}
