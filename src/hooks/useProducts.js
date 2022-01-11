import { useEffect, useState } from 'react';

import { getFetch } from '../helpers';


const useProducts = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => console.error('error', err));
  }, []);

  return {
    productos,
    loading,
  };
};

export default useProducts;
