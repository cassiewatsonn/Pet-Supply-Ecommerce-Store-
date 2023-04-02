import React from 'react'; 
import { Nav, Row, Col} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import ProductsAdmin from './admin-panels/products.js';
import UsersAdmin from './admin-panels/users.js'

export default function Admin() {
    let user = localStorage.getItem('accessLvl');
    return(
        <>
        {user === 'true' ?(
            <Tab.Container defaultActiveKey="users" id="left-tabs">
                <Row className="my-4">
                    <Col className="col-2">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="products">Manage Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="users">Manage Users</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="orders">View Orders</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="col-8">
                        <Tab.Content>
                        <Tab.Pane eventKey="products">
                            <ProductsAdmin />
                        </Tab.Pane>
                        <Tab.Pane eventKey="users">
                            <UsersAdmin />
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders">
                            This is some orders
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
        </Tab.Container>
        ):(
            <div>
                <h1> You are not an Admin User</h1>
            </div>
        )}
        </>
    )
}