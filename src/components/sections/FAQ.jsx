import { useState } from "react";

import "./FAQ.css";


/* =========================================================
   FAQ DATA
========================================================= */

const faqData = [
  {
    id: 1,

    question: "How does tutoring work?",

    answer:
      "Tell us your subject, level and budget. We match you with a tutor who fits. You start with a trial before committing to anything.",
  },

  {
    id: 2,

    question: "What makes Argonautica different?",

    answer:
      "We do the matching for you. No scrolling through endless profiles. No commission taken from tutors. Every tutor is picked for fit, not just grades.",
  },

  {
    id: 3,

    question: "Can I try a class before booking?",

    answer:
      "Yes. Every match starts with a trial class. Not the right fit? We match you again, no extra cost.",
  },

  {
    id: 4,

    question: "What subjects and levels do you cover?",

    answer:
      "Cambridge Lower Secondary, Checkpoint, IGCSE and A Level. Maths, sciences, English and more. Year 6 through Year 11. Not listed? Ask us anyway.",
  },

  {
    id: 5,

    question: "Can I choose 1-to-1 or group tutoring?",

    answer:
      "Yes. One to one for fully personalised sessions. Small groups with friends. Or a 2.5 hour exam workshop. Just tell us your preference.",
  },

  {
    id: 6,

    question: "Will tutors know my exact exam board?",

    answer:
      "Yes. Every tutor is matched to your syllabus, not a generic version of the subject. Most sat the same exams recently.",
  },

  {
    id: 7,

    question: "How much does it cost?",

    answer: (
      <>
        <p>
          Group sessions from RM20 per hour. Workshops from RM25 per
          session. One to one from RM40 per hour. No commission, no
          hidden fees.
        </p>

        <p>
          Genuine financial barrier? Just ask. We quietly support
          families who need it.
        </p>
      </>
    ),
  },

  {
    id: 8,

    question: "What if my tutor isn't the right fit?",

    answer:
      "Tell us. We'll match you with someone else. No pressure, no extra cost, until it clicks.",
  },

  {
    id: 9,

    question: "Online or in person?",

    answer:
      "Both. Most students learn online. In person is available in parts of Malaysia depending on the tutor.",
  },

  {
    id: 10,

    question: "Who's behind Argonautica?",

    answer:
      "Two students who kept hitting the same problem. Tutoring was either too expensive or hard to find someone who actually fit. So we built the platform we wished we'd had.",
  },
];


/* =========================================================
   FAQ COMPONENT
========================================================= */

const FAQ = () => {

  /*
    Only ONE FAQ can be open at a time.

    null = all FAQs closed initially.
  */

  const [openItem, setOpenItem] = useState(null);


  /* =======================================================
     TOGGLE FAQ
  ======================================================= */

  const toggleFAQ = (id) => {

    setOpenItem((currentOpenItem) => {

      /*
        If the currently open FAQ is clicked again,
        close it.
      */

      if (currentOpenItem === id) {
        return null;
      }


      /*
        If another FAQ is clicked,
        automatically close the previous one
        and open the newly selected FAQ.
      */

      return id;
    });
  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="faq"
      className="faq-section"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="faq-header">

        <p className="faq-eyebrow">
          FAQ
        </p>

        <h2 className="faq-title">
          Questions parents and students ask
        </h2>

        <p className="faq-subtitle">
          Straight answers, before you join.
        </p>

      </div>


      {/* =================================================
          FAQ LIST
      ================================================= */}

      <div className="faq-list">

        {faqData.map((faq) => {

          /*
            FAQ is open only when its ID matches
            the currently selected ID.
          */

          const isOpen = openItem === faq.id;


          return (
            <article
              key={faq.id}
              className={`
                faq-item
                ${isOpen ? "faq-item-open" : ""}
              `}
            >

              {/* ===========================================
                  QUESTION BUTTON
              =========================================== */}

              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >

                <span className="faq-question-text">
                  {faq.question}
                </span>

                <span
                  className="faq-toggle"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>

              </button>


              {/* ===========================================
                  ANSWER
              =========================================== */}

              <div
                id={`faq-answer-${faq.id}`}
                className="faq-answer-wrapper"
                aria-hidden={!isOpen}
              >

                <div className="faq-answer">

                  {typeof faq.answer === "string" ? (
                    <p>
                      {faq.answer}
                    </p>
                  ) : (
                    faq.answer
                  )}

                </div>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
};


export default FAQ;