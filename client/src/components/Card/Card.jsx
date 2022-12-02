import React from 'react'
import './Card.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Card = ({ image, id, title, category, description, price, offertPrice, stock, cart, addToCart, quantity }) => {

    console.log(offertPrice);

    return (
        <div className='container-card'>
            { stock > 1 ? null : !stock ? <div className='stock'>SIN STOCK </div> : <div className='c-stock'>STOCK ÚNICO</div> }
            <h2>{title}</h2>
            <h4 style={{ color: 'rgb(140,140,140)' }}>{category.toUpperCase()}</h4>
            <div className='container-image'>
                <img src={image} alt='product' className={!stock ? 'sin-stock' : ''} />
            </div>
            <div className='card-details'>
                <p>{description}</p>
            </div>
            <div className='footer-card-button'>
                <div className='card-footer'>
                    <div className={ offertPrice ? null : 'price'}>{ offertPrice ? <strike>${price}</strike> : `$${price}`}</div>
                    { offertPrice ? (<div>${offertPrice}</div>) : null }
                </div>
                <button onClick={() => addToCart({ image, title, price, id, quantity })} disabled={!stock}><AddShoppingCartIcon style={{ maxWidth: '1rem', float: 'left', marginLeft: '.5rem' }} /> 
                    <span>AGREGAR AL CARRITO</span>
                </button>
            </div>
        </div>
    )
}

export default Card;
