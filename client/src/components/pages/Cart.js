import React from 'react';

import CartItem from '../CartItem';

export default function Cart (){

    return (
        <div className='shopping-cart'>
            <div>
                <h3>Shopping Bag</h3>
            </div>

            <div className='cart-items'>
                {
                    Cart.map(cart => {
                        return (<CartItem cart={cart} />)
                    })
                }
            </div>

            {/* TODO: ADD total price of all items together */}

        </div>

    )
}