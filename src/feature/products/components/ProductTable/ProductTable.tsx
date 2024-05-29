import * as React from 'react';

import { Table, Body, Row } from '@table-library/react-table-library/table';

import { useTree, CellTree } from '@table-library/react-table-library/tree';
import { useTheme } from '@table-library/react-table-library/theme';
import { Category } from '../../types/api.ts';
import { getTheme } from '@table-library/react-table-library/baseline';
import TextInput from '../../../../componennts/TextInput';
import { ChangeEvent } from 'react';
import { searchProducts } from './utils/search-products.ts';

interface Props {
  categories: Category[];
}

const ProductTable = ({ categories }: Props) => {
  const theme = useTheme(getTheme());
  const [search, setSearch] = React.useState('');

  const data = {
    nodes: searchProducts(categories, search.toLowerCase()) ?? [],
  };

  const tree = useTree(data);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <TextInput value={search} onChange={handleSearch} />
      <Table theme={theme} data={data} tree={tree}>
        {(tableList: any[]) => (
          <Body>
            {tableList.map((item, i) => (
              <Row key={i} item={item}>
                <CellTree item={item}>
                  {item.index} {item.name} {item.quantity} {item.price}
                </CellTree>
              </Row>
            ))}
          </Body>
        )}
      </Table>
    </>
  );
};

export default ProductTable;
