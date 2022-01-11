import logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'

function NavBar() {
    return (
        <div>
            <header className='header'>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>E-commerce</h2>
                <ul>
                    <li>
                        <a href='/#'>Home</a>
                    </li>
                    <li>
                        <a href="/#">Products</a>
                    </li>
                    <li>
                        <a href="/#">About</a>
                    </li>
                </ul>
                <button>Sign in</button>
                <button>Sing up</button>
                <CartWidget />
            </header>
        </div>
    )
}

export default NavBar
