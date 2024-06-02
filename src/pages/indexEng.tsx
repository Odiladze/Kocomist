import React from "react";
const path = require("path");
//import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";
//import Navbar from "../components/navbar/navbarindex";

import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenuEng";
import NavbarEng from "../components/navbar/navbarindexEng";

import Image from "next/image";
// import logo from "../../public/LOGO.jpg";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import shampoo from "../../public/Shampoo.png";
import { AiOutlineGithub } from "react-icons/ai";
import Footer2 from "../components/footer2";
import prod from "../../public/Production2.png";
import eclipse from "../../public/Eclipse.png";
import Prod from "../../public/ProductionDesk.png";
import bigElipse from "../../public/Ellipse3.png";
import roundnround from "../../public/wave.svg";
import Carouselle from "../components/carouselleEng";
import { ImEarth } from "react-icons/im";
import Link from "next/link";

//describing why I made this app

const About = () => {
  return (
    <div className="about bg-gradient-to-tr from-white to-[white] dark:from-[#222222] dark:to-slate-900   content-center">
      <NavbarEng />
      <HamburgerMenu />
      <section className="gifsection">
        <div>
          <img
            src="https://i.postimg.cc/fTx12YHm/ezgif-com-crop-1-3.gif"
            alt="gif"
            className="endlessgif"
          />
        </div>
        <div className="ggearth">
          <Link
            href="/"
            className="text-white  text-3xl m-4  flex   right-0 "
            passHref
          >
            <ImEarth />
          </Link>
        </div>
      </section>
      <section className="adv">
        <p>
          PARABEN FREE - SULFATE FREE - PHTHALATE FREE - FREE OF MINERAL OILS -
          FREE OF GMOS - CRUELTY-FREE - CARBON NEUTRAL{" "}
        </p>
      </section>
      <Carouselle /> {/* Carousel component */}
      <div className="flex justify-center items-center ">
        <button className="rounded-none bg-[#333333] mt-7 mb-7 py-6 w-44 text-white text-base">
          <Link href="/about">See All</Link>{" "}
        </button>
      </div>
      <div className="message-box">
        <p className="message-text">
          Free Delivery Service While Ordering In Tbilisi, Right Now!
        </p>
      </div>
      <section className="z-layout">
        <div className="zgrid">
          <div className="div1">
            <img
              src="https://i.postimg.cc/TY5QWLC5/252344.webp"
              alt="z1"
              className="zimg"
            />
          </div>
          <div className="ztxt">
            <h3>Who Are We</h3>
            <p>
              Our company offers the highest quality, 100% natural products of
              British production in Georgia. Production is based on years of
              scientific research, therefore the secret of our company&#39;s
              success is based on knowledge and experience. We have an ambition
              to bring not only the product to the customer, but also the
              knowledge about the product and introduce high quality service.
            </p>
          </div>
          <div className="ztxt ztxt2">
            <h3>Our Vision</h3>
            <p>
              At the heart of every entrepreneurial endeavor lies a profound
              understanding: that customers are not mere consumers, but rather
              discerning connoisseurs seeking an experience that transcends the
              transactional. Their discernment, preferences, and feedback are
              akin to the oracles wisdom, guiding the evolution of a business
              towards higher planes of refinement.
            </p>
          </div>
          <div className="div2">
            <img
              src="https://i.postimg.cc/cHLYTRVW/82h342525.jpg"
              alt="z2"
              className="zimg"
            />
          </div>
          <div className="ztxt  ztxthideforresp">
            <h3>Our Vision</h3>
            <p>
              At the heart of every entrepreneurial endeavor lies a profound
              understanding: that customers are not mere consumers, but rather
              discerning connoisseurs seeking an experience that transcends the
              transactional. Their discernment, preferences, and feedback are
              akin to the oracles wisdom, guiding the evolution of a business
              towards higher planes of refinement.
            </p>
            {/* <button className="zbtn">Click me</button> */}
          </div>
        </div>
      </section>
      {/* <section className="imgandprod">
        <button
          className="imgandprodbut"
          onClick={() => window.open("product.html")}
        >
          <a href="product.html" target="_blank">
            Products
          </a>
        </button>
      </section> */}
      <main className="main justify-center items-center  2xl:text-2xl flex flex-col">
        <section className=" shamp w-full ">
          <div className=" paragraph -mt-4 relative z-0"></div>
        </section>
      </main>
      <div className="">
        <Footer2 />
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenuEng";
// import NavbarEng from "../components/navbar/navbarindexEng";
// import Image from "next/image";
// import logo from "../../public/LOGO.jpg";
// import { FaReact } from "react-icons/fa";
// import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
// import shampoo from "../../public/Shampoo.png";
// import { AiOutlineGithub } from "react-icons/ai";
// import Footer2 from "../components/footer2";
// import prod from "../../public/Production2.png";
// import eclipse from "../../public/Eclipse.png";
// import Prod from "../../public/ProductionDesk.png";
// import bigElipse from "../../public/Ellipse3.png";
// import roundnround from "../../public/wave.svg";
// import Carouselle from "../components/carouselleEng";
// import { ImEarth } from "react-icons/im";
// import Link from "next/link";
// //describing why I made this app

// const About = () => {
//   return (
//     <div className="about bg-gradient-to-tr from-white to-[#f5f5f5] dark:from-[#222222] dark:to-slate-900   content-center">
//       <NavbarEng />
//       <HamburgerMenu />

//       <main className="main justify-center items-center  2xl:text-2xl flex flex-col">
//         <section className="shamp w-full ">
//           <div className="mainBG  absolute " />
//           <div className="text-white  text-3xl m-4    flex absolute  right-0 z-0">
//             <Link
//               href="/"
//               className="text-white  text-3xl m-4  flex absolute  right-0"
//               passHref
//             >
//               <ImEarth />
//             </Link>
//           </div>
//           <h1 className="text-5xl dark:text-white font-fun mt-10  text-center relative text-white  ">
//             Close to <br></br> Nature
//           </h1>

//           <div className="circle   h-auto sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[400px] 2xl:h-[400px] bg-black rounded-full mt-8 ml-auto mr-auto border-black border-[1px]  relative">
//             <a href="#">
//               <img
//                 src="https://i.postimg.cc/B62LwdkP/22-online-video-cutter-com.gif"
//                 className="  overflow-hidden rounded-full w-max  "
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="paragraph -mt-4 relative z-0">
//             {/* <Image
//         className="a3Logo relative  "
//         width={2000}
//         height={2000}
//         src={bigElipse}
//         /> */}

//             {/* <div className="backround border-2 border-red-700 w-screen h-screen"></div> */}
//             {/* <Image src={roundnround} className=' -mt-60' /> */}
//             <div className="backround w-full h-screen -mt-14 md:-mt-24 lg:-mt-32 xl:-mt-24 2xl:-mt-[100px] z-10">
//               <h1 className="text-5xl font-fun text-center text-black  ml-auto relative  pt-8  ">
//                 About Us
//               </h1>
//               <div className="image-wrapper w-screen flex justify-center p-5">
//                 <img
//                   className="production2  mr-auto ml-auto w-2/5 xl:w-2/5 2xl:w-2/5  sm:collapse md:visible lg:visible xl:visible 2xl:visible"
//                   alt=""
//                   src="https://i.postimg.cc/kMHBmq0j/Untitled-2-removebg-preview-1.png"
//                 />
//               </div>
//               <p className="par p-4 md:px-12 xl:px-20  2xl:px-48 2xl: text-[13px] lg:text-[16px] xl:text[20px] 2xl:text-[20px] font-montserrat text-center md:text-center lg:text-center xl:text-center 2xl:text-center  sm:text-base  ">
//                 Our company offers the highest quality, 100% natural products of
//                 British production in Georgia. Production is based on years of
//                 scientific research, therefore the secret of our company&#39;s
//                 success is based on knowledge and experience. We have an
//                 ambition to bring not only the product to the customer, but also
//                 the knowledge about the product and introduce high quality
//                 service.
//               </p>
//             </div>
//             <div className="allProdWrapper  h-[400px] lg:h-[450px] xl:h-[500px]  flex justify-center items-center text-white text-center font-montserrat ">
//               <div className="Textcontents flex flex-col items-center">
//                 <h1 className=" text-xl">Take a look at our Catalog</h1>
//                 <button className=" border-2 border-slate-200 p-2 w-32 mt-6 2xl:w-48 2xl:py-4">
//                   <Link href="/aboutEng">Products</Link>{" "}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="text-[28px] md:text-[40px] text-black font-fun dark:text-white text-center md:mt-8 -mb-14 md:mb-8 ">
//             Popular Procudts
//           </div>
//           <Carouselle />
//         </section>
//       </main>
//       <div className="">
//         <Footer2 />
//       </div>
//     </div>
//   );
// };

// export default About;
