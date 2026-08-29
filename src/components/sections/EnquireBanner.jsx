import { Anchor } from "lucide-react";

import "./EnquireBanner.css";


const EnquireBanner = () => {
  return (
    <section className="enquire-banner-section">

      <div className="enquire-banner">

        {/* =================================================
            RIGHT ANCHOR ICON
        ================================================= */}

        <div className="enquire-banner-anchor">
          <Anchor
            size={25}
            strokeWidth={1.5}
          />
        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="enquire-banner-content">

          {/* =================================================
              POINT 1
          ================================================= */}

          <div className="enquire-banner-point">

            <span className="enquire-banner-check">
              ✓
            </span>

            <p>
              Every student learns differently, so we don't do
              one-size-fits-all. Tell us your subject, level,
              goals, budget and preferred format, and we'll
              hand-pick tutor options for you.
            </p>

          </div>


          {/* =================================================
              POINT 2
          ================================================= */}

          <div className="enquire-banner-point">

            <span className="enquire-banner-check">
              ✓
            </span>

            <p>
              We do the matching for you, so you don't have to
              search through hundreds of tutors yourself.
              Most students are matched within 12 hours.
            </p>

          </div>


          {/* =================================================
              POINT 3
          ================================================= */}

          <div className="enquire-banner-point">

            <span className="enquire-banner-check">
              ✓
            </span>

            <p className="enquire-banner-highlight">
              No pressure, no commitment until you're happy.
            </p>

          </div>


          {/* =================================================
              BUTTON
          ================================================= */}

          <button
  type="button"
  onClick={() => {
    window.dispatchEvent(new Event("open-enquiry"));
  }}
  className="enquire-banner-button"
>
  Enquire now
</button>

        </div>

      </div>

    </section>
  );
};


export default EnquireBanner;