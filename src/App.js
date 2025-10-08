import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Acceuil from './pages/Acceuil';
import Contact from './pages/Contact';
import Presentation from './pages/Presentation';
import Organigramme from './pages/Organigramme';
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

      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;