import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Greeting from './pages/Greeting.jsx';
import Work from './pages/Work.jsx';

class App extends Component {

  componentDidMount() {
    document.title = 'Jimploy';
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/greeting" component={Greeting}/>
          <Route path="/work" component={Work}/>
        </div>
      </Router>
    );
  }
}

export default App;
