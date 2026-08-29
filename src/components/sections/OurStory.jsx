import { useState } from "react";

import "./OurStory.css";


/* =========================================================
   STORY DATA
========================================================= */

const storyData = [
  {
    id: 1,

    question: "Why does Argonautica exist?",

    answer: (
      <>
        <p>
          I loved tutoring, but there were only so many students
          I could take on myself. Every time someone asked if I
          knew another tutor, I'd end up referring them to a
          friend.
        </p>

        <p>
          Eventually I realised the problem wasn't finding a tutor.
          It was finding the right one. Every student learns
          differently. Some need visual explanations, some need
          endless practice questions, some just need someone
          patient.
        </p>

        <p>
          So instead of matching students one at a time from
          memory, I built a platform to do it properly.
        </p>

        <p className="our-story-founder">
          MJ, Founder
        </p>
      </>
    ),
  },

  {
    id: 2,

    question: "Why group tutoring and workshops?",

    answer: (
      <>
        <p>
          One-to-one tutoring is great, but not everyone needs it
          every week. Sometimes a student just needs a push before
          exams: a revision session, a place to ask questions, a
          confidence boost.
        </p>

        <p>
          That's why we built group classes and exam workshops.
          They're more affordable, and learning with other people
          who are stuck on the exact same topic makes revision feel
          a lot less lonely.
        </p>

        <p>
          It's live and interactive, and students quickly realise
          they're not the only one who didn't get it either.
        </p>
      </>
    ),
  },

  {
    id: 3,

    question: 'Why "Argonautica"?',

    answer: (
      <>
        <p>
          It's pronounced Ar-go-naut-ih-kuh. The Argonautica is the
          ancient Greek story of Jason and the Argonauts, sailing
          rough seas together in search of something worth
          reaching.
        </p>

        <p>
          Your IGCSEs and A Levels can feel a bit like that. A long
          journey with a lot of deadlines that somehow all land in
          the same week.
        </p>

        <p>
          The Argonauts never sailed alone. That's the whole idea
          behind Argonautica. Nobody should have to study for these
          exams alone either.
        </p>
      </>
    ),
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const OurStory = () => {

  /*
    All cards start closed,
    exactly like the first screenshot.
  */

  const [openItems, setOpenItems] = useState(
    new Set()
  );


  /* =======================================================
     TOGGLE CARD
  ======================================================= */

  const toggleStory = (id) => {

    setOpenItems((previous) => {

      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };


  return (
    <section
      id="our-story"
      className="our-story-section"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="our-story-header">

        <p className="our-story-eyebrow">
          Our story
        </p>

        <h2 className="our-story-title">
          From one tutor with too many students, to
          <br className="our-story-title-break" />
          Argonautica.
        </h2>

        <p className="our-story-subtitle">
          Tap a card to read the full story.
        </p>

      </div>


      {/* =================================================
          STORY CARDS
      ================================================= */}

      <div className="our-story-cards">

        {storyData.map((story) => {

          const isOpen = openItems.has(story.id);

          return (
            <article
              key={story.id}
              className={`
                our-story-card
                ${isOpen ? "our-story-card-open" : ""}
              `}
            >

              {/* ===========================================
                  QUESTION
              =========================================== */}

              <button
                type="button"
                className="our-story-question"
                onClick={() => toggleStory(story.id)}
                aria-expanded={isOpen}
                aria-controls={`story-answer-${story.id}`}
              >

                <span className="our-story-question-text">
                  {story.question}
                </span>

                <span
                  className="our-story-toggle"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>

              </button>


              {/* ===========================================
                  ANSWER
              =========================================== */}

              <div
                id={`story-answer-${story.id}`}
                className="our-story-answer-wrapper"
                aria-hidden={!isOpen}
              >

                <div className="our-story-answer">

                  {story.answer}

                </div>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
};


export default OurStory;