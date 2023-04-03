import React, { useState } from 'react'; 
import { Form, Button} from 'react-bootstrap';
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
        const [formData, setFormData] = useState({formData: {
            userId: userData._id,
            accessLvl: userData.accessLvl,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone
            }
            })


        async function handleSubmit(event) {
            event.preventDefault();
            try {
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
                if(mutationResponse){
                    window.location.reload();
                };
            } catch { 
                console.log("Error!"); }
            }
        
        function handleChange(event) {
            const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    
        return (
        <Form onSubmit={handleSubmit} className="col-5">
            <Form.Group controlId="editUser.ControlEmail">
                <Form.Label className='email-input'>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="editUser.ControlName">
                <Form.Label className='first-name-input'>First Name</Form.Label>
                <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <Form.Label className='last-name-input'>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label className='phone-number-input'>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </Form.Group>
            <div className='userUpdate'>
            <Button type="submit" variant="user-update" value="submit">Update</Button>
            </div>
        </Form>
        )
    
    }