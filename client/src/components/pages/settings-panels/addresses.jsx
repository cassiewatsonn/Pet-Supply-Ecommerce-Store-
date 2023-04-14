import React, {useState} from 'react'; 
import { Row, ListGroup, Form, Button, Fade} from 'react-bootstrap';
import "../../../App.css";
import { ADD_ADDRESS, REMOVE_ADDRESS, UPDATE_ADDRESS } from '../../../utils/mutations';
import { useMutation } from '@apollo/client';

export default function Address(props) {
    const [addressData, setAddressData] = useState();
    const [addNew, setAddNew] = useState();
    const addresses = props.userData?.address || [];
    const [deleteAddress] = useMutation(REMOVE_ADDRESS)
    const addressNum = addresses.length;
    const [open, setOpen] = useState(false);

    // console.log(addresses);
    

    const handleNewAddress = async () => {
        setAddressData({
            userId: props.userData._id,
            number: '',
            address1: '',
            address2: '',
            city: '',
            province: '',
            country: '',
            postalCode: '',
            deliveryNotes: '',
            primary: '',
            addressId: addressNum + 1
        })
        setAddNew(true);

    }

    async function handleAddressData(e, addNew) {
            setAddressData({
                userId: props.userData._id,
                number: e.number,
                address1: e.address1,
                address2: e.address2,
                city: e.city,
                province: e.province,
                country: e.country,
                postalCode: e.postalCode,
                deliveryNotes: e.deliveryNotes,
                primary: e.primary,
                addressId: e.addressId
            });
            setAddNew(false);
    };

    const handleDeleteAddress = async (addressId) => {

        const { data } = await deleteAddress({
            variables: {
                userId: props.userData._id,
                addressId: addressId
            },
        });
        window.location.reload();
    }
    
    return (
        <>
            <Row className="row">
            <div className="col-5">
                {addresses.length === 0 ?(
                <p>You do not have any addresses configured! Please add one</p>

                    ) : (
                    <ListGroup>
                        {addresses.map((address) => (
                            <ListGroup.Item key={address.addressId} onClick={() => handleAddressData(address, 'false')}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div>
                                        <span className='product-name'>{address.number}</span> <span className='product-price'>{address.address1} {address.address2 ? address.address2 : null}</span>
                                        <p />
                                        {address.city}. {address.province}, {address.postalCode}
                                        </div>
                                    </div>
                                    <Button variant="delete-product" onClick={() => deleteAddress(address, 'false')}>Delete</Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    )}
                    <Button className="float-right col-3" name="addNew" variant="add-new-product" value="addNew" onClick={handleNewAddress} aria-controls="edit-bow" aria-expanded={open}>Add New Product</Button>
            </div>
            {/* <Fade in={open}> */}
            <div className="col-7" id="edit-box">
                <EditAddressBox addressData={addressData} setAddressData={setAddressData} addNew={addNew} />
            </div>
            {/* </Fade> */}
            </Row>
        </>
    )
}

function EditAddressBox({addressData, setAddressData, addNew}) {
        const [addAddress] = useMutation(ADD_ADDRESS);
        const [updateAddress] = useMutation(UPDATE_ADDRESS);
        const [checked, setChecked] = useState(); 
        const changeAddress = async (event) => {
            event.preventDefault();
            if(addNew === false) {
                console.log("Update existing address");
                const mutationResponse = await updateAddress({
                    variables: {
                        userId: addressData.userId,
                        number: addressData.number,
                        address1: addressData.address1,
                        address2: addressData.address2,
                        city: addressData.city,
                        province: addressData.province,
                        country: addressData.country,
                        postalCode: addressData.postalCode,
                        deliveryNotes: addressData.deliveryNotes,
                        primary: '',
                        addressId: addressData.addressId
                    }
                })
                if (mutationResponse) {
                    window.location.reload();
                }
            }
            if (addNew === true) {    
                const mutationResponse = await addAddress({
                    variables: {
                        userId: addressData.userId,
                        number: addressData.number,
                        address1: addressData.address1,
                        address2: addressData.address2,
                        city: addressData.city,
                        province: addressData.province,
                        country: addressData.country,
                        postalCode: addressData.postalCode,
                        deliveryNotes: addressData.deliveryNotes,
                        primary: '',
                        addressId: addressData.addressId
    
                    }
                })
                if (mutationResponse) {
                    window.location.reload();
                }
            }
        }

    const handleCheckChange = async (event) => {
          setChecked(!checked); 
            console.log(checked);
            handleChange({primary: checked});
        }


    const handleChange = async (event) => {
        console.log(event.target)
        const { name, value } = event.target;
        console.log({[name]: value});
        setAddressData({
            ...addressData,
            [name]: value,
        });
        console.log(addressData)
    }
    return addressData ? (
    <Form onSubmit={changeAddress}>
                <Form.Group controlId="controlAddress.number">
                    <Form.Label>Street Number</Form.Label>
                    <Form.Control onChange={handleChange} name="number" placeholder="" value={addressData.number} required></Form.Control>
                </Form.Group>
                <Form.Group controlId="controlAddress.address1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleChange} name="address1" placeholder="" value={addressData.address1} required></Form.Control>
                </Form.Group>
                <Form.Group controlId="controlAddress.address2">
                    <Form.Label>Address2</Form.Label>
                    <Form.Control onChange={handleChange} name="address2" placeholder="" value={addressData.address2}></Form.Control>
                </Form.Group>
                <Form.Group controlId="controlAddress.city">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} name="city" placeholder="" value={addressData.city} required></Form.Control>
                </Form.Group>
                <Form.Group controlId="controlAddress.province">
                    <Form.Label>Province</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleChange} name="province" placeholder="" value={addressData.province} required>
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
                <Form.Group controlId="controlAddress.country">
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleChange} name="country"  placeholder="" value={addressData.country} required>
                        <option>Open this select menu</option>
                        <option value="Canada">Canada</option>
                        <option value="US">United States</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="controlAddress.postalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control placeholder="e.g. M3V 1P0" onChange={handleChange} name="postalCode" value={addressData.postalCode}></Form.Control>
                </Form.Group>
                <Form.Group controlId="controlAddress.deliveryNotes">
                    <Form.Label>Delivery Instructions</Form.Label>
                    <Form.Control as="textarea" onChange={handleChange} name="deliveryNotes" placeholder="" value={addressData.deliveryNotes}></Form.Control>
                </Form.Group>
                <Form.Group controlId="controlAddress.primary">
                    <Form.Check type="checkbox" id="primary" name="primary" label="Primary Address" onChange={handleCheckChange} value={addressData.primary} />
                </Form.Group>
                <Button variant="primary" type="submit" value="submit">Submit Address</Button>
            </Form>
    ) : (<></>)
}