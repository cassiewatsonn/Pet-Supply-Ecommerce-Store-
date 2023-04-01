import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

export default function CartItem({
    cartItem
}) {

    const [, dispatch] = useStoreContext();

    const removeFromCart = cartItem => {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: cartItem._id
      });
      idbPromise('cart', 'delete', { ...cartItem });
  
    };
  
    const onChange = (e) => {
      const value = e.target.value;
      if (value === '0') {
        dispatch({
          type: REMOVE_FROM_CART,
          _id: cartItem._id
        });
        idbPromise('cart', 'delete', { ...cartItem });
  
      } else {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: cartItem._id,
          purchaseQuantity: parseInt(value)
        });
        idbPromise('cart', 'put', { ...cartItem, purchaseQuantity: parseInt(value) });
  
      }
    }
    return (
        <div className='card'>
            <div className='cart-content'>

                <div className='delete-cartItem'>
                    <span class="delete-btn" onClick={() => removeFromCart(cartItem)}></span>
                </div>

                <div className="cart-image">
                    <img className='cart-image' width="" height="" alt="" src="" />
                </div>

                <h5 className='cart-cartItem'>cartItem: </h5>

                <div className='quantity'>

                    <button className='plus-btn'>
                        <img src="" alt="" />
                    </button>

                    <label>
                        Quantity:
                        <input type="number" placeholder="1" value={cartItem.purchaseQuantity} onChange={onChange} />
                    </label>


                    <button className='minus-btn'>
                        <img src="" alt="" />
                    </button>

                </div>

                <div className='cartItem-price'>
                    <h5>Price:</h5>
                </div>
            </div>
        </div>


    )
}