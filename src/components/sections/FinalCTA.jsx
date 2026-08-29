import { Anchor, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "./FinalCTA.css";


const FinalCTA = () => {
  return (
    <section className="final-cta-section">

      {/* =================================================
          CTA CONTAINER
      ================================================= */}

      <div className="final-cta">

        <div className="final-cta-star">
          ✦
        </div>


        <h2 className="final-cta-title">
          Nobody should have to{" "}
          <span>sail there alone.</span>
        </h2>


        <p className="final-cta-description">
          Not sure where to start? We can help you find the right
          tutor for IGCSE or A Level, in any format that suits you.
        </p>


        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(
              new Event("open-enquiry")
            );
          }}
          className="final-cta-button"
        >
          Enquire now
        </button>

      </div>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="site-footer">

        <div className="site-footer-brand">

          {/* LOGO */}

          <div className="site-footer-logo">

            <Anchor
              size={20}
              strokeWidth={2}
            />

            <span>
              Argonautica
            </span>

          </div>


          {/* DESCRIPTION */}

          <p className="site-footer-description">
            IGCSE and A Level tutoring in Malaysia. One-to-one,
            small group, and exam workshops.
          </p>


          {/* =================================================
              SOCIAL ICONS
          ================================================= */}

          <div className="site-footer-links">

            {/* Instagram */}

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-icon-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>


            {/* Email */}

            <a
              href="mailto:hello@argonauticaeducation.com"
              className="site-footer-icon-link"
              aria-label="Email"
            >
              <Mail
                size={19}
                strokeWidth={1.8}
              />
            </a>

          </div>

        </div>

      </footer>

    </section>
  );
};


export default FinalCTA;