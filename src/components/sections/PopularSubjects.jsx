import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Dna,
  Sigma,
  Atom,
  FlaskConical,
  PenLine,
} from "lucide-react";

const subjects = [
  {
    id: 1,
    icon: Dna,
    iconColor: "#7e8b56",
    code: "IGCSE · CAMBRIDGE 0610",
    title: "Biology",
    question:
      "Struggling with data-based questions or long-answer topics?",
    description:
      "We help you get past memorising and start applying, which is where most marks actually hide.",
    help: [
      "The topics you're stuck on (you tell us in advance)",
      "Command words that quietly cost whole questions",
      "Exam technique for 4 to 6 mark answers",
    ],
  },

  {
    id: 2,
    icon: Sigma,
    iconColor: "#5c55ad",
    code: "IGCSE · CAMBRIDGE 0580",
    title: "Mathematics",
    question: "Good at maths but still losing marks?",
    description:
      "It's usually not the maths itself, it's strategy and showing working the way examiners expect.",
    help: [
      "The topics that appear on almost every paper",
      "Method marks, so a wrong final answer still scores",
      "Past papers, worked the way examiners read them",
    ],
  },

  {
    id: 3,
    icon: Atom,
    iconColor: "#d9b66d",
    code: "IGCSE · CAMBRIDGE 0625",
    title: "Physics",
    question:
      "Understand the physics, but the marks don't show it?",
    description:
      "Small things cost big marks: missing units, a definition worded slightly wrong, working left out.",
    help: [
      "Definitions and units examiners actually deduct for",
      "Past-paper practice, one method at a time",
    ],
  },

  {
    id: 4,
    icon: FlaskConical,
    iconColor: "#bd593e",
    code: "IGCSE · CAMBRIDGE 0620",
    title: "Chemistry",
    question: "Stuck between a B and an A*?",
    description:
      "It usually comes down to two topics and exact mark scheme phrasing. We focus there first.",
    help: [
      "The two topics that sink the most grades",
      "Keyword-by-keyword breakdowns of structured questions",
      "Exam technique and revision strategy",
    ],
  },

  {
    id: 5,
    icon: PenLine,
    iconColor: "#182557",
    code: "IGCSE · CAMBRIDGE 0500 / 0510",
    title: "English",
    question:
      "Landing a lower grade in English than you expected?",
    description:
      "Whether English is your first language or second, most marks come down to technique, not talent.",
    help: [
      "How directed writing and comprehension are marked, band by band",
      "Full marks in summary and writer's effect questions",
      "Model formats and live, line-by-line feedback",
    ],
  },

  {
    id: 6,
    icon: Sigma,
    iconColor: "#5c55ad",
    code: "A LEVEL · CAMBRIDGE 9709",
    title: "A Level Maths",
    question:
      "Jumping from IGCSE to A Level Maths feeling like a big step?",
    description:
      "We bridge the gap and build the exam habits that keep you scoring at the top.",
    help: [
      "Pure, mechanics and statistics, taught clearly",
      "Showing working the way A Level examiners want",
      "Past-paper technique under time pressure",
    ],
  },

  {
    id: 7,
    icon: FlaskConical,
    iconColor: "#bd593e",
    code: "A LEVEL · CAMBRIDGE 9701",
    title: "A Level Chemistry",
    question:
      "Struggling to keep up with the pace of A Level Chemistry?",
    description:
      "We break the hardest topics into clear steps and focus on what the mark scheme rewards.",
    help: [
      "Organic, physical and inorganic, made manageable",
      "Exam phrasing that separates the top grades",
      "Practical paper and structured question technique",
    ],
  },
];


/* =========================================================
   HELPER
   Keeps the slider circular.

   Example:

   index -1  → last subject
   index  0  → first subject
   index  7  → first subject again
========================================================= */

const getWrappedSubject = (index) => {
  const total = subjects.length;

  return subjects[(index + total) % total];
};


