import React from "react";
import {AiOutlineInstagram}  from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { FaFacebookSquare} from "react-icons/fa"

export default function InsideEng(){
    return(
        
        
          <div className="payment-details">
          <h1 className="pay font-montserrat sm:text-lg lg:text-xl font-semibold dark:text-slate-50 sm:mb-2 2xl:text-3xl ">PAYMENT</h1>
          <div className="icons flex  my-4 ">
           <span className="dark:text-white text-[40px] mr-1 mt-1 ">
            <a href="https://www.facebook.com/profile.php?id=100090746907327"><FaFacebookSquare /></a>
          </span>
          <span className="dark:text-white text-5xl mx-2 ">
            <a href="https://www.instagram.com/kocomist/"><AiOutlineInstagram /></a>
          </span> 
          <span className="dark:text-white text-[40px] ml-1 mt-1 "><a href="tel:123456789"><AiOutlineWhatsApp /></a>
            
          </span> 
          </div>
          
          
          <p className=" font-montserrat sm:text-xs lg:text-base text-black dark:text-slate-50 sm:mb-2 2xl:text-xl font-bold">In order to purchase the product, get in touch with our operator by clicking on(facebook, instagram, WhatsApp) icons </p>
          <p className="font-montserrat  sm:text-xs lg:text-base text-black dark:text-slate-50 sm:mb-2 2xl:text-xl font-bold">Payment will be done by transferring money to the company’s account number </p>
          <div className="icons flex flex-row">
           
          </div>
          <h1 className="pay font-montserrat sm:text-lg lg:text-xl font-semibold dark:text-slate-50 sm:mb-2 mt-6 2xl:text-3xl">Delivery throughout Tbilisi</h1>
          <ul>
            <li className="list-disc sm:text-xs ml-5 lg:text-base 2xl:text-xl text-black dark:text-slate-300	">The cost of delivery is <span className="font-semibold">free in Tbilisi</span></li>
            <li className="list-disc sm:text-xs ml-5 lg:text-base 2xl:text-xl text-black dark:text-slate-300">Delivery service is available from Monday to Friday 11:00 – 20:00</li>
            <li className="list-disc sm:text-xs ml-5 lg:text-base 2xl:text-xl text-black dark:text-slate-300">Delivery is made withing 2 days after order placement</li>
          </ul>
          <h1 className="pay font-montserrat sm:text-lg lg:text-xl font-semibold dark:text-slate-50 sm:mb-6 mt-6 2xl:text-3xl ">Delivery throughout Georgia</h1>
          <ul>
            <li className="list-disc sm:text-xs ml-5 lg:text-base 2xl:text-xl text-black dark:text-slate-300	">
            Product delivery throughout Georgia is carried out by Georgian Post. On the second working day after
            the order is placed, the order is transferred to the Georgian post office, the average transportation time
            of which is 2-3 working days. To receive the product, you shall go to the relevant branch of the Post of
            Georgia. You pay the shipping cost based on the weight of the package while taking it.
            </li>
          </ul>
          </div>  


    )
}