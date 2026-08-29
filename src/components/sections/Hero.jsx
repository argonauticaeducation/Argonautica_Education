import { useEffect, useState } from "react";


/* =========================================================
   SLIDES
========================================================= */

const slides = [
  {
    id: 0,
    label: "A Level",
    image: "/images/a-level-result.png",
  },

  {
    id: 1,
    label: "A Level",
    image: "/images/a-level-result-2.png",
  },

  {
    id: 2,
    label: "IGCSE",
    image: "/images/igcse-results.png",
  },
];


/* =========================================================
   HERO COMPONENT
========================================================= */

const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);


  /* =======================================================
     MOVE TO NEXT SLIDE
  ======================================================= */

  const nextSlide = () => {

    setActiveIndex((current) => {
      return (current + 1) % slides.length;
    });

  };


  /* =======================================================
     AUTOMATIC SLIDE
     EVERY 2 SECONDS
  ======================================================= */

  useEffect(() => {

    if (isHovered) {
      return;
    }


    const timer = setInterval(() => {

      setActiveIndex((current) => {
        return (current + 1) % slides.length;
      });

    }, 2000);


    return () => {
      clearInterval(timer);
    };

  }, [isHovered]);


  /* =======================================================
     GET CARD ORDER

     0 = FRONT
     1 = MIDDLE
     2 = BACK
  ======================================================= */

  const getOrder = (index) => {

    return (
      (index - activeIndex + slides.length) %
      slides.length
    );

  };


  /* =======================================================
     CARD TRANSFORM
  ======================================================= */

  const getCardStyle = (order) => {

    /* -------------------------------------------------------
       FRONT CARD
    ------------------------------------------------------- */

    if (order === 0) {

      return {
        transform:
          "translate(0, 0) rotate(0deg) scale(1)",

        zIndex: 3,

        opacity: 1,
      };

    }


    /* -------------------------------------------------------
       MIDDLE CARD
    ------------------------------------------------------- */

    if (order === 1) {

      return {
        transform:
          "translate(18px, 16px) rotate(4deg) scale(.95)",

        zIndex: 2,

        opacity: 0.9,
      };

    }


    /* -------------------------------------------------------
       BACK CARD
    ------------------------------------------------------- */

    return {

      transform:
        "translate(-18px, 28px) rotate(-5deg) scale(.9)",

      zIndex: 1,

      opacity: 0.75,
    };

  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <section
      className="
        relative
        min-h-[calc(100vh-76px)]
        overflow-hidden
        bg-[#f7f3e9]

        md:min-h-[calc(100vh-84px)]
      "
    >

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div
        className="
          mx-auto
          grid

          min-h-[calc(100vh-76px)]

          w-full
          max-w-[1183px]

          grid-cols-1

          items-start

          px-[20px]
          pt-[36px]
          pb-[45px]

          sm:px-[28px]
          sm:pt-[44px]

          md:grid-cols-[1fr_1fr]
          md:gap-[30px]
          md:px-[28px]
          md:pt-[52px]

          lg:grid-cols-[570px_550px]
          lg:gap-[63px]
          lg:px-0
          lg:pt-[56px]
        "
      >

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            text-center

            md:items-start
            md:text-left
          "
        >

          {/* =================================================
              TOP BADGE
          ================================================= */}

          <div
            className="
              mb-[18px]

              inline-flex

              h-[32px]

              max-w-full

              items-center

              rounded-full

              border
              border-[#e4dac8]

              bg-[#faf8f1]

              px-[12px]

              sm:mb-[20px]
              sm:h-[34px]
              sm:px-[16px]
            "
          >

            <span
              className="
                text-[9px]
                font-bold
                tracking-[0.45px]
                text-[#bd5037]

                sm:text-[12px]
                sm:tracking-[0.55px]
              "
            >
              CAMBRIDGE TUTORING
            </span>


            <span
              className="
                mx-[5px]

                text-[10px]

                text-[#bd5037]

                sm:mx-[6px]
                sm:text-[12px]
              "
            >
              ✦
            </span>


            <span
              className="
                text-[9px]
                font-bold
                tracking-[0.45px]
                text-[#bd5037]

                sm:text-[12px]
                sm:tracking-[0.55px]
              "
            >
              ONLINE
            </span>


            <span
              className="
                mx-[5px]

                text-[10px]

                text-[#bd5037]

                sm:mx-[6px]
                sm:text-[12px]
              "
            >
              ✦
            </span>


            <span
              className="
                text-[9px]
                font-bold
                tracking-[0.45px]
                text-[#bd5037]

                sm:text-[12px]
                sm:tracking-[0.55px]
              "
            >
              MALAYSIA
            </span>

          </div>


          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            className="
              max-w-[520px]

              font-['DM_Serif_Display']

              text-[38px]

              leading-[1.08]

              tracking-[-1px]

              text-[#182557]

              sm:text-[44px]
              sm:tracking-[-1.2px]

              md:text-[44px]

              lg:text-[50px]
              lg:tracking-[-1.4px]
            "
          >
            Your syllabus. Your
            <br />
            tutor. Your goals.
          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-[15px]

              max-w-[540px]

              text-[18px]

              font-semibold

              leading-[1.42]

              tracking-[-0.2px]

              text-[#5752b4]

              sm:mt-[17px]
              sm:text-[21px]

              md:text-[20px]

              lg:mt-[18px]
              lg:text-[25px]
              lg:leading-[1.37]
              lg:tracking-[-0.3px]
            "
          >
            Expert Cambridge tutoring for Year 6–11
            <br />
            students, covering Lower Secondary,
            <br />
            Checkpoint, IGCSE and A Level.
          </p>


          {/* =================================================
              MATCHING PILL
          ================================================= */}

          <div
            className="
              mt-[20px]

              inline-flex

              min-h-[38px]

              max-w-full

              items-center

              rounded-full

              border
              border-[#e4dac8]

              bg-white

              px-[13px]
              py-[7px]

              sm:mt-[23px]
              sm:min-h-[39px]
              sm:px-[17px]
              sm:py-0

              lg:mt-[25px]
            "
          >

            <span
              className="
                mr-[8px]

                h-[8px]
                w-[8px]

                shrink-0

                rounded-full

                bg-[#7e8b56]
              "
            />


            <span
              className="
                text-[11px]

                font-bold

                leading-[1.35]

                text-[#182557]

                sm:text-[12px]

                lg:text-[13px]
              "
            >
              Get matched with a tutor in as little as 12 hours.
            </span>

          </div>


          {/* =================================================
              ENQUIRE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(
                new Event("open-enquiry")
              );
            }}
            className="
              mt-[21px]

              h-[51px]
              w-[172px]

              rounded-[10px]

              bg-[#dfa92f]

              text-[15px]
              font-bold

              text-[#17234f]

              shadow-[0_10px_22px_rgba(191,143,31,0.20)]

              transition-all
              duration-200

              hover:-translate-y-[1px]
              hover:bg-[#e5b33d]

              active:translate-y-0

              sm:mt-[23px]
              sm:h-[53px]
              sm:w-[176px]
              sm:text-[16px]

              lg:mt-[24px]
              lg:h-[55px]
              lg:w-[180px]
            "
          >
            Enquire now
          </button>


          {/* =================================================
              SMALL DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-[13px]

              text-[12px]

              leading-[1.5]

              text-[#4f5680]

              sm:mt-[15px]
              sm:text-[13px]

              lg:mt-[16px]
              lg:text-[14px]
            "
          >
            Trial class included. Taught to your exact exam board.
          </p>

        </div>


        {/* ===================================================
            RIGHT HERO MEDIA
        =================================================== */}

        <div
          className="
            relative

            mt-[42px]

            flex

            w-full

            flex-col

            items-center

            sm:mt-[48px]

            md:mt-0
          "

          onMouseEnter={() => setIsHovered(true)}

          onMouseLeave={() => setIsHovered(false)}
        >

          {/* =================================================
              ANIMATED RESULT CARD STACK
          ================================================= */}

          <div
            className="
              relative

              h-[265px]

              w-full

              max-w-[330px]

              cursor-pointer

              select-none

              sm:h-[285px]
              sm:max-w-[370px]

              md:h-[270px]
              md:max-w-[340px]

              lg:h-[300px]
              lg:max-w-[420px]
            "

            onClick={nextSlide}
          >

            {slides.map((slide, index) => {

              const order = getOrder(index);

              const cardStyle =
                getCardStyle(order);


              return (

                <div
                  key={slide.id}

                  className="
                    absolute

                    inset-0

                    flex

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-[17px]

                    border
                    border-[#e0d6c4]

                    bg-white

                    p-[12px]

                    shadow-[0_20px_44px_-18px_rgba(27,36,80,0.40)]

                    transition-[transform,opacity,box-shadow]

                    duration-[550ms]

                    ease-[cubic-bezier(0.4,0,0.2,1)]

                    sm:rounded-[19px]
                    sm:p-[15px]

                    md:rounded-[20px]
                    md:p-[16px]

                    lg:p-[18px]
                  "

                  style={{
                    ...cardStyle,

                    transformOrigin:
                      "center bottom",
                  }}
                >

                  {/* =========================================
                      CARD TAG
                  ========================================= */}

                  <div
                    className="
                      absolute

                      left-[10px]
                      top-[10px]

                      z-[2]

                      rounded-full

                      bg-[#182557]

                      px-[9px]
                      py-[4px]

                      text-[9px]

                      font-extrabold

                      tracking-[0.04em]

                      text-white

                      sm:left-[12px]
                      sm:top-[12px]

                      sm:px-[10px]
                      sm:py-[5px]

                      sm:text-[10px]

                      md:left-[12px]
                      md:top-[12px]

                      md:px-[11px]

                      md:text-[10px]

                      lg:left-[14px]
                      lg:top-[14px]

                      lg:px-[12px]

                      lg:text-[11px]
                    "
                  >
                    {slide.label}
                  </div>


                  {/* =========================================
                      RESULT IMAGE
                  ========================================= */}

                  <img
                    src={slide.image}

                    alt={`${slide.label} examination results`}

                    draggable="false"

                    className="
                      block

                      h-full
                      w-full

                      rounded-[7px]

                      object-contain

                      sm:rounded-[8px]
                    "
                  />

                </div>
              );
            })}

          </div>


          {/* =================================================
              DOT INDICATORS
          ================================================= */}

          <div
            className="
              my-[13px]

              mb-[16px]

              flex

              items-center
              justify-center

              gap-[7px]

              sm:my-[15px]
              sm:mb-[17px]
              sm:gap-[8px]

              md:my-[14px]
              md:mb-[16px]

              lg:my-[16px]
              lg:mb-[18px]
            "
          >

            {slides.map((slide, index) => (

              <button
                key={slide.id}

                type="button"

                aria-label={`Go to slide ${index + 1}`}

                onClick={(event) => {

                  event.stopPropagation();

                  setActiveIndex(index);

                }}

                className="
                  h-[7px]

                  rounded-full

                  transition-all

                  duration-300

                  sm:h-[8px]
                "

                style={{
                  width:
                    activeIndex === index
                      ? "20px"
                      : "7px",

                  background:
                    activeIndex === index
                      ? "#d29a1e"
                      : "#e4dbc9",
                }}
              />

            ))}

          </div>


          {/* =================================================
              INFORMATION CARD
          ================================================= */}

          <div
            className="
              relative

              w-full

              max-w-[550px]

              rounded-[12px]

              border
              border-[#e0d6c4]

              bg-[#faf8f1]

              px-[15px]
              py-[12px]

              text-center

              shadow-[0_12px_30px_-14px_rgba(27,36,80,0.25)]

              sm:rounded-[14px]
              sm:px-[18px]
              sm:py-[14px]

              md:text-left
            "
          >

            <b
              className="
                mb-[3px]

                block

                text-[13px]

                font-bold

                text-[#182557]

                sm:text-[14px]

                md:text-[15px]
              "
            >
              Taught by tutors who've been there.
            </b>


            <span
              className="
                text-[11px]

                leading-[1.45]

                text-[#555a80]

                sm:text-[12px]

                md:text-[13px]

                md:leading-[1.4]
              "
            >
              Real result cards. Every tutor sat these same papers and came out on top.
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};


export default Hero;