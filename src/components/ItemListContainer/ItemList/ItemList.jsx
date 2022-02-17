import Item from '../Item/Item';

function ItemList({ products}) {
  return products.map((product) => <Item key={product.id} prod={product} />);
}

export default ItemList;
