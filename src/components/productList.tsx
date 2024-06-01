import React, { useContext, useEffect } from "react";
import ProductCard from "./productCard";
import { globalContext } from "../context/context";
import { IProduct } from "../types/types";

// with this component we are mapping every product available with productCard component
//but before we map we filter our components with filterState object

const ProductList = (props: { language: string }) => {
  const {
    globalState: { products, cart },
    globalDispatch,
    filterState: {
      search_query,
      min_price,
      max_price,
      by_order,
      include_out_of_stock,
      include_fast_delivery_only,
      by_ratings,
      change_category,
    },
  } = useContext(globalContext);

  const filterProducts = () => {
    let filteredProducts = products;

    if (search_query) {
      filteredProducts = filteredProducts.filter((product: IProduct) =>
        product.nameGeo.toLowerCase().includes(search_query)
      );
    }

    if (min_price && max_price) {
      filteredProducts = filteredProducts.filter(
        (product: IProduct) =>
          Number(product.price) > Number(min_price) &&
          Number(product.price) < Number(max_price)
      );
    }

    if (by_order) {
      filteredProducts.sort((prev: IProduct, curr: IProduct) =>
        by_order === "ascending"
          ? Number(prev.price) - Number(curr.price)
          : Number(curr.price) - Number(prev.price)
      );
    }

    if (!include_out_of_stock) {
      filteredProducts = filteredProducts.filter(
        (product: IProduct) => product.inStock > 0
      );
    }

    if (include_fast_delivery_only) {
      filteredProducts = filteredProducts.filter(
        (product: IProduct) => product.fastDelivery
      );
    }

    if (by_ratings) {
      filteredProducts = filteredProducts.filter(
        (product: IProduct) => product.ratings >= by_ratings
      );
    }

    if (change_category && change_category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product: IProduct) => product.category === change_category
      );
    }

    return filteredProducts;
  };

  return (
    <div className="productList inline-grid lg:gap-4 xl:gap-4 2xl:gap-8 gap-8 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-rows-auto min-h-screen ">
      {/* <ProductCard /> */}
      {filterProducts().map((product: IProduct) => {
        return (
          <ProductCard
            product={product}
            cart={cart}
            key={product.id}
            dispatch={globalDispatch}
            language={props.language}
          />
        );
      })}
    </div>
  );
};

export default ProductList;