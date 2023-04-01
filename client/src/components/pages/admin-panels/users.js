import React, { useState } from 'react';
import { Nav, Row, Col, ListGroup, Form } from 'react-bootstrap';
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
    

    return userData ? (<Form>
        <Form.Group className="mb-3" controlId="editUser.ControlEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={userData.email}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editUser.ControlName">
            <Form.Label>First Name</Form.Label>
            <Form.Control value={userData.firstName}/>
            <Form.Label>Last Name</Form.Label>
            <Form.Control value={userData.lastName}/>
        </Form.Group>
    </Form>
    ) : (<></>)

}
