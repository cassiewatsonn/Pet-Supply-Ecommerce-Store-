import React, { useState } from 'react';
import TreatCard from '../TreatCard';
import Cart from '../../Unused/Cart';

export default function Treats() {
  const [cartItems, setCartItems] = useState([]);

  const treatsArray = [
    {
      "id": 1,
      "name": "Peanut Butter Banana Cookies!",
      "image": "/images/pb-cookies.png",
      "description": "Rope tug toy with a extra durable ball on the end and a handle.",
      "ingredients": "Natural peanut butter, banana, oats",
      "height": "100%",
      "width": "100%",
      "price": "$8.99"
    }
  ];

  const addToCart = (treat) => {
    setCartItems([...cartItems, treat]);
  };

  return (
    <div>
      <h2 className='treats-title'>Treats</h2>
      <div className="card-wrap">
        {treatsArray.map((treat) => (
          <TreatCard key={treat.id} treat={treat} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}
