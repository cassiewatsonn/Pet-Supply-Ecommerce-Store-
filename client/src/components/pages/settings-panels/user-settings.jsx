import React, {useState} from 'react'; 
import { Nav, Row, Col} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Profile from './profile';
import Address from './addresses';
import Orders from './orders';
import Password from './password'
import Auth from '../../../utils/auth';
import { SINGLE_USER } from '../../../utils/queries';
import { useQuery} from '@apollo/client';

export default function Settings() {
    const userId = Auth.getProfile().data._id;
    console.log(userId)
    const { loading, data } = useQuery(SINGLE_USER, {
        variables: { userId: userId },
      });
      const userData = data?.user || [];
      console.log(userData)
    return(
        <>
            <Tab.Container className="col-3" defaultActiveKey="users" id="left-tabs">
            <Row className="my-4">
                <Col className="col-2">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="profile">Manage Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="addresses">Manage Addresses</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="orders">Manage Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="password">Change Password</Nav.Link>
                            </Nav.Item>
                        </Nav>
                </Col>
                    <Col className="col-8">
                        <Tab.Content>
                        <Tab.Pane eventKey="profile">
                            <Profile userData={userData} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="addresses">
                            <Address userData={userData} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders">
                            <Orders />
                        </Tab.Pane>
                        <Tab.Pane eventKey="password">
                            <Password userData={userData} userId={userId} />
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
        </Tab.Container>
        </>
    )
}