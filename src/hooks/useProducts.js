import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';

const useProduct = (idDetail, idCategory) => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = (queryProducts) => {
      getDocs(queryProducts).then((res) => {
        setProducts(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
        setLoading(false);
      });
    };

    const dataBase = getFirestore();
    if (idDetail) {
      const queryProducts = doc(dataBase, 'items', idDetail);
      getDoc(queryProducts).then((resp) => {
        setProduct({ id: resp.id, ...resp.data() });
        setLoading(false);
      });
      return;
    }
    if (idCategory) {
      const queryProducts = query(
        collection(dataBase, 'items'),
        idCategory && where('categoryID', '==', idCategory)
      );
      getProducts(queryProducts);
      return;
    }
    const queryProducts = query(collection(dataBase, 'items'));
    getProducts(queryProducts);
  }, [idDetail, idCategory]);

  return {
    product,
    loading,
    products,
  };
};

export default useProduct;
