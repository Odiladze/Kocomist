import React, { useContext } from "react";
import { globalContext } from "../../context/context";

// simple hamburger menu logo made with only tailwind and some divs

const HamburgerMenuLogo = () => {
  const { switchMenuVisibility } = useContext(globalContext);

  return (
    <div className="flex flex-col sm:hidden" onClick={switchMenuVisibility}>
      <div className="burger w-6 h-1 bg-black rounded-2xl ml-4 mb-1  dark:bg-white"></div>
      <div className="burger w-6 h-1 bg-black rounded-2xl ml-4 mb-1  dark:bg-white"></div>
      <div className="burger w-6 h-1 bg-black rounded-2xl  ml-4 mb-1  dark:bg-white"></div>
    </div>
  );
};

export default HamburgerMenuLogo;
