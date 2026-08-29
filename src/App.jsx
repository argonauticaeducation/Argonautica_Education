import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import SubjectTicker from "./components/sections/SubjectTicker";
import BenefitsSection from "./components/sections/BenefitsSection";
import TutorChoiceSection from "./components/sections/TutorChoiceSection";
import PopularSubjects from "./components/sections/PopularSubjects";
import HowTutoringWorks from "./components/sections/HowTutoringWorks";
import EnquireBanner from "./components/sections/EnquireBanner";
import WhyArgonautica from "./components/sections/WhyArgonautica";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import OurStory from "./components/sections/OurStory";
import FinalCTA from "./components/sections/FinalCTA";
import TuitionStages from "./components/sections/TuitionStages";

import EnquiryManager from "./components/enquiry/EnquiryManager";

// IMPORTANT:
// Use the Admin page, not AdminDashboard directly.
import Admin from "./pages/Admin";


function App() {

  /*
  ============================================================
  ADMIN ROUTE
  ============================================================
  */

  const isAdminPage =
    window.location.pathname === "/admin";


  if (isAdminPage) {
    return <Admin />;
  }


  /*
  ============================================================
  PUBLIC WEBSITE
  ============================================================
  */

  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <SubjectTicker />

        <BenefitsSection />

        <TutorChoiceSection />

        <TuitionStages />

        <PopularSubjects />

        <HowTutoringWorks />

        <EnquireBanner />

        <WhyArgonautica />

        <Pricing />

        <FAQ />

        <OurStory />

        <FinalCTA />

      </main>


      {/* =====================================================
          GLOBAL ENQUIRY POPUP
      ===================================================== */}

      <EnquiryManager />

    </>
  );
}


export default App;