import React from 'react'
import { useCartContext } from '../../context/cartContext';
import './Cart.css';

function Cart() {
  const { cartList, vaciarCarrito } = useCartContext();

  return (
    <div className="cartContainer">
      {cartList.map((prod) => (
        <div key={prod.id}>
          {prod.name} Cantidad: {prod.cantidad}

        </div>
      ))}
      <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
    </div>
  );
}

export default Cart
