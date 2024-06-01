import React, { useContext, useEffect } from "react";
// import logo from "../public/LOGO.jpg";
import testImg from "../public/testImage.jpg";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineRemove } from "react-icons/md";
import { CART_ACTIONS } from "../context/actions";
import { IProduct, GlobalAction } from "../types/types";
import RatingComponent from "./ratingComponent";
import { FiPackage } from "react-icons/fi";
import Link from "next/link";
import logo from "../../public/LOGO.jpg";
import { globalContext } from "../context/context";
import getImageUrl from "next/image";
//  import imgg from "./../../public/imagesForTesting/image.jpg"

//we use this component on the main page of the app, here we are rendering product data as you might have guessed

const ProductCard = (props: {
  product: IProduct;
  cart: IProduct[];
  language: string | string[] | undefined;
  dispatch: React.Dispatch<GlobalAction>;
}) => {
  const { product, cart, dispatch, language } = props;

  const imageLoader = () => {
    return product.images[0];
  };

  // const OptimizedImageUrl = getImageUrl(product.images[0])

  const { currencyData } = useContext(globalContext);

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <article className="productCard animate-swipeDownAndGrow relative glass lg:w-48 lg:h-72 w-64 h-96 xl:w-56 xl:h-80 xl:h 2xl:w-72 2xl:h-96  rounded-2xl overflow-hidden bg-gray-300 dark:bg-[#201E20] dark:text-slate-300 dark:hover:bg-stone-700/50 hover:bg-white/50 transition-all">
      {/* {{ pathname: '/posts', query: { id: '123', title: 'hello' } }} */}
      <Link
        href={{
          pathname: `/product/${product.id}`,
          query: { lang: language },
        }}
        passHref
      >
        <div className="imgWrap absolute -left-16 -top-24 rounded-xl cursor-pointer">
          <Image
            loader={imageLoader}
            src={logo}
            className=" rounded-full"
            width={"350px"}
            height={"350px"}
            alt={product.nameGeo}
          />
        </div>
      </Link>
      <footer className="productDetails absolute bottom-0 w-full p-4 cursor-pointer">
        <Link
          href={{
            pathname: `/product/${product.id}`,
            query: { lang: language },
          }}
          passHref
        >
          <div className="linkWrapper">
            <section className="productName m-2 font-bold text-sm">
              {language === "eng" ? product.nameEng : product.nameGeo}
            </section>
            <section className="productPrice mx-2 font-bold">
              {product.price} {currencyData.to}
            </section>
            <section className="options flex justify-between mx-2 md:mx-2 lg:mx-2 xl:mx-0">
              <RatingComponent productRating={product.ratings} />
              <div className="fastDeliveryLogo flex font-montserrat">
                {product.category}
              </div>
            </section>
          </div>
        </Link>
      </footer>
    </article>
  );
};

export default ProductCard;
