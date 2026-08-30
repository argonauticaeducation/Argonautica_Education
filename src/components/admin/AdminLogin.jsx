import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { LogIn, Eye, EyeOff } from "lucide-react";


const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError("");
    setLoading(true);


    const { data, error } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });


    if (error) {
      console.error("Admin login error:", error);

      setError(
        error.message || "Invalid email or password."
      );

      setLoading(false);
      return;
    }


    if (!data?.user) {
      setError("Unable to sign in.");
      setLoading(false);
      return;
    }


    onLogin(data.user);

    setLoading(false);
  };


  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#f5f3ed]
        px-5
      "
    >

      <div className="w-full max-w-[430px]">


        {/* =====================================================
            LOGO / TITLE
        ===================================================== */}

        <div className="mb-[30px] text-center">

          <h1
            className="
              text-[32px]
              font-bold
              tracking-[-0.5px]
              text-[#182557]
            "
          >
            Argonautica
          </h1>

          <p
            className="
              mt-[6px]
              text-[15px]
              font-medium
              text-[#73788e]
            "
          >
            Admin Panel
          </p>

        </div>


        {/* =====================================================
            LOGIN CARD
        ===================================================== */}

        <div
          className="
            rounded-[20px]
            bg-white
            p-[30px]
            shadow-[0_20px_60px_rgba(24,37,87,0.12)]
          "
        >

          <h2
            className="
              text-[24px]
              font-bold
              text-[#182557]
            "
          >
            Admin Login
          </h2>


          <p
            className="
              mt-[7px]
              text-[14px]
              text-[#73788e]
            "
          >
            Sign in to manage enquiries.
          </p>


          {/* ===================================================
              FORM
          =================================================== */}

          <form
            onSubmit={handleSubmit}
            className="mt-[28px]"
          >


            {/* =================================================
                EMAIL
            ================================================= */}

            <div className="mb-[20px]">

              <label
                htmlFor="admin-email"
                className="
                  mb-[8px]
                  block
                  text-[14px]
                  font-bold
                  text-[#182557]
                "
              >
                Email
              </label>


              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Admin email"
                autoComplete="email"
                required
                className="
                  h-[48px]
                  w-full
                  rounded-[8px]
                  border
                  border-[#ddd7c9]
                  bg-[#fffdf8]
                  px-[14px]
                  text-[15px]
                  text-[#182557]
                  outline-none
                  transition
                  focus:border-[#dfa92f]
                  focus:ring-2
                  focus:ring-[#dfa92f]/10
                "
              />

            </div>


            {/* =================================================
                PASSWORD
            ================================================= */}

            <div className="mb-[20px]">

              <label
                htmlFor="admin-password"
                className="
                  mb-[8px]
                  block
                  text-[14px]
                  font-bold
                  text-[#182557]
                "
              >
                Password
              </label>


              {/* PASSWORD INPUT WRAPPER */}

              <div className="relative">


                <input
                  id="admin-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="
                    h-[48px]
                    w-full
                    rounded-[8px]
                    border
                    border-[#ddd7c9]
                    bg-[#fffdf8]
                    px-[14px]
                    pr-[48px]
                    text-[15px]
                    text-[#182557]
                    outline-none
                    transition
                    focus:border-[#dfa92f]
                    focus:ring-2
                    focus:ring-[#dfa92f]/10
                  "
                />


                {/* =================================================
                    SHOW / HIDE BUTTON
                ================================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="
                    absolute
                    right-[10px]
                    top-1/2
                    flex
                    h-[32px]
                    w-[32px]
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-[6px]
                    text-[#73788e]
                    transition
                    hover:bg-[#f5f3ed]
                    hover:text-[#182557]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#dfa92f]/30
                  "
                >

                  {showPassword ? (
                    <EyeOff
                      size={18}
                      strokeWidth={1.8}
                    />
                  ) : (
                    <Eye
                      size={18}
                      strokeWidth={1.8}
                    />
                  )}

                </button>

              </div>

            </div>


            {/* =================================================
                ERROR
            ================================================= */}

            {error && (
              <div
                role="alert"
                className="
                  mb-[20px]
                  rounded-[8px]
                  bg-red-50
                  px-[13px]
                  py-[11px]
                  text-[13px]
                  font-semibold
                  text-red-600
                "
              >
                {error}
              </div>
            )}


            {/* =================================================
                LOGIN BUTTON
            ================================================= */}

            <button
              type="submit"
              disabled={loading}
              className="
                flex
                h-[50px]
                w-full
                items-center
                justify-center
                gap-[8px]
                rounded-[8px]
                bg-[#dfa92f]
                text-[15px]
                font-bold
                text-[#17234f]
                shadow-[0_10px_22px_rgba(191,143,31,0.20)]
                transition-all
                duration-200
                hover:-translate-y-[1px]
                hover:bg-[#e5b33d]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              <LogIn
                size={17}
                strokeWidth={2}
              />

              {loading
                ? "Signing in..."
                : "Sign in"}

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};


export default AdminLogin;