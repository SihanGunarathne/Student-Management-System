//import React from 'react';
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import { Router, Route} from 'react-router'
import { Card, Row, Col, CardTitle, Container } from 'reactstrap'
import './App.css';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import FetchStudents from './components/FetchStudents';

import Menu from './components/Menu';
import { ToastContainer } from 'react-toastify'


export default class App extends Component {

  render(){
    return (
      <div className="App">
        <Card body inverse style={{ backgroundColor: '#271', borderColor: '#333' }}>
        <ToastContainer position="top-center"/>
        <CardTitle className="display-2">
          STUDENT MANAGEMENT SYSTEM
        </CardTitle>
        <Router>
            
            <Row>
                <Col>
                    <Menu/>
                </Col>
              </Row>

                
                    <Routes>
                      <Route exact path='/' element={<FetchStudents/>} />
                      <Route exact path='/add' element={<AddStudent/>} />
                      <Route exact path='/update/:id' element={<UpdateStudent/>} />
                    </Routes>
                    

            
        </Router>
        </Card>
        
      </div>
    );
  }
}
//export default App;