import { useState, useContext, createContext } from 'react';
import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from 'firebase/firestore';

import CartForm from '../components/Cart/CartForm/CartForm';
import CartItems from '../components/Cart/CartItems/CartItems';
import EmptyCart from '../components/Cart/EmptyCart/EmptyCart';
import Spinner from '../components/Loader';
import Tally from '../components/Cart/Tally';


const cartContext = createContext([]);

export function useCartContext() {
  return useContext(cartContext);
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setcartList] = useState([]);
  const [idOrder, setidOrder] = useState(null);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  function addToCart(items) {
    const index = cartList.findIndex((i) => i.id === items.id);

    if (index > -1) {
      const oldQuantity = cartList[index].cantidad;
      let newQuantity = oldQuantity + items.cantidad;
      cartList[index].cantidad = newQuantity;
      setcartList([...cartList]);
    } else {
      setcartList([...cartList, items]);
    }
  }

  function vaciarCarrito() {
    setcartList([]);
  }

  function deleteItem(id) {
    const filtrarCart = cartList.filter((prod) => prod.id !== id);
    setcartList(filtrarCart);
  }

  const totalPrice = () => {
    const totalCarrito = cartList.reduce(
      (prev, current) => prev + current.price * current.cantidad,
      0
    );
    return totalCarrito;
  };

  const totalItems = () => {
    const totalItemsEnCarrito = cartList.reduce(
      (prev, current) => prev + current.cantidad,
      0
    );
    return totalItemsEnCarrito;
  };

  const addOneItem = (id, stock) => {
    const index = cartList.findIndex((i) => i.id === id);
    if (cartList[index].cantidad < stock) {
      cartList[index].cantidad++;
      console.log(cartList[index].cantidad);
      setcartList([...cartList]);
    }
  };

  const removeOneItem = (id) => {
    const index = cartList.findIndex((i) => i.id === id);

    if (cartList[index].cantidad === 1) {
      deleteItem(id);
    } else {
      cartList[index].cantidad--;
      console.log(cartList[index].cantidad);
      setcartList([...cartList]);
    }
  };

  const placeOrder = async (e, formValues) => {
    e.preventDefault();
    setStep(2);

    let order = {};
    const newBuyer = { ...formValues };
    order.date = Timestamp.fromDate(new Date());
    order.buyer = newBuyer;
    order.total = totalPrice();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.title;
      const precio = cartItem.precio * cartItem.cantidad;
      const cantidad = cartItem.cantidad;

      return { id, nombre, precio, cantidad };
    });

    // guardar la orden en firestore
    const db = getFirestore();

    const oredenCollection = collection(db, 'ordenes');

    await addDoc(oredenCollection, order) // setDoc
      .then((resp) => {
        setLoading(true);
        setidOrder(resp.id);
        vaciarCarrito();
      })
      .catch((err) => console.log(err));
  };

  function cartSteps() {
    switch (step) {
      case 0:
        if (cartList.length === 0) {
          return <EmptyCart />;
        } else {
          return <CartItems passStep={setStep} />;
        }

      case 1:
        return <CartForm placeOrder={placeOrder} />;

      case 2:
        return loading ? <Tally id={idOrder} /> : <Spinner />;

      default:
        return <EmptyCart />;
    }
  }
  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        vaciarCarrito,
        deleteItem,
        totalPrice,
        totalItems,
        addOneItem,
        removeOneItem,
        cartSteps,
        setStep,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
