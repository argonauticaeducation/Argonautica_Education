const stages = [
  {
    badge: "Years 7–9",
    badgeType: "green",
    title: "Cambridge Lower Secondary",
    description:
      "Building strong foundations in English, Mathematics and Science, plus wider subjects, for learners roughly aged 11 to 14. We keep it engaging and fill gaps early, before they matter at IGCSE.",
  },

  {
    badge: "End of Year 9",
    badgeType: "gold",
    title: "Checkpoint preparation",
    description:
      "Focused prep for the Cambridge Lower Secondary Checkpoint in English, Maths and Science, the tests marked by Cambridge examiners at the end of Stage 9. We target the exact skills each paper rewards.",
    highlighted: true,
  },

  {
    badge: "Years 10–11",
    badgeType: "red",
    title: "IGCSE & beyond",
    description:
      "Full IGCSE tuition across the sciences, maths, English and humanities, with a clear path onward to A Level. Taught by tutors who scored top grades in these exact exams.",
  },
];

const years = [
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
];

const TuitionStages = () => {
  return (
    <section
      id="tuition"
      className="
        w-full
        overflow-hidden
        bg-[#f7f3e9]
        px-4
        pb-[45px]
        pt-[78px]
      "
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          text-center
        "
      >

        {/* -------------------------------------------------
            SMALL HEADING
        ------------------------------------------------- */}

        <p
          className="
            font-display
            text-[25px]
            font-normal
            leading-[1.2]
            text-[#5752b4]
          "
        >
          Every stage, Year 6 to Year 11
        </p>


        {/* -------------------------------------------------
            MAIN HEADING
        ------------------------------------------------- */}

        <h2
          className="
            mt-[10px]
            font-display
            text-[43px]
            font-normal
            leading-[1.12]
            tracking-[-0.9px]
            text-[#182557]
          "
        >
          Tuition across the Cambridge British curriculum.
        </h2>


        {/* -------------------------------------------------
            HANDWRITTEN SUBTITLE
        ------------------------------------------------- */}

        <p
          className="
            mt-[17px]
            font-handwritten
            text-[18px]
            font-medium
            leading-[1.2]
            tracking-[0px]
            text-[#5752b4]
            underline
            decoration-[#5752b4]
            decoration-[1px]
            underline-offset-[4px]
          "
        >
          From Lower Secondary and Checkpoint through to IGCSE and A Level.
        </p>


        {/* =================================================
            YEAR NAVIGATION
        ================================================= */}

        <div
          className="
            mt-[58px]
            flex
            w-full
            justify-center
            overflow-x-auto
            pb-[4px]
            scrollbar-none
          "
        >
          <div
            className="
              flex
              min-w-max
              items-center
              justify-center
              gap-[9px]
              px-2
            "
          >

            {years.map((year, index) => (
              <div
                key={year}
                className="flex items-center"
              >

                {/* Year pill */}

                <button
                  type="button"
                  className="
                    flex
                    h-[38px]
                    min-w-[82px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#e3d9c8]
                    bg-[#fffefa]
                    px-[18px]
                    text-[14px]
                    font-semibold
                    leading-none
                    text-[#182557]
                    transition-all
                    duration-150
                    hover:border-[#d49a1e]
                    hover:bg-white
                  "
                >
                  {year}
                </button>


                {/* Arrow */}

                {index < years.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      ml-[9px]
                      shrink-0
                      text-[22px]
                      font-normal
                      leading-none
                      text-[#d49a1e]
                    "
                  >
                    ›
                  </span>
                )}

              </div>
            ))}

          </div>
        </div>

      </div>


      {/* =====================================================
          THREE CURRICULUM CARDS
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[43px]
          grid
          w-full
          max-w-[1170px]
          grid-cols-1
          gap-[20px]
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {stages.map((stage) => (
          <article
            key={stage.title}
            className={`
              flex
              min-w-0
              min-h-[245px]
              flex-col
              rounded-[15px]
              border
              bg-[#fffefa]
              px-[26px]
              py-[27px]
              text-left
              transition-all
              duration-200

              ${
                stage.highlighted
                  ? `
                    border-[#d49a1e]
                    shadow-[0_14px_30px_rgba(212,154,30,0.12)]
                  `
                  : `
                    border-[#e3d9c8]
                  `
              }

              hover:-translate-y-[2px]
            `}
          >

            {/* -------------------------------------------------
                BADGE
            ------------------------------------------------- */}

            <div
              className={`
                inline-flex
                h-[25px]
                w-fit
                shrink-0
                items-center
                rounded-full
                px-[13px]
                text-[12px]
                font-bold
                leading-none
                text-white

                ${
                  stage.badgeType === "green"
                    ? "bg-[#80905b]"
                    : stage.badgeType === "gold"
                    ? "bg-[#d49a1e]"
                    : "bg-[#bf5a3f]"
                }
              `}
            >
              {stage.badge}
            </div>


            {/* -------------------------------------------------
                CARD TITLE
            ------------------------------------------------- */}

            <h3
              className="
                mt-[14px]
                font-display
                text-[21px]
                font-normal
                leading-[1.2]
                text-[#182557]
              "
            >
              {stage.title}
            </h3>


            {/* -------------------------------------------------
                CARD DESCRIPTION
            ------------------------------------------------- */}

            <p
              className="
                mt-[11px]
                font-body
                text-[15px]
                font-normal
                leading-[1.52]
                text-[#596080]
              "
            >
              {stage.description}
            </p>

          </article>
        ))}

      </div>


      {/* =====================================================
          BOTTOM NOTE
      ===================================================== */}

      <p
        className="
          mx-auto
          mt-[31px]
          max-w-[760px]
          text-center
          font-body
          text-[15px]
          font-normal
          italic
          leading-[1.5]
          text-[#596080]
        "
      >
        We also support Year 6 learners moving up from Cambridge Primary, so
        students step into Lower Secondary already confident.
      </p>

    </section>
  );
};

export default TuitionStages;