
import { useParams } from 'react-router-dom';
import Spinner from '../Loader';

import './ItemListContainer.css';
import useProduct from '../../hooks/useProducts';
import ItemList from './ItemList/ItemList';


function ItemListContainer({ greetings}) {
  const { idCategory } = useParams();
  const { loading, products } = useProduct(null, idCategory);

  return (
    <div className="itemsContainer">
      <h2>{greetings}</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="cards">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
