import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { customers } from "../utils/helper";
import Underline from "./common/Underline";



const CustomersSay = () => {
    const swiperRef = useRef(null);

    return (
        <section
            id="testimonials"
            className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-14
        sm:px-6
        sm:py-16
        md:py-20
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
                        What{" "}
                        <span className="text-[#4964ed]">
                            Customers
                        </span>{" "}
                        Say
                    </h2>

                    <p
                        className="
              mt-3
              max-w-[500px]
              text-base md:text-lg
              text-gray-400
             
            "
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br className="hidden sm:block" />
                        sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>

                    {/* Curved Line */}
                   <Underline/>
                </div>

                {/* ================= SWIPER ================= */}
                <div className="relative mt-10 sm:mt-12">

                    <Swiper
                        modules={[Autoplay]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}

                        /* Infinite loop */
                        loop={true}
                        loopAdditionalSlides={customers.length}

                        /* Continuous autoplay */
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}

                        /* Continuous movement speed */
                        speed={5000}

                        /* Responsive */
                        slidesPerView={1}
                        spaceBetween={12}

                        breakpoints={{
                            480: {
                                slidesPerView: 1.15,
                                spaceBetween: 12,
                            },

                            640: {
                                slidesPerView: 1.3,
                                spaceBetween: 14,
                            },

                            768: {
                                slidesPerView: 1.7,
                                spaceBetween: 16,
                            },

                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },

                            1280: {
                                slidesPerView: 2.1,
                                spaceBetween: 12,
                            },
                        }}

                        className="customer-swiper !overflow-visible"
                    >
                        {customers.map((customer, index) => (
                            <SwiperSlide
                                key={`${customer.id}-${index}`}
                            >
                                <div
                                    className="
          relative
          flex
          min-h-[125px]
          overflow-hidden
          rounded-md
          bg-[#f6f7fc]
          transition-shadow
          duration-300
          hover:shadow-[0_8px_25px_rgba(73,100,237,0.10)]
        "
                                >
                                    {/* Image */}
                                    <div
                                        className="
            h-[125px]
            w-[90px]
            shrink-0
            sm:w-[100px]
            md:w-[105px]
          "
                                    >
                                        <img
                                            src={customer.image}
                                            alt={customer.name}
                                            className="
              h-full
              w-full
              object-cover
            "
                                        />
                                    </div>

                                    {/* Content */}
                                    <div
                                        className="
            relative
            min-w-0
            flex-1
            px-3
            py-3
            sm:px-4
          "
                                    >
                                        {/* Quote */}
                                        <span
                                            className="
              absolute
              right-3
              top-[-8px]
              text-[55px]
              font-bold
              leading-none
              text-[#aebaff]
              opacity-80
            "
                                        >
                                            "
                                        </span>

                                        {/* Name */}
                                        <h3
                                            className="
              relative
              z-10
              truncate
              text-base md:text-lg
              font-semibold
              text-gray-900
              
            "
                                        >
                                            {customer.name}
                                        </h3>

                                        {/* Location */}
                                        <p
                                            className="
              mt-0.5
              text-xs
              text-gray-700
              sm:text-xs
            "
                                        >
                                            {customer.location}
                                        </p>

                                        {/* Review */}
                                        <p
                                            className="
              mt-3
              line-clamp-3
              text-xs
              leading-4
              text-gray-400
              sm:text-sm
            "
                                        >
                                            {customer.review}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ================= ARROWS ================= */}
                <div className="mt-5 flex items-center justify-center gap-2">

                    {/* Previous */}
                    <button
                        type="button"
                        aria-label="Previous testimonial"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-[4px]
              bg-[#e8ecff]
              text-[#4964ed]
              transition-all
              duration-300
              hover:bg-[#4964ed]
              hover:text-white
              active:scale-95
            "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Next */}
                    <button
                        type="button"
                        aria-label="Next testimonial"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-[4px]
              bg-[#4964ed]
              text-white
              transition-all
              duration-300
              hover:bg-[#354ed3]
              active:scale-95
            "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default CustomersSay;