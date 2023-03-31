import React from 'react'; 
import { Nav, Row, Col, ListGroup, Form} from 'react-bootstrap';
import { QUERY_USERS, SINGLE_USER } from '../../../utils/queries';
import { useQuery, useLazyQuery } from '@apollo/client';

export function EditBox(userId) {
    const { data } = useQuery(SINGLE_USER(userId));
    console.log(data);
    return (<Form>
        <Form.Group className="mb-3" controlId="editUser.ControlEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
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