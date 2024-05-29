import { randomFromRange, range } from '../utils/utils.ts';
import { Category } from '../types/api.ts';

export const testData: Category[] = range(0, 10).map((catId) => ({
  id: catId,
  catId,
  name: `category${catId}`,
  nodes: range(0, randomFromRange(3, 6)).map((subCatId) => ({
    id: catId + subCatId,
    subCatId: `${catId}${subCatId}`,
    name: `subcategory${subCatId}`,
    nodes: range(0, randomFromRange(50, 120)).map((index) => ({
      id: catId + subCatId + index,
      index: `${catId}${subCatId}${index}`,
      name: `${catId}${subCatId}${index}product`,
      quantity: randomFromRange(0, 300),
      price: randomFromRange(3, 50),
    })),
  })),
}));
