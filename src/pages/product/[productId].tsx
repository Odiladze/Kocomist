import React, { useContext, useEffect, useState } from "react";
import { globalContext } from "../../context/context";
import { IProduct } from "../../types/types";
import Navbar from "../../components/navbar/navbar";
import NavbarEng from "../../components/navbar/navbarEng";
import Details from "../../components/product/details";
import Gallery from "../../components/product/gallery";
import { useRouter } from "next/router";
import { NextPage } from "next";
import HamburgerMenu from "../../components/hamburgerMenu/hamburgerMenu";
import HamburgerMenuEng from "../../components/hamburgerMenu/hamburgerMenuEng";
import logo from "../../../public/LOGO.jpg";
import Image from "next/image";
import Footer from "../../components/footer";
import Inside from "../../components/buyinside";
import InsideEng from "../../components/buyinsideEng";
import { CurrencyData } from "../../types/types";
import Exchange from "../../components/exchange";
import Footer2 from "../../components/footer2";

//here we combine gallery and details components
//then we create links for each product using received id from Link component from product card component
// and with Next.js router

const ProductPage: NextPage = () => {
  const [prod, setProd] = useState<IProduct>();
  const router = useRouter();
  const identifier = router.query.productId;
  const language = router.query.lang;

  const {
    globalState: { products, cart },
    globalDispatch,
    currencyData: { to },
  } = useContext(globalContext);

  useEffect(() => {
    if (!router.isReady) return;
    const pr = products.find((product: IProduct) => product.id === identifier);
    setProd(pr);
    console.log(language);
  }, [router.isReady, identifier, prod, products, language]);

  if (!prod) {
    return (
      <div className=" bg-gradient-to-tr from-white to-[#f5f5f5] dark:from-zinc-900 dark:to-slate-900 h-screen flex items-center justify-center text-2xl">
        <Image
          className=" animate-customFastSpin rounded-full"
          src={logo}
          alt="a3Logo"
          width={200}
          height={200}
        />
      </div>
    );
  }

  return (
    <section
      className="productPage   bg-gradient-to-tr from-white to-[#f1f1f1] dark:from-[#222222] dark:to-slate-900
     "
    >
      {language === "eng" ? <NavbarEng /> : <Navbar />}
      {language === "eng" ? <HamburgerMenuEng/> : <HamburgerMenu />}
      <div className="flex flex-col lg:flex-row justify-center h-full ">
        <section className="product flex  items-center md:justify-center lg:mt-16 xl:mt-4 flex-col ">
          <Gallery productImages={prod.images} />
          <div className="p-4">
            <h1 className=" lg:hidden xl:hidden 2xl:hidden font-montserrat text-4xl dark:text-white ">
              {language === "eng" ? prod.nameEng : prod.nameGeo}
            </h1>
            <h1 className=" lg:hidden xl:hidden 2xl:hidden font-montserrat text-2xl dark:text-white">
              {prod.price} {to}
            </h1>
          </div>
          <Details
            product={prod}
            cart={cart}
            dispatch={globalDispatch}
            currency={to}
            language={language}
          />
        </section>
        <div className="max-w-[350px] md:max-w-xl lg:max-w-md xl:max-w-6xl p-6 md:p-6 xl:pl-32 2xl:pl-48 lg:p-20 mb- ">
          <div className="invisible lg:visible xl:visible 2xl:visible">
            <h1 className="text-4xl font-montserrat dark:text-white">
              {language === "eng" ? prod.nameEng : prod.nameGeo}
            </h1>
            <h1 className="my-4 text-2xl font-montserrat  dark:text-white">
              {prod.price} {to}
            </h1>
          </div>

          {/* <Inside /> */}
          <div className="-mt-40 lg:-mt-0 xl:-mt-0 2xl:-mt-0 ">
          {language === "eng" ? <InsideEng /> : <Inside />}
          </div>
        </div>
      </div>
      <div className="prod ">
        {/* <Footer /> */}
        {language === "eng" ? <Footer2 /> : <Footer />}
      </div>
    </section>
  );
};

export default ProductPage;
