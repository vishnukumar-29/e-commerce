import { useNavigate } from "react-router-dom";

const GetStarted = () => {
        const navigate = useNavigate();

    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                    overflow-hidden
                    rounded-2xl
                    bg-[#4964ed]
                    px-6
                    py-10
                    text-center
                    sm:px-10
                    sm:py-12
                    md:py-14
                    lg:py-16
                "
            >
                {/* Background glow - top left */}
                <div
                    className="
                        absolute
                        -left-16
                        -top-16
                        h-32
                        w-32
                        rounded-full
                        bg-[#6f83f5]
                        opacity-60
                        blur-2xl
                        sm:h-40
                        sm:w-40
                    "
                />

                {/* Background glow - bottom right */}
                <div
                    className="
                        absolute
                        -bottom-16
                        -right-16
                        h-32
                        w-32
                        rounded-full
                        bg-[#6f83f5]
                        opacity-50
                        blur-2xl
                        sm:h-40
                        sm:w-40
                    "
                />

                {/* Circle - top right */}
                <div
                    className="
                        absolute
                        right-8
                        top-7
                        h-8
                        w-8
                        rounded-full
                        bg-[#7890f4]/60
                        sm:right-10
                        sm:h-10
                        sm:w-10
                        md:right-10
                    "
                />

                {/* Small circle - right */}
                <div
                    className="
                        absolute
                        right-[12%]
                        top-[42%]
                        h-3
                        w-3
                        rounded-full
                        bg-[#91a3f8]/60
                    "
                />

                {/* Small circle - left */}
                <div
                    className="
                        absolute
                        left-[16%]
                        bottom-10
                        h-6
                        w-6
                        rounded-full
                        bg-[#7e93f5]/70
                        sm:h-7
                        sm:w-7
                    "
                />

                {/* Diamond - top */}
                <div
                    className="
                        absolute
                        left-[34%]
                        -top-3
                        h-5
                        w-5
                        rotate-45
                        border
                        border-[#a9b7ff]/60
                        sm:h-6
                        sm:w-6
                    "
                />

                {/* Diamond - bottom right */}
                <div
                    className="
                        absolute
                        right-[18%]
                        bottom-[-8px]
                        h-5
                        w-5
                        rotate-[-28deg]
                        border
                        border-[#a9b7ff]/60
                        sm:h-6
                        sm:w-6
                    "
                />

                {/* Curved line - left */}
                <div
                    className="
                        absolute
                        left-[14%]
                        top-16
                        hidden
                        h-8
                        w-24
                        rotate-[15deg]
                        rounded-[50%]
                        border-t
                        border-[#a9b7ff]/50
                        sm:block
                    "
                />

                {/* Curved line - right */}
                <div
                    className="
                        absolute
                        right-[14%]
                        top-8
                        hidden
                        h-12
                        w-24
                        rotate-[20deg]
                        rounded-[50%]
                        border-t
                        border-[#a9b7ff]/50
                        sm:block
                    "
                />

                {/* Left diagonal line */}
                <div
                    className="
                        absolute
                        bottom-5
                        left-4
                        h-10
                        w-[2px]
                        rotate-[38deg]
                        bg-[#a9b7ff]/60
                        sm:left-8
                    "
                />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-md">
                    <p
                        className="
                            mb-2
                            text-xs
                            font-medium
                            text-white
                            sm:text-sm
                        "
                    >
                        Sign up or contact us
                    </p>

                    <h2
                        className="
                            text-2xl
                            font-bold
                            leading-tight
                            text-white
                            sm:text-3xl
                            md:text-4xl
                        "
                    >
                        Ready to
                        <br />
                        Get Started?
                    </h2>

                    {/* Buttons */}
                    <div
                        className="
                            mt-7
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-3
                            sm:mt-8
                            sm:flex-row
                        "
                    >
                       <button
            type="button"
            onClick={() => navigate("/personal")}
            className="
                w-full
                rounded-md
                bg-white
                px-8
                py-2.5
                text-xs
                font-medium
                text-[#4964ed]
                shadow-sm
                transition-all
                duration-300
                hover:shadow-lg
                sm:w-[132px]
            "
        >
            Sign Up
        </button>

                        <button
                            type="button"
                            className="
                                w-full
                                rounded-md
                                bg-[#6680ef]
                                px-8
                                py-2.5
                                text-xs
                                font-medium
                                text-white
                                transition-all
                                duration-300
                                hover:bg-[#7890f4]
                                sm:w-[132px]
                            "
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;