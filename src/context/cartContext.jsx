import { useState, useContext, createContext } from 'react';

const cartContext = createContext([]);

export function useCartContext() {
  return useContext(cartContext);
}

export const CartContextProvider = ({ children }) => {
  const [cartList, setcartList] = useState([]);

  function agregarAlCarrito(items) {
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

  console.log('cartList', cartList);
  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
