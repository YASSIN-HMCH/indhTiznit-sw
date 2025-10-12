import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Acceuil from './pages/Acceuil';
import Contact from './pages/Contact';
import Presentation from './pages/Presentation';
import Organigramme from './pages/Organigramme';
import Programme1 from './pages/programmes/Programme1';
import Programme2 from './pages/programmes/Programme2';
import Programme3 from './pages/programmes/Programme3';
import Programme4 from './pages/programmes/Programme4';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Presentation" element={<Presentation />} />
        <Route path="/Organigramme" element={<Organigramme />} />
        <Route path="/prog1" element={<Programme1/>} />
        <Route path="/prog2" element={<Programme2/>} />
        <Route path="/prog3" element={<Programme3/>} />
        <Route path="/prog4" element={<Programme4/>} />

      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;