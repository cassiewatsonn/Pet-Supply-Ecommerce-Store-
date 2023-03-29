import React from 'react';
import CartItem from '../CartItem';

export default function Cart ({cartItems}) {
  return (
    <div className='shopping-cart'>
      <div>
        <h3>Shopping Bag</h3>
      </div>

      <div className='cart-items'>
        {
          cartItems.map((cartItem) => {
            return (<CartItem key={cartItem.id} cart={cartItem} />);
          })
        }
      </div>

      {/* TODO: ADD total price of all items together */}

    </div>
  )
}
