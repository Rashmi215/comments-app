import React, { Component } from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainComponent from './components/MainComponent';
import LoginForm from './components/LoginForm';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path='/main/:name' component={MainComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
