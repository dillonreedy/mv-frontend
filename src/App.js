import React from 'react';
import LoginView from './views/login.view';
import SignUpView from './views/signup.view';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginView}/>
        <Route path="/login" exact component={LoginView}/>
        <Route path="/signup" exact component={SignUpView}/>
      </Switch>
    </Router>
  );
}

export default App;
