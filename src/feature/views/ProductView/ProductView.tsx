import { Wrapper } from './ProductView.styled.ts';
import { useEffect, useState } from 'react';
import { Category } from '../../products/types/api.ts';
import { testData } from '../../products/data/mock-data.ts';
import ProductTable from '../../products/components/ProductTable';

const ProductView = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchData = () => {
    setCategories(testData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <ProductTable categories={categories} />
    </Wrapper>
  );
};

export default ProductView;
