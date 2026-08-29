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

import AdminDashboard from "./components/admin/AdminDashboard";


function App() {

  const isAdminPage =
    window.location.pathname === "/admin";


  /*
  ============================================================
  ADMIN PAGE
  ============================================================
  */

  if (isAdminPage) {
    return (
      <AdminDashboard />
    );
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

          One popup shared by every CTA on the website.
      ===================================================== */}

      <EnquiryManager />

    </>
  );
}


export default App;