import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import CV from "./Components/CVs/CV";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" exact Component={Home}/>
           <Route path = '/about' Component={About}/> 
          <Route path = '/skill' Component={Skill}/>
          <Route path = '/project' Component={Project}/>
          <Route path = '/cv' Component={CV}/>
          <Route path = '/contact' Component={Contact}/>
          
        </Routes>

         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
