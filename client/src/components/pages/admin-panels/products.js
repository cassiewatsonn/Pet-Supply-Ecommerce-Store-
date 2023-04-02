import React, { useState } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import { QUERY_PRODUCT, QUERY_PRODUCTS } from '../../../utils/queries';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { UPDATE_PRODUCT, REMOVE_PRODUCT } from '../../../utils/mutations';


export default function ProductsAdmin() {
    const [productData, setProductData] = useState();
    const { data: productsQuery } = useQuery(QUERY_PRODUCTS);
    const [getProduct] = useLazyQuery(QUERY_PRODUCT);
    const [deleteProduct] = useMutation(REMOVE_PRODUCT);
    const products = productsQuery?.products || [];

    async function handleProductData(e) {
        console.log(e);
        const { called, data } = await getProduct({ variables: { productId: e } })
        if (called && data) {
            setProductData(data.product)
        }
    }


    async function handleDeleteProduct(productId) {
        const { data } = await deleteProduct({
            variables: {
                id: id,
            },
        });
        console.log(data);
    }

    //returns the the list of all products with their price & description.  Generates editable fields to update Product Name, Price, Description, Category & Stock
    return (
        <>
            <ListGroup>

                {products.map((product) => (
                    <ListGroup.Item key={product._id}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div onClick={() => handleProductData(product._id)}>
                                {product.name} {product.price} {product.description} {product.stockCount}
                            </div>
                            <Button variant="danger" onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
                        </div>
                    </ListGroup.Item>
                ))}

            </ListGroup>

            <EditProductBox productData={productData} setProductData={setProductData} />
        </>
    )
}

function EditProductBox({ productData, setProductData }) {
    const [updateProduct] = useMutation(UPDATE_PRODUCT);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await updateProduct({
            variables: {
                name: productData.name,
                productId: productData.productId,
                price: Number(productData.price),
                category: productData.category,
                tags: productData.tags,
                stockCount: Number(productData.stockCount),
                image: productData.image,
                description: productData.description
            },
        })
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    return productData ? (<Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="editProduct.ControlProduct">
            <Form.Label>Product</Form.Label>
            <Form.Control type="product" name="name" placeholder="Product Name here" value={productData.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="editProduct.ControlProductData">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name="price" value={productData.price} onChange={handleChange} />
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" value={productData.description} onChange={handleChange} />
            <Form.Label>Choose category</Form.Label>
            <Form.Select aria-label="Default select example">
                <option value="toys">Toys</option>
                <option value="treats">Treats</option>
                <option value="products">Assorted</option>
            </Form.Select>
            <Form.Label>Stock</Form.Label>
            <Form.Control type="text" name="stockCount" value={productData.stockCount} onChange={handleChange} />
        </Form.Group>
        <Button type="primary" value="submit">Submit</Button>
    </Form>
    ) : (<></>)

}

