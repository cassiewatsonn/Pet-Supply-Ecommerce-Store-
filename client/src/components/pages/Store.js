import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../../productStore';
import ProductCard from '../ProductCard';
import CartComponent from '../CartComponent';


export default function Store() {
    return (
        <>
        {/* <CartComponent></CartComponent> */}
            <h1 algin="center" className='p-3'>Welcome to the store</h1>
            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product, index) => (
                    <Col align="center" key={index}>
                        <ProductCard product={product} />
                    </Col>
                ))}

            </Row>
        </>
    )
}