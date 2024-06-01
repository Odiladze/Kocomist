import styles from "../styles/Home.module.css";
import ProductList from "../components/productList";
import Filter2 from "../components/filter2";
import { globalContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenuEng";
import Footer from "../components/footer";
import { ImEarth } from "react-icons/im";
import Footer2 from "../components/footer2";
import NavbarEng from "../components/navbar/navbarEng";
import Link from "next/link";
//import ProductListEng from "../components/productListEng";

//This is were all begins, this is main page. here we are rendering Navbar, Filter & ProductList

const Home = () => {
  const { filterOn, setFilterOn, showMenu } = useContext(globalContext);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth && screenWidth < 1024) {
      setFilterOn(false);
    } else {
      setFilterOn(true);
    }
  }, [screenWidth, setFilterOn]);

  useEffect(() => {
    setFilterOn(window.innerWidth < 1024 ? false : true);
  }, [setFilterOn]);

  return (
    <div
      className={`app bg-gradient-to-tr from-white to-[#f5f5f5] dark:from-[#222222] dark:to-slate-900 relative flex flex-col ${
        showMenu ? " overflow-hidden " : ""
      }`}
    >
      <NavbarEng />

      <HamburgerMenu />

      <div className="wrapper w-full flex justify-around flex-col items-center lg:items-start xl:items-start lg:flex-row xl:flex-row ">
        <aside
          className={`filterContainer ${
            filterOn ? "block" : "hidden"
          } animate-swipeDownAndGrow  xl:w-auto h-[400px] xl:h-auto mt-10 `}
        >
          <Filter2 />
        </aside>

        <main className="mainProducts flex  py-8 mt-10 lg:mr-8">
          <ProductList language="eng" />
          <div className=" text-4xl  right-0 mr-5 -mt-10 absolute dark:text-white">
            <Link
              href="/about"
              className="text-black dark:text-white  text-3xl m-4   fixed top-20 mt-20  right-0 z-10"
              passHref
            >
              <ImEarth />
            </Link>
          </div>
        </main>
      </div>
      <Footer2 />
    </div>
  );
};

export default Home;
