import React from 'react'; 
import { Nav, Row, Col, Tab, Tabs} from 'react-bootstrap';
import Admin from './admin-panels/admin';
import Users from './settings-panels/user-settings';
import "../../App.css";
import Auth from "../../utils/auth";

export default function Settings() {
    // We are going to get everything we need from token
    const userId = Auth.getProfile().data._id;
    const userLvl = Auth.getProfile().data.accessLvl;
    return(
        <>
        {/* If the user has admin access, then they can access the following menu options */}
        {userLvl === true ?(
            <Tabs defaultActiveKey="user" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="user" title="User">
                    <Users userLvl={userLvl} userId={userId}/>
                </Tab>
                <Tab eventKey="admin" title="Admin">
                    <Admin userLvl={userLvl} userId={userId}/>
                </Tab>
            </Tabs>
        ):(
            /*If the user is not an Admin, then they cannot access the Admin tab */ 
            <Tabs defaultActiveKey="user" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="user" title="User">
                    <Users />
                </Tab>
            </Tabs>
        )}
        </>
    )
}