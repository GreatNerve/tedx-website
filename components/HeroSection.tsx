import { motion } from "framer-motion";
import React from "react";
import Countdown from "react-countdown";

const HeroSection = () => {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div className="flex items-center gap-3 mb-4">
        <span className="flex flex-col items-center justify-center bg-gray-900 sm:w-[100px] sm:h-[100px] w-[80px] h-[80px] rounded-md">
          <span className="text-3xl mb-2 font-semibold">{days}</span>
          <span className="text-sm">Days</span>
        </span>
        <span className="flex flex-col items-center justify-center bg-gray-900 sm:w-[100px] sm:h-[100px] w-[80px] h-[80px] rounded-md">
          <span className="text-3xl mb-2 font-semibold">{hours}</span>
          <span className="text-sm">Hours</span>
        </span>
        <span className="flex flex-col items-center justify-center bg-gray-900 sm:w-[100px] sm:h-[100px] w-[80px] h-[80px] rounded-md">
          <span className="text-3xl mb-2 font-semibold">{minutes}</span>
          <span className="text-sm">Minutes</span>
        </span>
        <span className="flex flex-col items-center justify-center bg-gray-900 sm:w-[100px] sm:h-[100px] w-[80px] h-[80px] rounded-md">
          <span className="text-3xl mb-2 font-semibold">{seconds}</span>
          <span className="text-sm">Seconds</span>
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col h-full lg:w-full w-[90%] mx-auto items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:text-[6.3rem] sm:text-[5.8rem] text-[3.7rem] text-center font-semibold leading-tight"
        >
          Shifting Perspectives
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:text-xl text-lg text-center font-medium mb-8 mt-5"
        >
          Redefining failure, reimagining success - Join us on a journey of
          transformation at TEDxNSUT.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Countdown
            date={new Date("2025-02-28 00:00:00")}
            renderer={renderer}
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          // className="text-red-600 font-semibold border-red-600 rounded-full border-2 px-5 py-2.5 hover:bg-red-600 hover:text-white transition-all"
          className="relative overflow-hidden text-white font-semibold bg-red-600 rounded-full  px-5 py-2.5 hover:text-red-600 group"
        >
          <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10">Register Now</span>
        </motion.button>
      </div>
    </>
  );
};

export default HeroSection;
