import React from 'react';
import { Form, Button } from 'react-bootstrap'
import StudentService from '../services/StudentService';
import ClassPage from './ClassPage';
import { Link, Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hand: '',
            

        }
        this.studentChange = this.studentChange.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    studentChange(event) {
        this.setState({
            name: event.target.value,
            hand: false
        })
    }

    saveStudent(event) {
        event.preventDefault();
        let student = { name: this.state.name, hand: this.state.hand };
        localStorage.setItem("name",this.state.name);
        console.log('student=>' + JSON.stringify(student));
        StudentService.createStudent(student).then(r => {
            {this.props.history.replace('/class_page')}
        });
    }

    render() {
        return (

            <div className="members">
                <Form id="studentFormId">
                    <Form.Group>
                        <Form.Label>Log In</Form.Label>
                        <Form.Control required
                            type="test" name="name"
                            value={this.state.name}
                            onChange={this.studentChange}
                            placeholder="Enter Name" />

                    </Form.Group>

                
                 
                  
                       <Button variant="success" onClick={this.saveStudent}
                          type="submit">LogIn
                       </Button>
                   


                    
                </Form>
            </div>
        );
    }
}


export default Login;