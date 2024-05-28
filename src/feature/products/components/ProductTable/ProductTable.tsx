import { Wrapper } from './ProductTable.styled.ts';
import { Category } from '../../types/api.ts';

interface Props {
  categories: Category[];
}

const ProductTable = ({ categories }: Props) => {
  return <Wrapper>Hello World</Wrapper>;
};

export default ProductTable;
