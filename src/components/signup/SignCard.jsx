import { useLocation } from "react-router-dom";
import { steps } from "../../utils/helper";



const SignCard = () => {
  const location = useLocation();

  const currentStep =
    steps.find((step) =>
      step.paths.includes(location.pathname)
    )?.id || 1;

  return (
    <aside
      className="
        relative
        
        h-full
        w-full
        overflow-hidden
       md:rounded-tr-[40px]
        bg-[#4965E8]
        
      "
    >
     

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          items-center
          px-8
          py-10
          xl:px-12
        "
      >
       
        <img
          src="/images/png/sign-logo.png"
          alt="StudentHub"
          className="h-11 w-auto object-contain mb-10 sm:h-20"
        />
        {/* ================= HEADING ================= */}
        <h1
          className="
            mb-8
            text-center
            text-xl
            font-semibold
            text-white
            xl:text-[22px]
          "
        >
          Create Account as Student
        </h1>

        {/* ================= ROADMAP ================= */}
        <div className="relative w-full max-w-[330px]">
          {/* ==========================================
              BACKGROUND TIMELINE
          ========================================== */}
          <div
            className="
              absolute
              left-[22px]
              top-[22px]
              h-[calc(100%-44px)]
              w-[2px]
              bg-white/20
            "
          />

          {/* ==========================================
              FILLED TIMELINE
          ========================================== */}
          <div
            className="
              absolute
              left-[22px]
              top-[22px]
              w-[2px]
              bg-white
              transition-all
              duration-500
              ease-in-out
            "
            style={{
              height:
                currentStep <= 1
                  ? "0px"
                  : `calc(
                      ${((currentStep - 1) /
                    (steps.length - 1)) *
                  100
                  }% - 35px
                    )`,
            }}
          />

          {/* ================= STEPS ================= */}
          <div className="relative space-y-7">
            {steps.map((step) => {
              const completed = step.id < currentStep;
              const active = step.id === currentStep;
              // const upcoming = step.id > currentStep;

              return (
                <div
                  key={step.id}
                  className="relative flex items-center gap-4"
                >
                  {/* ================= CIRCLE ================= */}
                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-[45px]
                      w-[45px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-500
                      ${completed || active
                        ? "bg-white text-[#4965E8]"
                        : "bg-[#647CEE] text-white/70"
                      }
                    `}
                  >
                    {/* COMPLETED = CHECK */}
                    {completed ? (
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    ) : (
                      step.icon
                    )}

                    {/* ACTIVE GLOW */}
                    {active && (
                      <span
                        className="
                          absolute
                          inset-[-4px]
                          -z-10
                          rounded-full
                          border
                          border-white/30
                        "
                      />
                    )}
                  </div>

                  {/* ================= TITLE ================= */}
                  <span
                    className={`
                      text-base
                      transition-all
                      duration-500
                      xl:text-lg
                      ${active
                        ? "font-semibold text-white"
                        : completed
                          ? "font-medium text-white"
                          : "font-normal text-white/70"
                      }
                    `}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="flex-1" />
      </div>
    </aside>
  );
};

export default SignCard;