import React, { useState, useContext, useEffect } from "react";
// import Image from "next/image";
// import { globalContext, Product } from "../../context/context";
import logo from "../../../public/LOGO.jpg";
import image from "../../public/imagesForTesting/image.jpg";
import image1 from "../../public/imagesForTesting/image1.jpg";
import image2 from "../../public/imagesForTesting/image2.jpg";
import image3 from "../../public/imagesForTesting/image3.jpg";
import Image from "next/image";

//also used in single product page component
//here we use useState to create array with 5 elements and then populate it with images from productImages

const Gallery = (props: { productImages: string[] }) => {
  const { productImages } = props;

  const [images, setImages] = useState([...Array(5)]);
  const [selectedImg, setSelectedImg] = useState("");

  const loadImage = (image: string): string => {
    return image;
  };

  useEffect(() => {
    if (!images) return;
    setImages(productImages);
  }, [images, productImages]);

  return (
    <section className="gallery animate-swipeDownAndGrow xl:mt-16  lg:mr-24  m-4">
      <div className="currentImage flex justify-center  border-slate-900 lg:ml-10 xl:ml-10 2xl:ml-10 rounded-[18px]">
        {/* <Image src={image} className="GenImage rounded-2xl" alt="rame" /> */}
        <Image
          src={logo}
          loader={() => loadImage(selectedImg ? selectedImg : images[0])}
          alt="1"
          className="GenImage rounded-2xl "
        />
        {/* {product.images[0]} */}
      </div>
      <div className="options flex items-center justify-between mt-8 gap-3 lg:ml-10 xl:ml-10 2xl:ml-10">
        {images.map((image, idx) => (
          <Image
            src={logo}
            loader={() => loadImage(image)}
            alt="image"
            className=" h-20 w-20  rounded-xl hover:cursor-pointer"
            key={idx}
            onClick={() => setSelectedImg(image)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
