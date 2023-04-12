import React, {useState} from 'react'; 
import { Nav, Row, Col, Tab, ListGroup, Form, Button} from 'react-bootstrap';
import "../../../App.css";
import { ADD_ADDRESS } from '../../../utils/mutations';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';

export default function Address(props) {
    const [addressData, setAddressData] = useState({});
    const addresses = props.userData?.address || [];
    const [addAddress] = useMutation(ADD_ADDRESS);
    const addressNum = addresses.length + 1;

    // Function to add the new address
    const addNewAddress = async (event) => {
        var primaryToggle = false;
        if (addressData.primary === "on") {
            let primaryToggle = true;
        } else {
            let primaryToggle = false;
        };

        event.preventDefault();
        const mutationResponse = await addAddress({
            variables: {
                userId: props.userData._id,
                number: addressData.number,
                address1: addressData.address1,
                address2: addressData.address2,
                province: addressData.province,
                country: addressData.country,
                postalCode: addressData.postalCode,
                deliveryNotes: addressData.deliveryNotes,
                primary: primaryToggle,
                addressId: addressNum

            }
        })
    }

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setAddressData({
            ...addressData,
            [name]: value,
        });
    }
    console.log("addressData", addressData);
    return (
        <>
        {addresses.length === 0 ?(
            <Form onSubmit={addNewAddress}>
                <Form.Group>
                    <Form.Label>Street Number</Form.Label>
                    <Form.Control onChange={handleChange} name="number" required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleChange} name="address1" required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address2</Form.Label>
                    <Form.Control onChange={handleChange} name="address2"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} name="city" required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Province</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleChange} name="province" required>
                        <option>Open this select menu</option>
                        <option value="AB">Alberta</option>
                        <option value="MN">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NFLD">Newfoundland and Labrador</option>
                        <option value="NWT">Northwest Territories</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NV">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PEI">Prince Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YK">Yukon</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleChange} name="country" required>
                        <option>Open this select menu</option>
                        <option value="Canada">Canada</option>
                        <option value="US">United States</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control placeholder="e.g. M3V 1P0" onChange={handleChange} name="postalCode"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Delivery Instructions</Form.Label>
                    <Form.Control as="textarea" onChange={handleChange} name="deliveryNotes"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" id="primary" name="primary" label="Primary Address" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" value="submit">Submit Address</Button>
            </Form>
        ) : (
            <Row className="row">
            <div className="col-5">
                <ListGroup>
                    {addresses.map((address) => (
                        <ListGroup.Item key={address.addressId}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div>
                                    <span className='product-name'>{address.number}</span> <span className='product-price'>{address.address1} {address.address2 ? address.address2 : null}</span>
                                    <p />
                                    {address.city}. {address.province}, {address.postalCode}
                                    </div>
                                </div>
                                <Button variant="delete-product">Delete</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                    <Button className="float-right col-3" name="addNew" variant="add-new-product" value="addNew">Add New Product</Button>
                </ListGroup>
            </div>
            {/* <div className="col-7">
                <EditProductBox productData={productData} setProductData={setProductData} addNew={addNew} />
            </div> */}
            </Row>
        )}
        </>
    )
}