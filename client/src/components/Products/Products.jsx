import React from 'react'
import { data } from '../../constants/products.js';
import Card from '../Card/Card';

const Products = () => {

  const {products} = data;


  return (
    <div className='home'>
        <h2 className='title'>Todos los productos</h2>
        <div className='container-cards'>
          {products.map((product) => (
            <Card image={product.image} title={product.title} description={product.description} 
                  category={product.category} price={product.price} offertPrice={product.offertPrice} key={product.id}
                  stock={product.stock} quantity={product.quantity} id={product.id}
                />
          ))}
        </div>
    </div>
  )
}

export default Products