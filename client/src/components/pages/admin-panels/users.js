import React, { useState } from 'react';
import { Nav, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { QUERY_USERS, SINGLE_USER } from '../../../utils/queries';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../utils/mutations';

export default function UsersAdmin() {
    const [formData, setFormData] = useState();
    const { data: usersQuery } = useQuery(QUERY_USERS);
    const [getUser] = useLazyQuery(SINGLE_USER);
    const users = usersQuery?.users || [];

    async function handleUserData(e) {
        const { called, data } = await getUser({ variables: { userId: e } })
        if (called && data) {
            setFormData(data.user)
        }
    }

    return (
        <>
        <Row className="row">
        <div className="bg-primary"></div>
        </Row>
        <Row>
        <div className="col-5">
        <ListGroup>
                {users.map((user) => (<ListGroup.Item key={user._id} action onClick={() => handleUserData(user._id)}>{user.firstName} {user.lastName}</ListGroup.Item>))}
            </ListGroup>
            <Button className="float-right" variant="primary" value="addNew">Add New User</Button>
            </div>
            <div className="col-7">
            <EditBox formData={formData} setFormData={setFormData} />
            </div>
        </Row>
        </>
    )
}

function EditBox({ formData, setFormData }) {
    const [updateUser] = useMutation(UPDATE_USER);
    const handleSubmit = async (event) => {
        event.preventDefault();  
        const mutationResponse = await updateUser({
            variables: {
                userId: formData._id,
                accessLvl: formData.accessLvl,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                phone: formData.phone
            },
            })
            if(mutationResponse) {
                window.location.reload();
            }

        }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      console.log(formData);
    return formData ? (

    <Form onSubmit={handleSubmit}>
        <Form.Group className="col-3" controlId="editUser.ControlEmail">
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
            <Form.Control type="text" name="phone" value={formData.phone ? formData.phone : "None"} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
            <Form.Check type="switch" name="accessLvl" id="accessLvl" label="Grant Admin access?" onChange={handleChange} defaultChecked={formData.accessLvl} />
        </Form.Group>
        <Button type="primary" value="submit">Submit</Button>
    </Form>
    ) : (<></>)

}
