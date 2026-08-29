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

  return (
    <section
      id="pricing"
      className="
        w-full
        bg-[#f7f3e9]
        py-[60px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1080px]
          px-5
        "
      >

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="text-center">

          <p
            className="
              m-0
              font-['DM_Serif_Display']
              text-[22px]
              leading-[1.2]
              text-[#5650ad]
            "
          >
            Pricing
          </p>

          <h2
            className="
              mt-[6px]
              mb-0
              font-['DM_Serif_Display']
              text-[36px]
              leading-[1.12]
              tracking-[-0.6px]
              text-[#182557]
            "
          >
            Good tutoring, without the huge price tag.
          </h2>

          <p
            className="
              mt-[16px]
              mb-0
              font-['Caveat']
              text-[16px]
              font-medium
              leading-[1.2]
              text-[#5650ad]
              underline
              decoration-[1px]
              underline-offset-[4px]
            "
          >
            Affordable tutoring from Year 6 to Year 11, with options for
            different budgets and learning styles.
          </p>

        </div>


        {/* =====================================================
            CARDS WRAPPER

            The wrapper uses flex instead of equal-height grid
            because the center card must intentionally be taller.
        ===================================================== */}

        <div
          className="
            mt-[34px]
            flex
            w-full
            items-center
            justify-center
            gap-[14px]
          "
        >

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative
                flex
                flex-shrink-0
                flex-col
                rounded-[16px]
                border
                ${
                  plan.featured
                    ? `
                      w-[320px]
                      min-h-[350px]
                      self-center
                      border-[#1c2859]
                      bg-[#1c2859]
                      px-[24px]
                      py-[23px]
                      shadow-[0_17px_34px_rgba(24,37,87,0.23)]
                    `
                    : `
                      w-[320px]
                      min-h-[325px]
                      self-center
                      border-[#e3d7c1]
                      bg-[#fffdf8]
                      px-[24px]
                      py-[22px]
                    `
                }
              `}
            >

              {/* =================================================
                  LABEL
              ================================================= */}

              <div
                className={`
                  flex
                  h-[22px]
                  w-fit
                  items-center
                  rounded-full
                  border
                  px-[11px]
                  text-[9px]
                  font-bold
                  leading-none
                  tracking-[0.02em]
                  ${
                    plan.featured
                      ? `
                        border-[#6c7595]
                        bg-[#35416f]
                        text-[#f0c44f]
                      `
                      : `
                        border-[#e2d8c7]
                        bg-[#fffdf8]
                        text-[#5650ad]
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
                  mt-[16px]
                  mb-0
                  font-['DM_Serif_Display']
                  text-[19px]
                  leading-[1.15]
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
                  max-w-[275px]
                  text-[11.5px]
                  font-medium
                  leading-[1.45]
                  ${
                    plan.featured
                      ? "text-[#f5f3ed]"
                      : "text-[#4f628d]"
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
                  mt-[18px]
                  flex
                  items-baseline
                  gap-[3px]
                "
              >

                <span
                  className={`
                    font-['DM_Serif_Display']
                    text-[34px]
                    leading-none
                    tracking-[-0.5px]
                    ${
                      plan.featured
                        ? "text-[#f0c44f]"
                        : "text-[#182557]"
                    }
                  `}
                >
                  {plan.price}
                </span>

                <span
                  className={`
                    text-[10px]
                    font-medium
                    ${
                      plan.featured
                        ? "text-[#f3f1e9]"
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
                  mt-[18px]
                  flex
                  flex-col
                  gap-[9px]
                "
              >

                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="
                      flex
                      items-start
                      gap-[9px]
                    "
                  >

                    <span
                      className={`
                        mt-[1px]
                        flex-shrink-0
                        text-[12px]
                        font-medium
                        ${
                          plan.featured
                            ? "text-[#f0c44f]"
                            : "text-[#d49b20]"
                        }
                      `}
                    >
                      –
                    </span>

                    <p
                      className={`
                        m-0
                        text-[11px]
                        font-medium
                        leading-[1.45]
                        ${
                          plan.featured
                            ? "text-white"
                            : "text-[#263b6d]"
                        }
                      `}
                    >
                      {feature}
                    </p>

                  </div>
                ))}

              </div>


              {/* =================================================
                  BUTTON
              ================================================= */}

              <div
                className="
                  mt-auto
                  pt-[22px]
                "
              >

                <button
                  type="button"
                   onClick={(event) => {
    event.preventDefault();

    window.dispatchEvent(
      new Event("open-enquiry")
    );
  }}
                  className={`
                    flex
                    h-[42px]
                    w-full
                    items-center
                    justify-center
                    rounded-[7px]
                    px-[16px]
                    text-[11px]
                    font-bold
                    transition-all
                    duration-200
                    ${
                      plan.featured
                        ? `
                          bg-[#e2ae35]
                          text-[#182557]
                          shadow-[0_8px_18px_rgba(226,174,53,0.25)]
                          hover:bg-[#e8b83f]
                        `
                        : `
                          border
                          border-[#182557]
                          bg-transparent
                          text-[#182557]
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
          ))}

        </div>


        {/* =====================================================
            PRICING NOTE
        ===================================================== */}

        <p
          className="
            mx-auto
            mt-[20px]
            max-w-[600px]
            text-center
            text-[10px]
            font-normal
            leading-[1.4]
            text-[#596b92]
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
          "
        >
          <button
            type="button"
            onClick={(event) => {
    event.preventDefault();

    window.dispatchEvent(
      new Event("open-enquiry")
    );
  }}
            className="
              flex
              h-[44px]
              min-w-[140px]
              items-center
              justify-center
              rounded-[8px]
              bg-[#e2ae35]
              px-[22px]
              text-[12px]
              font-bold
              text-[#182557]
              shadow-[0_9px_20px_rgba(226,174,53,0.24)]
              transition-all
              duration-200
              hover:-translate-y-[1px]
              hover:bg-[#e8b83f]
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