import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Acceuil from './pages/Acceuil';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Acceuil" element={<Acceuil />} />
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;