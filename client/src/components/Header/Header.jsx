import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {

    const [cart, setCart] = useState(1);
    const [showCart, setShowCart] = useState(false);
    console.log(showCart);

  return (
    <header>
        <div>
            <div>
                <div className='logo'>
                    <Link to='/'>
                        <h1>Amadeo</h1>
                        <p>almacén natural</p>
                    </Link>
                </div>
                <div className='shopping-cart'>
                    {!cart ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon onClick={() => setShowCart(true)} /> }
                    {cart ? <div className='number-cart'>{cart}</div> : null}
                </div>
            </div>
            {showCart ?
                <div className='background-cart' onClick={() => setShowCart(false)}>
                    <Cart />
                </div> : null}
            <nav>
                <ul>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;