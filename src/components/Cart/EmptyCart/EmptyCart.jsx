import { Link } from 'react-router-dom';
import '../CartForm/cartForm.css'

function EmptyCart() {
  return <div className='cart-checkout'>
  <h2>No hay items en su carrito... </h2>
  <Link to="/">
    
    <button type='submit'>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Ir a comprar!</span>
            </button>
  </Link>


</div>;
}

export default EmptyCart;
