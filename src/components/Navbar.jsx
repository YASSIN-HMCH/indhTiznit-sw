import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import   Portail1 from "../photos/Portail.png";
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <>
    {/* i still here */}
    <div className="text-center ">
       <img src={Portail1} alt="Main Logo" style={{ height: '250px',  width: '100%'}} />
    </div>
   
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
      <div className="container">
        {/* Hamburger toggle for small screen */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav  gap-4">

            <li className="nav-item ">
              <NavLink className="nav-link" to="/">Accueil</NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Préfecture
              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/Presentation">Présentation</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Organigramme">Organigramme</NavLink></li>
              </ul>
            </li>
             <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programmes
              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/prog1"> Programme 1</NavLink></li>
                <li><NavLink className="dropdown-item" to="/prog2"> Programme 2</NavLink></li>
                <li><NavLink className="dropdown-item" to="/prog3"> Programme 3</NavLink></li>
                <li><NavLink className="dropdown-item" to="/prog4"> Programme 4</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gouvernance
              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/gov">CRDH</NavLink></li>
                <li><NavLink className="dropdown-item" to="/gov1">CPDH</NavLink></li>
                <li><NavLink className="dropdown-item" to="/gov2">CLDH</NavLink></li>
                <li><NavLink className="dropdown-item" to="/gov3">DAS</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="https://www.pj-indh-tiznit.com">Plateforme des Jeunes</NavLink>
            </li>
             <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Evenements
              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/prog1">Link 1</NavLink></li>
                <li><NavLink className="dropdown-item" to="/prog2">Link 2</NavLink></li>
                <li><NavLink className="dropdown-item" to="/prog3">Link 3</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programmes
              </button>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/prog1">Link 1</NavLink></li>
                <li><NavLink className="dropdown-item" to="/prog2">Link 2</NavLink></li>
                <li><NavLink className="dropdown-item" to="/prog3">Link 3</NavLink></li>
              </ul>
            </li>

            

          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
