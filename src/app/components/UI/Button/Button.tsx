import React from "react";
interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  className?: string;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ type, onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} text-white bg-[#19305e] hover:bg-[#142850] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default Button;
