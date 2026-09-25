import React from "react";

const Cta = ({
  children = "Next",
  type = "submit",
  disabled = false,
  loading = false,
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        mt-6
        flex
        h-10
        w-full
        items-center
        justify-center
        rounded-md
        bg-[#4561e8]
        px-4
        text-xs
        font-medium
        text-white
        transition-all
        duration-200

        ${
          disabled || loading
            ? "cursor-not-allowed bg-[#4561e8]/50"
            : "cursor-pointer hover:bg-[#3955dc] active:scale-[0.99]"
        }

        focus:outline-none
        focus:ring-2
        focus:ring-[#4561e8]/30

        ${className}
      `}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Cta;