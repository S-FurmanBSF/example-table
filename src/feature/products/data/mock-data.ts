import { randomFromRange, range } from '../utils/utils.ts';
import { Category } from '../types/api.ts';

export const testData: Category[] = range(0, 10).map((catId) => ({
  catId,
  name: `category${catId}`,
  subcategories: range(0, randomFromRange(3, 6)).map((subCatId) => ({
    subCatId: `${catId}${subCatId}`,
    name: `subcategory${subCatId}`,
    products: range(0, randomFromRange(50, 120)).map((index) => ({
      index: `${catId}${subCatId}${index}`,
      name: `${catId}${subCatId}${index}product`,
      quantity: randomFromRange(0, 300),
      price: randomFromRange(3, 50),
    })),
  })),
}));
