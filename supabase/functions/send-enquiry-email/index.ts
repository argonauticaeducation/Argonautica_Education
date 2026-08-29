import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const ADMIN_EMAIL = "argonautica.education@gmail.com";

serve(async (req) => {
  try {
    // ---------------------------------------------------------
    // CORS
    // ---------------------------------------------------------

    if (req.method === "OPTIONS") {
      return new Response("ok", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "authorization, x-client-info, apikey, content-type",
          "Access-Control-Allow-Methods":
            "POST, OPTIONS",
        },
      });
    }

    // ---------------------------------------------------------
    // ONLY POST REQUESTS
    // ---------------------------------------------------------

    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({
          error: "Method not allowed",
        }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // ---------------------------------------------------------
    // CHECK RESEND KEY
    // ---------------------------------------------------------

    if (!RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY is not configured."
      );

      return new Response(
        JSON.stringify({
          error: "Email service is not configured.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // ---------------------------------------------------------
    // READ REQUEST
    // ---------------------------------------------------------

    const body = await req.json();

    const {
      name,
      phone,
      year_level,
    } = body;

    // ---------------------------------------------------------
    // VALIDATION
    // ---------------------------------------------------------

    if (
      !name ||
      !phone ||
      !year_level
    ) {
      return new Response(
        JSON.stringify({
          error:
            "Name, phone and year are required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // ---------------------------------------------------------
    // SEND EMAIL USING RESEND
    // ---------------------------------------------------------

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          "Authorization":
            `Bearer ${RESEND_API_KEY}`,

          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          from:
            "Argonautica <onboarding@resend.dev>",

          to: [ADMIN_EMAIL],

          subject:
            `New Enquiry - ${name}`,

          html: `
            <!DOCTYPE html>

            <html>

              <body
                style="
                  margin:0;
                  padding:30px;
                  background:#f5f3ed;
                  font-family:Arial,Helvetica,sans-serif;
                "
              >

                <div
                  style="
                    max-width:600px;
                    margin:0 auto;
                    background:#ffffff;
                    border-radius:14px;
                    overflow:hidden;
                    border:1px solid #e2ddcf;
                  "
                >

                  <div
                    style="
                      padding:24px 28px;
                      background:#182557;
                    "
                  >

                    <h1
                      style="
                        margin:0;
                        color:#ffffff;
                        font-size:24px;
                      "
                    >
                      Argonautica
                    </h1>

                    <p
                      style="
                        margin:6px 0 0;
                        color:#dfe3f2;
                        font-size:14px;
                      "
                    >
                      New Enquiry Received
                    </p>

                  </div>


                  <div
                    style="
                      padding:28px;
                    "
                  >

                    <p
                      style="
                        margin:0 0 22px;
                        color:#182557;
                        font-size:18px;
                        font-weight:bold;
                      "
                    >
                      A new enquiry has been submitted.
                    </p>


                    <table
                      style="
                        width:100%;
                        border-collapse:collapse;
                      "
                    >

                      <tr>

                        <td
                          style="
                            padding:12px 0;
                            border-bottom:1px solid #eeeae0;
                            color:#777c90;
                            font-size:14px;
                            width:130px;
                          "
                        >
                          Name
                        </td>

                        <td
                          style="
                            padding:12px 0;
                            border-bottom:1px solid #eeeae0;
                            color:#182557;
                            font-size:14px;
                            font-weight:bold;
                          "
                        >
                          ${escapeHtml(String(name))}
                        </td>

                      </tr>


                      <tr>

                        <td
                          style="
                            padding:12px 0;
                            border-bottom:1px solid #eeeae0;
                            color:#777c90;
                            font-size:14px;
                          "
                        >
                          Phone
                        </td>

                        <td
                          style="
                            padding:12px 0;
                            border-bottom:1px solid #eeeae0;
                            color:#182557;
                            font-size:14px;
                            font-weight:bold;
                          "
                        >
                          ${escapeHtml(String(phone))}
                        </td>

                      </tr>


                      <tr>

                        <td
                          style="
                            padding:12px 0;
                            color:#777c90;
                            font-size:14px;
                          "
                        >
                          Year
                        </td>

                        <td
                          style="
                            padding:12px 0;
                            color:#182557;
                            font-size:14px;
                            font-weight:bold;
                          "
                        >
                          ${escapeHtml(String(year_level))}
                        </td>

                      </tr>

                    </table>


                    <div
                      style="
                        margin-top:26px;
                        padding:14px 16px;
                        border-radius:8px;
                        background:#faf8f2;
                        color:#777c90;
                        font-size:12px;
                      "
                    >
                      This enquiry was submitted from the
                      Argonautica website.
                    </div>

                  </div>

                </div>

              </body>

            </html>
          `,
        }),
      }
    );


    // ---------------------------------------------------------
    // RESEND RESPONSE
    // ---------------------------------------------------------

    const resendData =
      await resendResponse.json();


    if (!resendResponse.ok) {

      console.error(
        "Resend error:",
        resendData
      );

      return new Response(
        JSON.stringify({
          error:
            resendData?.message ||
            "Unable to send email.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type":
              "application/json",

            "Access-Control-Allow-Origin":
              "*",
          },
        }
      );
    }


    // ---------------------------------------------------------
    // SUCCESS
    // ---------------------------------------------------------

    return new Response(
      JSON.stringify({
        success: true,
        message:
          "Admin notification email sent.",
        id: resendData?.id || null,
      }),
      {
        status: 200,
        headers: {
          "Content-Type":
            "application/json",

          "Access-Control-Allow-Origin":
            "*",
        },
      }
    );

  } catch (error) {

    console.error(
      "Edge Function error:",
      error
    );

    return new Response(
      JSON.stringify({
        error:
          "Unexpected server error.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type":
            "application/json",

          "Access-Control-Allow-Origin":
            "*",
        },
      }
    );
  }
});


// ============================================================
// HTML ESCAPE
// ============================================================

function escapeHtml(value: string) {

  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}