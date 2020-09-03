import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <br/><br/><br/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
        
      </Switch>      
    </Router>
  );
}

export default App;
