import React, { useEffect, useState } from 'react'
import { Card, CardTitle } from 'reactstrap'
import axios from 'axios'
import Student from './Student'
import base_url from '../URLS/Url'
import {toast} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react'


export default function AllStudents() {
//const AllStudents = ()=>{

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
               // toast.info("!! All Students loaded from Server !!",{position:"top-center"})
            },
            (error)=>{
                toast.error("!! Something went wrong on Server. We are looking at it. !!")

            }

        )

    }
    
    return (
        <Card body inverse color="info">
            <CardTitle className="display-3">
                All Students
            </CardTitle>
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

//export default AllStudents