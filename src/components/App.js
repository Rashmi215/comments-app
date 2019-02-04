import React, { Component } from "react";
import "../styles/App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainComponent from '../containers/MainComponent';
import LoginForm from '../containers/LoginForm';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path='/:name' component={MainComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
