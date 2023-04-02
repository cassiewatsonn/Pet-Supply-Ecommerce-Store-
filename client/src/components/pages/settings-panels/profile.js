import React, { useState } from 'react'; 
import { Nav, Row, Col, Form, Button} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import { SINGLE_USER } from '../../../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

export default function Profile() {
        const [formData, setFormData] = useState();
        const userId = "642859d17fa816ac9e911a37";
        // const userId = Auth.getProfile().data._id;
        console.log(userId)
        const [getUser] = useQuery(SINGLE_USER);
        // const [updateUser] = useMutation(UPDATE_USER);
        // const { data } = getUser({ variables: { userId: userId } })
        // console.log(data);

        // const handleSubmit = async (event) => {
        //     event.preventDefault();  
        //     const mutationResponse = await updateUser({
        //         variables: {
        //             userId: formData._id,
        //             accessLvl: formData.accessLvl,
        //             firstName: formData.firstName,
        //             lastName: formData.lastName,
        //             email: formData.email,
        //             password: formData.password,
        //             phone: formData.phone
        //         },
        //         })
        //     }
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };
    
        return (
        // <Form onSubmit={handleSubmit}>
        <Form>
            <Form.Group className="mb-3" controlId="editUser.ControlEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="editUser.ControlName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" defaultValue={formData.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Check type="switch" name="accessLvl" id="accessLvl" label="Grant Admin access?"/>
            </Form.Group>
            <Button type="primary" value="submit">Submit</Button>
        </Form>
        )
    
    }