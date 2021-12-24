import React from 'react'
import cart from '../../assets/carrito.svg'

function CartWidget() {
    return (
        <div>
            <img className='cart' src= {cart} alt='cart' />
        </div>
    )
}

export default CartWidget
