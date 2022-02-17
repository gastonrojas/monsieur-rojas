import { Link } from 'react-router-dom';
import '../Cart/CartForm/cartForm.css'

function Tally({ id }) {
 

  return <div className='cart-checkout'>
    <h1>El id de la orden generada es: {id}</h1>
    <Link to="/">
    
    <button type='submit'>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Volver al inicio</span>
            </button>
  </Link>
  </div>;
}

export default Tally;
