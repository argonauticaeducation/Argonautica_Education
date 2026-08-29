const Benefits = () => {
  const benefits = [
    {
      icon: "✓",
      title: "We do the matching",
      description:
        "No scrolling through hundreds of tutor profiles yourself.",
    },
    {
      icon: "↔",
      title: "Matched in 12 hours",
      description:
        "Tell us what you need, we'll find your tutor fast.",
    },
    {
      icon: "⌁",
      title: "Knows your exam board",
      description:
        "Tutors matched to your exact syllabus, not a generic one.",
    },
    {
      icon: "★",
      title: "From RM20/hour",
      description:
        "Affordable options for every budget.",
    },
  ];

  return (
    <section
      className="
        w-full
        border-y
        border-[#e5ddcf]/70
        bg-[#f7f3e9]
        px-[20px]
        py-[24px]
        sm:px-[28px]
        sm:py-[28px]
        md:px-6
        md:py-[30px]
        lg:px-0
        lg:py-[32px]
      "
    >

      {/* =====================================================
          BENEFITS CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1145px]
          grid-cols-1
          gap-[18px]
          sm:grid-cols-2
          sm:gap-[20px]
          lg:grid-cols-4
          lg:gap-[20px]
        "
      >

        {benefits.map((benefit, index) => (

          <div
            className="
              flex
              min-w-0
              items-start
              gap-[12px]
              rounded-[12px]
              px-[10px]
              py-[8px]
              sm:px-[12px]
              sm:py-[10px]
              lg:px-[8px]
              lg:py-[6px]
            "
            key={index}
          >

            {/* =================================================
                ICON
            ================================================= */}

            <div
              className="
                flex
                h-[36px]
                w-[36px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#d8cdb9]
                bg-white
                text-[17px]
                font-bold
                text-[#d29a1e]
                sm:h-[38px]
                sm:w-[38px]
                sm:text-[18px]
                lg:h-[40px]
                lg:w-[40px]
                lg:text-[19px]
              "
            >
              {benefit.icon}
            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div
              className="
                min-w-0
                flex-1
              "
            >

              <h3
                className="
                  text-[14px]
                  font-bold
                  leading-[1.25]
                  tracking-[-0.1px]
                  text-[#182557]
                  sm:text-[15px]
                  lg:text-[15px]
                "
              >
                {benefit.title}
              </h3>


              <p
                className="
                  mt-[4px]
                  max-w-[235px]
                  text-[11px]
                  leading-[1.45]
                  text-[#666b82]
                  sm:text-[12px]
                  lg:text-[12px]
                "
              >
                {benefit.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};


export default Benefits;