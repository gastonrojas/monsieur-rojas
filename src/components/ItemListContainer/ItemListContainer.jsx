import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

// import useProducts from '../../hooks/useProducts';

function ItemListContainer({ greetings = '' }) {
  // const { loading, productos } = useProducts();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      const dataBase = getFirestore();
      const queryProducts = query(
        collection(dataBase, 'items'),
        where('categoryID', '==', idCategoria)
      );

      getDocs(queryProducts).then((res) =>
        setProductos(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
      setLoading(false);
    } else {
      const dataBase = getFirestore();
      const queryProducts = collection(dataBase, 'items');

      getDocs(queryProducts).then((res) =>
        setProductos(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      );
      setLoading(false);
    }
  }, [idCategoria]);

  return (
    <div className="itemsContainer">
      <h2>{greetings}</h2>
      <div className="cards">
        {loading ? <h3>Cargando...</h3> : <ItemList prods={productos} />}
      </div>
    </div>
  );
}

export default ItemListContainer;
