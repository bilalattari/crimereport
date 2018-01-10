import React , {Component} from 'react';
import { Button, Form, FormGroup, Input,  } from 'reactstrap';
import firebase from 'firebase'
class MissingPersonsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
             MissingPerson: '',
             mobileNumber : '',
             age : '',
             yourMobNum : '',
             description : '',
        }
    }

    updateForm =(formLabel , event) =>{
        let currentState  = {}
        currentState[formLabel] = event.target.value;
        this.setState(currentState)
    }
    saveToFirebase = () =>{
        let db = firebase.database().ref();
        let that = this;
                 that.setState({
                    MissingPerson : that.state.MissingPerson,
                    mobileNumber : that.state.mobileNumber,
                    age : that.state.age,
                    yourMobNum : that.state.yourMobNum,
                    description : that.state.description
                })
                const userInfo = that.state
                db.child("MissingPerson").push(userInfo)
                .then((success) => {
                      console.log(success, 'success');
                    that.setState({
                    MissingPerson : '',
                    mobileNumber : '',
                    age : '',
                    yourMobNum : '',
                    description : ''
                        })
                       that.updateForm =(event) =>{
                         event.target.value = '';
                        }
                                        })
                    .catch((error) => {
                        console.log(error, 'error');
                    })
            }
render(){
  return(
<div>  
        <Form> 
        <FormGroup>
          <Input type="text" name="email"  
          onChange = {this.updateForm.bind(this , 'MissingPerson')}
          placeholder="Missing person name" />
        </FormGroup>
        <FormGroup>
          <Input type="number" name="number"  
          onChange = {this.updateForm.bind(this , 'mobileNumber')}
          placeholder="His/her mobile number" />
        </FormGroup>
        <FormGroup>
          <Input type="number" 
          onChange = {this.updateForm.bind(this , 'age')}
          name="description"  placeholder="Age" />
        </FormGroup>
        <FormGroup>
          <Input type="number" 
          onChange = {this.updateForm.bind(this , 'yourMobNum')}
          name="number"  placeholder="your number" />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" 
          onChange = {this.updateForm.bind(this , 'description')}
          name="text"  placeholder="Description of crime" />
        </FormGroup>
        
        <Button
         onClick = {this.saveToFirebase.bind(this)}>Submit</Button>

      </Form>
</div>
  )
}
}    
export default MissingPersonsForm;