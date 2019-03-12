import React, {Component} from 'react';
import Form , {Col, Row} from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import '../src/index.css';

class Login extends Component{
    render(){
        return(
            <div className="container">
            <div>
                <h2>Log-In</h2>
                <Form>
                    <Form.Group as={Row} controlId="formBasicEmail">
                        <Form.Label column sm="2">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicPassword">
                         <Form.Label column sm="2">Password</Form.Label>
                         <Form.Control type="password" placeholder="Password" />
                         </Form.Group>
                         <Form.Group as={Row} controlId="formBasicChecbox">
                         <Form.Check sm="2" type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" bsStyle="success">
                        Submit
                    </Button>
                </Form>
            </div>
            </div>
        )
    }
}

export default Login;