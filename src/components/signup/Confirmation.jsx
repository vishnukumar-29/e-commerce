import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { MailCheck, Loader2 } from "lucide-react";

import SignCard from "./SignCard";

const Confirmation = () => {
  const navigate = useNavigate();

  const [personalData, setPersonalData] = useState(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedData =
      sessionStorage.getItem("personalData");

    if (!savedData) {
      navigate("/personal");
      return;
    }

    try {
      const parsedData = JSON.parse(savedData);

      setPersonalData(parsedData);
    } catch (error) {
      console.error(error);
      navigate("/personal");
    }
  }, [navigate]);

  const handleNext = async () => {
    if (!personalData?.email) {
      setError("Email address was not found.");
      return;
    }

    try {
      setSending(true);
      setError("");

      const templateParams = {
        to_email: personalData.email,
        to_name:
          `${personalData.firstName || ""} ${
            personalData.lastName || ""
          }`.trim(),

        search_url:
          "https://your-website.com/search-property",
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      );

      // Email successfully sent
      navigate("/signup-success");
    } catch (error) {
      console.error("Email sending failed:", error);

      setError(
        "Unable to send confirmation email. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  if (!personalData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3] ">
      <div
        className="
          mx-auto
          flex min-h-screen
          max-md:flex-col
          max-w-[1200px]
          overflow-hidden
          bg-white
          shadow-sm
        "
      >
        {/* ================= LEFT ================= */}

        <div className="min-w-[44%] ">
          <SignCard />
        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            px-5
            py-8
            sm:px-10
            lg:w-[58%]
            lg:px-16
            xl:px-20
          "
        >
          <div className="w-full max-w-[560px]">

            {/* Heading */}

            <h1
              className="
                text-[20px]
                font-semibold
                text-[#222]
                sm:text-[22px]
              "
            >
              Account Confirmation
            </h1>

            <p
              className="
                mt-1
                text-[10px] sm:text-sm
                text-[#999]
                sm:text-[11px]
              "
            >
              A confirmation will be sent to you via your
              email in 24 hours
            </p>

            {/* Email */}

            <p className="mt-3 text-[11px] sm:text-sm text-[#666]">
              Confirmation email:
              <span className="ml-1 font-medium text-[#333]">
                {personalData.email}
              </span>
            </p>

            {/* ================= ICON ================= */}

            <div className="flex justify-center py-9 sm:py-10">
              <div
                className="
                  flex
                  h-[120px]
                  w-[120px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f5f7ff]
                "
              >
                <MailCheck
                  size={62}
                  strokeWidth={1.5}
                  className="text-[#4965E8]"
                />
              </div>
            </div>

            {/* ================= ERROR ================= */}

            {error && (
              <div
                className="
                  mb-4
                  rounded-md
                  border
                  border-red-200
                  bg-red-50
                  px-3
                  py-2
                  text-center
                  text-[11px]
                  text-red-500
                "
              >
                {error}
              </div>
            )}

            {/* ================= NEXT ================= */}

            <button
              type="button"
              disabled={sending}
              onClick={handleNext}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-[5px]
                bg-[#4965E8]
                px-5
                py-3
                text-[12px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#3854d8]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {sending ? (
                <>
                  <Loader2
                    size={15}
                    className="animate-spin"
                  />

                  Sending...
                </>
              ) : (
                "Next"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;