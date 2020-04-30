import React from 'react';
import { Router, Link } from '@reach/router';
import Astro from './pages/Astro';
import NEOMisses from './pages/NEOMisses';
import Logo from './components/Logo';
// import isAstroPage from './functions/active';
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
          
        </Router>

      </div>
    </div>
  );
}

export default App;
