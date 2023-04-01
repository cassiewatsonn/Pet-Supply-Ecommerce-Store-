import { Button, Navbar, Modal } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from '../components/CartProduct';

export default function  NavBarComponent() {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const checkout = async () => {
    //     await fetch('http://localhost:4000/checkout', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({items: cart.items})
    //     }).then((response) => {
    //         return response.json();
    //     }).then((response) => {
    //         if(response.url) {
    //             window.location.assign(response.url);
    //         }
    //     })
    // }
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
        <Navbar expand="sm">
            <Navbar.Brand href="/"> Store </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>

            </Navbar.Collapse>
        </Navbar>
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
                <h2> The cart contains no items!</h2>
            }
            </Modal.Body>
        </Modal>
        </>
    )

}