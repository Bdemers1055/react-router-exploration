import React, { Component } from 'react';
import {
  Link,
  Route
} from 'react-router-dom';
import './App.css';

const Navigation = (props) => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
);

// route: '/'
const Home = (props) => (
  <section>Home sweet home</section>
);

// route: '/about'
const About = (props) => (
  <section>Something about me</section>
);

// route: '/contact'
const Contact = (props) => (
  <section>Call me maybe</section>
);

class App extends Component {
  render() {
    return (
      <div>
          <div>
          <Navigation />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </div>
      </div>
    );
  }
}

export default App;
