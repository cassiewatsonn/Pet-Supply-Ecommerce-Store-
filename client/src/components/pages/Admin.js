import React from 'react'; 
import { Nav, Row, Col} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import ProductsAdmin from './admin-panels/products.js';
import UsersAdmin from './admin-panels/users.js';
import "../../App.css";

export default function Admin() {
    //Confirming that the user has admin access
    let user = localStorage.getItem('accessLvl');
    return(
        <>
        {/* If the user has admin access, then they can access the following menu options */}
        {user === 'true' ?(
            <Tab.Container defaultActiveKey="users" id="left-tabs">
                <Row className="my-4">
                    <Col className="col-2">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link className="admin-nav-link" eventKey="products">Manage Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="admin-nav-link" eventKey="users">Manage Users</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="admin-nav-link" eventKey="orders">View Orders</Nav.Link>
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
                            Coming Soon!
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
        </Tab.Container>
        ):(
            /*If the user is not an Admin, then they cannot access the Admin tab */ 
            <div>
                <h1> You are not an Admin User</h1>
            </div>
        )}
        </>
    )
}