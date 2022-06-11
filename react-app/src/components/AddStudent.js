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
               
            }
        )
    }

    return(
        <Card body inverse style={{ backgroundColor: '#845', borderColor: '#033' }}>
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-3">
                        New Student
                    </CardTitle>
                    <Container>

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
                    
                        <Button type="submit" color="success" style={{marginRight:15+"px"}}>
                            Submit Student
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