import React from 'react';
import {AppProvider} from './context/App';
import {ThemeProvider} from 'styled-components';
import baseTheme from './themes/baseTheme';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Onboard from './pages/Onboard/Onboard.page';
import Home from './pages/Home/Home.page';
import SignUp from './pages/Signup/Signup.page';
import Detail from './pages/Detail/Detail.page';
import Recommend from './pages/Recommend/Recommend.page';
import Profile from './pages/Profile/Profile.page';
import Favorites from './pages/Favorites/Favorites.page';
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
      <AppProvider>
        <Router>
          <GlobalStyle/>
          <Route exact path="/" component={Onboard}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route exact path="/favoritos" component={Favorites}/>
          <Route exact path="/recomendar" component={Recommend}/>
          <Route exact path="/perfil" component={Profile}/>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;