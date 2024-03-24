import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={` bg-primaryFontColor text-black text-sm font-DMsans font-bold py-4 px-14 ${className}`}
    >
      {children ? children : "Button"}
    </button>
  );
};

export default Button;
