import React, { useState } from 'react';
import { Row, ListGroup, Form, Button, Fade } from 'react-bootstrap';
import { QUERY_USERS, SINGLE_USER } from '../../../utils/queries';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { ADD_USER, UPDATE_USER, REMOVE_USER } from '../../../utils/mutations';
import "../../../App.css";

export default function UsersAdmin() {
    const [formData, setFormData] = useState();
    const [addNew, setAddNew] = useState();
    const { data: usersQuery } = useQuery(QUERY_USERS);
    const [getUser] = useLazyQuery(SINGLE_USER);
    const users = usersQuery?.users || [];
    const [deleteUser] = useMutation(REMOVE_USER);
    const [open, setOpen] = useState(false);

    async function handleUserData(e, addNew) {
        if (addNew === 'true') {
            setFormData({
                accessLvl: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phone: ''
            })
            setAddNew('true')

        } else {
            const { called, data } = await getUser({ variables: { userId: e } })
            if (called && data) {
                setFormData(data.user)
                setAddNew('false');
            }
        }

    }
    async function handleDeleteUser(userId) {

        const { data } = await deleteUser({
            variables: {
                userId: userId,
            },
        });
        window.location.reload();
        console.log(userId);
    }

    return (
        <>
            <Row className="row">
                <div className="col-5">
                    <ListGroup>
                        {users.map((user) => (
                            <div className='user-list' key={user._id}>
                                <ListGroup.Item className='user-field' key={user._id} action onClick={() => handleUserData(user._id, 'false')}>{user.firstName} {user.lastName}
                                </ListGroup.Item>
                                <Button variant="user-delete" onClick={() => handleDeleteUser(user._id)}>Delete</Button>
                            </div>))}
                    </ListGroup>
                    <div>
                        <Button className="float-right" name="addNew" variant="add-new-user" value="addNew" onClick={() => handleUserData('', 'true')}>Add New User</Button>
                    </div>
                </div>
                <div className="col-7">
                    <EditBox formData={formData} setFormData={setFormData} addNew={addNew} />
                </div>
            </Row>
        </>
    )
}

function EditBox({ formData, setFormData, addNew }) {
    const [updateUser] = useMutation(UPDATE_USER);
    const [addUser] = useMutation(ADD_USER);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (addNew === 'true') {
            const mutationResponse = await addUser({
                variables: {
                    accessLvl: false,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone
                }
            })
            if (mutationResponse) {
                window.location.reload();
            }
        } else if (addNew === 'false') {
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
            if (mutationResponse) {
                window.location.reload();
            }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData);
    };
    //Returns the list of all users. Generates editable fields to update First Name, Last Name, Phone Number & the ability to grant Admin Access
    return formData ? (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="col-8" controlId="editUser.ControlEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editUser.ControlName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number - required </Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone ? formData.phone : "None"} onChange={handleChange} />
            </Form.Group>
            {addNew === 'true' ? <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" id="password" label="Create password" onChange={handleChange} />
            </Form.Group> : ''}
            <Button type="submit" className="userSubmit" variant="user-submit" value="submit">Submit</Button>
        </Form>
    ) : (<></>)

}

