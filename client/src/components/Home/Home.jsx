import React from 'react'
import './Home.css';
import { data } from '../../constants/products.js';
import Card from '../Card/Card';

const Home = () => {

  const {products} = data;

  const filterCards = products.filter((product) => product.offertPrice);

  console.log(filterCards);
  
  return (
    <div className='home'>
        <h2 className='title'>OFERTAS SEMANALES</h2>
        <div className='container-cards'>
          {filterCards.map((product) => (
            <Card image={product.image} title={product.title} description={product.description} 
                  category={product.category} price={product.price} offertPrice={product.offertPrice} key={product.id}
                  stock={product.stock} quantity={product.quantity} id={product.id}
                    />
          ))}
        </div>
    </div>
  )
}

export default Home;