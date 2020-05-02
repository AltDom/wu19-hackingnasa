import React from 'react';
import { Router, Link } from '@reach/router';
import Astro from './pages/Astro';
import NEOMisses from './pages/NEOMisses';
import SingleRoid from './pages/SingleRoid';
import Logo from './components/Logo';
import GitHub from './components/GitHub';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">

        <Logo />
        <div className="nav">
          <Link className="link" to="/">Astro Pic of the Day</Link>
          <Link className="link" to="/neomisses">Near Earth Objects</Link>
        </div>

      </div>
      <div className="page">

        <Router>
          <Astro path="/" />
          <NEOMisses path="/neomisses" />
          <SingleRoid path="/neomisses/:slug" />
          
        </Router>

      </div>

      <div className="footer">
        <h5>Developed by AltDom 2020.</h5>
        <a className="github" href="https://github.com/AltDom"><GitHub /></a>
      </div>
    </div>
  );
}

export default App;
