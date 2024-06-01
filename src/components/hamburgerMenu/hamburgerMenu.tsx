import React, { useContext, useEffect } from "react";
import { globalContext } from "../../context/context";
import NavbarLeftList from "../navbar/navbarLeftList";
import NavbarRightList from "../navbar/navbarRightList";
import HamburgerCloseLogo from "./hamburgerCloseLogo";

// simple Hamburger menu
// when clicked on open or close button of the menu, class "disabled" is added or removed from body classlist

const HamburgerMenu = () => {
  const { showMenu, switchMenuVisibility } = useContext(globalContext);

  useEffect(() => {
    showMenu
      ? document.body.classList.add("disabled")
      : document.body.classList.remove("disabled");
  }, [showMenu]);

  return (
    <div
      className={`menu animate-blurMenu p-8  top-0 left-0 right-0  h-screen  ${
        showMenu ? "fixed" : "hidden"
      } z-50 overflow-hidden `}
    >
      <div className="onClick" onClick={switchMenuVisibility}>
        <HamburgerCloseLogo />
      </div>

      <div className="nav flex flex-col justify-around">
        <NavbarLeftList useForNavbar={false} />
        <NavbarRightList useForNavbar={false} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
