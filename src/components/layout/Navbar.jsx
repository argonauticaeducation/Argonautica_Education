import { useEffect, useState } from "react";
import {
  Anchor,
  Sparkles,
  Menu,
  X,
} from "lucide-react";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);


  /*
  ============================================================
  OPEN ENQUIRY
  ============================================================
  */

  const openEnquiry = () => {
    setIsMobileMenuOpen(false);

    window.dispatchEvent(
      new Event("open-enquiry")
    );
  };


  /*
  ============================================================
  CLOSE MOBILE MENU
  ============================================================
  */

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  /*
  ============================================================
  CLOSE MENU WHEN SCREEN BECOMES DESKTOP
  ============================================================
  */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };


    window.addEventListener(
      "resize",
      handleResize
    );


    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);


  /*
  ============================================================
  LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ============================================================
  */

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }


    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);


  return (
    <header
      className="
        sticky
        top-0
        z-[100]
        h-[76px]
        w-full
        border-b
        border-[#e5ddcf]/50
        bg-[#f7f3e9]/80
        backdrop-blur-[10px]
        md:h-[84px]
      "
    >

      {/* ======================================================
          DESKTOP / MOBILE NAVBAR
      ======================================================= */}

      <nav
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-[1145px]
          items-center
          justify-between
          px-[18px]
          sm:px-[24px]
          md:px-4
          lg:px-0
        "
      >

        {/* ====================================================
            LOGO
        ==================================================== */}

        <a
          href="/"
          onClick={closeMobileMenu}
          className="
            flex
            shrink-0
            items-center
            gap-[8px]
            sm:gap-[9px]
          "
        >

          <Anchor
            size={21}
            strokeWidth={2.5}
            className="
              shrink-0
              text-[#d29a1e]
              sm:h-[22px]
              sm:w-[22px]
            "
          />

          <span
            className="
              font-['DM_Serif_Display']
              text-[22px]
              leading-none
              tracking-[-0.4px]
              text-[#182557]
              sm:text-[25px]
            "
          >
            Argonautica
          </span>

        </a>


        {/* ====================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <div
          className="
            hidden
            items-center
            gap-[27px]
            md:flex
          "
        >

          {/* SUBJECTS */}

          <a
            href="#subjects"
            className="
              text-[14px]
              font-semibold
              text-[#26345f]
              transition-opacity
              hover:opacity-70
            "
          >
            Subjects
          </a>


          {/* TUITION */}

          <a
            href="#tuition"
            className="
              text-[14px]
              font-semibold
              text-[#26345f]
              transition-opacity
              hover:opacity-70
            "
          >
            1-to-1 & Group Tuition
          </a>


          {/* PRICING */}

          <a
            href="#pricing"
            className="
              text-[14px]
              font-semibold
              text-[#26345f]
              transition-opacity
              hover:opacity-70
            "
          >
            Pricing
          </a>


          {/* FAQ */}

          <a
            href="#faq"
            className="
              text-[14px]
              font-semibold
              text-[#26345f]
              transition-opacity
              hover:opacity-70
            "
          >
            FAQ
          </a>

        </div>


        {/* ====================================================
            DESKTOP CTA
        ==================================================== */}

        <button
          type="button"
          onClick={openEnquiry}
          className="
            hidden
            h-[45px]
            shrink-0
            items-center
            gap-[8px]
            rounded-full
            bg-[#182557]
            px-[22px]
            text-[14px]
            font-bold
            text-white
            transition-all
            duration-200
            hover:scale-[1.02]
            active:scale-[0.98]
            md:flex
          "
        >

          <Sparkles
            size={12}
            fill="currentColor"
            strokeWidth={1.5}
            className="text-[#f0c44f]"
          />

          <span>
            Book a FREE trial
          </span>

          <Sparkles
            size={12}
            fill="currentColor"
            strokeWidth={1.5}
            className="text-[#f0c44f]"
          />

        </button>


        {/* ====================================================
            MOBILE MENU BUTTON
        ==================================================== */}

        <button
          type="button"
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          onClick={() =>
            setIsMobileMenuOpen(
              !isMobileMenuOpen
            )
          }
          className="
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            rounded-full
            text-[#182557]
            transition-all
            duration-200
            hover:bg-[#182557]/8
            active:scale-95
            md:hidden
          "
        >

          {isMobileMenuOpen ? (
            <X
              size={25}
              strokeWidth={2}
            />
          ) : (
            <Menu
              size={25}
              strokeWidth={2}
            />
          )}

        </button>

      </nav>


      {/* ======================================================
          MOBILE MENU OVERLAY
      ======================================================= */}

      {isMobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            top-[76px]
            z-[90]
            bg-[#182557]/15
            backdrop-blur-[3px]
            md:hidden
          "
          onClick={closeMobileMenu}
        />
      )}


      {/* ======================================================
          MOBILE MENU
      ======================================================= */}

      <div
        className={`
          absolute
          left-0
          right-0
          top-full
          z-[100]
          border-b
          border-[#e5ddcf]
          bg-[#f7f3e9]
          shadow-[0_18px_35px_rgba(24,37,87,0.10)]
          transition-all
          duration-300
          md:hidden
          ${
            isMobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }
        `}
      >

        <div
          className="
            mx-auto
            w-full
            max-w-[520px]
            px-[20px]
            pb-[24px]
            pt-[14px]
            sm:px-[28px]
          "
        >

          {/* ==================================================
              MOBILE LINKS
          =================================================== */}

          <div
            className="
              flex
              flex-col
            "
          >

            {/* SUBJECTS */}

            <a
              href="#subjects"
              onClick={closeMobileMenu}
              className="
                border-b
                border-[#e5ddcf]/70
                py-[17px]
                text-[15px]
                font-semibold
                text-[#26345f]
                transition-colors
                hover:text-[#d29a1e]
              "
            >
              Subjects
            </a>


            {/* TUITION */}

            <a
              href="#tuition"
              onClick={closeMobileMenu}
              className="
                border-b
                border-[#e5ddcf]/70
                py-[17px]
                text-[15px]
                font-semibold
                text-[#26345f]
                transition-colors
                hover:text-[#d29a1e]
              "
            >
              1-to-1 & Group Tuition
            </a>


            {/* PRICING */}

            <a
              href="#pricing"
              onClick={closeMobileMenu}
              className="
                border-b
                border-[#e5ddcf]/70
                py-[17px]
                text-[15px]
                font-semibold
                text-[#26345f]
                transition-colors
                hover:text-[#d29a1e]
              "
            >
              Pricing
            </a>


            {/* FAQ */}

            <a
              href="#faq"
              onClick={closeMobileMenu}
              className="
                border-b
                border-[#e5ddcf]/70
                py-[17px]
                text-[15px]
                font-semibold
                text-[#26345f]
                transition-colors
                hover:text-[#d29a1e]
              "
            >
              FAQ
            </a>

          </div>


          {/* ==================================================
              MOBILE CTA
          =================================================== */}

          <button
            type="button"
            onClick={openEnquiry}
            className="
              mt-[20px]
              flex
              h-[48px]
              w-full
              items-center
              justify-center
              gap-[8px]
              rounded-full
              bg-[#182557]
              px-[22px]
              text-[14px]
              font-bold
              text-white
              shadow-[0_10px_22px_rgba(24,37,87,0.14)]
              transition-all
              duration-200
              hover:bg-[#111c49]
              active:scale-[0.98]
            "
          >

            <Sparkles
              size={12}
              fill="currentColor"
              strokeWidth={1.5}
              className="text-[#f0c44f]"
            />

            <span>
              Book a FREE trial
            </span>

            <Sparkles
              size={12}
              fill="currentColor"
              strokeWidth={1.5}
              className="text-[#f0c44f]"
            />

          </button>

        </div>

      </div>

    </header>
  );
};


export default Navbar;