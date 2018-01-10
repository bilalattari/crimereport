import React , {Component} from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';
import ShowForm from './ShowForm'
class Missingperson extends Component {
  constructor(props) {
    super(props);
      this.state = {
          typeOfForm : null
      }
  }
typeOfYourForm(event) {
    console.log(event.target.value);
   this.setState({typeOfForm : event.target.value})
   console.log(this.state.typeOfForm)
}  

render(){
    return(
      <div>
<div onChange={this.typeOfYourForm.bind(this)}>
       <Form>
         <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
              
            <Label check>
              <Input type="radio" name = 'Radio1' value="Missingperson" />{' '}
              Missing person
              </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name = 'Radio1' value="CrimeReport" />{' '}
              Crime Report
              </Label>
          </FormGroup>
          <FormGroup check >
            <Label check>
              <Input type="radio" name = 'Radio1' value="Complain" />{' '}
              Complain 
            </Label>
          </FormGroup>
        </FormGroup> 
    </Form>
    </div>
    <div>
     <ShowForm typeOfForm = {this.state.typeOfForm} />  
  </div>
</div>
    )
}
}
export default Missingperson;