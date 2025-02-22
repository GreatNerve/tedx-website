"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative  h-screen w-full">
        <video
          src="/hourglass-3.mp4"
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>

        <nav
          className={cn(
            `sticky top-0 px-16 py-7 transition-all left-0 flex items-center justify-between`,
            scrolled && "bg-gray-900 rounded-md top-3 px-7 mx-10 glass-morph"
          )}
        >
          <h1 className="text-2xl font-bold text-red-600">TEDxNSUT</h1>
          <ul className="flex items-center justify-between gap-6">
            {[
              "Home",
              "About Us",
              "Previous Events",
              "Upcoming Speakers",
              "Contact Us",
            ].map((item, ind) => (
              <li key={ind}>
                <a
                  href="#"
                  className="font-semibold text-[18px] hover:text-red-600 transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col h-full items-center justify-center">
          <h1 className="text-[5rem] font-semibold leading-tight">
            Shifting Perspectives
          </h1>
          <h3 className="text-lg font-medium mb-8 mt-5">
            This year, TEDxNSUT explores how failure and success shape our
            journey.
          </h3>
          <button className="text-red-600 font-semibold border-red-600 rounded-full border-2 px-6 py-3">
            Register now
          </button>
        </div>
      </div>
      <div className="bg-black w-full px-16 py-7">
        <div className="flex items-start mt-7 justify-between gap-3">
          <h1 className="text-[5rem] font-semibold flex-1">What is Tedx?</h1>
          <p className="flex-1 pt-5 font-medium text-lg leading-8">
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience. Our event is
            called TEDxNSUT, where x = independently organized TED event. At our
            TEDxNSUT event, TED Talks video and live speakers will combine to
            spark deep discussion and connection in a small group. The TED
            Conference provides general guidance for the TEDx program, but
            individual TEDx events, including ours, are self-organized.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
