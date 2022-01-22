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

  function deleteItem(id) {
      const filtrarCart = cartList.filter(prod => prod.id !== id)
      setcartList(filtrarCart)
      }

  const totalPrice = () => {
    const totalCarrito = cartList.reduce((prev, current) => prev + current.price * current.cantidad, 0 )
    return totalCarrito
  }

  const totalItems = () => {
    const totalItemsEnCarrito = cartList.reduce((prev, current) => prev + current.cantidad, 0 )
    return totalItemsEnCarrito
  }

  const addOneItem = (id, stock) => {
    
    const index = cartList.findIndex((i) => i.id === id);
    if (cartList[index].cantidad < stock) {

        cartList[index].cantidad ++
        console.log(cartList[index].cantidad)
        setcartList([...cartList])
    }

  }

  const removeOneItem = (id) => {
    const index = cartList.findIndex((i) => i.id === id);

    if (cartList[index].cantidad === 1){
        deleteItem(id)
    } else {

        cartList[index].cantidad --
        console.log(cartList[index].cantidad)
        setcartList([...cartList])
    }
  }

  console.log('cartList', cartList);
  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        deleteItem,
        totalPrice,
        totalItems,
        addOneItem,
        removeOneItem
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
