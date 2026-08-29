import {
  Check,
  ArrowLeftRight,
  Pencil,
  Star,
} from "lucide-react";


const benefits = [
  {
    icon: Check,
    title: "We do the matching",
    description: (
      <>
        No scrolling through
        <br className="hidden sm:block" />
        hundreds of tutor profiles
        <br className="hidden sm:block" />
        yourself.
      </>
    ),
  },

  {
    icon: ArrowLeftRight,
    title: "Matched in 12 hours",
    description: (
      <>
        Tell us what you need, we'll
        <br className="hidden sm:block" />
        find your tutor fast.
      </>
    ),
  },

  {
    icon: Pencil,
    title: "Knows your exam board",
    description: (
      <>
        Tutors matched to your
        <br className="hidden sm:block" />
        exact syllabus, not a generic
        <br className="hidden sm:block" />
        one.
      </>
    ),
  },

  {
    icon: Star,
    title: "From RM20/hour",
    description: (
      <>
        Affordable options for every
        <br className="hidden sm:block" />
        budget.
      </>
    ),
  },
];


const BenefitsSection = () => {
  return (
    <section
      className="
        w-full
        bg-[#f7f3e9]
        px-[16px]
        pb-0
        pt-[38px]
        sm:px-[22px]
        sm:pt-[44px]
        md:px-[24px]
        md:pt-[50px]
        lg:px-4
        lg:pt-[54px]
      "
    >

      {/* =====================================================
          BENEFITS CARD
      ===================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          overflow-hidden
          rounded-[15px]
          border
          border-[#e2d9c9]
          bg-[#faf8f1]
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {benefits.map((benefit, index) => {

          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className={`
                flex
                min-w-0
                min-h-[124px]
                items-start
                gap-[13px]
                px-[20px]
                py-[21px]

                sm:min-h-[130px]
                sm:gap-[14px]
                sm:px-[22px]
                sm:py-[23px]

                md:min-h-[132px]
                md:px-[24px]
                md:py-[24px]

                lg:min-h-[132px]
                lg:gap-[15px]
                lg:px-[27px]
                lg:py-[25px]

                ${
                  index !== benefits.length - 1
                    ? "border-b border-[#e2d9c9] lg:border-b-0 lg:border-r"
                    : ""
                }

                ${
                  index === 1
                    ? "sm:border-r-0 lg:border-r"
                    : ""
                }

                ${
                  index === 2
                    ? "sm:border-b lg:border-b-0"
                    : ""
                }

                ${
                  index === 3
                    ? "border-b-0"
                    : ""
                }
              `}
            >

              {/* =================================================
                  ICON
              ================================================= */}

              <div
                className="
                  flex
                  h-[32px]
                  w-[32px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d89b18]
                  bg-[#faf8f1]

                  sm:h-[33px]
                  sm:w-[33px]

                  lg:h-[34px]
                  lg:w-[34px]
                "
              >

                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="
                    text-[#d89b18]
                    sm:h-[17px]
                    sm:w-[17px]
                  "
                />

              </div>


              {/* =================================================
                  TEXT CONTENT
              ================================================= */}

              <div
                className="
                  min-w-0
                  flex-1
                  pt-[1px]
                "
              >

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    text-[15px]
                    font-bold
                    leading-[1.25]
                    tracking-[-0.1px]
                    text-[#182557]

                    sm:text-[15px]

                    md:text-[16px]

                    lg:whitespace-nowrap
                    lg:text-[16px]
                  "
                >
                  {benefit.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-[4px]
                    text-[12px]
                    font-normal
                    leading-[1.4]
                    text-[#596080]

                    sm:text-[13px]

                    md:text-[14px]
                    md:leading-[1.35]

                    lg:text-[14px]
                  "
                >
                  {benefit.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};


export default BenefitsSection;