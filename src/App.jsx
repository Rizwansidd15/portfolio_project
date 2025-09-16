import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menutoggle from "./componants/Menutoggle";
import About from "./componants/About";
import Navbar from "./componants/Navbar";
import Resume from "./componants/Resume";
import Footer from "./componants/Footer";
import Project from "./componants/Project";
import Contect from "./componants/Contect"; // Assuming you meant "Contact"



function App() {
 
  
  return (
    <Router>
      <Navbar />
      <Menutoggle />
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contect />} />
        {/* Optional: Default route or Home */}
        <Route path="/" element={<About />} /> {/* Or a Home component */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
