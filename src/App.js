import React from 'react';
import Onboard from './pages/onboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Onboard}/>
    </Router>
  );
}

export default App;