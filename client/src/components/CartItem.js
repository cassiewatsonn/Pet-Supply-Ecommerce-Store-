import React from 'react'; 

export default function CartItem({
    cart 
}){
    return(
<div className='card'>
    <div className='cart-content'>

        <div className='delete-item'>
            <span class="delete-btn"></span>
        </div>

        <div className="cart-image"> 
            <img className='cart-image' width="" height="" alt="" src=""/>
        </div>

        <h5 className='cart-item'>Item: </h5>

        <div className='quantity'>

            <button className='plus-btn'>
                <img src="" alt=""/>
            </button>

            <input type='text' value='1'> </input>

            <button className='minus-btn'>
                <img src="" alt=""/>
            </button>

        </div>

        <div className='item-price'>
            <h5>Price:</h5>
        </div>
    </div>
</div>


    )
}