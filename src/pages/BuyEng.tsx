import React from "react";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenuEng";
import Navbar from "../components/navbar/navbarindexEng";
import Image from "next/image";
import logo from "../../public/Production.png";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import fakerlogo from "../../public/fakerjslogo.svg";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";
import Footer from "../components/footer";
import BsInstagram from "react-icons/bs";
import Info from "../components/contact";
import InsideEng from "../components/buyinsideEng";
import { ImEarth } from "react-icons/im";
import Footer2 from "../components/footer2";
import NavbarEng from "../components/navbar/navbarEng";
//describing why I made this app

const BuyEng = () => {
  return (
    <div className="about  bg-gradient-to-tr from-white to-[#f5f5f5] dark:from-[#222222] dark:to-slate-900 h-full">
      <Navbar />
      <HamburgerMenu />

      <main className="main flex flex-col justify-center items-center  lg:flex-row  2xl:text-2xl h-[] ">
        <section className="left  flex items-center justify-center mb-60">
          <div className="text-black dark:text-white text-3xl m-4  flex absolute  right-0 top-20 mt-20"> 
          <Link
            href="/Buy"
            className="text-black dark:text-white  text-3xl m-4  absolute flex top-20 mt-20  right-0 z-10"
            passHref
          >
            <ImEarth />
          </Link>
          </div>
          <div className="wrap flex items-center  flex-col h-2/6  lg:h-3/6 lg: left-0  sm:ml-14 mt-16 lg:mt-4 xl:ml-32">
            <p className=" text-5xl  lg:mb-16 dark:text-indigo-50"></p>
            <div className="socialPlatforms flex flex-col items-center md:flex-row bg-[#cad7c6] rounded-full  ">
            <div className="margn m-0 w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[500px] 2xl:h-[500px]  rounded-full	">
                <img src="https://i.postimg.cc/rwJ8M924/3344.png" alt=""  className="rounded-full"/>
              </div>
            </div>
            <button className="rounded-none bg-[#333333] mt-4 py-3 w-44 text-white text-base">
              <Link href="/aboutEng" className="font-montserrat ">
                PRODUCTS
              </Link>
            </button>
          </div>
        </section>
        <section className="right w-1/2 flex flex-col items-center justify-center  h-[450px] md:h-[260px] mb-20 md:-mt-10  md:mb-14">
          <div className="info flex-col sm:max-w-xs md:max-w-xl lg:max-w-lg absolute  lg:right-4 sm:ml-8 xl:mr-24 md:-mt-40 lg:mt-64 xl:mt-48 2xl:mt-52 mb-24 p-6">
            <InsideEng />
          </div>
        </section>
      </main>
      <div className="footer">
        <Footer2 />
      </div>
    </div>
  );
};

export default BuyEng;
