"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { navData, tsParticleOptions } from "@/lib/constants";
import Link from "next/link";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [init, setInit] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "previous-events",
      "upcoming-speakers",
      "contact",
    ];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => tsParticleOptions, []);

  return (
    <>
      <div id="home" className="relative h-[105vh] w-full">
        <Image
          alt=""
          src="/hero-3-final.png"
          objectFit="cover"
          fill
          className="w-full h-full -z-10"
        />

        <nav
          className={cn(
            `sticky top-0 px-16 py-7 transition-all left-0 flex items-center justify-between`,
            scrolled && "bg-gray-900 rounded-md top-3 px-7 mx-10 glass-morph"
          )}
        >
          <h1 className="text-2xl font-bold text-red-600">TEDxNSUT</h1>
          <ul className="flex items-center justify-between gap-6">
            {navData.map((item, ind) => (
              <li key={ind}>
                <Link
                  href={`#${item.link}`}
                  className={cn(
                    "font-semibold text-[18px] hover:text-red-600 transition-all",
                    activeSection === item.link && "text-red-600"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col h-full items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[6.3rem] text-center font-semibold leading-tight"
          >
            Shifting Perspectives
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-center font-medium mb-8 mt-5"
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
      </div>

      <div id="about" className="relative bg-black w-full -z-30 px-16 py-7">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="fixed top-0 left-0 w-full h-full"
          />
        )}
        <div className="max-w-[60%] mx-auto mt-7 gap-3">
          <h1 className="text-[7rem] uppercase text-center font-bold flex-2">
            About Us
          </h1>
          <div className="relative flex justify-center items-center">
            <div className="absolute -top-2 -left-2 w-[102%] h-[105%] card-shadow blur  opacity-75 rounded-xl"></div>
            <div className="bg-[#000] rounded-xl flex-1 z-10 py-5 mx-auto font-medium text-xl px-5 leading-8">
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

export default Home;
