import React from "react";
import logo from "../../public/Koco.png";
import Image from "next/image";

interface props {
  onClick?: () => void;
  href?: string;
}

//logo component of the app for many future use

const Logo = React.forwardRef(({ onClick, href }: props, ref: any) => {
  return (
    <div className="name font-sarina block cursor-pointer text-neutral-600 hover:text-orange-600  text-4xl mt-2 ">
      <a href={href} onClick={onClick}>
        <div className="image-container  w-[300px] md:w-[200px] md:mt-12  flex ">
          
          
          <img src="https://i.postimg.cc/3JDVfG9t/Koco.png" className="light-mode" alt="Light mode image" />



          
        </div>
      </a>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
