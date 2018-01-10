import Cards from './Card'
import React , {Component} from 'react';
import firebase from 'firebase'
import {List, ListItem} from 'material-ui/List';


let Lists = (props) => {
    let array = props.todos;
    return(
        <List>{
            array.map((objects , i)=> {
                    return(
                 <ListItem 
                  key = {i}
                  primaryText= {<Cards 
                       name = {objects.MissingPerson}
                       age = {objects.age} 
                       number = {objects.mobileNumber}
                       yourNum = {objects.yourMobNum} 
                       desc = {objects.description}/>
                       }  />
                            
                               ) 
                })
                    }             
        </List>
    )}




class GetMissingPersons extends Component {
 constructor(props){
   super(props)
    this.state = {
                    MissingPerson : '',
                    mobileNumber : '',
                    age : '',
                    yourMobNum : '',
                    description : '',
                    value : 0,
                    object : []
  

 }
}
 getFromFirebase = () => {
     let db = firebase.database();
        let that = this;
        db.ref("MissingPerson").on("child_added", function(snapshot){
        let obj = snapshot.val();
        obj.id = snapshot.key    
          that.renderObj(obj) 
          console.log(that.state)
            
        })
    }
               renderObj(obj){
                  console.log(obj)
                  const {  MissingPerson ,
                  mobileNumber ,
                  age ,
                  yourMobNum ,
                  description ,
                  object  } = this.state;
                 const newArray = [ ...object  ,MissingPerson ,
                  mobileNumber ,
                  age ,
                  yourMobNum ,
                  description  ]
                this.setState( {object : newArray ,   MissingPerson : '',
                    mobileNumber : '',
                    age : '',
                    yourMobNum : '',
                    description : '',
                    value : this.state.value + 1})
    }

  render(){
    return(
      (this.state.value === 0) ? 
    
      (<button onClick = {this.getFromFirebase.bind(this)}>Get Values</button> )
      : (
   <div>
        <Lists todos = {this.state.object}   />

  </div>
      )
    )
  }
} 
const LandingPage = () =>
  <div>
    <h1>Missing Persons information</h1>
    <GetMissingPersons />
  </div>

export default LandingPage;