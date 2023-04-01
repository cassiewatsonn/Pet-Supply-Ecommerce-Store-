import React, { useState } from 'react';
import { Nav, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { QUERY_PRODUCT, QUERY_PRODUCTS } from '../../../utils/queries';
import { useQuery, useLazyQuery } from '@apollo/client';
// import { productsArray } from '../../../productStore';

export default function ProductsAdmin() {
    const [productData, setProductData] = useState();
    const { data: productsQuery } = useQuery(QUERY_PRODUCTS);
    const [getProduct] = useLazyQuery(QUERY_PRODUCT);
    const products = productsQuery?.products || [];
    console.log(products)
    async function handleProductData(e) {
        console.log(e);
        const { called, data } = await getProduct({ variables: { productId: e } })
        if (called && data) {
            setProductData(data.product)
        }
    }
    return (
        <>
            <ListGroup>
                {products.map((product) => (<ListGroup.Item key={product._id} action onClick={() => handleProductData(product._id)}>{product.name} {product.price} {product.description} {product.stockCount}</ListGroup.Item>))}
            </ListGroup>

            <EditProductBox productData={productData} />
        </>
    )
}

function EditProductBox({ productData }) {

    const [formData, setFormData] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();  
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    return productData ? (<Form onSubmit={handleSubmit}> 
        <Form.Group className="mb-3" controlId="editProduct.ControlProduct">
            <Form.Label>Product</Form.Label>
            <Form.Control type="product" placeholder="Product Name here" value={productData.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editProduct.ControlProductData">
            <Form.Label>Price</Form.Label>
            <Form.Control value={productData.price} onChange={handleChange}/>
            <Form.Label>Description</Form.Label>
            <Form.Control value={productData.description} onChange={handleChange}/>
            <Form.Label>Stock</Form.Label>
            <Form.Control value={productData.stockCount} onChange={handleChange}/>
        </Form.Group>
        <Button type="primary" value="submit">Submit</Button>
    </Form>
    ) : (<></>)

}