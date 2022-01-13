import useProducts from '../../hooks/useProducts';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer() {
  const { loading, productos, idDetalle } = useProducts();

  const product = productos.find(prod => prod.id === idDetalle) ?? {}
  

  return (
    <div>
      {loading ? <h3>Loading ...</h3> : <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;
