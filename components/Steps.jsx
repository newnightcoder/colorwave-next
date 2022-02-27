import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useWindowSize from "../hooks/useWindowSize";

const Steps = ({ formOpen, formValidated }) => {
  const { height, width } = useWindowSize();
  const router = useRouter();
  const confirmationSuccess = useSelector(
    (state) => state.cart.confirmationSuccess
  );
  const items = useSelector((state) => state?.cart.items);
  const [dotColor1, setDotColor1] = useState("rgb(100,100,100)");
  const [textColor1, setTextColor1] = useState("rgb(100,100,100)");
  const [borderColor1, setBorderColor1] = useState("rgb(100,100,100)");
  const [dotColor2, setDotColor2] = useState("rgb(100,100,100)");
  const [textColor2, setTextColor2] = useState("rgb(100,100,100)");
  const [borderColor2, setBorderColor2] = useState("rgb(100,100,100)");
  const [dotColor3, setDotColor3] = useState("rgb(100,100,100)");
  const [textColor3, setTextColor3] = useState("rgb(100,100,100)");
  const [borderColor3, setBorderColor3] = useState("rgb(100,100,100)");

  const delayStyle = () => {
    if (router.pathname.includes("success")) {
      setDotColor1("rgb(253 224 71)");
      setTextColor1("white");
      setBorderColor1("rgb(253 224 71)");
      setDotColor2("rgb(253 224 71)");
      setTextColor2("white");
      setBorderColor2("rgb(253 224 71)");
      setTimeout(() => {
        setDotColor3("white");
        setTextColor3("rgb(253 224 71)");
        setBorderColor3("white");
      }, 300);
    }
    if (formValidated) {
      return setTimeout(() => {
        setDotColor2("rgb(253 224 71)");
        setTextColor2("white");
        setBorderColor2("rgb(253 224 71)");
      }, 700);
    }
    if (formOpen) {
      return setTimeout(() => {
        setDotColor1("rgb(253 224 71)");
        setTextColor1("white");
        setBorderColor1("rgb(253 224 71)");
      }, 700);
    }
  };

  useEffect(() => {
    delayStyle();
  }, [formOpen, formValidated, confirmationSuccess]);

  const stepStyle = {
    transform: {
      step1: {
        transition: formOpen && "transform 700ms",
        transform:
          formOpen || router.pathname.includes("success")
            ? "scale(1, 1)"
            : "scale(0, 1)",
      },
      step2: {
        transition: formValidated && "transform 700ms",
        transform:
          formValidated || router.pathname.includes("success")
            ? "scale(1, 1)"
            : "scale(0, 1)",
      },
      step3: {
        transform: confirmationSuccess ? "scale(1, 1)" : "scale(0, 1)",
      },
    },
    textColor: {
      step0: {
        color: "white",
        border: `2px solid rgb(253 224 71)`,
      },
      step1: {
        color: textColor1,
        border: `2px solid ${borderColor1}`,
      },
      step2: {
        color: textColor2,
        border: `2px solid ${borderColor2}`,
      },
      step3: {
        color: textColor3,
        border: `2px solid ${borderColor3}`,
      },
    },
    dot: {
      step0: { backgroundColor: "rgb(253 224 71)" },
      step1: { backgroundColor: dotColor1 },
      step2: { backgroundColor: dotColor2 },
      step3: { backgroundColor: dotColor3 },
    },
  };

  return (
    <div className="hidden h-24 w-screen fixed top-0 md:flex items-center justify-center bg-black z-50 shadow border-b-8 border-yellow-300">
      <div className="h-full w-10/12 flex items-center justify-center space-x-2">
        <Link href="/" className="w-max group">
          <a>
            <div className="relative">
              <span
                className="block absolute -inset-1 transform transition-all duration-300 -skew-y-6 bg-white group-hover:skew-y-3 group-hover:bg-yellow-300"
                aria-hidden="true"
              ></span>
              <h1 className="relative text-lg transition-color duration-300 text-black group-hover:text-white px-1">
                COLORWAVE
              </h1>
            </div>
          </a>
        </Link>
        <div className="h-full w-full flex items-end justify-center pb-2 px-8">
          <div className="py-2 w-1/4 flex justify-center items-center relative group">
            <div
              style={stepStyle.textColor.step0}
              className="uppercase rounded py-1 px-2 absolute top-0 left-0 transform -translate-y-full -translate-x-1/2"
            >
              my cart
            </div>
            <div
              style={stepStyle.dot.step0}
              className="h-2 w-2 rounded-full bg-white"
            ></div>
            <div className="w-full h-px bg-gray-800 relative ">
              <div
                style={stepStyle.transform.step1}
                className="absolute left-0 w-full h-full bg-white origin-left"
              ></div>
            </div>
          </div>
          <div className="py-2 w-1/4 flex justify-center items-center relative group">
            <div
              style={stepStyle.textColor.step1}
              className="uppercase rounded py-1 px-2 absolute top-0 left-0 transform -translate-y-full -translate-x-1/2"
            >
              delivery
            </div>
            <div
              style={stepStyle.dot.step1}
              className="h-2 w-2 rounded-full bg-white"
            ></div>
            <div className="w-full h-px bg-gray-800 relative ">
              <div
                style={stepStyle.transform.step2}
                className="absolute left-0 w-full h-full bg-white origin-left"
              ></div>
            </div>
          </div>
          <div className="py-2 w-1/4 flex justify-center items-center relative group">
            <div
              style={stepStyle.textColor.step2}
              className="uppercase rounded py-1 px-2 absolute top-0 left-0 transform -translate-y-full -translate-x-1/2"
            >
              payment
            </div>
            <div
              style={stepStyle.dot.step2}
              className="h-2 w-2 rounded-full bg-white"
            ></div>
            <div className="w-full h-px bg-gray-800 relative ">
              <div
                style={stepStyle.transform.step3}
                className="absolute left-0 w-full h-full bg-white transition-transform duration-300 origin-left"
              ></div>
            </div>
          </div>
          <div className="py-2 w-min flex justify-start items-center relative group">
            <div
              style={stepStyle.textColor.step3}
              className="uppercase rounded py-1 px-2 absolute top-0 left-0 transform -translate-y-full -translate-x-1/2"
            >
              ready!
            </div>
            <div
              style={stepStyle.dot.step3}
              className="h-2 w-2 rounded-full bg-white"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
