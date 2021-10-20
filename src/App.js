
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
/*import Portfolio from './components/Portfolio';*/
import './index.css';

function App () {
  return <div className="App">
                <Dashboard/>
                <Home/>
                <About/>
                <Education/>
                <Contact/>
          </div>
}

export default App;