import "./SubjectTicker.css";

const subjects = [
  {
    name: "Economics",
    code: "0455",
    type: "purple",
  },
  {
    name: "Computer Science",
    code: "0478",
    type: "purple",
  },
  {
    name: "French",
    code: "0520",
    type: "purple",
  },
  {
    name: "A Level Maths",
    code: "9709",
    type: "gold",
  },
  {
    name: "A Level Further Maths",
    code: "9231",
    type: "gold",
  },
  {
    name: "A Level Chemistry",
    code: "9701",
    type: "gold",
  },
  {
    name: "A Level Biology",
    code: "9700",
    type: "gold",
  },
  {
    name: "A Level Physics",
    code: "9702",
    type: "gold",
  },
  {
    name: "A Level Computer Science",
    code: "9618",
    type: "gold",
  },
  {
    name: "Mathematics",
    code: "0580",
    type: "purple",
  },
  {
    name: "Additional Maths",
    code: "0606",
    type: "purple",
  },
  {
    name: "Biology",
    code: "0610",
    type: "purple",
  },
  {
    name: "Chemistry",
    code: "0620",
    type: "purple",
  },
  {
    name: "Physics",
    code: "0625",
    type: "purple",
  },
  {
    name: "First Language English",
    code: "0500",
    type: "purple",
  },
  {
    name: "English (ESL)",
    code: "0510",
    type: "purple",
  },
  {
    name: "Business Studies",
    code: "0450",
    type: "purple",
  },
];

/*
  Duplicate the entire list so the movement can loop
  continuously without an empty space.
*/
const tickerItems = [...subjects, ...subjects];

const SubjectTicker = () => {
  return (
    <section
      id="sub"
      className="subject-ticker-section"
    >

      <div className="subject-ticker-window">

        {/* Left fade */}
        <div className="subject-ticker-fade subject-ticker-fade-left" />

        {/* Moving track */}
        <div className="subject-ticker-track">

          {tickerItems.map((subject, index) => (
            <div
              key={`${subject.code}-${index}`}
              className={`
                subject-ticker-item
                ${
                  subject.type === "gold"
                    ? "subject-ticker-gold"
                    : "subject-ticker-purple"
                }
              `}
            >
              <span className="subject-name">
                {subject.name}
              </span>

              <span className="subject-separator">
                ·
              </span>

              <span className="subject-code">
                {subject.code}
              </span>
            </div>
          ))}

        </div>

        {/* Right fade */}
        <div className="subject-ticker-fade subject-ticker-fade-right" />

      </div>

    </section>
  );
};

export default SubjectTicker;