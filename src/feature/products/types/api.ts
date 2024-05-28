export interface Category {
  catId: number;
  name: string;
  subcategories: SubCategory[];
}

export interface SubCategory {
  subCatId: string;
  name: string;
  products: Product[];
}

export interface Product {
  index: string;
  name: string;
  quantity: number;
  price: number;
}
