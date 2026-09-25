const Underline = () => {
    return (
        <div className="relative mt-4 h-3 w-[210px] sm:w-[240px]">
            {/* Main line */}
            <div
                className="
                    absolute
                    left-0
                    top-1
                    h-[2px]
                    w-full
                    rotate-[0.5deg]
                    rounded-full
                    bg-[#4964ed]
                "
            />

            {/* Light curved line */}
            <div
                className="
                    absolute
                    left-1
                    top-2
                    h-[2px]
                    w-full
                    -rotate-[1deg]
                    rounded-full
                    bg-[#a8b5ff]
                "
            />
        </div>
    );
};

export default Underline;