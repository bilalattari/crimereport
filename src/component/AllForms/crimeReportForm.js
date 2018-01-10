import React ,{Component}  from 'react';
import firebase from 'firebase'
import { Button, Form, FormGroup,  Input } from 'reactstrap';
class CrimeReportForm extends Component {
    constructor(props){
        super(props)
        this.state = {
             WhenCrimeOccurs: '',
             WhatWasTime : '',
             Address : '',
             DescriptionOfCrime : '',
        }
    }

    updateForm =(formLabel , event) =>{
        let currentState  = {}
        currentState[formLabel] = event.target.value;
        this.setState(currentState)
    }
    crimeSaveToFirebase = () =>{
        let db = firebase.database().ref();
        let that = this;
                 that.setState({
                    WhenCrimeOccurs : that.state.WhenCrimeOccurs,
                    WhatWasTime : that.state.WhatWasTime,
                    Address : that.state.Address,
                    DescriptionOfCrime : that.state.DescriptionOfCrime,
                })
                const reportInfo = that.state
                db.child("CrimeReport").push(reportInfo)
                .then((success) => {
                        console.log(success, 'success');
                    that.setState({
                    WhenCrimeOccurs : '',
                    WhatWasTime : '',
                    Address : '',
                    DescriptionOfCrime : '',
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
          <Input type="date" name="date"  
          onChange = {this.updateForm.bind(this , 'WhenCrimeOccurs')}
          placeholder="When crime occurs" />
        </FormGroup>
        <FormGroup>
          <Input type="time" name="time"  
          onChange = {this.updateForm.bind(this , 'WhatWasTime?')}
          placeholder="What was time?" />
        </FormGroup>
        <FormGroup>
          <Input type="Address" name="description"  
          onChange = {this.updateForm.bind(this , 'Address')}
          placeholder="Address" />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="text"  
          onChange = {this.updateForm.bind(this , 'DescriptionoOfCrime')}
          placeholder="Description of crime" />
        </FormGroup>
                <Button
                onClick = {this.crimeSaveToFirebase.bind(this)}>Submit</Button>

      </Form>

</div>
  )
}
}
export default CrimeReportForm;