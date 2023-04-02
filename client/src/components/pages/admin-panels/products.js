import React, { useState } from 'react';
import { ListGroup, Form, Button, Row } from 'react-bootstrap';
import { QUERY_PRODUCT, QUERY_PRODUCTS } from '../../../utils/queries';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { UPDATE_PRODUCT, REMOVE_PRODUCT, ADD_PRODUCT } from '../../../utils/mutations';


export default function ProductsAdmin() {
    const [productData, setProductData] = useState();
    const [addNew, setAddNew] = useState();
    const { data: productsQuery } = useQuery(QUERY_PRODUCTS);
    const [getProduct] = useLazyQuery(QUERY_PRODUCT);
    const [deleteProduct] = useMutation(REMOVE_PRODUCT);
    const products = productsQuery?.products || [];


    async function handleProductData(e, addNew) {
        if(addNew==='true') {
            setProductData({
                name: "",
                productId: "",
                price: "",
                category: "",
                tags: "",
                stockCount: "",
                image: "",
                description: ""
            })
            setAddNew('true')
        } else {
        console.log(e);
        const { called, data } = await getProduct({ variables: { productId: e } })
        if (called && data) {
            setProductData(data.product)
            setAddNew('false');
        }
    }
    }

    async function handleDeleteProduct(productId) {

        const { data } = await deleteProduct({
            variables: {
                productId: productId,
            },
        });
        window.location.reload();
        console.log(productId);
    }

    //returns the the list of all products with their price & description.  Generates editable fields to update Product Name, Price, Description, Category & Stock
    return (
        <>
        <Row className="row">
        <div className="col-5">
            <ListGroup>
                {products.map((product) => (
                    <ListGroup.Item key={product._id}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div onClick={() => handleProductData(product._id,'false')}>
                                <span>{product.name}</span> - {product.price} <br /> {product.description} <br /> Stock Count: {product.stockCount}
                            </div>
                            <Button variant="danger" onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
                        </div>
                    </ListGroup.Item>
                ))}
                <Button className="float-right col-3" name="addNew" variant="primary" value="addNew" onClick={() => handleProductData('', 'true')}>Add New Product</Button>
            </ListGroup>
        </div>
        <div className="col-7">
            <EditProductBox productData={productData} setProductData={setProductData} addNew={addNew} />
        </div>
        </Row>
        </>
    )
}

function EditProductBox({ productData, setProductData,addNew }) {
    const [updateProduct] = useMutation(UPDATE_PRODUCT);
    const [addProduct] = useMutation(ADD_PRODUCT);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(addNew == 'true') {
            const mutationResponse = await addProduct({
                variables: {
                    name: productData.name,
                    productId: productData.productId,
                    price: Number(productData.price),
                    category: productData.category,
                    tags: productData.tags,
                    stockCount: Number(productData.stockCount),
                    image: productData.image,
                    description: productData.description
                }
            })
            if(mutationResponse) {
                window.location.reload();
            }
        } else if(addNew == 'false') {
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
        if(mutationResponse) {
            window.location.reload();
        }
    }}
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

