import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={` bg-primaryFontColor text-white text-sm font-DMsans font-bold py-4 px-14 hover:bg-[#353535] transition-all hover:scale-95 ${className}`}
    >
      {children ? children : "Button"}
    </button>
  );
};

export default Button;
