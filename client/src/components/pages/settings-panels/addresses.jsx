import React, {useState} from 'react'; 
import { Nav, Row, Col, Tab, ListGroup, Form, Button} from 'react-bootstrap';
import "../../../App.css";


export default function Address(props) {
    const [addressData, setAddressData] = useState({});
    console.log(props.userData.address);
    const addresses = props.userData?.address || [];
    console.log("Addresses", addresses);
     //returns the the list of all products with their price & description.  Generates editable fields to update Product Name, Price, Description, Category & Stock
    return (
        <>
        {addresses.length == 0 ?(
            <Form>
                <Form.Group>
                    <Form.Label>Street Number</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Province</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Delivery Instructions</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Primary Address</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Button variant="primary">Submit Address</Button>
            </Form>
        ) : (
            {/* <Row className="row">
            <div className="col-5">
                <ListGroup>
                    {addresses.map((address) => (
                        <ListGroup.Item key={product._id}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div onClick={() => handleProductData(product._id,'false')}>
                                    <div>
                                    <span className='product-name'>{product.name}</span> <span className='product-price'>- {product.price} </span>
                                    <p /> {product.description} <br /> 
                                    <span className="product-stock-count">Stock Count: </span> {product.stockCount}
                                    </div>
                                </div>
                                <Button variant="delete-product" onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                    <Button className="float-right col-3" name="addNew" variant="add-new-product" value="addNew" onClick={() => handleProductData('', 'true')}>Add New Product</Button>
                </ListGroup>
            </div>
            <div className="col-7">
                <EditProductBox productData={productData} setProductData={setProductData} addNew={addNew} />
            </div>
            </Row> */}
        )}
        </>
    )
}