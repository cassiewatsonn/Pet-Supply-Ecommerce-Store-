import { Button, Modal } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';


//Cart Modal for customer's orders
export default function CartComponent() {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Setting productsCount variable to 0, reducing the values to a single value 
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
 
    return (
        <>
        {/* Cart button that shows the number of items in the cart  */}
            <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
            {/* Cart button modal, with ability for user to click to expand  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Maps all items added to the cart & provides total cost */}
                    {productsCount > 0 ?
                        <>
                            <p> Cart Items:</p>
                            {cart.items.map((currentProduct, index) => (
                                <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            <h2>Total: ${cart.getTotalCost().toFixed(2)}</h2>
                            {/* This line is for the Stripe checkout function when complete <Button variant="primary" onClick={checkout}> */}
                            <Button variant="primary">
                                Purchase!
                            </Button>
                        </>
                        :
                        <h5 align="center"> The cart contains no pup treats!</h5>
                    }
                </Modal.Body>
            </Modal>
        </>
    )

}