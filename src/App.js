import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import Job from './pages/Job';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/show' component={Show} />
            <Route exact path='/job' component={Job} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
