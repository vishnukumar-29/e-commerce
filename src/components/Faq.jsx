import { useState } from "react";
import { faqData, MinusIcon, PlusIcon } from "../utils/helper";
import Underline from "./common/Underline";



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faqs"
      className="
        w-full
        bg-[#f7f8fd]
        px-4
        py-14
        sm:px-6
        sm:py-16
        md:py-20
        lg:px-8
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[900px]">

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
            FAQ
            <span className="text-[#4964ed]">S</span>
          </h2>

          <p
            className="
            text-base md:text-lg
              mt-3
              max-w-[500px]
              text-gray-400
              sm:text-[11px]
              
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br className="hidden sm:block" />
            sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          {/* ================= CURVED UNDERLINE ================= */}
        <Underline/>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div
          className="
            mx-auto
            mt-10
            w-full
            max-w-[622px]
            space-y-2
            sm:mt-12
          "
        >
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question + index}
                className="
                  overflow-hidden
                  rounded-md
                  bg-white
                  shadow-[0_2px_8px_rgba(0,0,0,0.02)]
                "
              >
                {/* ================= QUESTION ================= */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-3
                    text-left
                    sm:min-h-[52px]
                    sm:px-4
                  "
                >
                  <span
                    className={`
                      text-base md:text-lg
                      font-semibold
                      transition-colors
                      duration-300
                      
                      ${isOpen
                        ? "text-[#4964ed]"
                        : "text-gray-800"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus */}
                  <span
                    className={`
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      ${isOpen
                        ? "bg-[#4964ed] text-white"
                        : "bg-gray-100 text-gray-500"
                      }
                    `}
                  >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>

                {/* ================= ANSWER ================= */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        border-t
                        border-gray-100
                        px-3
                        pb-4
                        pt-3
                        max-w-[540px]
                        text-xs md:text-sm
                        leading-5
                        text-gray-500
                        sm:px-4

                        
                      "
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;