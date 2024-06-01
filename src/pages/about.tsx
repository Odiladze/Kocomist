import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import ProductList from "../components/productList";
import Filter from "../components/filter";
import { globalContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";
import Footer from "../components/footer";
import { ImEarth } from "react-icons/im";
import Link from "next/link";

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
      <Navbar />

      <HamburgerMenu />

      <div className="wrapper w-full flex justify-around flex-col items-center lg:items-start xl:items-start lg:flex-row xl:flex-row ">
        <aside
          className={`filterContainer ${
            filterOn ? "block" : "hidden"
          } animate-swipeDownAndGrow  xl:w-auto h-[400px] xl:h-auto mt-10 `}
        >
          <Filter />
        </aside>

        <main className="mainProducts flex  py-8 mt-10 lg:mr-8">
          <ProductList language="geo" />
          <div className=" text-4xl  right-0 mr-5 -mt-10 absolute dark:text-white">
            <Link
              href="/aboutEng"
              className="text-black dark:text-white  text-3xl m-4   fixed top-20 mt-20  right-0 z-10"
              passHref
            >
              <ImEarth />
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
