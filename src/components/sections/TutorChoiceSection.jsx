import { X, Check } from "lucide-react";

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
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="w-full">
          <h2
            className="
              max-w-[520px]
              font-['DM_Serif_Display']
              text-[40px]
              font-normal
              leading-[1.2]
              tracking-[-0.8px]
              text-[#182557]
              max-lg:max-w-[700px]
              max-md:text-[34px]
              max-sm:text-[29px]
            "
          >
            Not sure which tutor or
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
              max-lg:max-w-[720px]
              max-md:text-[15px]
              max-md:leading-[1.6]
              max-sm:text-[14px]
            "
          >
            Most students don't know if they need one to one help, a small
            group, or just a quick workshop before exams. That's normal. It
            depends on your subject, your schedule, and how you learn best.
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
              max-lg:max-w-[720px]
              max-md:text-[15px]
              max-md:leading-[1.6]
              max-sm:text-[14px]
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
            max-md:max-w-[680px]
            max-sm:grid-cols-1
            max-sm:min-h-0
          "
        >
          {/* ===================================================
              LEFT — FIGURING IT OUT ALONE
          =================================================== */}

          <div
            className="
              bg-[#f5eeee]
              px-[24px]
              py-[25px]
              max-lg:px-[20px]
              max-lg:py-[22px]
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
              "
            >
              Figuring it out alone
            </h3>

            <ul
              className="
                mt-[13px]
                space-y-[11px]
                max-md:space-y-[10px]
              "
            >
              {/* Item 1 */}

              <li className="flex items-start gap-[9px]">
                <X
                  size={16}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#c55336]"
                />

                <span
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.25]
                    text-[#182557]
                    max-md:text-[13px]
                    max-sm:text-[13px]
                  "
                >
                  Scrolling through tutor
                  <br className="hidden lg:block" />
                  listings with no way to compare
                </span>
              </li>

              {/* Item 2 */}

              <li className="flex items-start gap-[9px]">
                <X
                  size={16}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#c55336]"
                />

                <span
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.25]
                    text-[#182557]
                    max-md:text-[13px]
                  "
                >
                  No idea if a tutor knows
                  <br className="hidden lg:block" />
                  your exam board
                </span>
              </li>

              {/* Item 3 */}

              <li className="flex items-start gap-[9px]">
                <X
                  size={16}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#c55336]"
                />

                <span
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.25]
                    text-[#182557]
                    max-md:text-[13px]
                  "
                >
                  Booking blind, with no trial
                  <br className="hidden lg:block" />
                  first
                </span>
              </li>

              {/* Item 4 */}

              <li className="flex items-start gap-[9px]">
                <X
                  size={16}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#c55336]"
                />

                <span
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.25]
                    text-[#182557]
                    max-md:text-[13px]
                  "
                >
                  Guessing whether 1-1 or
                  <br className="hidden lg:block" />
                  group suits you
                </span>
              </li>
            </ul>
          </div>

          {/* ===================================================
              RIGHT — ARGONAUTICA
          =================================================== */}

          <div
            className="
              bg-[#fffefa]
              px-[24px]
              py-[25px]
              max-lg:px-[20px]
              max-lg:py-[22px]
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
              "
            >
              Tutoring with Argonautica
            </h3>

            <ul
              className="
                mt-[13px]
                space-y-[11px]
                max-md:space-y-[10px]
              "
            >
              {/* Item 1 */}

              <li className="flex items-start gap-[9px]">
                <Check
                  size={16}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#8b945f]"
                />

                <span
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.25]
                    text-[#182557]
                    max-md:text-[13px]
                  "
                >
                  We match you to a tutor
                  <br className="hidden lg:block" />
                  who knows your syllabus
                </span>
              </li>

              {/* Item 2 */}

              <li className="flex items-start gap-[9px]">
                <Check
                  size={16}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#8b945f]"
                />

                <span
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.25]
                    text-[#182557]
                    max-md:text-[13px]
                  "
                >
                  Matched in as little as 12
                  <br className="hidden lg:block" />
                  hours
                </span>
              </li>

              {/* Item 3 */}

              <li className="flex items-start gap-[9px]">
                <Check
                  size={16}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#8b945f]"
                />

                <span
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.25]
                    text-[#182557]
                    max-md:text-[13px]
                  "
                >
                  Trial class before you
                  <br className="hidden lg:block" />
                  commit to anything
                </span>
              </li>

              {/* Item 4 */}

              <li className="flex items-start gap-[9px]">
                <Check
                  size={16}
                  strokeWidth={1.8}
                  className="mt-[2px] shrink-0 text-[#8b945f]"
                />

                <span
                  className="
                    text-[15px]
                    font-normal
                    leading-[1.25]
                    text-[#182557]
                    max-md:text-[13px]
                  "
                >
                  Pick 1-1, small group, or an
                  <br className="hidden lg:block" />
                  exam workshop
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