function PopularSubjects() {
  /*
    Start with Mathematics in the middle,
    matching your current design.
  */
  const [activeIndex, setActiveIndex] = useState(1);


  /* =======================================================
     INFINITE PREVIOUS
  ======================================================= */

  const previousSlide = () => {
    setActiveIndex((current) => {
      return (current - 1 + subjects.length) % subjects.length;
    });
  };


  /* =======================================================
     INFINITE NEXT
  ======================================================= */

  const nextSlide = () => {
    setActiveIndex((current) => {
      return (current + 1) % subjects.length;
    });
  };


  /* =======================================================
     CIRCULAR THREE-CARD DISPLAY

     Example when Biology is active:

     A Level Chemistry | Biology | Mathematics

     Example when A Level Chemistry is active:

     A Level Maths | A Level Chemistry | Biology
  ======================================================= */

  const leftSubject = getWrappedSubject(activeIndex - 1);
  const centerSubject = getWrappedSubject(activeIndex);
  const rightSubject = getWrappedSubject(activeIndex + 1);


  const visibleSubjects = [
    {
      subject: leftSubject,
      position: "left",
    },
    {
      subject: centerSubject,
      position: "center",
    },
    {
      subject: rightSubject,
      position: "right",
    },
  ];


  return (
    <section
      id="subjects"
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
          max-w-[1200px]
          flex-col
          items-center
          px-5
          text-center
        "
      >

        <p
          className="
            font-['DM_Serif_Display']
            text-[25px]
            leading-[1.15]
            text-[#5c55ad]
          "
        >
          Subjects
        </p>


        <h2
          className="
            mt-[7px]
            font-['DM_Serif_Display']
            text-[42px]
            leading-[1.08]
            tracking-[-0.8px]
            text-[#182557]
          "
        >
          Popular subjects
        </h2>


        <p
          className="
            mt-[17px]
            font-['Caveat']
            text-[17px]
            leading-[1.2]
            text-[#5c55ad]
            underline
            decoration-[1px]
            underline-offset-[3px]
          "
        >
          Popular among Year 8–11 students.
        </p>

      </div>


      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          mt-[42px]
          flex
          w-full
          max-w-[1130px]
          items-center
          justify-center
        "
      >

        {/* ===================================================
            LEFT ARROW
        =================================================== */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous subject"
          className="
            absolute
            left-[-4px]
            z-20
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            bg-[#182557]
            text-white
            shadow-[0_7px_16px_rgba(24,37,87,0.18)]
            transition-all
            duration-200
            cursor-pointer
            hover:scale-[1.05]
          "
        >
          <ChevronLeft
            size={19}
            strokeWidth={2}
          />
        </button>


        {/* ===================================================
            CARDS
        =================================================== */}

        <div
          className="
            flex
            w-full
            items-stretch
            justify-center
            gap-[22px]
          "
        >

          {visibleSubjects.map(
            ({ subject, position }) => {
              const Icon = subject.icon;
              const isCenter = position === "center";

              return (
                <article
                  key={`${subject.id}-${position}-${activeIndex}`}
                  className={`
                    relative
                    flex
                    flex-shrink-0
                    flex-col
                    rounded-[15px]
                    border
                    bg-[#faf8f1]
                    px-[20px]
                    pb-[20px]
                    pt-[20px]
                    transition-all
                    duration-[450ms]
                    ease-out

                    ${
                      isCenter
                        ? `
                            h-[500px]
                            w-[310px]
                            border-[#d69d24]
                            bg-[#fffdf8]
                            opacity-100
                            shadow-[0_14px_28px_rgba(24,37,87,0.08)]
                            z-10
                          `
                        : `
                            h-[485px]
                            w-[290px]
                            border-[#e5dccb]
                            bg-[#faf8f1]
                            opacity-[0.52]
                            shadow-none
                          `
                    }
                  `}
                >

                  {/* =========================================
                      ICON
                  ========================================= */}

                  <div
                    className="
                      flex
                      h-[39px]
                      w-[39px]
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-[8px]
                    "
                    style={{
                      backgroundColor: subject.iconColor,
                      opacity: isCenter ? 1 : 0.65,
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>


                  {/* =========================================
                      EXAM CODE
                  ========================================= */}

                  <p
                    className={`
                      mt-[12px]
                      text-[10px]
                      font-bold
                      tracking-[0.35px]

                      ${
                        isCenter
                          ? "text-[#26345f]"
                          : "text-[#8d91a2]"
                      }
                    `}
                  >
                    {subject.code}
                  </p>


                  {/* =========================================
                      SUBJECT TITLE
                  ========================================= */}

                  <h3
                    className={`
                      mt-[5px]
                      font-['DM_Serif_Display']
                      text-[20px]
                      leading-[1.1]

                      ${
                        isCenter
                          ? "text-[#182557]"
                          : "text-[#72768b]"
                      }
                    `}
                  >
                    {subject.title}
                  </h3>


                  {/* =========================================
                      QUESTION
                  ========================================= */}

                  <p
                    className={`
                      mt-[20px]
                      text-[12px]
                      font-bold
                      leading-[1.35]

                      ${
                        isCenter
                          ? "text-[#bd5037]"
                          : "text-[#d28c78]"
                      }
                    `}
                  >
                    {subject.question}
                  </p>


                  {/* =========================================
                      DESCRIPTION
                  ========================================= */}

                  <p
                    className={`
                      mt-[10px]
                      text-[12px]
                      leading-[1.48]

                      ${
                        isCenter
                          ? "text-[#46527b]"
                          : "text-[#9ca0ae]"
                      }
                    `}
                  >
                    {subject.description}
                  </p>


                  {/* =========================================
                      GET HELP
                  ========================================= */}

                  <div className="mt-[13px]">

                    <p
                      className={`
                        text-[12px]
                        font-bold

                        ${
                          isCenter
                            ? "text-[#182557]"
                            : "text-[#7e8295]"
                        }
                      `}
                    >
                      Get help with:
                    </p>


                    <ul className="mt-[6px] space-y-[8px]">

                      {subject.help.map(
                        (item, index) => (
                          <li
                            key={index}
                            className="
                              flex
                              items-start
                              gap-[8px]
                              text-[11.5px]
                              leading-[1.4]
                            "
                          >

                            <span
                              className={`
                                mt-[2px]
                                flex-shrink-0

                                ${
                                  isCenter
                                    ? "text-[#d29a1e]"
                                    : "text-[#d5b76d]"
                                }
                              `}
                            >
                              –
                            </span>


                            <span
                              className={
                                isCenter
                                  ? "text-[#46527b]"
                                  : "text-[#9ca0ae]"
                              }
                            >
                              {item}
                            </span>

                          </li>
                        )
                      )}

                    </ul>

                  </div>


                  {/* =========================================
                      BOTTOM BUTTON

                      ALL buttons remain active.

                      CENTER:
                      100% opacity

                      SIDE:
                      70% opacity

                      Clicking ANY button opens
                      the same enquiry popup.
                  ========================================= */}

                  <div className="mt-auto pt-[14px]">

                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(
                          new Event("open-enquiry")
                        );
                      }}
                      className={`
                        h-[37px]
                        rounded-[6px]
                        px-[13px]
                        text-[11px]
                        font-bold
                        cursor-pointer
                        transition-all
                        duration-200

                        ${
                          isCenter
                            ? `
                                bg-[#182557]
                                text-white
                                opacity-100
                                hover:bg-[#111c49]
                                hover:scale-[1.02]
                              `
                            : `
                                bg-[#777c90]
                                text-white
                                opacity-70
                                hover:opacity-90
                                hover:bg-[#182557]
                                hover:scale-[1.02]
                              `
                        }
                      `}
                    >
                      Enquire to get course plan
                    </button>

                  </div>

                </article>
              );
            }
          )}

        </div>


        {/* ===================================================
            RIGHT ARROW
        =================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next subject"
          className="
            absolute
            right-[-4px]
            z-20
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            bg-[#182557]
            text-white
            shadow-[0_7px_16px_rgba(24,37,87,0.18)]
            transition-all
            duration-200
            cursor-pointer
            hover:scale-[1.05]
          "
        >
          <ChevronRight
            size={19}
            strokeWidth={2}
          />
        </button>

      </div>


      {/* =====================================================
          PAGINATION

          NOW THERE ARE 7 POSITIONS:
          
          1 Biology
          2 Mathematics
          3 Physics
          4 Chemistry
          5 English
          6 A Level Maths
          7 A Level Chemistry
      ===================================================== */}

      <div
        className="
          mt-[26px]
          flex
          items-center
          justify-center
          gap-[7px]
        "
      >

        {subjects.map((subject, index) => {

          const isActive = activeIndex === index;

          return (
            <button
              key={subject.id}
              type="button"
              aria-label={`Show ${subject.title}`}
              onClick={() => setActiveIndex(index)}
              className="
                h-[7px]
                rounded-full
                transition-all
                duration-300
                cursor-pointer
              "
              style={{
                width: isActive
                  ? "19px"
                  : "7px",

                backgroundColor: isActive
                  ? "#d29a1e"
                  : "#e3dbc9",
              }}
            />
          );

        })}

      </div>

    </section>
  );
}

export default PopularSubjects;