//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const allergens = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
};

export class Allergies {
  constructor(score) {
    this.allergens = [];

    for (const [name, code] of Object.entries(allergens)) {
      if (score & code) {
        this.allergens.push(name);
      }
    }
  }

  list = () => this.allergens;

  allergicTo(allergen) {
    return this.allergens.indexOf(allergen) !== -1;
  }
}