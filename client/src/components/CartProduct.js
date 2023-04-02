import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    // Component to create each product item in cart, with the subtotal for the quantity of that product.  User can remove all from cart
    return (
        <div>
        <h6>{productData.title}</h6>
        <p>Ordered: {quantity}  Subtotal: ${ (quantity * productData.price).toFixed(2) }</p>
        <div className='button'>
            <style type="text/css">
              {`
            .btn-cart-custom {
                background-color: #006FAA;
                color: #E6EBE0; 
             }
             .btn-cart-custom:hover {
                background-color: #FF9914;
                color: #006FAA;   
            }
           `}
            </style>
          </div>
        <Button variant="cart-custom" size="sm" onClick={() => cart.deleteFromCart(id)}> Remove</Button>
        <hr></hr>
        </div>
    )
}

export default CartProduct;