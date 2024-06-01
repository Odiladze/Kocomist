import React, { useContext } from "react";
import { globalContext } from "../context/context";

import { HiOutlineSearchCircle } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import RatingComponent from "./ratingComponent";
import { FILTER_ACTIONS } from "../context/actions";

// each of the little part of this component has its own comment for easy navigation
// filter component works by filterReducer hook(see in reducers folder)
//IMPORTANT NOTE: the filtering logic is in the productList component

const Filter2 = () => {
  const {
    filterState: { by_ratings, by_order, search_query, min_price, max_price },
    filterDispatch,
  } = useContext(globalContext);

  return (
    <div className="glass xl:static my-0 p-4 xl:m-4  xl:p-4 mr-auto ml-auto  mt-4 lg:ml-0 lg:mt-8 xl:mt-8 rounded-2xl text-black text-base xl:inline-flex xl:justify-center xl:items-center 2xl:items-center border-black border-2 shadow-slate-400 dark:shadow-none  ">
      <form
        action="filter"
        className="flex lg:w-auto  flex-col  xl:items-center justify-evenly "
      >
        {/* searchbar */}
        <input
          name="search"
          type="text"
          value={search_query}
          className="search border-black glass px-4 py-2 xl:pl-4 2xl:py-2 2xl:pl-4 sm:pr-2 md:pr-6 xl:pr-8 placeholder:text-black rounded-xl "
          placeholder="Search Product..."
          onChange={(e) =>
            filterDispatch({
              type: FILTER_ACTIONS.SEARCH_BY_QUERY,
              payload: e.target.value,
            })
          }
        />
        {/* filter by category */}

        <div className="dropdown glass relative inline-block border-2 border-black px-4 py-2 m-4 rounded-xl">
          <div className="dropbtn">Categories</div>
          <div className="dropdown-content hidden glass glass text-black absolute  bg-white dark:bg-slate-800 dark:text-white rounded-xl  max-h-64 overflow-y-auto overflow-x-hidden border-black">
            <span
              className="option block hover:bg-zinc-100/25 hover:rounded-md  text-black dark:text-white  px-4 py-3 "
              onClick={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.CHANGE_CATEGORY,
                  payload: "all",
                })
              }
            >
              All
            </span>

            <span
              className="option block hover:bg-zinc-100/25 hover:rounded-md cursor-pointer text-black dark:text-white px-4 py-3 "
              onClick={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.CHANGE_CATEGORY,
                  payload: "Shampoo",
                })
              }
            >
              Shampoo
            </span>

            <span
              className="option block hover:bg-zinc-100/25 hover:rounded-md cursor-pointer text-black dark:text-white px-4 py-3 "
              onClick={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.CHANGE_CATEGORY,
                  payload: "Balsam",
                })
              }
            >
              Balsam
            </span>

            <span
              className="option block hover:bg-zinc-100/25 hover:rounded-md cursor-pointer text-black dark:text-white px-4 py-3 "
              onClick={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.CHANGE_CATEGORY,
                  payload: "Oil",
                })
              }
            >
              Oil
            </span>

            <span
              className="option block hover:bg-zinc-100/25 hover:rounded-md cursor-pointer text-black dark:text-white px-4 py-3 "
              onClick={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.CHANGE_CATEGORY,
                  payload: "Powder",
                })
              }
            >
              Powder
            </span>

            <span
              className="option block hover:bg-zinc-100/25 hover:rounded-md  cursor-pointer text-black dark:text-white px-4 py-3 "
              onClick={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.CHANGE_CATEGORY,
                  payload: "Tea",
                })
              }
            >
              Tea
            </span>

            <span
              className="option block hover:bg-zinc-100/25 hover:rounded-md cursor-pointer text-black dark:text-white px-4 py-3 "
              onClick={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.CHANGE_CATEGORY,
                  payload: "Supplement",
                })
              }
            >
              Supplement
            </span>

            <span
              className="option block hover:bg-zinc-100/25 hover:rounded-md cursor-pointer text-black dark:text-white px-4 py-3 "
              onClick={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.CHANGE_CATEGORY,
                  payload: "Specials",
                })
              }
            >
              Specials
            </span>
          </div>
        </div>
        {/* price selectors */}

        {/* price order: ascending or descending */}
        <div className="ml-4 inline font-bold      2xl:inline ">
          <label htmlFor="desc" className="lg:ml-1 xl:ml-1 ">
            Ascending
            <input
              type="radio"
              name="desc"
              className="mx-1 "
              checked={by_order === "ascending" ? true : false}
              onChange={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.SORT_BY_PRICE,
                  payload: "ascending",
                })
              }
            />
          </label>
          <label className="mt-2" htmlFor="desc">
            Descending
            <input
              type="radio"
              name="desc"
              className="mr-1"
              checked={by_order === "descending" ? true : false}
              onChange={() =>
                filterDispatch({
                  type: FILTER_ACTIONS.SORT_BY_PRICE,
                  payload: "descending",
                })
              }
            />
          </label>
        </div>
        {/* filter by stock */}

        {/* filter by ratings */}
        <div className="rating text-center  mt-4 md:text-4xl text-4xl  ">
          <RatingComponent
            productRating={by_ratings}
            dispatch={filterDispatch}
          />
        </div>
        <div className="priceFilter my-1 xl:my-0">
          <label
            htmlFor="price"
            className="xl:ml-4 font-bold justify-evenly xl:hidden 2xl:inline"
          ></label>
          <input
            name="price"
            type="text"
            className="glass  w-24 sm:mx-0  right-0 p-2 border-black placeholder:text-black 2xl:-ml-4 text-center m-4 rounded-xl"
            placeholder="MIN"
            value={min_price === "0" ? "" : min_price}
            onChange={(e) =>
              filterDispatch({
                type: FILTER_ACTIONS.REMOVE_PRICES_BELOW,
                payload: e.target.value,
              })
            }
          />
          <input
            name="price"
            type="text"
            className="glass border-black  w-24 my-4  py-2  placeholder:text-black text-center ml-  sm:ml-10 2xl:ml-10 rounded-xl "
            placeholder="MAX"
            value={max_price === "999999999" ? "" : max_price}
            onChange={(e) =>
              filterDispatch({
                type: FILTER_ACTIONS.REMOVE_PRICES_UPPER,
                payload: e.target.value,
              })
            }
          />
        </div>

        {/* clear filter */}
        <div
          className="search glass  border-black w-full py-2  placeholder:text-pink-100 xl:mx-4 text-center rounded-xl"
          onClick={() => filterDispatch({ type: FILTER_ACTIONS.CLEAR_FILTER })}
        >
          <GrPowerReset size={20} className="inline mx-1 mb-0.5" />
          Reset
        </div>
      </form>
    </div>
  );
};

export default Filter2;
