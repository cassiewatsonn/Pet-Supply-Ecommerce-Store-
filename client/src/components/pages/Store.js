import { Container, Row, Col } from 'react-bootstrap';
import { productsArray } from '../../productStore';
import ProductCard from '../ProductCard';
import CartComponent from '../CartComponent';

//Store to map Product Cards 
export default function Store() {
    console.log(productsArray);
    return (
        <>
            <Container>
                <h3 align="center" className='p-3'>The Pupscale Barkery is full of yummy treats for your pup!</h3>
                {/* Cart modal React component*/}
                <CartComponent className='cart-modal'></CartComponent>
                <><p></p></>
                {/* React-bootstrap Row component, setting card at 1 per row for small screens, and 3 for medium and larger  */}
                <Row xs={1} md={3} className='g-4' >
                    {/* Mapping the products array to create the products cards*/}
                    {productsArray.map((product, index) => (
                        <Col align="center" key={index}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}