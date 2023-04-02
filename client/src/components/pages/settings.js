import React, {useState} from 'react'; 
import { Nav, Row, Col} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Profile from './settings-panels/profile';
import Addresses from './settings-panels/addresses';
import Orders from './settings-panels/orders';
import { SINGLE_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import {useQuery} from '@apollo/client';

export default function Settings() {

    return(
        <>
            <Tab.Container defaultActiveKey="users" id="left-tabs">
                <Row>
                    <Col sm={3}>
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
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                        <Tab.Pane eventKey="profile">
                            <Profile />
                        </Tab.Pane>
                        <Tab.Pane eventKey="addresses">
                            <Addresses />
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders">
                            <Orders />
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
        </Tab.Container>
        </>
    )
}