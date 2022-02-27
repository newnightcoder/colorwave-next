import Link from "next/link";
import React from "react";
import { ChevronDoubleLeft, Trash } from "react-bootstrap-icons";
import { use100vh } from "react-div-100vh";
import { useSelector } from "react-redux";
import useWindowSize from "../hooks/useWindowSize";

const CartContainer = ({
  handleRemoveOne,
  handleAddToCart,
  handleDeleteItem,
  handleDeleteCart,
  formOpen,
}) => {
  const { height, width } = useWindowSize();
  const responsiveHeight = use100vh();
  const items = useSelector((state) => state?.cart.items);
  const itemsContainer = items.length !== 0 && document.querySelector(".items");

  // useEffect(() => {
  //   window.addEventListener("DOMContentloaded", () => {
  //     itemsContainer.classList.add("scrollbar-cart");
  //   });
  //   return () => {
  //     window.removeEventListener("DOMContentloaded");
  //   };
  // }, []);

  return (
    <div className="cart-container h-full w-full relative flex flex-col items-center justify-start md:items-end space-y-4 text-gray-900 bg-sound">
      {items.length === 0 ? (
        <div className="fixed z-50 inset-0 m-auto w-max flex flex-col items-center justify-center space-y-1">
          <h1 className="text-lg md:text-xl uppercase">
            YOUR CART IS EMPTY...
          </h1>
          <Link
            href="/shop"
            className="flex items-center justify-center space-x-1 text-blue-500 hover:underline hover:font-bold"
          >
            <a>
              <ChevronDoubleLeft size={12} />
              <span className="text-base uppercase">go back to the shop</span>
            </a>
          </Link>
        </div>
      ) : (
        <>
          <div
            style={{ height: width > 768 ? "8.33%" : "max-content" }}
            className="w-full max-w-4xl flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between space-y-2 md:space-x-0 pt-4 md:pt-0 pl-4 md:pl-10"
          >
            <div className="w-max relative md:hidden">
              <h2 className="text-center text-xl md:text-2xl uppercase px-3 md:px-6">
                Your cart
              </h2>
              <span className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-black"></span>
            </div>
            <Link
              href="/shop"
              className="flex items-center justify-center space-x-1 text-gray-900 hover:underline hover:font-bold group md:pl-6 md:pt-2"
            >
              <ChevronDoubleLeft size={12} />
              <span>Continue shopping</span>
            </Link>
            <button
              className="md:hidden w-max absolute right-5 flex items-center justify-center space-x-2 text-sm uppercase text-white bg-black px-3 py-1 shadow"
              onClick={handleDeleteCart}
            >
              <span className="whitespace-nowrap">delete cart</span>
              <Trash size={16} />
            </button>
          </div>
          <div
            style={{ height: width > 768 ? "83.33%" : responsiveHeight - 308 }}
            className="items-container relative  w-full flex flex-col justify-center items-center pb-8 md:pb-4 pt-4 md:pt-0"
          >
            <div className="items overflow-y-auto scrollbar-cart h-max w-11/12 md:w-full max-w-4xl flex flex-col items-center justify-start space-y-4 pt-2 pb-6">
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    animation: `750ms fadeInTop ${100 + i * 50}ms forwards`,
                  }}
                  className="item opacity-0 h-28 md:h-44 w-11/12 flex items-center justify-start space-x-1 md:space-x-6 pr-1 md:px-0 bg-white shadow"
                >
                  <div
                    className="h-full w-2/5 border-r border-gray-100"
                    style={{
                      backgroundColor: item.product.categories.find(
                        (x) => x.name === "limited"
                      )
                        ? "black"
                        : "white",
                    }}
                  >
                    <img
                      src={item.product.media.source}
                      alt={item.product.name}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="details h-full w-2/5 flex items-center justify-center space-x-2">
                    <div className="h-full w-full flex flex-col items-start justify-center space-y-1 md:space-y-2 pl-2 md:pl-1">
                      <div className="capitalize w-full whitespace-nowrap truncate">
                        {item.product.name}
                      </div>
                      <div>{item.product.price.formatted} €</div>
                      <div className="w-max flex items-center justify-center space-x-1">
                        <div className=" w-max flex items-center justify-between space-x-1">
                          <button
                            className="h-6 w-6 rounded-full flex items-center justify-center bg-yellow-300 text-black outline-none shadow-sm"
                            onClick={() => handleRemoveOne(item.product.id)}
                          >
                            <span className="text-lg">-</span>
                          </button>
                          <div className="w-6 text-center">{item.quantity}</div>
                          <button
                            className="h-6 w-6 rounded-full flex items-center justify-center bg-yellow-300 text-black outline-none shadow-sm"
                            onClick={() => handleAddToCart(item.product.id)}
                          >
                            <span className="text-lg">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-1/5 flex flex-col items-center justify-center md:pr-4">
                    <button
                      onClick={() => handleDeleteItem(item.product.id)}
                      className="h-10 w-10 rounded-full flex items-center justify-center bg-transparent transition-color duration-300 hover:bg-gray-300"
                    >
                      <Trash className="pointer-events-none" size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
