import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import axios from 'axios'
import Student from './Student'
import base_url from '../URLS/Url'
import {toast} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react'
import { ListGroup, Row, Col} from 'reactstrap'


export default function AllStudents() {

    const [students, setStudents]=useState([])


    useEffect(()=>{
        getAllStudentsFromServer()
    },[])

    const updateStudents= (studentId)=>{
        setStudents(students.filter((student)=>student.studentId!==studentId))
    }

    const getAllStudentsFromServer = ()=>{
        axios.get(`${base_url}/all`).then(
            (response)=>{
                setStudents(response.data)
               
            }

        )

    }
    
    return (
        <Card body inverse style={{ backgroundColor: '#845', borderColor: '#033' }}>
            <CardTitle className="display-3">
                All Students
            </CardTitle>

            <CardBody body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <ListGroup>
                    <Row>
                        <Col>
                            First Name   
                        </Col>
                        <Col>
                            Last Name
                        </Col>
                        <Col>
                            Age
                        </Col>
                        <Col>
                            Address
                        </Col>
                        <Col>
                            Year
                        </Col>
                        <Col>
                            Delete
                        </Col>
                    </Row>
                </ListGroup>
            </CardBody>
            {
                students.length>0?
                    students.map((student)=>(

                        <Student key={student.studentId} student={student} update={updateStudents}/>
                    ))
                    :
                    "No Students Available to Show"
            }
        </Card>
    )
}

