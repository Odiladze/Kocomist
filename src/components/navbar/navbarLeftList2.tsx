import React, { useContext } from "react";
import { globalContext } from "../../context/context";
import Link from "next/link";


// straight-fowrard navigation for Trending, about and Contact pages
//as you know this project uses Next.js so we use Link component from Next.js
//with useForNavbar prop we decide how we should this component
//if its true component will be rendered regularly for navbar
//else we use flex to use this component inside hamburger menu component

const NavbarLeftList2 = (props: { useForNavbar: boolean }) => {
  const { useForNavbar } = props;
  const { switchMenuVisibility } = useContext(globalContext);

  return (
    <nav
      className={`lists ${useForNavbar ? "hidden" : " mt-8"} sm:hidden md:block`}
      onClick={() => {
        if (!useForNavbar) {
          switchMenuVisibility();
        }
      }}
    >
      <ul
        className={`listUl animate-swipeDownAndGrow flex ${
          useForNavbar ? "" : "flex-col justify-around h-80"
        } dark:text-slate-50 `}
      >
        <li className="font-montserrat text-4xl md:text-xs lg:text-sm xl:text-base md:ml-4 mt-1 lg:ml-8 text-center sm:text-sm sm:mr-1" >
        <Link href="/indexEng">HOME</Link>
        </li>
        <li className="font-montserrat text-4xl md:text-xs lg:text-sm xl:text-base md:px-6 lg:pl-8 xl:pl-14  mt-1 lg:mx-8 xl:mx-8 text-center sm:text-sm sm:mr-1">
        <Link href="/aboutEng">PRODUCSTS</Link>
        </li>
        <li className="font-montserrat text-4xl md:text-xs lg:text-sm xl:text-base mt-1  xl:mx-8 lg: text-center hover:cursor-pointer hover:text-green-400 sm:text-sm">
          <Link href="/BuyEng">BUY</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLeftList2;
