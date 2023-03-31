import { Container, Row, Col } from 'react-bootstrap';
import { productsArray } from '../../productStore';
import ProductCard from '../ProductCard';
import CartComponent from '../CartComponent';


export default function Store() {
    console.log(productsArray);
    return (
        <>
            <Container>
                <h1 align="center" className='p-3'>Welcome to the store</h1>
                {/* <CartComponent></CartComponent> */}
                <Row xs={1} md={3} className='g-4'>
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