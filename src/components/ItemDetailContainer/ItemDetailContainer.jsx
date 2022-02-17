import { useParams } from 'react-router-dom';

import Spinner from '../Loader';
import useProduct from '../../hooks/useProducts';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { idDetail } = useParams();
  const { product, loading } = useProduct(idDetail, null);

  return <div>{loading ? <Spinner /> : <ItemDetail product={product} />}</div>;
};

export default ItemDetailContainer;
