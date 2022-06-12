import React from 'react'
import { Card, CardBody, CardText, CardTitle, Container,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import base_url from '../URLS/Url'
import { toast } from 'react-toastify'
import { ListGroup, Row, Col} from 'reactstrap'

const Student = ({student, update})=>{
    const deletstudent =(studentId)=>{
        axios.delete(`${base_url}/delete/${studentId}`).then(
            (response)=>{
                toast.info("!! Student "+studentId+" Deleted Successfuly !!")
                update(studentId)
            }

        )
    }

    
    return (
        <Card body inverse style={{ backgroundColor: '#046', borderColor: '#033',color:"black"  }}>

            <CardBody>
                <ListGroup>
                    <Row>
                        <Col>
                            {student.firstName}   
                        </Col>
                        <Col>
                            {student.lastName}
                        </Col>
                        <Col>
                            {student.age}
                        </Col>
                        <Col>
                            {student.address}
                        </Col>
                        <Col>
                            {student.year}
                        </Col>
                        <Col>
                        <Container>
                            {/* <Link className="btn btn-primary" to={{pathname:"/update", param:student.studentId}} 
                            style={{marginRight:15+"px"}}>
                                Edit
                            </Link> */}
                        
                            
                            <Button color="danger" onClick={()=>{
                                deletstudent(student.studentId)
                            }} > 
                                Delete
                            </Button>
                        </Container>
                        </Col>
                    </Row>
                </ListGroup>
  
                
                {/* <Container>
                    <Link className="btn btn-primary" to={{pathname:"/update", param:student.studentId}} 
                    style={{marginRight:15+"px"}}>
                        Edit
                    </Link>
                    
                    <Button color="danger" onClick={()=>{
                        deletstudent(student.studentId)
                    }} > 
                        Delete
                    </Button>
                </Container> */}
            </CardBody>

        </Card>
    )
}
export default Student