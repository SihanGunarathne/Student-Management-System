import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {Card,CardBody,CardTitle,Input,Container,Button} from 'reactstrap'
import base_url from '../URLS/Url'

const AddStudent = ()=>{

    const [student, setStudent] = useState({})

    const handleForm = (param)=>{
        postData(student)
        param.preventDefault()
    }

    const postData = (data)=>{
        axios.post(`${base_url}/create`,data).then(
            (response)=>{
                toast.info("!! Successfully Posted a New Student ")
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
                        New Student
                    </CardTitle>
                    <Input placeholder="Enter the Student First Name here."
                        onChange={(e)=>{
                            setStudent({...student,firstName:e.target.value})
                        }}/>
                    <br/>
                    <Input placeholder="Enter the Student Last Name here."
                        onChange={(e)=>{
                            setStudent({...student,lastName:e.target.value})
                        }}/>
                    <br/>
                    <Input placeholder="Enter the Student age here."
                        onChange={(e)=>{
                            setStudent({...student,age:e.target.value})
                        }}/>
                    <br/>
                    <Input placeholder="Enter the Student address here."
                        onChange={(e)=>{
                            setStudent({...student,address:e.target.value})
                        }}/>
                    <br/>
                    <Input placeholder="Enter the Student Year here."
                        onChange={(e)=>{
                            setStudent({...student,year:e.target.value})
                        }}/>

                    <br/>
                    <Container>
                        <Button type="submit" color="success" style={{marginRight:15+"px"}}>
                            Post Student
                        </Button>
                        <Button type="reset" color="warning">
                            Clear
                        </Button>
                    </Container>
                </form>
            </CardBody>
        </Card>
    )
}
export default AddStudent