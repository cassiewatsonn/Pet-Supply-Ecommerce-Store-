import React from 'react'; 
import { Nav, Row, Col, ListGroup} from 'react-bootstrap';
import { QUERY_USERS } from '../../../utils/queries';
import { useQuery } from '@apollo/client';

export default function UsersAdmin() {
    const { data } = useQuery(QUERY_USERS);
    console.log("This is data", data);
    const users = data?.users || [];
    return(
            <ListGroup>
                {users.map((user) => (<ListGroup.Item key={user._id}>{user.firstName} {user.lastName}</ListGroup.Item>))}
            </ListGroup>
            )
    }