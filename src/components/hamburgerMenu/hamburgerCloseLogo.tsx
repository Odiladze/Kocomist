import React from "react";

// close menu logo made with tailwind and two divs

const HamburgerCloseLogo = () => {
  return (
    <>
      <div className="stick w-8 h-1 mt-4 bg-black rounded-2xl rotate-45 absolute  dark:bg-white"></div>
      <div className="stick w-8 h-1 mt-4 bg-black rounded-2xl -rotate-45 absolute dark:bg-white"></div>
    </>
  );
};

export default HamburgerCloseLogo;
