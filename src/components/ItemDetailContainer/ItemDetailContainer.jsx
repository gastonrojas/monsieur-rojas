// import useProducts from '../../hooks/useProducts';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer() {
  // const { loading, productos, idDetalle } = useProducts();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idDetalle } = useParams();

  useEffect(() => {
    const dataBase = getFirestore();
    const queryProducts = doc(dataBase, 'items', idDetalle);

    getDoc(queryProducts).then((resp) => {
      setProductos({ id: resp.id, ...resp.data() });
    });
    setLoading(false);
  }, [idDetalle]);

  return (
    <div>
      {loading ? <h3>Loading ...</h3> : <ItemDetail product={productos} />}
    </div>
  );
}

export default ItemDetailContainer;
