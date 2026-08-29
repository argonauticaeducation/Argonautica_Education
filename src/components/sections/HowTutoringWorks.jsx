import {
  UserRound,
  UsersRound,
  Clock3,
} from "lucide-react";

const formats = [
  {
    id: 1,
    icon: "1:1",
    iconComponent: UserRound,
    iconColor: "#5c55ad",
    title: "One-to-one tutoring",
    description:
      "Personalised support with a tutor matched to your subject, level, goals and schedule.",

    points: [
      "Matched to your exact syllabus and board",
      "Trial class before you commit",
      "Flexible scheduling, online or in-person",
    ],

    button: "See 1-1 pricing",
  },

  {
    id: 2,
    icon: "GRP",
    iconComponent: UsersRound,
    iconColor: "#7e8b56",

    title: "Small group tutoring",

    description:
      "Learn with a few other students. It's more affordable and keeps sessions interactive.",

    points: [
      "3 to 6 students per group",
      "Join with friends or an existing group",
      "Same tutor quality, lower cost per hour",
    ],

    button: "See group pricing",
  },

  {
    id: 3,
    icon: "2.5h",
    iconComponent: Clock3,
    iconColor: "#bd593e",

    title: "Exam crash workshops",

    description:
      "Short, focused sessions to review key topics, practise exam technique, and ask questions.",

    points: [
      "Built for Year 10 and Year 11 students",
      "Past-paper practice and live Q&A",
      "Great right before mocks or finals",
    ],

    button: "See workshop pricing",
  },
];

const HowTutoringWorks = () => {
  return (
    <section
      id="tuition"
      className="
        w-full
        overflow-hidden
        bg-[#f7f3e9]
        pt-[50px]
        pb-[82px]
      "
    >
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1000px]
          flex-col
          items-center
          px-5
          text-center
        "
      >
        {/* Small heading */}

        <p
          className="
            font-['DM_Serif_Display']
            text-[25px]
            leading-[1.15]
            text-[#5c55ad]
          "
        >
          How tutoring works
        </p>

        {/* Main heading */}

        <h2
          className="
            mt-[7px]
            font-['DM_Serif_Display']
            text-[39px]
            leading-[1.1]
            tracking-[-0.7px]
            text-[#182557]
          "
        >
          Find a tutor who actually fits.
        </h2>

        {/* Handwritten subtitle */}

        <p
          className="
            mt-[16px]
            font-['Caveat']
            text-[17px]
            leading-[1.2]
            text-[#5c55ad]
            underline
            decoration-[1px]
            underline-offset-[3px]
          "
        >
          Three formats. Pick what suits you, pricing is just below.
        </p>
      </div>


      {/* =====================================================
          FORMAT CARDS
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[38px]
          grid
          w-full
          max-w-[860px]
          grid-cols-1
          gap-[16px]
          px-5
          md:grid-cols-3
          md:gap-[16px]
          md:px-0
        "
      >
        {formats.map((format) => {
          const Icon = format.iconComponent;

          return (
            <article
              key={format.id}
              className="
                flex
                min-h-[326px]
                flex-col
                rounded-[15px]
                border
                border-[#e3d9c6]
                bg-[#faf8f1]
                px-[22px]
                pb-[20px]
                pt-[24px]
              "
            >
              {/* =================================================
                  ICON BOX
              ================================================= */}
              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-[9px]
                  text-white
                "
                style={{
                  backgroundColor: format.iconColor,
                }}
              >
                <span
                  className="
                    text-[13px]
                    font-extrabold
                    leading-none
                  "
                >
                  {format.icon}
                </span>
              </div>


              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                className="
                  mt-[15px]
                  font-['DM_Serif_Display']
                  text-[18px]
                  leading-[1.2]
                  text-[#182557]
                "
              >
                {format.title}
              </h3>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                className="
                  mt-[9px]
                  text-[12.5px]
                  leading-[1.48]
                  text-[#4f5b82]
                "
              >
                {format.description}
              </p>


              {/* =================================================
                  POINTS
              ================================================= */}

              <ul
                className="
                  mt-[14px]
                  space-y-[8px]
                "
              >
                {format.points.map((point, index) => (
                  <li
                    key={index}
                    className="
                      flex
                      items-start
                      gap-[9px]
                      text-[11.5px]
                      leading-[1.4]
                      text-[#25345f]
                    "
                  >
                    <span
                      className="
                        mt-[1px]
                        flex-shrink-0
                        text-[#d29a1e]
                      "
                    >
                      –
                    </span>

                    <span>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              {/* =================================================
                  BUTTON
              ================================================= */}

              <div
  className="
    mt-auto
    pt-[15px]
  "
>
  <a
    href="#pricing"
    className="
      inline-flex
      h-[37px]
      items-center
      rounded-[6px]
      bg-[#182557]
      px-[14px]
      text-[11px]
      font-bold
      text-white
      transition-all
      duration-200
      hover:bg-[#111c49]
    "
  >
    {format.button}
  </a>
</div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HowTutoringWorks;