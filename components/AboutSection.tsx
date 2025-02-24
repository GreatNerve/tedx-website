import { motion } from "framer-motion";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <div
        id="about"
        // className="relative bg-black w-full -z-30 md:px-16 px-7 py-7"
        className="mb-16"
      >
        <div className="lg:w-[50%] md:w-[80%] w-[95%] mx-auto mt-0 gap-3 mb-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            
            className="lg:text-[5rem] md:text-[5rem] text-[3.7rem] mb-2 uppercase text-center font-bold flex-2"
          >
            About Us
          </motion.h1>
          <div className="relative flex justify-center items-center">
            {/* <div className="absolute -top-2 -left-2 w-[102%] h-[105%] card-shadow blur  opacity-75 rounded-xl"></div> */}
            <div className="bg-[#1e1e20] about-card z-20 rounded-xl flex-1  py-5 mx-auto font-medium sm:text-xl text-lg px-5 leading-8 md:p-8 text-justify">
              TED, short for Technology, Entertainment, and Design, is a non-
              profit organization promoting ideas worth sharing. Initially
              launched as a four-day conference in California three decades ago,
              it has since expanded through various initiatives, including the
              TED Prize, which supports visionary individuals in turning their
              ideas into action; TEDx, which enables independently organized
              TED-style events worldwide; and the TED Fellows Program, which
              empowers global innovators to amplify their impact.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
