export interface Category {
  id: number;
  catId: number;
  name: string;
  nodes: SubCategory[];
}

export interface SubCategory {
  id: number;
  subCatId: string;
  name: string;
  nodes: Product[];
}

export interface Product {
  id: number;
  index: string;
  name: string;
  quantity: number;
  price: number;
}
