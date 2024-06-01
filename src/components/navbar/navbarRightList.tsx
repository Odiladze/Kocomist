import React from "react";
import { globalContext } from "../../context/context";
import { useContext } from "react";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { RiUser6Line } from "react-icons/ri";
import {ImEarth} from "react-icons/im"
import LinkEng from "../lang";
import Exchange from "../exchange";
import { Router } from "next/router";

//here we have cart, exchange, dark mode switcher and sign in



const NavbarRightList = (props: { useForNavbar: boolean }) => {
  const { useForNavbar } = props;

  const {
    globalState: { cart },
    darkTheme,
    setDarkTheme,
    switchMenuVisibility,
  } = useContext(globalContext);

  return (
    <nav
      className={`links animate-swipeDownAndGrow text-2xl ${
        useForNavbar
          ? "hidden"
          : "text-6xl flex  justify-evenly mt-10 "
      } sm:flex`}
    >
     
      <span
        className={`exchange flex ${
          useForNavbar ? "text-2xl" : "text-6xl"
        } sm:mr-2 sm:pr-4 hover:cursor-pointer hover:text-green-400`}
       
      >
        <Exchange />
      </span>

      <span
        className={`darkMode hidden ${
          useForNavbar ? "text-2xl" : "text-6xl"
        } sm:mr-2 sm:pr-4 hover:cursor-pointer hover:text-green-400`}
        onClick={() => setDarkTheme((darkTheme: boolean) => !darkTheme)}
      >
        {!darkTheme ? <RiMoonClearFill /> : <BsSun />}
      </span>


    </nav>
  );
};

export default NavbarRightList;
