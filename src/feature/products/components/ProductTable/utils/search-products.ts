import { Category } from '../../../types/api.ts';

function filterNodes(nodes: any, searchTerm: string) {
  return nodes
    .map((node: any) => {
      const matches = node.name.includes(searchTerm);

      const filteredChildren = filterNodes(node.nodes || [], searchTerm);

      if (matches || filteredChildren.length > 0) {
        return {
          ...node,
          nodes: filteredChildren,
        };
      }

      return null;
    })
    .filter((node: any) => node !== null);
}

export function searchProducts(
  categories: Category[],
  searchTerm: string,
): Category[] {
  if (searchTerm.length < 3) {
    return categories;
  }

  // @ts-ignore
  return categories
    .map((category) => {
      const filteredNodes = filterNodes(category.nodes, searchTerm);

      if (filteredNodes.length > 0) {
        return {
          ...category,
          nodes: filteredNodes,
        };
      }

      return null;
    })
    .filter((category) => category !== null);
}
