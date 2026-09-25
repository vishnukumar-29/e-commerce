import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const LandBoard = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f6f7fc] px-4">
      <div className="w-full max-w-md text-center">

        <div className="mb-7 flex justify-center">
          <img
            src="/images/png/logo.png"
            alt="StudentHub"
            className="w-[150px] object-contain"
          />
        </div>

        <h1 className="relative inline-block text-base font-bold text-[#222] sm:text-lg">
          You want to Signup as

          <span className="absolute bottom-[-3px] left-0 h-[2px] w-full bg-[#4964ed]" />
        </h1>

        <div className="mt-6 flex justify-center">
          <Link
            to="/personal"
            className="
              group
              flex
              h-[125px]
              w-[135px]
              flex-col
              items-center
              justify-center
              rounded-lg
              bg-white
              shadow-[0_4px_15px_rgba(0,0,0,0.06)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_8px_25px_rgba(73,100,237,0.15)]
            "
          >
            <GraduationCap
              size={46}
              strokeWidth={1.8}
              className="mb-2 text-[#4964ed] transition-transform duration-300 group-hover:scale-110"
            />

            <span className="text-xs font-medium text-[#222] sm:text-sm">
              Student
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LandBoard;