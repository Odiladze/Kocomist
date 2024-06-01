import React from "react";
const path = require("path");
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";
import Navbar from "../components/navbar/navbarindex";
import Image from "next/image";
// import logo from "../../public/LOGO.jpg";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import shampoo from "../../public/Shampoo.png";
import { AiOutlineGithub } from "react-icons/ai";
import Footer from "../components/footer";
import prod from "../../public/Production2.png";
import giffy from "../../public/ezgiff.gif";
import eclipse from "../../public/Eclipse.png";
import Prod from "../../public/ProductionDesk.png";
import bigElipse from "../../public/Ellipse3.png";
import roundnround from "../../public/wave.svg";
import Carouselle from "../components/carouselle";
import { ImEarth } from "react-icons/im";
import Link from "next/link";

//describing why I made this app

const About = () => {
  return (
    <div className="about bg-gradient-to-tr from-white to-[white] dark:from-[#222222] dark:to-slate-900   content-center">
      <Navbar />
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
            href="/indexEng"
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
    <Link href="/about">პროდუქცია</Link>{" "}
  </button>
</div>
    

    <div className="message-box">
      <p className="message-text">
        ისარგებლეთ უფასო მიტანის სერვისით თბილისის მასშტაბით, მხოლოდ ახლა! 
      </p>
    </div>
  
       

      <section className="z-layout">
        <div className="zgrid">
          <div className="div1">
            <img
              src="https://i.postimg.cc/TY5QWLC5/252344.webp"
              className="zimg"
              alt="z1"
            />
          </div>
          <div className="ztxt">
            <h3>რას წარმოვადგენთ</h3>
            <p>
              ჩვენი კომპანიის სახელით, რომელიც ყიდის ბრიტანული წარმოების 
              პროდუქციას საქართველოში. გვაქვს იმის ბედნიერება, რომ შევთავაზოთ
              მომხმარებლებს სრულად ნატურალური და ქიმიური საშუალებებისგან
              თავისუფალი ჰიგიენური საშუალებები საქართველოში.{" "}
              <span className="zhidetxt">
                ბრენდის რეპუტაცია დგას მის მრავალწლიან ისტორიასა და სამეცნიერო
                დაკვირვებებზე
              </span>
            </p>
            {/* <button className="zbtn">Click me</button> */}
          </div>
          <div className="ztxt ztxt2">
            <h3>ჩვენი ხედვა</h3>
            <p>
              თითოეული ჩვენი ბრენდის მომხმარებელი არის ჩვენი პარტნიორი, 
              განსხვავებით სხვა კომპანიებისგან, ჩვენი კონცეფცია დგას ჩვენს კლიენტებთან
              თანამშრომლობაზე, თქვენთან თანამშრომლობა ჩვენთვის წარმოადგენს უდიდეს პატივს.
            </p>
            {/* <button className="zbtn">Click me</button> */}
          </div>
          <div className="div2">
            <img
              src="https://i.postimg.cc/cHLYTRVW/82h342525.jpg"
              alt="z2"
              className="zimg"
            />
          </div>
          <div className="ztxt  ztxthideforresp">
            <h3>ჩვენი ხედვა</h3>
            <p>
            თითოეული ჩვენი ბრენდის მომხმარებელი არის ჩვენი პარტნიორი, 
              განსხვავებით სხვა კომპანიებისგან, ჩვენი კონცეფცია დგას ჩვენს კლიენტებთან
              თანამშრომლობაზე, თქვენთან თანამშრომლობა ჩვენთვის წარმოადგენს უდიდეს პატივს.
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
          {/* <div className="mainBG  absolute " />
          <div className="text-white  text-3xl m-4    flex absolute  right-0">
           
          </div> */}
          {/* <h1 className="text-5xl dark:text-white font-fun mt-10  text-center relative text-white  ">
            ბუნებასთან <br></br> ახლოს
          </h1> */}

          {/* <div className="circle   h-auto sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[400px] 2xl:h-[400px] bg-wite rounded-full mt-8 ml-auto mr-auto border-black border-[1px]  relative">
            <a href="#">
              <img
                src="https://i.postimg.cc/B62LwdkP/22-online-video-cutter-com.gif"
                className="  overflow-hidden rounded-full w-max "
                alt=""
              />
            </a>
          </div> */}
          <div className=" paragraph -mt-4 relative z-0">
            {/* <Image
        className="a3Logo relative  "
        width={2000}
        height={2000}
        src={bigElipse}
        /> */}

            {/* <div className="backround border-2 border-red-700 w-screen h-screen"></div> */}
            {/* <Image src={roundnround} className=' -mt-60' /> */}
            {/* <div className="backround w-full h-screen -mt-14 md:-mt-24 lg:-mt-32 xl:-mt-24 2xl:-mt-[100px] z-10 ">
              <h1 className="text-5xl font-fun text-center text-black  ml-auto relative  pt-8  ">
                ჩვენს შესახებ
              </h1>
              <div className="image-wrapper w-screen flex justify-center p-5">
                <img
                  className="production2  mr-auto ml-auto w-3/5 xl:w-3/5 2xl:w-3/5  visible md:visible lg:visible xl:visible 2xl:visible"
                  alt=""
                  src="https://i.postimg.cc/kMHBmq0j/Untitled-2-removebg-preview-1.png"
                />
              </div>
              <p className="par p-4 md:px-12 xl:px-20  2xl:px-48 2xl: text-[15px] lg:text-[20px] xl:text[24px] 2xl:text-[24px] font-montserrat text-center md:text-center lg:text-center xl:text-center 2xl:text-center  sm:text-base  ">
                ჩვენი კომპანია გთავაზობთ ბრიტანული წარმოების უმაღლესი ხარისხის,
                100% ით ნატურალ პროდუქტს საქართველოში. პროდუქციის წარმოება
                დაფუძნებულია მრავალწლიან მეცნიერულ კვლევებზე, შესაბამისად ჩვენი
                კომპანიის წარმატების საიდუმლოც ეფუძნება ცოდნას და გამოცდილებას.
                ჩვენ გვაქვს ამბიცია, მომხმარებლამდე მივიტანოთ არა მხოლოდ
                პროდუქტი, არამედ ცოდნა პროდუქტის Შესახებ და დავნერგოთ მაღალი
                ხარისხის მომსახურება.
              </p>
            </div> */}
           
          </div>
       

         
        </section>
      </main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default About;
