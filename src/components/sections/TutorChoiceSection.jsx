import {
  X,
  Check,
} from "lucide-react";


const TutorChoiceSection = () => {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#f7f3e9]
        px-4
        pb-[54px]
        pt-[82px]

        max-md:px-5
        max-md:pb-[50px]
        max-md:pt-[65px]

        max-sm:px-4
        max-sm:pb-[45px]
        max-sm:pt-[52px]
      "
    >

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1140px]
          grid-cols-1
          items-center
          gap-[45px]

          lg:grid-cols-[535px_minmax(0,1fr)]
          lg:gap-[60px]

          max-lg:gap-[38px]
          max-md:gap-[32px]
        "
      >

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="w-full min-w-0">

          {/* =================================================
              TITLE
          ================================================= */}

          <h2
            className="
              max-w-[520px]

              font-['DM_Serif_Display']
              text-[40px]
              font-normal
              leading-[1.2]
              tracking-[-0.8px]
              text-[#182557]

              max-lg:max-w-[720px]
              max-lg:text-[38px]

              max-md:max-w-[650px]
              max-md:text-[34px]
              max-md:leading-[1.18]

              max-sm:max-w-full
              max-sm:text-[29px]
              max-sm:leading-[1.2]
              max-sm:tracking-[-0.4px]
            "
          >
            Not sure which tutor or{" "}
            <br className="hidden sm:block" />
            format is right for you?
          </h2>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-[22px]
              max-w-[530px]

              text-[17px]
              font-normal
              leading-[1.68]
              text-[#596080]

              break-words
              whitespace-normal

              max-lg:max-w-[720px]
              max-lg:text-[16px]
              max-lg:leading-[1.6]

              max-md:mt-[19px]
              max-md:max-w-[650px]
              max-md:text-[15px]
              max-md:leading-[1.6]

              max-sm:mt-[17px]
              max-sm:max-w-full
              max-sm:text-[14px]
              max-sm:leading-[1.6]
            "
          >
            Most students don't know if they need one to one help,
            a small group, or just a quick workshop before exams.
            That's normal. It depends on your subject, your schedule,
            and how you learn best.
          </p>


          {/* =================================================
              ITALIC DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-[17px]
              max-w-[530px]

              text-[17px]
              font-normal
              italic
              leading-[1.68]
              text-[#182557]

              break-words
              whitespace-normal

              max-lg:max-w-[720px]
              max-lg:text-[16px]
              max-lg:leading-[1.6]

              max-md:mt-[16px]
              max-md:max-w-[650px]
              max-md:text-[15px]
              max-md:leading-[1.6]

              max-sm:mt-[15px]
              max-sm:max-w-full
              max-sm:text-[14px]
              max-sm:leading-[1.6]
            "
          >
            Tell us your subject, exam board, year, and budget.{" "}
            <span className="font-bold not-italic text-[#c55336]">
              We'll help you find a tutor and format that fits.
            </span>{" "}
            No guesswork, no long searches.
          </p>

        </div>


        {/* =====================================================
            RIGHT COMPARISON CARD
        ===================================================== */}

        <div
          className="
            grid
            min-h-[294px]
            w-full
            min-w-0
            max-w-[525px]

            grid-cols-2

            overflow-hidden
            rounded-[14px]
            border
            border-[#e1d8c8]
            bg-white

            lg:justify-self-end

            max-lg:max-w-[720px]
            max-lg:justify-self-center

            max-md:w-full
            max-md:max-w-[650px]

            max-sm:grid-cols-1
            max-sm:min-h-0
          "
        >

          {/* ===================================================
              LEFT — FIGURING IT OUT ALONE
          =================================================== */}

          <div
            className="
              min-w-0
              bg-[#f5eeee]

              px-[24px]
              py-[25px]

              max-lg:px-[22px]
              max-lg:py-[23px]

              max-md:px-[20px]
              max-md:py-[22px]

              max-sm:px-[20px]
              max-sm:py-[22px]
            "
          >

            <h3
              className="
                text-[16px]
                font-bold
                leading-[1.3]
                text-[#182557]

                max-md:text-[15px]

                max-sm:text-[16px]
              "
            >
              Figuring it out alone
            </h3>


            <ul
              className="
                mt-[13px]
                space-y-[11px]

                max-md:space-y-[12px]

                max-sm:space-y-[13px]
              "
            >

              {/* =================================================
                  ITEM 1
              ================================================= */}

              <li className="flex min-w-0 items-start gap-[9px]">

                <X
                  size={16}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#c55336]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-words
                    whitespace-normal

                    text-[15px]
                    font-normal
                    leading-[1.35]
                    text-[#182557]

                    max-md:text-[14px]
                    max-md:leading-[1.4]

                    max-sm:text-[14px]
                    max-sm:leading-[1.4]
                  "
                >
                  Scrolling through tutor listings with no way to compare
                </span>

              </li>


              {/* =================================================
                  ITEM 2
              ================================================= */}

              <li className="flex min-w-0 items-start gap-[9px]">

                <X
                  size={16}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#c55336]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-words
                    whitespace-normal

                    text-[15px]
                    font-normal
                    leading-[1.35]
                    text-[#182557]

                    max-md:text-[14px]
                    max-md:leading-[1.4]

                    max-sm:text-[14px]
                    max-sm:leading-[1.4]
                  "
                >
                  No idea if a tutor knows your exam board
                </span>

              </li>


              {/* =================================================
                  ITEM 3
              ================================================= */}

              <li className="flex min-w-0 items-start gap-[9px]">

                <X
                  size={16}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#c55336]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-words
                    whitespace-normal

                    text-[15px]
                    font-normal
                    leading-[1.35]
                    text-[#182557]

                    max-md:text-[14px]
                    max-md:leading-[1.4]

                    max-sm:text-[14px]
                    max-sm:leading-[1.4]
                  "
                >
                  Booking blind, with no trial first
                </span>

              </li>


              {/* =================================================
                  ITEM 4
              ================================================= */}

              <li className="flex min-w-0 items-start gap-[9px]">

                <X
                  size={16}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#c55336]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-words
                    whitespace-normal

                    text-[15px]
                    font-normal
                    leading-[1.35]
                    text-[#182557]

                    max-md:text-[14px]
                    max-md:leading-[1.4]

                    max-sm:text-[14px]
                    max-sm:leading-[1.4]
                  "
                >
                  Guessing whether 1-1 or group suits you
                </span>

              </li>

            </ul>

          </div>


          {/* ===================================================
              RIGHT — ARGONAUTICA
          =================================================== */}

          <div
            className="
              min-w-0
              bg-[#fffefa]

              px-[24px]
              py-[25px]

              max-lg:px-[22px]
              max-lg:py-[23px]

              max-md:px-[20px]
              max-md:py-[22px]

              max-sm:px-[20px]
              max-sm:py-[22px]
            "
          >

            <h3
              className="
                text-[16px]
                font-bold
                leading-[1.3]
                text-[#182557]

                max-md:text-[15px]

                max-sm:text-[16px]
              "
            >
              Tutoring with Argonautica
            </h3>


            <ul
              className="
                mt-[13px]
                space-y-[11px]

                max-md:space-y-[12px]

                max-sm:space-y-[13px]
              "
            >

              {/* =================================================
                  ITEM 1
              ================================================= */}

              <li className="flex min-w-0 items-start gap-[9px]">

                <Check
                  size={16}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#8b945f]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-words
                    whitespace-normal

                    text-[15px]
                    font-normal
                    leading-[1.35]
                    text-[#182557]

                    max-md:text-[14px]
                    max-md:leading-[1.4]

                    max-sm:text-[14px]
                    max-sm:leading-[1.4]
                  "
                >
                  We match you to a tutor who knows your syllabus
                </span>

              </li>


              {/* =================================================
                  ITEM 2
              ================================================= */}

              <li className="flex min-w-0 items-start gap-[9px]">

                <Check
                  size={16}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#8b945f]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-words
                    whitespace-normal

                    text-[15px]
                    font-normal
                    leading-[1.35]
                    text-[#182557]

                    max-md:text-[14px]
                    max-md:leading-[1.4]

                    max-sm:text-[14px]
                    max-sm:leading-[1.4]
                  "
                >
                  Matched in as little as 12 hours
                </span>

              </li>


              {/* =================================================
                  ITEM 3
              ================================================= */}

              <li className="flex min-w-0 items-start gap-[9px]">

                <Check
                  size={16}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#8b945f]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-words
                    whitespace-normal

                    text-[15px]
                    font-normal
                    leading-[1.35]
                    text-[#182557]

                    max-md:text-[14px]
                    max-md:leading-[1.4]

                    max-sm:text-[14px]
                    max-sm:leading-[1.4]
                  "
                >
                  Trial class before you commit to anything
                </span>

              </li>


              {/* =================================================
                  ITEM 4
              ================================================= */}

              <li className="flex min-w-0 items-start gap-[9px]">

                <Check
                  size={16}
                  strokeWidth={1.8}
                  className="
                    mt-[2px]
                    shrink-0
                    text-[#8b945f]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-words
                    whitespace-normal

                    text-[15px]
                    font-normal
                    leading-[1.35]
                    text-[#182557]

                    max-md:text-[14px]
                    max-md:leading-[1.4]

                    max-sm:text-[14px]
                    max-sm:leading-[1.4]
                  "
                >
                  Pick 1-1, small group, or an exam workshop
                </span>

              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};


export default TutorChoiceSection;