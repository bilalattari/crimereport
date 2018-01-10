import React, { Component } from 'react';
import {  Form, FormGroup,  Input,  } from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton';

class SignUp extends Component {
  render() {
      const style = {
  margin: 12,
};
    return (
        <Form>
        <FormGroup>
          <Input type="text" name="username"  placeholder="username"/>
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email"  placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password"  placeholder="password placeholder" />
        </FormGroup>
            <RaisedButton label="Primary" primary={true} style={style} />
        </Form>
    )
 }
}
export default SignUp