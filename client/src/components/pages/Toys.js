import React, { useState } from 'react';
import ToyCard from '../ToyCard';
import Cart from '../../Unused/Cart';

export default function Toys() {

  const [cartItems, setCartItems] = useState([]);

  const toysArray = [
    {
      "id": 1,
      "name": "Tug Toy!",
      "image": "/images/tug-toy.png",
      "description": "Rope tug toy with a extra durable ball on the end and a handle.",
      "height": "100%",
      "width": "100%",
      "price": "$10.99"
    }
  ]

  const addToCart = (toy) => {
    setCartItems([...cartItems, toy]);
  };
  return (
    <div>
      <h2 className='toys-title'>Toys</h2>
      <div className="card-wrap">
        {toysArray.map((toy) => (
          <ToyCard key={toy.id} toy={toy} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}