import React from 'react'
import { ThemeProvider } from 'styled-components'
import baseTheme from './themes/baseTheme'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.scss'
import Onboard from './pages/onboard'
import Home from './pages/Home/Home.page'

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Router>
        <Route exact path="/" component={Onboard}/>
        <Route exact path="/home" component={Home}/>
      </Router>
    </ThemeProvider>
  )
}

export default App