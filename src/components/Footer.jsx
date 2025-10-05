import { FaFacebook, FaInstagram, FaYoutube ,FaPhone , FaEnvelope , FaHome } from "react-icons/fa";
import './Footer.css';


function Footer() {
  return (
    <>
     <footer className=" text-white py-4 mt-5 border-top" style={{backgroundColor: "#2aa94eff",}}>
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          {/* Contact Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">Contactez Nous</h5>
            <p className="mb-1"><FaHome  style={{color: "#ffffffff",}} /> Tiznit, Maroc</p>
            <p className="mb-1"><FaEnvelope style={{color: "#ffffffff",}} /> contact@indh.ma</p>
            <p><FaPhone style={{color: "#ffffffff",}} /> +212 6 12 34 56 78</p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="fw-bold mb-3">Suivez-nous</h5>
            <div className="d-flex justify-content-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} INDH Tiznit. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer