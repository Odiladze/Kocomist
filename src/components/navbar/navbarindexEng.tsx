import React, { useContext, useEffect, useRef, useState } from "react";
import { globalContext } from "../../context/context";
import Link from "next/link";
import Logo from "../logo";
import { FiFilter } from "react-icons/fi";
import NavbarLeftList2 from "./navbarLeftList2";
import NavbarRightList from "./navbarRightList";
import HamburgerMenuLogo from "../hamburgerMenu/hamburgerMenuLogo";

// Navbar uses two components: navbarLeftList and navbarRight list
// this is because we also are using this two components in hamburger menu
// see the following components to learn how it works
// and third, in the middle, is the logo of a website

const NavbarIndexEng = () => {
  const { setFilterOn } = useContext(globalContext);
  const headerRef = useRef<HTMLDivElement>(null);
  const [filterIconHidden, setFilterIconHidden] = useState<boolean>(false);

  //hide filter icon when we are not in product list page
  useEffect(() => {
    setFilterIconHidden(() =>
      headerRef.current?.parentElement?.classList[0] === "app" ? false : true
    );
  }, [filterIconHidden]);

  return (
    <header
      ref={headerRef}
      className="navbar glass h-20 p flex align-middle justify-between relative  "
    >
      {/* navigation */}
      <NavbarLeftList2 useForNavbar={true} />

      {/* logo */}
      <Link href="/" passHref>
        <div className="logoWrap hover:animate-pulse absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <Logo href="/" onClick={() => {}} />
        </div>
      </Link>

      {/* Haburglabyurer menu for responive designey */}
      <HamburgerMenuLogo />

      <div
        className={`filterView text-black dark:text-white lg:hidden md:text-2xl text-3xl md:ml-[380px] md:mt-[1px]  mr-4 -mt-1 ${
          filterIconHidden ? "hidden" : "block"
        }`}
        onClick={() => setFilterOn((filterOn: boolean) => !filterOn)}
      >
        <FiFilter />
      </div>

      {/* 2nd navigaton */}
    </header>
  );
};

export default NavbarIndexEng;
