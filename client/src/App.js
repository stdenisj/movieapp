import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/search/:input" component={ SearchResults } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
