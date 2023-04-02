import React, { useState } from 'react'; 
import { Nav, Row, Col, Form, Button} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import { SINGLE_USER } from '../../../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

export default function Profile() {
    // const userId = "642859d17fa816ac9e911a37";
        const userId = Auth.getProfile().data._id;
        const { loading, data } = useQuery(SINGLE_USER, {
            variables: { userId: userId },
          });
        const [updateUser] = useMutation(UPDATE_USER);
        const userData = data?.user || [];

        const [formData, setFormData] = useState({});
        const handleSubmit = async (event) => {
            event.preventDefault();  
            const mutationResponse = await updateUser({
                variables: {
                    userId: formData._id,
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
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="editUser.ControlEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" value={userData.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="editUser.ControlName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" value={userData.firstName} onChange={handleChange}/>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" defaultValue={userData.phone ? userData.phone : "None"} onChange={handleChange} />
            </Form.Group>
            <Button type="primary" value="submit">Submit</Button>
        </Form>
        )
    
    }