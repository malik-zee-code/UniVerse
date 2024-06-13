import React, { FocusEvent } from "react";

interface ButtonProps {
  type: string;
  label: string;
  id: string;
  name: string;
  onChange?: any;
  placeholder?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  className?: string;
}
const FloatingInput: React.FC<ButtonProps> = ({
  className,
  type,
  label,
  id,
  name,
  onChange,
  placeholder,
  onBlur,
}) => {
  return (
    <div className={`${className} relative z-0 w-full group`}>
      <input
        type={type}
        name={name}
        id={id}
        className="block px-2 py-2.5 w-full placeholder-transparent focus:placeholder-gray-500 text-gray-900 bg-transparent border-2 rounded-md border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#aeb1b8] peer"
        placeholder={placeholder}
        required
        onChange={onChange}
        onBlur={onBlur}
      />
      <label
        htmlFor={name}
        className=" capitalize peer-focus:font-medium absolute z-[1] bg-white text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-[14px] origin-[0] px-1 mx-2 peer-focus:text-[#666c7b] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[2px] peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
