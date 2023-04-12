import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PASSWORD } from '../../../utils/mutations';
import "../../../App.css";


export default function Password(props) {
    let userData = props.userData;
    const userId = props.userId
    const [updatePassword] = useMutation(UPDATE_PASSWORD);

    const [passCompare, setPassCompare] = useState({
        pass: userData.password,
        userId: userId,
        pass0: '',
        pass1: '',
        pass2: ''
    });

    const handlePassEnter = (event) => {
        const { name, value } = event.target;
        setPassCompare({
            ...passCompare,
            [name]: value,
        })
    }

    const handleNewPassword = (event) => {
        const { loading, error, data } = updatePassword({
            variables: {
                userId: userId,
                password: passCompare.pass2
            }
        })
    }

    return (
        <Form onSubmit={handleNewPassword}>
            <Form.Group controlId="editPassword.oldPassword">
                <Form.Label className='old-password'>Old Password</Form.Label>
                <Form.Control type="password" name="pass0" value={passCompare.pass0} onChange={handlePassEnter} />
            </Form.Group>
            <Form.Group>
                <Form.Label className='new-password'>New Password</Form.Label>
                <Form.Control type="password" name="pass1" value={passCompare.pass1} onChange={handlePassEnter} />
            </Form.Group>
            <Form.Group>
                <Form.Label className='confirm-password'>Confirm Password</Form.Label>
                <Form.Control type="password" name="pass2" value={passCompare.pass2} onChange={handlePassEnter} />
            </Form.Group>
            <div className='changePassword'>
            <Button variant="password-btn" type="submit" value="submit">Change Password</Button>
            </div>
        </Form>
    )
}