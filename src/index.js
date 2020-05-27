import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import {BrowserRouter as Router} from 'react-router-dom'

import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

ReactDOM.render(
  <React.StrictMode>
    
    
      <Router>        
          <Nav />               
          <Footer />
      </Router>
      
    

  </React.StrictMode>,
  document.getElementById('root')
);
