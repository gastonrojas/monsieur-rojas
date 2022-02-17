import { useCartContext } from '../../../context/cartContext';
import trash from '../../../assets/img/eliminar.svg'
import './CartItems.css'

function CartItems({passStep}) {
  const {
    cartList,
    vaciarCarrito,
    deleteItem,
    totalPrice,
    addOneItem,
    removeOneItem,
  } = useCartContext();

  

  return <div className="cart-container">
  {cartList.map((prod) => (
    <div key={prod.id} className='cart-item'>
      
      <h2>{prod.title}</h2><h2>Precio: ARS {prod.price}.  </h2> <h2>Cantidad:{' '}
      {prod.cantidad}.</h2>
      
      <button  onClick={() => addOneItem(prod.id, prod.stock)}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">+</span>
            </button>
      <button  onClick={() => removeOneItem(prod.id)}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">-</span>
            </button>
      <button onClick={() => deleteItem(prod.id)}><img alt='trash' src={trash}/></button>
    
    </div>
  ))}
  <div className='cart-bottom'>

  <h2>Total a pagar: ARS {totalPrice()}.</h2>
  <button  onClick={() => vaciarCarrito()}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Vaciar el carrito</span>
            </button>
  
  <button  onClick={()=>passStep(1)}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Checkout</span>
            </button>
 

  </div>
</div>;
}

export default CartItems;
