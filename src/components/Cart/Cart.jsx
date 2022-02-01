import { useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from 'firebase/firestore';
import Resumen from './Resumen';

function Cart() {
  const {
    cartList,
    vaciarCarrito,
    deleteItem,
    totalPrice,
    addOneItem,
    removeOneItem,
  } = useCartContext();
  const [idOrden, setidOrden] = useState('');
  const [condicional, setcondicional] = useState(false);

  const realizarCompra = async (e) => {
    e.preventDefault();

    let orden = {};

    orden.date = Timestamp.fromDate(new Date());
    orden.buyer = {
      name: 'Gaston',
      email: 'grojas89@hotmail.com',
      phone: 15612313211,
    };
    orden.total = totalPrice();
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.title;
      const precio = cartItem.precio * cartItem.cantidad;
      const cantidad = cartItem.cantidad;

      return { id, nombre, precio, cantidad };
    });

    // guardar la orden en firestore
    const db = getFirestore();

    const oredenCollection = collection(db, 'ordenes');
    await addDoc(oredenCollection, orden) // setDoc
      .then((resp) => setidOrden(resp.id), setcondicional(true))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {condicional ? (
        <Resumen id={idOrden} />
      ) : (
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
                  {prod.name} Precio: ARS {prod.price}. Cantidad:{' '}
                  {prod.cantidad}.
                  <button onClick={() => addOneItem(prod.id, prod.stock)}>
                    +
                  </button>
                  <button onClick={() => removeOneItem(prod.id)}>-</button>
                  <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
                </div>
              ))}
              <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
              <h3>Total a pagar: ARS {totalPrice()}.</h3>
              <button onClick={realizarCompra}>Checkout</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
