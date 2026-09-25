import { partners } from "../utils/helper";
import Underline from "./common/Underline";


const TrustedPartners = () => {
    return (
        <section
            id="partners"
            className="
        w-full
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
                        Our Trusted{" "}
                        <span className="text-[#4964ed]">
                            Partners
                        </span>
                    </h2>

                    {/* Description */}
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

                    {/* ================= CURVED LINE ================= */}
                    <Underline/>
                </div>

                {/* ================= PARTNERS ================= */}
                <div
                    className="
            mt-10
            flex 
            justify-center
            gap-5
            sm:mt-12
            items-center mx-auto
            sm:gap-6
          "
                >
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="
                group
                flex
                h-[130px]
                w-full
                max-w-[180px]
                cursor-pointer
                flex-col
                items-center
                justify-center
                rounded-md
                bg-[#f7f8fc]
                px-5
                py-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-[0_10px_30px_rgba(73,100,237,0.12)]
              "
                        >
                            {/* Logo */}
                            <div
                                className="
                  flex
                  h-[65px]
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
                            >
                                {partner.logo}
                            </div>

                            {/* Name */}
                            <p
                                className="
                  mt-1
                  text-[10px]
                  font-medium
                  text-gray-800
                "
                            >
                                {partner.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;