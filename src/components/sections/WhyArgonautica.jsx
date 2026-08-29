import {
  Pencil,
  Check,
  RotateCcw,
  Mail,
} from "lucide-react";

const WhyArgonautica = () => {
  const features = [
    {
      icon: Pencil,
      iconBg: "#5c55b5",
      title: "A personalised lesson plan",
      description:
        "Every student gets their own plan built around their subjects, their gaps, and their goals. No generic worksheets, no one-size-fits-all.",
    },
    {
      icon: Check,
      iconBg: "#81915c",
      title: "Weekly check-ins with the head",
      description:
        "Our head personally checks in every week to review how each student is doing and to keep tutoring on track.",
    },
    {
      icon: RotateCcw,
      iconBg: "#bf5738",
      title: "Constant reviewing",
      description:
        "We keep reviewing progress and adjusting the plan, so lessons stay useful as exams get closer.",
    },
    {
      icon: Mail,
      iconBg: "#d89a16",
      title: "Parents kept in the loop",
      description:
        "Parents get regular updates on progress, so you always know what's working and what your child is focusing on next.",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#f7f3e9]
        py-[58px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1060px]
          px-5
        "
      >

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="text-center">

          <p
            className="
              m-0
              font-['DM_Serif_Display']
              text-[21px]
              leading-[1.2]
              text-[#5650ad]
            "
          >
            Why Argonautica
          </p>

          <h2
            className="
              mt-[5px]
              mb-0
              font-['DM_Serif_Display']
              text-[34px]
              leading-[1.15]
              tracking-[-0.5px]
              text-[#182557]
            "
          >
            More than just a tutor.
          </h2>

          <p
            className="
              mt-[18px]
              mb-0
              font-['Caveat']
              text-[16px]
              font-medium
              leading-[1.2]
              text-[#5650ad]
              underline
              decoration-[1px]
              underline-offset-[3px]
            "
          >
            Every student gets a real plan, and parents stay in the loop.
          </p>

        </div>


        {/* =====================================================
            FEATURE CARDS
        ===================================================== */}

        <div
          className="
            mt-[28px]
            grid
            grid-cols-1
            gap-[14px]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  min-h-[235px]
                  rounded-[13px]
                  border
                  border-[#e5d9c3]
                  bg-[#fffdf8]
                  px-[18px]
                  py-[20px]
                "
              >

                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className="
                    flex
                    h-[37px]
                    w-[37px]
                    items-center
                    justify-center
                    rounded-[8px]
                  "
                  style={{
                    backgroundColor: feature.iconBg,
                  }}
                >
                  <Icon
                    size={19}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>


                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    mt-[14px]
                    mb-0
                    max-w-[190px]
                    font-['DM_Serif_Display']
                    text-[17px]
                    leading-[1.12]
                    tracking-[-0.1px]
                    text-[#182557]
                  "
                >
                  {feature.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-[9px]
                    mb-0
                    text-[13px]
                    font-normal
                    leading-[1.48]
                    text-[#4f628d]
                  "
                >
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyArgonautica;