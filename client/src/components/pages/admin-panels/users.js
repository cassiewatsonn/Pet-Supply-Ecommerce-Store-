import React, { useState } from 'react';
import { Nav, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { QUERY_USERS, SINGLE_USER } from '../../../utils/queries';
import { useQuery, useLazyQuery } from '@apollo/client';

export default function UsersAdmin() {
    const [userData, setUserData] = useState();
    const { data: usersQuery } = useQuery(QUERY_USERS);
    const [getUser] = useLazyQuery(SINGLE_USER);
    const users = usersQuery?.users || [];

    async function handleUserData(e) {
        const { called, data } = await getUser({ variables: { userId: e } })
        if (called && data) {
            setUserData(data.user)
        }
    }
    return (
        <>
            <ListGroup>
                {users.map((user) => (<ListGroup.Item key={user._id} action onClick={() => handleUserData(user._id)}>{user.firstName} {user.lastName}</ListGroup.Item>))}
            </ListGroup>

            <EditBox userData={userData} />
        </>
    )
}

function EditBox({ userData }) {
    const [formData, setFormData] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();  
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    return userData ? (<Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="editUser.ControlEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" defaultValue={userData.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editUser.ControlName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" defaultValue={userData.firstName} onChange={handleChange}/>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" defaultValue={userData.lastName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phone" defaultValue={userData.phone} onChange={handleChange}/>
        </Form.Group>
        <Button type="primary" value="submit">Submit</Button>
    </Form>
    ) : (<></>)

}
