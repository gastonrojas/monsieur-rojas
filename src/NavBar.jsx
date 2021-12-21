import React from 'react'
import logo from './logo.svg';
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <header className='header'>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Home</p>
                <p>Products</p>
                <p>About</p>
                <button>Sign in</button>
                <button>Sing up</button>
        
            </header>
        </div>
    )
}

export default NavBar
