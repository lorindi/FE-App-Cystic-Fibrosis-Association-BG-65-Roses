"use client"; 
import React from "react";

type ButtonProps = {
  type:
    | "primary"
    | "outlined"
    | "text-icon"
    | "icon"
    | "iconWithText"
    | "arrow"
    | "disabled";
  text?: string; 
  icon?: React.ReactNode; 
  onClick?: () => void; 
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ type, text, icon, onClick, disabled }) => {
  const getClassName = () => {
    switch (type) {
      case "primary":
        return "w-[278px] text-white text-base font-bold font-['Montserrat'] px-6 py-4 rounded-[10px] bg-gradient-25 from-[#29B8A4] to-[#06B8E6] hover:bg-gradient-25 hover:from-[#8FD6CD] hover:to-[#7FD6EA]" ;
      case "outlined":
        return "w-[278px] px-6 py-4 rounded-[10px] border-2 border-[#29b8a4] text-[#222222] text-base font-bold font-['Montserrat'] hover:border-inherit hover:bg-gradient-25 hover:from-[#8FD6CD] hover:to-[#7FD6EA]";
      case "text-icon":
        return "w-[140px] h-[30px] px-3 py-2 rounded-[10px] text-[#03657f] text-base font-bold font-['Montserrat'] hover:text-[#03657f]/60";
      case "icon":
        return "p-2 rounded-full hover:bg-gray-100";
      case "iconWithText":
        return "flex items-center space-x-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 px-4 rounded hover:opacity-90";
      case "arrow":
        return "flex items-center justify-center space-x-2 bg-teal-500 text-white py-2 px-4 rounded hover:opacity-90";
      case "disabled":
        return "bg-gray-300 text-gray-500 py-2 px-4 rounded cursor-not-allowed";
      default:
        return "";
    }
  };

  return (
    <button
      className={getClassName()}
      onClick={onClick}
      disabled={disabled || type === "disabled"}
    >
      {type === "icon" ? (
        icon
      ) : type === "iconWithText" || type === "arrow" ? (
        <div className="flex items-center">
          {icon}
          {text && <span>{text}</span>}
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
