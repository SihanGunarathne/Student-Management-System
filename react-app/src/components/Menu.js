import React from 'react'
import { ListGroup, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
const Menu = ()=>{
    return (
        <ListGroup>
            <Row>
                <Col>
                    <Link className="list-group-item" to="/" 
                    style={{backgroundColor:"gray", color:"white", 
                        }}>
                        Home
                    </Link>
                </Col>
                <Col>
                    <Link className="list-group-item" to="/add" 
                    style={{backgroundColor:"gray", color:"white"}}>
                        Add Student
                    </Link>
                </Col>
            </Row>
        </ListGroup>
    )
}
export default Menu