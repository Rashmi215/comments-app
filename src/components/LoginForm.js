import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
  state={
   username:''
 }

 handleClick = e =>{
   this.props.history.push(`/main/${this.state.username}`);
 }

 render() {
    return (
      <div className='text-center login'>
        <MuiThemeProvider>
          <div>
             <AppBar title="Login"/>
             <TextField
               hintText="Enter your Name"
               floatingLabelText="Name"
               value={this.state.username}
               onChange = {(e) => this.setState({username: e.target.value})}
               />
               <br/> <br/>
               <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClick}/>
           </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
 margin: 15,
};

export default LoginForm;