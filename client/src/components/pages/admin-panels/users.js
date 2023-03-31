import React from 'react'; 
import { Nav, Row, Col, ListGroup} from 'react-bootstrap';
import { QUERY_USERS } from '../../../utils/queries';
import { useQuery } from '@apollo/client';

export default function UsersAdmin() {
    const { users } = useQuery(QUERY_USERS);
    console.log(users);
    const userMap = users.map();
    return(
    <ListGroup>
        <ListGroup.Item action href="#">Cras justo odio</ListGroup.Item>
        <ListGroup.Item action href="#">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item action href="#">Morbi leo risus</ListGroup.Item>
        <ListGroup.Item action href="#">Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item action href="#">Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    )
}