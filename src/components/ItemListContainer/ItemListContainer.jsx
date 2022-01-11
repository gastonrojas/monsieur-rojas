import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';

import useProducts from '../../hooks/useProducts';

function ItemListContainer({ greetings = '' }) {
  const { loading, productos } = useProducts();

  return (
    <div className="itemsContainer">
      <h2>{greetings}</h2>
      <div className="cards" >
        {loading ? (
          <h3>Cargando...</h3>
        ) : (
          <ItemList prods={productos} />
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
