import { FaFacebook, FaInstagram, FaYoutube ,FaPhone , FaEnvelope , FaHome , FaPaperclip } from "react-icons/fa";
import './Footer.css';


function Footer() {
   return (
    <footer
      className="text-white py-4 mt-5 border-top"
      style={{
    // backgroundImage: `url(${require("../photos/chef.webp")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#289a48ff",
  }}
    >
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          {/* Contact Section 1 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contactez Nous</h5>
            <p className="mb-1">
              <FaHome style={{color:"rgb(22, 90, 38)" }} /> Tiznit, Maroc
            </p>
            <p className="mb-1">
              <FaEnvelope style={{color:"rgb(22, 90, 38)" }} /> contact@indh.ma
            </p>
            <p>
              <FaPhone style={{color:"rgb(22, 90, 38)" }} /> +212 6 12 34 56 78
            </p>
          </div>
        <div className="col-md-4 mb-4">
  <h5 className="fw-bold">Sites utiles</h5>
  <ul className="list-unstyled">
    <li className="lien">
      <FaPaperclip />
      <a href="https://www.indh.ma" target="_blank" rel="noreferrer" className="text-white text-decoration-none  mx-2">
        Site Officiel de l’INDH
      </a>
    </li>
    <li className="lien">
      <FaPaperclip />
      <a href="https://www.maroc.ma/fr" target="_blank" rel="noreferrer" className="text-white text-decoration-none  mx-2">
        Gouvernement du Maroc
      </a>
    </li>
    <li className="lien">
      <FaPaperclip />
      <a href="https://www.hcp.ma" target="_blank" rel="noreferrer" className="text-white text-decoration-none  mx-2">
        Haut Commissariat au Plan
      </a>
    </li>
    <li className="lien">
      <FaPaperclip />
      <a href="https://www.odco.gov.ma" target="_blank" rel="noreferrer" className="text-white text-decoration-none mx-2">
        Office du Développement de la Coopération
      </a>
    </li>
    <li className="lien">
      <FaPaperclip  />
      <a href="https://www.eina4jobs.org/fr/agence-de-developpement-social-ads" target="_blank" rel="noreferrer" className="text-white text-decoration-none  mx-2">
        Agence du Développement Social
      </a>
    </li>
    <li className="lien">
      <FaPaperclip  />
      <a href="https://www.entraide.ma" target="_blank" rel="noreferrer" className="text-white text-decoration-none  mx-2">
        Entraide Nationale
      </a>
    </li>
  </ul>
</div>

          {/* Social Media */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Suivez-nous</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center  border-top ">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} INDH Tiznit . Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer