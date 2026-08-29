const Pricing = () => {
  const plans = [
    {
      type: "GROUP",
      title: "Small Group",
      description:
        "3 to 6 students, split the cost, same tutor quality.",
      price: "RM20",
      suffix: "/hr per student",
      features: [
        "Join with friends or an existing group",
        "Live, interactive sessions",
        "Matched to your syllabus and board",
      ],
      button: "Join a group",
      featured: false,
    },

    {
      type: "MOST BOOKED",
      title: "Exam Crash Workshop",
      description:
        "A 2.5-hour exam workshop, built for Year 10 and Year 11 students.",
      price: "RM25",
      suffix: "/session",
      features: [
        "Focused on exam technique and key topics",
        "Live Q&A, ask anything mid-session",
        "One subject, or bundle a few together",
      ],
      button: "Book a workshop",
      featured: true,
    },

    {
      type: "1-1",
      title: "One-to-One",
      description:
        "Fully personalised pacing, content and scheduling.",
      price: "RM40",
      suffix: "/hr from",
      features: [
        "Hand-picked tutor match, plus a trial class",
        "We keep matching until it clicks",
        "Online or in-person across Malaysia",
      ],
      button: "Find a 1-1 tutor",
      featured: false,
    },
  ];

  const openEnquiry = (event) => {
    event.preventDefault();

    window.dispatchEvent(
      new Event("open-enquiry")
    );
  };

  return (
    <section
      id="pricing"
      className="
        w-full
        overflow-hidden
        bg-[#f7f3e9]
        px-4
        py-[55px]
        sm:px-5
        sm:py-[58px]
        md:px-6
        md:py-[60px]
        lg:py-[64px]
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1080px]
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-[1000px]
            text-center
          "
        >
          {/* EYEBROW */}

          <p
            className="
              m-0
              font-['DM_Serif_Display']
              text-[19px]
              leading-[1.2]
              text-[#5752b4]

              sm:text-[20px]

              md:text-[21px]

              lg:text-[22px]
            "
          >
            Pricing
          </p>

          {/* MAIN TITLE */}

          <h2
            className="
              mt-[7px]
              mb-0
              px-1
              font-['DM_Serif_Display']
              text-[26px]
              font-normal
              leading-[1.16]
              tracking-[-0.4px]
              text-[#182557]

              min-[351px]:text-[27px]

              sm:px-0
              sm:text-[29px]

              md:text-[32px]

              lg:text-[36px]
            "
          >
            Good tutoring, without the huge price tag.
          </h2>

          {/* SUBTITLE */}

          <p
            className="
              mx-auto
              mt-[13px]
              mb-0
              max-w-[700px]
              px-2
              font-['Caveat']
              text-[12.5px]
              font-medium
              leading-[1.3]
              text-[#5752b4]
              underline
              decoration-[1px]
              underline-offset-[4px]

              sm:px-4
              sm:text-[13.5px]

              md:text-[15px]

              lg:text-[16px]
            "
          >
            Affordable tutoring from Year 6 to Year 11, with options for
            different budgets and learning styles.
          </p>
        </div>

        {/* =====================================================
            PRICING CARDS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-[27px]
            grid
            w-full
            max-w-[410px]
            grid-cols-1
            gap-[14px]

            min-[351px]:max-w-[420px]

            sm:mt-[30px]
            sm:max-w-[620px]
            sm:grid-cols-2
            sm:gap-[14px]

            md:mt-[32px]
            md:max-w-[820px]
            md:grid-cols-3
            md:gap-[13px]

            lg:mt-[36px]
            lg:max-w-[960px]
            lg:gap-[16px]
          "
        >
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`
                relative
                flex
                w-full
                min-w-0
                flex-col
                overflow-hidden
                rounded-[13px]
                border
                text-left
                transition-all
                duration-200

                ${
                  plan.featured
                    ? `
                      border-[#1c2758]
                      bg-[#1c2758]
                      shadow-[0_14px_28px_rgba(24,37,87,0.18)]

                      md:-translate-y-[5px]
                      md:hover:-translate-y-[7px]
                    `
                    : `
                      border-[#e3d7c1]
                      bg-[#fffefa]

                      hover:-translate-y-[2px]
                      hover:border-[#d7c9b2]
                      hover:shadow-[0_10px_24px_rgba(24,37,87,0.07)]
                    `
                }

                min-h-[300px]

                sm:min-h-[310px]

                md:min-h-[315px]

                lg:min-h-[325px]
              `}
            >
              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div
                className="
                  flex
                  h-full
                  min-h-[300px]
                  flex-col
                  px-[18px]
                  py-[21px]

                  min-[351px]:px-[19px]

                  sm:min-h-[310px]
                  sm:px-[18px]
                  sm:py-[22px]

                  md:min-h-[315px]
                  md:px-[16px]
                  md:py-[21px]

                  lg:min-h-[325px]
                  lg:px-[22px]
                  lg:py-[23px]
                "
              >
                {/* =================================================
                    BADGE
                ================================================= */}

                <div
                  className={`
                    flex
                    h-[20px]
                    w-fit
                    items-center
                    justify-center
                    rounded-full
                    border
                    px-[9px]
                    text-[8px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.2px]

                    ${
                      plan.featured
                        ? `
                          border-[#6d7695]
                          bg-[#424d78]
                          text-[#e8b33b]
                        `
                        : `
                          border-[#e2d8c7]
                          bg-[#fffefa]
                          text-[#5752b4]
                        `
                    }
                  `}
                >
                  {plan.type}
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className={`
                    mt-[13px]
                    mb-0
                    font-['DM_Serif_Display']
                    text-[17px]
                    font-normal
                    leading-[1.18]

                    min-[351px]:text-[18px]

                    sm:text-[18px]

                    md:text-[16px]

                    lg:text-[19px]

                    ${
                      plan.featured
                        ? "text-white"
                        : "text-[#182557]"
                    }
                  `}
                >
                  {plan.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className={`
                    mt-[8px]
                    mb-0
                    max-w-full
                    font-['Inter']
                    text-[9.5px]
                    font-normal
                    leading-[1.48]

                    min-[351px]:text-[10px]

                    sm:text-[10px]

                    md:text-[9.5px]

                    lg:text-[11px]

                    ${
                      plan.featured
                        ? "text-white"
                        : "text-[#596080]"
                    }
                  `}
                >
                  {plan.description}
                </p>

                {/* =================================================
                    PRICE
                ================================================= */}

                <div
                  className="
                    mt-[15px]
                    flex
                    items-baseline
                    gap-[3px]

                    sm:mt-[15px]

                    md:mt-[14px]

                    lg:mt-[17px]
                  "
                >
                  <span
                    className={`
                      font-['DM_Serif_Display']
                      text-[28px]
                      font-normal
                      leading-none
                      tracking-[-0.4px]

                      min-[351px]:text-[29px]

                      sm:text-[29px]

                      md:text-[27px]

                      lg:text-[30px]

                      ${
                        plan.featured
                          ? "text-[#e5b43d]"
                          : "text-[#182557]"
                      }
                    `}
                  >
                    {plan.price}
                  </span>

                  <span
                    className={`
                      font-['Inter']
                      text-[8px]
                      font-medium
                      leading-none

                      sm:text-[8.5px]

                      md:text-[8px]

                      lg:text-[9px]

                      ${
                        plan.featured
                          ? "text-white"
                          : "text-[#182557]"
                      }
                    `}
                  >
                    {plan.suffix}
                  </span>
                </div>

                {/* =================================================
                    FEATURES
                ================================================= */}

                <div
                  className="
                    mt-[13px]
                    flex
                    flex-col
                    gap-[7px]

                    sm:mt-[13px]
                    sm:gap-[7px]

                    md:mt-[12px]
                    md:gap-[6px]

                    lg:mt-[15px]
                    lg:gap-[8px]
                  "
                >
                  {plan.features.map(
                    (feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="
                          flex
                          items-start
                          gap-[7px]

                          md:gap-[6px]

                          lg:gap-[8px]
                        "
                      >
                        <span
                          className={`
                            mt-[1px]
                            flex-shrink-0
                            text-[12px]
                            font-bold
                            leading-none

                            ${
                              plan.featured
                                ? "text-[#f0c44f]"
                                : "text-[#d49a20]"
                            }
                          `}
                        >
                          –
                        </span>

                        <p
                          className={`
                            m-0
                            font-['Inter']
                            text-[9px]
                            font-normal
                            leading-[1.4]

                            min-[351px]:text-[9.5px]

                            sm:text-[9.5px]

                            md:text-[8.8px]

                            lg:text-[10px]

                            ${
                              plan.featured
                                ? "text-white"
                                : "text-[#182557]"
                            }
                          `}
                        >
                          {feature}
                        </p>
                      </div>
                    )
                  )}
                </div>

                {/* =================================================
                    BUTTON
                ================================================= */}

                <div
                  className="
                    mt-auto
                    pt-[20px]

                    sm:pt-[21px]

                    md:pt-[20px]

                    lg:pt-[22px]
                  "
                >
                  <button
                    type="button"
                    onClick={openEnquiry}
                    className={`
                      flex
                      h-[36px]
                      w-full
                      items-center
                      justify-center
                      rounded-[7px]
                      px-[14px]
                      text-[9.5px]
                      font-bold
                      leading-none
                      transition-all
                      duration-200

                      sm:h-[37px]

                      md:h-[34px]
                      md:text-[9px]

                      lg:h-[36px]
                      lg:text-[10px]

                      ${
                        plan.featured
                          ? `
                            border
                            border-[#dfaa2e]
                            bg-[#dfaa2e]
                            text-[#182557]
                            shadow-[0_7px_15px_rgba(223,170,46,0.22)]

                            hover:-translate-y-[1px]
                            hover:bg-[#e8b947]
                          `
                          : `
                            border
                            border-[#182557]
                            bg-transparent
                            text-[#182557]

                            hover:-translate-y-[1px]
                            hover:bg-[#182557]
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            PRICING NOTE
        ===================================================== */}

        <p
          className="
            mx-auto
            mt-[18px]
            max-w-[650px]
            px-2
            text-center
            font-['Inter']
            text-[8px]
            font-normal
            leading-[1.4]
            text-[#596080]

            sm:mt-[19px]
            sm:px-4
            sm:text-[8.5px]

            md:mt-[20px]
            md:text-[8.5px]

            lg:text-[9px]
          "
        >
          Simple pricing. No hidden fees. Your final rate depends on
          subject, level and tutor experience. If cost is a genuine
          barrier, just ask, we quietly work with families who need
          support.
        </p>

        {/* =====================================================
            FREE TRIAL
        ===================================================== */}

        <div
          className="
            mt-[18px]
            flex
            justify-center

            sm:mt-[19px]

            md:mt-[20px]
          "
        >
          <button
            type="button"
            onClick={openEnquiry}
            className="
              flex
              h-[38px]
              w-[140px]
              items-center
              justify-center
              rounded-[8px]
              bg-[#e0ac34]
              px-[18px]
              text-[10px]
              font-bold
              leading-none
              text-[#182557]
              shadow-[0_8px_18px_rgba(224,172,52,0.24)]
              transition-all
              duration-200

              hover:-translate-y-[2px]
              hover:bg-[#e7b541]

              sm:h-[39px]
              sm:w-[145px]

              md:h-[40px]
              md:w-[145px]
              md:text-[11px]
            "
          >
            Book a free trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;