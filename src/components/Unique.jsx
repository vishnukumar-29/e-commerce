import { features } from "../utils/helper";
import Underline from "./common/Underline";

const Unique = () => {
  return (
    <section
      id="features"
      className="
        w-full
        bg-[#f7f8fd]
        px-4
        pb-14 
        pt-16 max-md:mt-[120px] max-lg:mt-20
        sm:px-6
        sm:pb-16
        md:pb-20
        lg:px-8
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ================= HEADING ================= */}
        <div className="flex flex-col items-center text-center">

          <h2
            className="
              text-2xl
              font-bold
              leading-tight
              text-gray-900
              sm:text-3xl
              md:text-[32px]
            "
          >
            Features that make us{" "}
            <span className="text-[#4964ed]">
              Unique
            </span>
          </h2>

          <p
            className="
              mt-3
              max-w-[560px]
              text-gray-400
            text-base md:text-lg
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br className="hidden sm:block" />
            sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          {/* ================= CURVED LINE ================= */}
          <Underline/>
        </div>

        {/* ================= FEATURES ================= */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-10
            sm:mt-14
            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-12
            lg:mt-16
            lg:grid-cols-4
            lg:gap-8
          "
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="
                group
                text-center
                sm:text-left
              "
            >
              {/* ================= ICON ================= */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e7ebff]
                  text-[#4964ed]
                  ring-4
                  ring-[#eef1ff]
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:bg-[#4964ed]
                  group-hover:text-white
                  group-hover:ring-[#dce2ff]
                "
              >
                {feature.icon}
              </div>

              {/* ================= TITLE ================= */}
              <h3
                className="
                  mt-5
                  
                  font-semibold
                  text-gray-900
                  sm:text-lg text-base
                "
              >
                {feature.title}
              </h3>

              {/* Small underline */}
              <div
                className="
                  relative
                  mt-2
                  h-[3px]
                  w-[42px]
                  overflow-hidden
                  rounded-full
                  bg-[#aebaff]
                "
              >
                <span
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-1/2
                    rounded-full
                    bg-[#4964ed]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </div>

              {/* ================= DESCRIPTION ================= */}
              <p
                className="
                  mt-3
                  max-w-[220px]
                  text-xs
                  text-gray-400
                  sm:text-sm
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unique;