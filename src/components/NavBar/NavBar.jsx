import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'
import { useCartContext } from '../../context/cartContext';

function NavBar() {
  const { totalItems } = useCartContext();

  return (
    <div>
      <header className="header">
        <img src={logo} className="app-logo" alt="logo" />
        <Link to="/"className='app-name'>
          <h2 translate="no">Monsieur Gaston</h2>
        </Link>
        <ul>
          <li>
            <Link to="/category/Natural">Productos naturales</Link>
          </li>
          <li>
            <Link to="/category/Organico">Productos organicos</Link>
          </li>
        </ul>
       
        <Link to="/cart">
          <div className="cartContainer">
            <CartWidget />

            <h3
              className={`${
                totalItems() === 0 ? 'coutnNotVisible' : 'countVisible'
              }`}
            >
              {totalItems()}
            </h3>
          </div>
        </Link>
      </header>
    </div>
  );
}

export default NavBar
