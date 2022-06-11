import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card,CardBody,CardTitle,Input,Container,Button} from 'reactstrap'
import base_url from '../URLS/Url'
import {toast} from 'react-toastify'
import { useParams } from "react-router-dom";

const UpdateStudent = (props)=>{

    const [student,setStudent] = useState({})
    // Load data from server by Id
    const getStudentFromServerById = ()=>{
        axios.get(`${base_url}/id/${props.location.param}`).then(
            (response)=>{
                setStudent(response.data)
            },(error)=>{
                toast.error("!! Something went wrong on Server. We are looking at it. !!")
            }
        )
    }

    useEffect(()=>{
        getStudentFromServerById()
    },[])


    //-------------- Posting the data to server
    const handleForm = (param)=>{
        putData(student)
        param.preventDefault()
    }

    const putData = (data)=>{

        axios.put(`${base_url}/update`,data).then(
            (response)=>{
                toast.info("!! Student Updated Successfully")
            },(error)=>{
                toast.error("!! Something went wrong on Server. We are looking at it. !!")
            }
        )
    }

    return(
        <Card body inverse color="info">
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-2">
                        Update Student
                    </CardTitle>
                    <br/>
                    <Input placeholder="Enter the Student First Name here." value={student.firstName}
                        onChange={(param)=>{
                            setStudent({...student,firstName:param.target.value})
                        }}/>
                    <br/>
                    <Input placeholder="Enter the Student Last Name here." value={student.lastName}
                        onChange={(param)=>{
                            setStudent({...student,lastName:param.target.value})
                        }}/>
                    <br/>
                    <Input placeholder="Enter the Student age here." value={student.age}
                        onChange={(param)=>{
                            setStudent({...student,age:param.target.value})
                        }}/>
                    <br/>
                    <Input placeholder="Enter the Student address here." value={student.address}
                        onChange={(param)=>{
                            setStudent({...student,address:param.target.value})
                        }}/>
                    <br/>
                    <Input placeholder="Enter the Student Year here." value={student.year}
                        onChange={(param)=>{
                            setStudent({...student,year:param.target.value})
                        }}/>
                    <br/>
                    <Container>
                        <Button type="submit" color="success" style={{marginRight:15+"px"}}>
                            Submit Student
                        </Button>
                        <Button type="reset" color="warning" onClick={getStudentFromServerById}>
                            Clear
                        </Button>
                    </Container>
                </form>
            </CardBody>
        </Card>
    )
}
export default UpdateStudent