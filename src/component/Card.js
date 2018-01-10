import React , {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Cards extends Component {
 constructor(props){
   super(props)
 }
  render(){
    return(
<Card>
    <CardHeader
      title= {this.props.name}
    subtitle={this.props.name}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardHeader
      title= {this.props.age}
      subtitle={this.props.age}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
       <FlatButton label={this.props.number} /> 
       <FlatButton label={this.props.yourNum} /> 
    </CardActions>
    <CardText expandable={true}>
       {this.props.desc}
    </CardText>
  </Card>
    )
  }
  
};
export default Cards;