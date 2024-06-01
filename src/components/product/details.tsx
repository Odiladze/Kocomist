import React from "react";
import { IProduct } from "../../types/types";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import RatingComponent from "../ratingComponent";
import { CART_ACTIONS } from "../../context/actions";

//Details component is used in single product page component
// here we display product information

const Details = (props: {
  product: IProduct;
  cart: IProduct[];
  language: string | string[] | undefined;
  dispatch: any;
  currency: string;
}) => {
  const { product, cart, dispatch, currency, language } = props;

  return (
    <section className="details animate-swipeDownAndGrow glass rounded-3xl p-6 2xl:h-auto mt-1 lg:mt-0 m-4 xl:w-full xl:ml-12 2xl:ml-12">
      <h4 className="delivery uppercase font-bold xl:text-md  2xl:text-xl text-black dark:text-white  mb-2">
        {product.category}
      </h4>

      <p className="description text-lg my-3 sm:my-4 2xl:my-8 text-black dark:text-white">
        {language === "eng" ? product.descriptionEng : product.descriptionGeo}
      </p>

      <div className="price">
        <div className="ratings block text-black font-bold mt-2 mb-8 text-3xl -ml-1 ">
          <RatingComponent productRating={product.ratings} />
        </div>
      </div>
    </section>
  );
};

export default Details;