import React, {Component} from 'react';
import '../src/index.css';
import Form, {Col} from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button} from 'react-bootstrap';


class SignUp extends Component{
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  onSubmit = () => {
    this.props.history.push('/login');
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

    render(){
      const { validated } = this.state;
        return(
            <div className="container" col-md-8="true">
              <h1>SignUp</h1>
      <Form className="container" 
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
        <Form.Row>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Company name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Company name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              id="frst-name"
              
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend" pattern=".+@.+\..+" >@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        
          <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" maxLength="10" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a password
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          <Form.Row>        
            <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" maxLength="10" placeholder="Confirm password" required />
            <Form.Control.Feedback type="invalid">
              Please confirm password
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>

          <Form.Row>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>

          <Form.Row>

          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Time Zone</Form.Label>
            <Form.Control type="time" placeholder="Time zone" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Time Zone.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
          </Form.Group>
          </Form.Row>
          

                <Button type="submit" onClick={this.onSubmit} >SignUp</Button>
        </Form>
      
          </div>
        )
    }
}

export default SignUp;