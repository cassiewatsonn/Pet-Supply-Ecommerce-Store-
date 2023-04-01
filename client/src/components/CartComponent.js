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

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
 
    return (
        <>
            <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p> Cart Items:</p>
                            {cart.items.map((currentProduct, index) => (
                                <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            <h2>Total: ${cart.getTotalCost().toFixed(2)}</h2>
                            {/* <Button variant="primary" onClick={checkout}> */}
                            <Button variant="primary">
                                Purchase!
                            </Button>
                        </>
                        :
                        <h5 align="center"> The cart contains no items!</h5>
                    }
                </Modal.Body>
            </Modal>
        </>
    )

}