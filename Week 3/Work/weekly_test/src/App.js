import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import  './logo.svg';
import './App.css';
import React from 'react';

import Navbar from './components/navbar.components';

import Footer from './components/footer.components';
import Notfound from "./Pages/notfound.page";
import Home from "./Home";


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
        <Footer/>
      </Router>

      
      
      
       </div>
  );
}

export default App;
