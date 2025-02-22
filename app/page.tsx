"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "@tsparticles/engine";
import { tsParticleOptions } from "@/lib/constants";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

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

  const particlesLoaded = async (): Promise<void> => {};

  const options: ISourceOptions = useMemo(() => tsParticleOptions, []);

  return (
    <>
      <div id="home" className="relative h-[105vh] w-full">
        <Image
          alt="Hour Glass"
          src="/hero-3-final.png"
          objectFit="cover"
          fill
          className="w-full h-full -z-10"
        />

        <Navbar 
          activeSection={activeSection}
          scrolled={scrolled}
        />
        <HeroSection />
      </div>

      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="fixed -z-10 top-0 left-0 w-full h-full"
        />
      )}

      <AboutSection />
    </>
  );
};

export default Home;
