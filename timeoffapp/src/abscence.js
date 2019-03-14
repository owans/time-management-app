import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';


class Abscence extends Component{
    render(){
        return(
            <div class="container">
                <Form>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>

  <button type="submit">Submit</button>
   </Form>;
            </div>
        )
    }
}

export default Abscence;