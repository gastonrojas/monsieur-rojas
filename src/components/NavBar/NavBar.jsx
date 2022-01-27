import logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

function NavBar() {
  const { totalItems } = useCartContext();

  return (
    <div>
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">
          <h2 translate="no">Monsieur Gaston</h2>
        </Link>
        <ul>
          <li>
            <Link to="/categoria/Natural">Productos naturales</Link>
          </li>
          <li>
            <Link to="/categoria/Organico">Productos organicos</Link>
          </li>
        </ul>
        <button>Sign in</button>
        <button>Sing up</button>
        <div className="cartContainer">
          <Link to="/cart">
            <CartWidget />
          </Link>
          <h3
            className={`${
              totalItems() === 0 ? 'coutnNotVisible' : 'countVisible'
            }`}
          >
            {totalItems()}
          </h3>
        </div>
      </header>
    </div>
  );
}

export default NavBar
