import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SignCard from "./SignCard";

const Verification = () => {
  const navigate = useNavigate();

  const [identityProof, setIdentityProof] =
    useState(null);

  useEffect(() => {
    const savedData = sessionStorage.getItem(
      "identityProof"
    );

    if (!savedData) {
      navigate("/identity-proof");
      return;
    }

    try {
      setIdentityProof(JSON.parse(savedData));
    } catch {
      navigate("/identity-proof");
    }
  }, [navigate]);

  if (!identityProof) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3] ">
      <div
        className="
          mx-auto
          flex
          min-h-screen max-md:flex-col
          max-w-[1200px]
          overflow-hidden
          bg-white
          shadow-sm
        "
      >
        {/* LEFT */}
        <div className="min-w-[44%] ">
          <SignCard />
        </div>

        {/* RIGHT */}
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
            <h1 className="mb-6 text-[20px] font-semibold text-[#222]">
              Verification
            </h1>

            <p className="mb-4 text-[11px] sm:text-sm text-[#999]">
              Your uploaded identity documents
            </p>

            {/* Uploaded documents */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* FRONT */}
              <div>
                <p className="mb-2 text-[10px] sm:text-sm font-medium text-[#333]">
                  Front Side
                </p>

                <div
                  className="
                    flex
                    h-[180px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[8px]
                    bg-[#f7f8fc]
                    p-3
                  "
                >
                  <img
                    src={identityProof.front.image}
                    alt="Uploaded ID front"
                    className="
                      max-h-full
                      max-w-full
                      rounded
                      object-contain
                    "
                  />
                </div>
              </div>

              {/* BACK */}
              <div>
                <p className="mb-2 text-[10px] sm:text-sm font-medium text-[#333]">
                  Back Side
                </p>

                <div
                  className="
                    flex
                    h-[180px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[8px]
                    bg-[#f7f8fc]
                    p-3
                  "
                >
                  <img
                    src={identityProof.back.image}
                    alt="Uploaded ID back"
                    className="
                      max-h-full
                      max-w-full
                      rounded
                      object-contain
                    "
                  />
                </div>
              </div>
            </div>

            {/* Continue */}
            <button
              type="button"
              onClick={() => navigate("/confirmation")}
              className="
                mt-7
                w-full
                rounded-[5px]
                bg-[#4965E8]
                px-5
                py-3
                text-[12px]
                font-medium
                text-white
                transition
                hover:bg-[#3854d8]
              "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;