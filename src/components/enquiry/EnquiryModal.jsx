import { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "../../lib/supabase";

const EnquiryModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+60");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  /*
  ============================================================
  CLOSE POPUP
  ============================================================
  */

  const closePopup = () => {
    if (isSubmitting) return;

    setSubmitMessage("");
    setSubmitError("");

    onClose();

    document.body.style.overflow = "";
  };

  /*
  ============================================================
  SUBMIT ENQUIRY
  ============================================================
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setSubmitMessage("");
    setSubmitError("");

    /*
    ------------------------------------------------------------
    BASIC VALIDATION
    ------------------------------------------------------------
    */

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanCountryCode = countryCode.trim();

    if (!cleanName) {
      setSubmitError("Please enter your name.");
      return;
    }

    if (!cleanCountryCode) {
      setSubmitError("Please enter your country code.");
      return;
    }

    if (!cleanPhone) {
      setSubmitError("Please enter your phone number.");
      return;
    }

    if (!year) {
      setSubmitError("Please select your year.");
      return;
    }

    /*
    ------------------------------------------------------------
    FULL PHONE NUMBER
    ------------------------------------------------------------
    */

    const fullPhone =
      `${cleanCountryCode} ${cleanPhone}`;

    /*
    ------------------------------------------------------------
    ENQUIRY DATA
    ------------------------------------------------------------
    */

    const enquiryData = {
      name: cleanName,
      phone: fullPhone,
      year_level: year,
      status: "New",
    };

    try {
      setIsSubmitting(true);

      /*
      ==========================================================
      STEP 1
      SAVE ENQUIRY TO SUPABASE
      ==========================================================
      */

      const { error } = await supabase
        .from("enquiries")
        .insert([enquiryData]);

      /*
      ----------------------------------------------------------
      DATABASE ERROR
      ----------------------------------------------------------
      */

      if (error) {
        console.error(
          "Supabase enquiry error:",
          error
        );

        setSubmitError(
          error.message ||
            "Something went wrong while submitting your enquiry."
        );

        return;
      }

      console.log(
        "Enquiry successfully stored in Supabase."
      );

      /*
      ==========================================================
      STEP 2
      SEND EMAIL TO ADMIN
      ==========================================================

      This calls the Supabase Edge Function.

      The Resend API key is NOT exposed here.
      It remains inside Supabase Edge Function Secrets.
      ==========================================================
      */

      try {
        const {
          data: emailData,
          error: emailError,
        } = await supabase.functions.invoke(
          "send-enquiry-email",
          {
            body: {
              name: cleanName,
              phone: fullPhone,
              year_level: year,
            },
          }
        );

        if (emailError) {
          console.error(
            "Admin email notification failed:",
            emailError
          );
        } else {
          console.log(
            "Admin notification email sent successfully:",
            emailData
          );
        }
      } catch (emailError) {
        console.error(
          "Unexpected admin email error:",
          emailError
        );
      }

      /*
      ==========================================================
      STEP 3
      SUCCESS MESSAGE
      ==========================================================
      */

      setSubmitMessage(
        "Thank you! Your enquiry has been submitted."
      );

      /*
      ==========================================================
      STEP 4
      CLEAR FORM
      ==========================================================
      */

      setName("");
      setCountryCode("+60");
      setPhone("");
      setYear("");

      /*
      ==========================================================
      STEP 5
      CLOSE AFTER 1.5 SECONDS
      ==========================================================
      */

      setTimeout(() => {
        setSubmitMessage("");

        onClose();

        document.body.style.overflow = "";
      }, 1500);

    } catch (error) {
      console.error(
        "Unexpected enquiry error:",
        error
      );

      setSubmitError(
        "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
  ============================================================
  DON'T RENDER WHEN CLOSED
  ============================================================
  */

  if (!isOpen) {
    return null;
  }

  /*
  ============================================================
  LOCK BODY SCROLL
  ============================================================
  */

  document.body.style.overflow = "hidden";

  /*
  ============================================================
  UI
  ============================================================
  */

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#182557]/65
        px-4
        py-6
        backdrop-blur-[5px]
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          closePopup();
        }
      }}
    >

      {/* =====================================================
          MAIN MODAL
      ===================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[620px]
          overflow-hidden
          rounded-[24px]
          bg-[#3d4787]
          shadow-[0_25px_65px_rgba(24,37,87,0.35)]
        "
      >

        {/* =====================================================
            CLOSE BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={closePopup}
          disabled={isSubmitting}
          aria-label="Close enquiry form"
          className="
            absolute
            right-[20px]
            top-[20px]
            z-20
            flex
            h-[34px]
            w-[34px]
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#182557]
            transition-all
            duration-200
            hover:scale-105
            hover:bg-[#f5f3ed]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <X
            size={20}
            strokeWidth={2}
          />
        </button>


        {/* =====================================================
            FORM
        ===================================================== */}

        <form
          onSubmit={handleSubmit}
          className="
            px-[34px]
            pb-[34px]
            pt-[34px]
            sm:px-[42px]
            sm:pb-[38px]
            sm:pt-[38px]
          "
        >

          {/* ===================================================
              NAME
          =================================================== */}

          <div className="mb-[27px]">

            <label
              htmlFor="enquiry-name"
              className="
                mb-[8px]
                block
                text-[19px]
                font-bold
                leading-tight
                tracking-[-0.1px]
                text-white
                sm:text-[21px]
              "
            >
              Name:
            </label>

            <input
              id="enquiry-name"
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
              disabled={isSubmitting}
              autoComplete="name"
              className="
                h-[38px]
                w-full
                border-0
                border-b-[3px]
                border-solid
                border-white
                bg-transparent
                px-0
                text-[18px]
                font-semibold
                text-white
                outline-none
                focus:border-white
                disabled:opacity-60
                sm:text-[19px]
              "
            />

          </div>


          {/* ===================================================
              PHONE NUMBER
          =================================================== */}

          <div className="mb-[29px]">

            <label
              htmlFor="enquiry-phone"
              className="
                mb-[8px]
                block
                text-[19px]
                font-bold
                leading-tight
                tracking-[-0.1px]
                text-white
                sm:text-[21px]
              "
            >
              Phone number:
            </label>

            <div
              className="
                flex
                w-full
                items-end
                gap-[22px]
              "
            >

              {/* COUNTRY CODE */}

              <input
                type="text"
                value={countryCode}
                onChange={(e) =>
                  setCountryCode(e.target.value)
                }
                aria-label="Country code"
                required
                disabled={isSubmitting}
                inputMode="tel"
                className="
                  h-[38px]
                  w-[88px]
                  border-0
                  border-b-[3px]
                  border-solid
                  border-white
                  bg-transparent
                  px-0
                  text-[18px]
                  font-semibold
                  text-white
                  outline-none
                  disabled:opacity-60
                  sm:w-[100px]
                  sm:text-[19px]
                "
              />


              {/* PHONE */}

              <input
                id="enquiry-phone"
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                aria-label="Phone number"
                required
                disabled={isSubmitting}
                autoComplete="tel-national"
                inputMode="numeric"
                className="
                  h-[38px]
                  flex-1
                  border-0
                  border-b-[3px]
                  border-solid
                  border-white
                  bg-transparent
                  px-0
                  text-[18px]
                  font-semibold
                  text-white
                  outline-none
                  disabled:opacity-60
                  sm:text-[19px]
                "
              />

            </div>

          </div>


          {/* ===================================================
              YEAR
          =================================================== */}

          <fieldset>

            <legend
              className="
                mb-[13px]
                text-[19px]
                font-bold
                leading-tight
                tracking-[-0.1px]
                text-white
                sm:text-[21px]
              "
            >
              Year:
            </legend>


            <div
              className="
                grid
                grid-cols-3
                gap-x-[24px]
                gap-y-[11px]
                sm:gap-x-[42px]
                sm:gap-y-[12px]
              "
            >

              {/* COLUMN 1 */}

              <div className="flex flex-col gap-[11px]">

                {/* YEAR 6 */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[9px]
                    text-[18px]
                    font-bold
                    leading-none
                    text-white
                    sm:text-[20px]
                  "
                >

                  <input
                    type="radio"
                    name="year"
                    value="6"
                    checked={year === "6"}
                    onChange={(e) =>
                      setYear(e.target.value)
                    }
                    disabled={isSubmitting}
                    className="
                      h-[24px]
                      w-[24px]
                      shrink-0
                      appearance-none
                      rounded-full
                      border-[2px]
                      border-white
                      bg-transparent
                      checked:bg-white
                      checked:ring-[5px]
                      checked:ring-inset
                      checked:ring-[#3d4787]
                    "
                  />

                  <span>6</span>

                </label>


                {/* YEAR 7 */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[9px]
                    text-[18px]
                    font-bold
                    leading-none
                    text-white
                    sm:text-[20px]
                  "
                >

                  <input
                    type="radio"
                    name="year"
                    value="7"
                    checked={year === "7"}
                    onChange={(e) =>
                      setYear(e.target.value)
                    }
                    disabled={isSubmitting}
                    className="
                      h-[24px]
                      w-[24px]
                      shrink-0
                      appearance-none
                      rounded-full
                      border-[2px]
                      border-white
                      bg-transparent
                      checked:bg-white
                      checked:ring-[5px]
                      checked:ring-inset
                      checked:ring-[#3d4787]
                    "
                  />

                  <span>7</span>

                </label>


                {/* YEAR 8 */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[9px]
                    text-[18px]
                    font-bold
                    leading-none
                    text-white
                    sm:text-[20px]
                  "
                >

                  <input
                    type="radio"
                    name="year"
                    value="8"
                    checked={year === "8"}
                    onChange={(e) =>
                      setYear(e.target.value)
                    }
                    disabled={isSubmitting}
                    className="
                      h-[24px]
                      w-[24px]
                      shrink-0
                      appearance-none
                      rounded-full
                      border-[2px]
                      border-white
                      bg-transparent
                      checked:bg-white
                      checked:ring-[5px]
                      checked:ring-inset
                      checked:ring-[#3d4787]
                    "
                  />

                  <span>8</span>

                </label>

              </div>


              {/* COLUMN 2 */}

              <div className="flex flex-col gap-[11px]">

                {/* YEAR 9 */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[9px]
                    text-[18px]
                    font-bold
                    leading-none
                    text-white
                    sm:text-[20px]
                  "
                >

                  <input
                    type="radio"
                    name="year"
                    value="9"
                    checked={year === "9"}
                    onChange={(e) =>
                      setYear(e.target.value)
                    }
                    disabled={isSubmitting}
                    className="
                      h-[24px]
                      w-[24px]
                      shrink-0
                      appearance-none
                      rounded-full
                      border-[2px]
                      border-white
                      bg-transparent
                      checked:bg-white
                      checked:ring-[5px]
                      checked:ring-inset
                      checked:ring-[#3d4787]
                    "
                  />

                  <span>9</span>

                </label>


                {/* YEAR 10 */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[9px]
                    text-[18px]
                    font-bold
                    leading-none
                    text-white
                    sm:text-[20px]
                  "
                >

                  <input
                    type="radio"
                    name="year"
                    value="10"
                    checked={year === "10"}
                    onChange={(e) =>
                      setYear(e.target.value)
                    }
                    disabled={isSubmitting}
                    className="
                      h-[24px]
                      w-[24px]
                      shrink-0
                      appearance-none
                      rounded-full
                      border-[2px]
                      border-white
                      bg-transparent
                      checked:bg-white
                      checked:ring-[5px]
                      checked:ring-inset
                      checked:ring-[#3d4787]
                    "
                  />

                  <span>10</span>

                </label>


                {/* YEAR 11 */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[9px]
                    text-[18px]
                    font-bold
                    leading-none
                    text-white
                    sm:text-[20px]
                  "
                >

                  <input
                    type="radio"
                    name="year"
                    value="11"
                    checked={year === "11"}
                    onChange={(e) =>
                      setYear(e.target.value)
                    }
                    disabled={isSubmitting}
                    className="
                      h-[24px]
                      w-[24px]
                      shrink-0
                      appearance-none
                      rounded-full
                      border-[2px]
                      border-white
                      bg-transparent
                      checked:bg-white
                      checked:ring-[5px]
                      checked:ring-inset
                      checked:ring-[#3d4787]
                    "
                  />

                  <span>11</span>

                </label>

              </div>


              {/* COLUMN 3 */}

              <div className="flex flex-col gap-[11px]">

                {/* AS LEVEL */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[9px]
                    whitespace-nowrap
                    text-[18px]
                    font-bold
                    leading-none
                    text-white
                    sm:text-[20px]
                  "
                >

                  <input
                    type="radio"
                    name="year"
                    value="AS Level"
                    checked={year === "AS Level"}
                    onChange={(e) =>
                      setYear(e.target.value)
                    }
                    disabled={isSubmitting}
                    className="
                      h-[24px]
                      w-[24px]
                      shrink-0
                      appearance-none
                      rounded-full
                      border-[2px]
                      border-white
                      bg-transparent
                      checked:bg-white
                      checked:ring-[5px]
                      checked:ring-inset
                      checked:ring-[#3d4787]
                    "
                  />

                  <span>AS Level</span>

                </label>


                {/* A LEVEL */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-[9px]
                    whitespace-nowrap
                    text-[18px]
                    font-bold
                    leading-none
                    text-white
                    sm:text-[20px]
                  "
                >

                  <input
                    type="radio"
                    name="year"
                    value="A Level"
                    checked={year === "A Level"}
                    onChange={(e) =>
                      setYear(e.target.value)
                    }
                    disabled={isSubmitting}
                    className="
                      h-[24px]
                      w-[24px]
                      shrink-0
                      appearance-none
                      rounded-full
                      border-[2px]
                      border-white
                      bg-transparent
                      checked:bg-white
                      checked:ring-[5px]
                      checked:ring-inset
                      checked:ring-[#3d4787]
                    "
                  />

                  <span>A Level</span>

                </label>

              </div>

            </div>

          </fieldset>


          {/* ===================================================
              ERROR
          =================================================== */}

          {submitError && (
            <div
              role="alert"
              className="
                mt-[18px]
                rounded-[8px]
                bg-[#ffffff]/10
                px-[12px]
                py-[9px]
                text-[14px]
                font-semibold
                text-white
              "
            >
              {submitError}
            </div>
          )}


          {/* ===================================================
              SUCCESS
          =================================================== */}

          {submitMessage && (
            <div
              role="status"
              className="
                mt-[18px]
                rounded-[8px]
                bg-[#ffffff]/10
                px-[12px]
                py-[9px]
                text-[14px]
                font-semibold
                text-white
              "
            >
              {submitMessage}
            </div>
          )}


          {/* ===================================================
              SUBMIT
          =================================================== */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-[30px]
              w-full
              rounded-[8px]
              bg-[#dfa92f]
              px-[24px]
              py-[13px]
              text-[16px]
              font-bold
              text-[#17234f]
              shadow-[0_10px_22px_rgba(191,143,31,0.22)]
              transition-all
              duration-200
              hover:-translate-y-[1px]
              hover:bg-[#e5b33d]
              active:translate-y-0
              disabled:cursor-not-allowed
              disabled:opacity-70
              sm:mt-[32px]
              sm:py-[14px]
              sm:text-[17px]
            "
          >
            {isSubmitting
              ? "Submitting..."
              : "Enquire now"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default EnquiryModal;