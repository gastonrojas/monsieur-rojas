import React from 'react'
import { useCartContext } from '../../context/cartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  const {
    cartList,
    vaciarCarrito,
    deleteItem,
    totalPrice,
    addOneItem,
    removeOneItem,
  } = useCartContext();
console.log(cartList)
  return (
    <>
      {cartList.length === 0 ? (
        <div>
          <h2>No hay items en su carrito... </h2>
          <Link to="/">
            <button>Ir a comprar!</button>
          </Link>
        </div>
      ) : (
        <div className="cartContainer">
          {cartList.map((prod) => (
            <div key={prod.id}>
              {prod.name} Precio: ARS {prod.price}. Cantidad: {prod.cantidad}.
              <button onClick={() => addOneItem(prod.id, prod.stock)}>+</button>
              <button onClick={() => removeOneItem(prod.id)}>-</button>
              <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
            </div>
          ))}
          <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
          <h3>Total a pagar: ARS {totalPrice()}.</h3>
        </div>
      )}
    </>
  );
}

export default Cart
