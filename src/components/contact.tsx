import React from "react";

export default function Info(){
    return(
        <div>
        <div className="info flex-col sm:max-w-xs md:max-w-xl lg:max-w-lg absolute  lg:right-4 sm:ml-8 xl:mr-24 md:-mt-40 lg:mt-64 xl:mt-48 2xl:mt-52 mb-24 p-6">
          <h1 className="pay font-montserrat sm:text-lg lg:text-xl font-semibold dark:text-slate-50 sm:mb-2 2xl:text-3xl ">PAYMENT</h1>
          <p className=" font-montserrat sm:text-xs lg:text-base text-black dark:text-slate-50 sm:mb-2 2xl:text-xl">In order to purchase the product, get in touch with our operator by going through the links below or by phone call</p>
          <p className="font-montserrat  sm:text-xs lg:text-base text-gray-600 dark:text-slate-50 sm:mb-2 2xl:text-xl">Payment will be done by transferring money to the company’s account number </p>
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
        </div>
    )
}