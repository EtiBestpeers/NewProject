import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Contact from './Contact';
import About from './About';

const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <Route path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  
