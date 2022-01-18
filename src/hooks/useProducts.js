import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getFetch } from '../helpers';

const useProducts = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria, idDetalle } = useParams();


  useEffect(() => {
    if (idCategoria) {
      getFetch
        .then((data) => {
          const productsFilter = data.filter((prod) => prod.categoria === idCategoria) ?? []
          setProductos(productsFilter);
          setLoading(false);
          return
        })
        .catch((err) => console.error('error', err));
    } else {
      getFetch
        .then((data) => {
          setProductos(data);
          setLoading(false);
        })
        .catch((err) => console.error('error', err));
    }
  }, [idCategoria]);

  return {
    productos,
    loading,
    idDetalle,
  };
};

export default useProducts;
