const InputAll = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = "",
  required = false,
  rightElement = null,
  children,
  ...props
}) => {
  const isSelect = type === "select";

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-[#333]"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-red-500">*</span>
        )}
      </label>

      <div className="relative">
        {isSelect ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={`
              h-[38px]
              w-full
              appearance-none
              rounded-[5px]
              border
              bg-white
              px-3
              text-sm
              text-[#333]
              outline-none
              transition
              ${
                error
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#e5e5e5] focus:border-[#4561e8]"
              }
            `}
            {...props}
          >
            {children}
          </select>
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`
              h-[38px]
              w-full
              rounded-[5px]
              border
              bg-white
              px-3
              text-sm
              text-[#333]
              outline-none
              transition
              placeholder:text-[#b5b5b5]
              ${
                rightElement
                  ? "pr-9"
                  : ""
              }
              ${
                error
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#e5e5e5] focus:border-[#4561e8]"
              }
            `}
            {...props}
          />
        )}

        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputAll;