import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Search from './pages/Search'
import List from './pages/List';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Create from './pages/Create'
import 'milligram'
import './App.css';

function App() {
  return (
      <Router>
       <div className="App">
          <Navbar />
          <Switch>
            <Route path = '/' exact component = {Home} />
            <Route path = '/list' exact component = {List} />
            <Route path = '/create' exact component = {Create} />
            <Route path= "/search" component={Search} /> 
            <Route component = {NotFound}/>
          </Switch>
        </div>
      </Router>

  );
}

export default App;


