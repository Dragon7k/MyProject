import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Table, Col, Image } from 'react-bootstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'
import imageSrc from '../images/hand.png'
import StudentService from '../services/StudentService';
import Login from './Login';
import { render } from '@testing-library/react';
class ClassPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem("name"),
            student: []
        }
        this.raiseHand = this.raiseHand.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    raiseHand(event) {
        event.preventDefault();
        StudentService.raiseHand(this.state.name).then(
        window.location.reload()
        )

    }
    deleteStudent(event) {
        event.preventDefault();
        StudentService.deleteStudent(this.state.name).then(r => {
            alert("logout from page?")
            {this.props.history.replace('/')}
        });

    }

    componentDidMount() {
        StudentService.getStudent().then((res) => {
            this.setState({ student: res.data });
        })

    }




    render() {
        let fullYear = new Date().getFullYear();

        return (

            <div>
                <Navbar bg="dark" variant="dark">
                    <Container justify-content="space-between">
                        <Nav>
                            <NavDropdown
                                id="dropdown-action"
                                title="Action"
                            >
                                <NavDropdown.Item onClick={this.raiseHand}>Raise hand up/down</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <NavDropdown
                                id="dropdown-login"
                                title={this.state.name}
                            >

                                <NavDropdown.Item onClick={this.deleteStudent}>LogOut</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>

                </Navbar>


                <div className="members">
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Class members</h3>
                                <div className="card-body">

                                    <Table striped bordered hover size="sm" >
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Hand</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.student.map(

                                                student =>
                                                    <tr key={student.id}>

                                                        <td>{student.name}</td>
                                                        <td>{student.hand ? <img src={imageSrc} style={{ width: 25, height: 25, resizeMode: 'contain' }} /> : ''}</td>

                                                    </tr>
                                            )
                                        }
                                        </tbody>
                                    </Table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <Container>
                        <Col lg={12} className="text-center text-muted">
                            <div>{fullYear}-{fullYear + 1}, All Right</div>
                        </Col>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default ClassPage;