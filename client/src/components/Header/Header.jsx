import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';

const Header = () => {

    const [cart, setCart] = useState(2);

  return (
    <header>
        <div>
            <div>
                <div className='logo'>
                    <h1>Amadeo</h1>
                    <p>almacén natural</p>
                </div>
                <div className='shopping-cart'>
                    {!cart ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon /> }
                    <div className='number-cart'>{cart}</div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href='http://localhost:3000/'>Nosotros</a></li>
                    <li><a href='http://localhost:3000/'>Productos</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;