import {BrowserRouter as Router, Route, Routes}from "react-router-dom"

import Navbar from '../../../Work 2/website/src/components/navbar.components';
import Header from './components/header.components';
import Footer from "./components/footer.components"
import Team from './pages/team.pages';
import About from "./pages/about.pages";
import Home from "./pages/home";


function App() {
  return (
  <>
  <Router>
  <Navbar/>
    <Routes>


      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/team" element={<Team/>} />

    </Routes>
    <Footer/>
   
  </Router>

  
  
  
  </>
    
  );
}

export default App;
