import React from 'react'; 
import { Nav, Row, Col, ListGroup, Form} from 'react-bootstrap';
import { QUERY_USERS, SINGLE_USER } from '../../../utils/queries';
import { useQuery, useLazyQuery } from '@apollo/client';

export default function UsersAdmin() {
    const { data } = useQuery(QUERY_USERS);
    const [ getUser , { loading, error, userData }] = useLazyQuery(SINGLE_USER);
    const users = data?.users || [];
    function handleUserData(e) {
        console.log(e)
        // {() => getUser({variables: {userId: user._id}})}
    }
    return(
        <>
            <ListGroup>
                {users.map((user) => (<ListGroup.Item key={user._id} action onClick={handleUserData(user._id)}>{user.firstName} {user.lastName}</ListGroup.Item>))}
            </ListGroup>
            <EditBox userData={userData} />
        </>
        )
    }

function EditBox(userData) {
    
    console.log(userData);
    return (<Form>
        <Form.Group className="mb-3" controlId="editUser.ControlEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com">{userData.email}</Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editUser.ControlName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="input"></Form.Control>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="input"></Form.Control>
        </Form.Group>
    </Form>
    )

    }
