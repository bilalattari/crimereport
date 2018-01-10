import React ,{Component} from 'react';
import firebase from 'firebase'
import { Button, Form, FormGroup,  Input } from 'reactstrap';
class ComplainForm extends Component {
    constructor(props){
        super(props)
        this.state = {
             YourDesignation: '',
             Subject : '',
             ToWhomYouHaveToComplain : '',
             Complain : '',
             uid : ''
        }
    }
    componentDidMount() {
        const user = firebase.auth().currentUser
        if (user != null) {
        this.setState({ uid : user.uid})   
      } 
    }
    updateForm =(formLabel , event) =>{
        let currentState  = {}
        currentState[formLabel] = event.target.value;
        this.setState(currentState)
    }
    complainSaveToFirebase = () =>{
        let db = firebase.database().ref();
        let that = this;
                 that.setState({
                    YourDesignation : that.state.YourDesignation,
                    Subject : that.state.Subject,
                    ToWhomYouHaveToComplain : that.state.ToWhomYouHaveToComplain,
                    Complain : that.state.Complain,
                })
                const reportInfo = that.state
                db.child(this.state.uid).push(reportInfo)
                .then((success) => {
                        console.log(success, 'success');
                    that.setState({
                    Subject : '',
                    YourDesignation : '',
                    ToWhomYouHaveToComplain : '',
                    Complain : '',
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
          <Input type="text" 
          onChange = {this.updateForm.bind(this , 'YourDesignation')}
          placeholder="Your Designation" />
        </FormGroup>
        <FormGroup>
          <Input type="text"   
          onChange = {this.updateForm.bind(this , 'Subject')}
          placeholder="Subject" />
        </FormGroup>
        <FormGroup>
          <Input type="text"   
          onChange = {this.updateForm.bind(this , 'ToWhomYouHaveToComplain')}
          placeholder="To whom you have to Complain" />
        </FormGroup>
        <FormGroup>
          <Input type="textarea"   
          onChange = {this.updateForm.bind(this , 'Complain')}
          placeholder="Complain" />
        </FormGroup>
          <Button
          onClick = {this.complainSaveToFirebase.bind(this)}>Submit</Button>

      </Form>

</div>
   )
 }
}
export default ComplainForm;