import React from 'react';
import { ThemeProvider } from 'styled-components';
import baseTheme from './themes/baseTheme';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Onboard from './pages/Onboard/Onboard.page';
import Home from './pages/Home/Home.page';
import SignUp from './pages/Signup/Signup.page';
import Detail from './pages/Detail/Detail.page';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Router>
        <GlobalStyle/>
        <Route exact path="/" component={Onboard}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route path="/detail/:id" component={Detail}/>
      </Router>
    </ThemeProvider>
  );
}

export default App;