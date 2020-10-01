import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import TeamDetails from './components/TeamDetails';




function App() {
  return (
    <div className="App">
        <Router>
        <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/teamDetails">TemsDetails</Link>
              </li>
            </ul>
            <Switch>
             

                <Route exact path='/' component={Home} />
                <Route exact path='/team' component={Team} />
                <Route exact path='/team/:id' component={TeamDetails} />
                
            </Switch>
        </Router>
    </div>
  );
}

export default App;
