import React from 'react'
import { Card, CardBody, CardText, CardTitle, Container,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import base_url from '../URLS/Url'
import { toast } from 'react-toastify'
const Student = ({student, update})=>{
    const deletstudent =(studentId)=>{
        axios.delete(`${base_url}/delete/${studentId}`).then(
            (response)=>{
                toast.info("!! Student "+studentId+" Deleted Successfuly !!")
                update(studentId)
            },
            (error)=>{
                toast.error("!! Something went wrong on Server. We are looking at it. !!")
            }

        )
    }


    return (
        <Card body inverse color="info">
            <CardBody>
                <CardTitle className="font-weight-bold">
                    {student.title}
                </CardTitle>
                <CardText>{student.content}</CardText>
                <Container>
                    <Link className="btn btn-primary" to={{pathname:"/update", param:student.studentId}} 
                    style={{marginRight:15+"px"}}>
                        Edit
                    </Link>
                    
                    <Button color="danger" onClick={()=>{
                        deletstudent(student.studentId)
                    }} > 
                        Delete
                    </Button>
                </Container>
            </CardBody>

        </Card>
    )
}
export default Student