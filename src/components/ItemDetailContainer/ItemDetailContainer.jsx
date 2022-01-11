import React from 'react';
import useProducts from '../../hooks/useProducts';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer() {
  const { loading, productos } = useProducts();

  return (
    <div>
      {loading ? <h3>Loading ...</h3> : <ItemDetail product={productos[0]} />}
    </div>
  );
}

export default ItemDetailContainer;
