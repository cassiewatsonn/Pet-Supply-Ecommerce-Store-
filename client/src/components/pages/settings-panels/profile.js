import React, { useState } from 'react'; 
import { Nav, Row, Col, Form, Button} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import { SINGLE_USER } from '../../../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import "../../../App.css";

export default function Profile() {
    // const userId = "642859d17fa816ac9e911a37";
        const userId = Auth.getProfile().data._id;
        const { loading, data } = useQuery(SINGLE_USER, {
            variables: { userId: userId },
          });
        const [updateUser] = useMutation(UPDATE_USER);
        const userData = data?.user || [];

        const [formData, setFormData] = useState({
            userId: userData._id,
            accessLvl: userData.accessLvl,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone
        })

        const handleSubmit = async (event) => {
            event.preventDefault();  
            const mutationResponse = await updateUser({
                variables: {
                    userId: userData._id,
                    accessLvl: formData.accessLvl,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone
                },
                })
            }
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };
    
        return (
        <Form onSubmit={handleSubmit} className="col-5">
            <Form.Group controlId="editUser.ControlEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" defaultValue={formData.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="editUser.ControlName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" defaultValue={formData.firstName} onChange={handleChange} />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" defaultValue={formData.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" defaultValue={formData.phone} onChange={handleChange} />
            </Form.Group>
            <Button type="primary" name="submit" id="Submit-btn" value="submit">Submit</Button>
        </Form>
        )
    
    }