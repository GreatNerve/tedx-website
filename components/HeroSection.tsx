import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col h-full lg:w-full w-[90%] mx-auto items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:text-[6.3rem] sm:text-[5rem] text-[3.7rem] text-center font-semibold leading-tight"
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
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-red-600 font-semibold border-red-600 rounded-full border-2 px-6 py-3 hover:bg-red-600 hover:text-white transition-all"
        >
          Register Now
        </motion.button>
      </div>
    </>
  );
};

export default HeroSection;
