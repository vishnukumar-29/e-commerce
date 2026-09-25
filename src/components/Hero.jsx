import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const searchFields = [
  {
    id: "location",
    placeholder: "Choose Location",
    options: [
      "New Delhi",
      "Gurugram",
      "Noida",
      "Chandigarh",
      "Mohali",
    ],
  },
  {
    id: "moveInDate",
    placeholder: "Choose Date",
    options: [
      "October 1, 2026",
      "October 15, 2026",
      "November 1, 2026",
      "November 15, 2026",
    ],
  },
  {
    id: "duration",
    placeholder: "Select Duration",
    options: [
      "1 Month",
      "3 Months",
      "6 Months",
      "12 Months",
    ],
  },
  {
    id: "propertyType",
    placeholder: "Property Type",
    options: [
      "Apartment",
      "Private Room",
      "Shared Room",
      "Studio",
    ],
  },
];

const Hero = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const [selectedValues, setSelectedValues] = useState({
    location: "",
    moveInDate: "",
    duration: "",
    propertyType: "",
  });

  const searchBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const handleDropdownToggle = (id) => {
    setOpenDropdown((current) =>
      current === id ? null : id
    );
  };

  const handleOptionSelect = (fieldId, option) => {
    setSelectedValues((previous) => ({
      ...previous,
      [fieldId]: option,
    }));

    setOpenDropdown(null);
  };

  const handleSearch = () => {
    console.log("Search Values:", selectedValues);
  };

  return (
    <section className="relative isolate z-10 overflow-visible">
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/png/hero-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      {/* Hero Content */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[500px]
          max-w-[1440px]
          flex-col
          items-center
          px-4
          pb-32
          pt-16
          text-center
          sm:min-h-[530px]
          sm:px-6
          sm:pt-20
          md:pt-24
          lg:min-h-[560px]
          lg:px-8
          lg:pt-24
        "
      >
        {/* Heading */}
        <h1
          className="
            max-w-[720px]
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-4xl
            md:text-5xl
            lg:text-[56px]
            lg:leading-[1.15]
          "
        >
          Let's Begin Your Journey
          <br />
          <span>
            With <span className="text-[#4964ed]">Us</span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-[650px]
            px-2
            text-sm
            leading-6
            text-white/90
            sm:text-base
            md:text-lg
          "
        >
          Find your desirable accommodation with StudentHub which
          provides you secure and fast process to start your new
          journey.
        </p>

        {/* Property Tabs */}
        <div
          className="
            mt-6
            flex
            w-full
            max-w-[350px]
            overflow-hidden
            rounded-lg
            bg-[#4b63e9]
            shadow-lg
            sm:max-w-[360px]
          "
        >
          <button
            type="button"
            className="
              w-1/2
              bg-[#4b63e9]
              px-4
              py-3
              text-xs
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#3f57dc]
              sm:text-sm
            "
          >
            Shared Property
          </button>

          <button
            type="button"
            className="
              w-1/2
              bg-[#5268df]
              px-4
              py-3
              text-xs
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#3f57dc]
              sm:text-sm
            "
          >
            Private Property
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div
        ref={searchBoxRef}
        className="
          absolute
          bottom-0
          left-1/2
          z-50
          w-[calc(100%-24px)]
          max-w-[760px]
          -translate-x-1/2
          translate-y-1/2
        "
      >
        <div
          className="
            rounded-xl
            bg-white
            p-2
            shadow-[0_10px_35px_rgba(0,0,0,0.20)]
            sm:p-3
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-2
              sm:grid-cols-2
              lg:grid-cols-[1fr_1fr_1fr_1fr_auto]
              lg:items-center
              lg:gap-0
            "
          >
            {searchFields.map((field, index) => {
              const isOpen = openDropdown === field.id;
              const selectedValue = selectedValues[field.id];

              return (
                <div
                  key={field.id}
                  className={`
                    relative
                    min-w-0
                    ${
                      index !== searchFields.length - 1
                        ? "lg:border-r lg:border-gray-200"
                        : ""
                    }
                  `}
                >
                  {/* Dropdown Button */}
                  <button
                    type="button"
                    onClick={() =>
                      handleDropdownToggle(field.id)
                    }
                    aria-expanded={isOpen}
                    className={`
                      flex
                      min-h-[48px]
                      w-full
                      items-center
                      justify-between
                      gap-3
                      rounded-md
                      px-4
                      text-left
                      transition-all
                      duration-300
                      sm:min-h-[50px]
                      lg:rounded-none
                      ${
                        isOpen
                          ? "bg-[#f0f2ff]"
                          : "bg-[#f7f8fc] hover:bg-[#f0f2fa]"
                      }
                      lg:bg-transparent
                      lg:hover:bg-transparent
                    `}
                  >
                    <span
                      className={`
                        min-w-0
                        truncate
                        text-xs
                        transition-colors
                        duration-300
                        sm:text-sm
                        ${
                          selectedValue
                            ? "font-medium text-gray-800"
                            : "font-medium text-gray-500"
                        }
                      `}
                    >
                      {selectedValue || field.placeholder}
                    </span>

                    <ChevronDown
                      size={17}
                      strokeWidth={2}
                      className={`
                        shrink-0
                        text-gray-500
                        transition-transform
                        duration-300
                        ease-in-out
                        ${
                          isOpen
                            ? "rotate-180 text-[#4964ed]"
                            : "rotate-0"
                        }
                      `}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`
                      absolute
                      left-0
                      top-full
                      z-[100]
                      mt-2
                      w-full
                      min-w-[190px]
                      origin-top
                      overflow-hidden
                      rounded-lg
                      border
                      border-gray-100
                      bg-white
                      shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                      transition-all
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "visible translate-y-0 scale-100 opacity-100"
                          : "invisible -translate-y-2 scale-95 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        max-h-[220px]
                        overflow-y-auto
                        p-1.5
                      "
                    >
                      {field.options.map((option) => {
                        const isSelected =
                          selectedValue === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              handleOptionSelect(
                                field.id,
                                option
                              )
                            }
                            className={`
                              flex
                              w-full
                              items-center
                              rounded-md
                              px-3
                              py-2.5
                              text-left
                              text-xs
                              transition-all
                              duration-200
                              sm:text-sm
                              ${
                                isSelected
                                  ? "bg-[#4964ed]/10 font-medium text-[#4964ed]"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-[#4964ed]"
                              }
                            `}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Search Button */}
            <button
              type="button"
              onClick={handleSearch}
              className="
                flex
                min-h-[48px]
                items-center
                justify-center
                rounded-md
                bg-[#4964ed]
                px-8
                text-xs
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#354ed3]
                hover:shadow-lg
                active:scale-[0.98]
                sm:min-h-[50px]
                sm:text-sm
                lg:ml-2
              "
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;