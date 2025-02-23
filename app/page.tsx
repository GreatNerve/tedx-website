"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "@tsparticles/engine";
import { tsParticleOptions } from "@/lib/constants";
import "swiper/css";
import "swiper/css/autoplay";

import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Speakers from "@/components/sections/Speakers";
import ContactUS from "@/components/sections/ContactUs";
import Events from "@/components/sections/Events";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [init, setInit] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // active section detection
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

  // Scroll event listener for navbar styling
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // particles engine and scroll listener
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Particles loaded callback
  const particlesLoaded = async (): Promise<void> => { };

  // Memoized particle options
  const options: ISourceOptions = useMemo(() => tsParticleOptions, []);

  return (
    <>
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="fixed -z-10 top-0 left-0 w-full h-full"
        />
      )}

      {/* Fixed Background Video */}
      <video
        src="/hourglass-3-final.mp4"
        loop
        autoPlay
        muted
        controls={false}
        className="fixed -z-20 top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Navbar */}
      <Navbar activeSection={activeSection} scrolled={scrolled} />

      {/* Hero Section */}
      <div id="home" className="relative h-[105vh] w-full">
        <HeroSection />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Previous Events Section */}
      <div id="previous-events">
        <Events />
      </div>

      {/* Upcoming Speakers Section */}
      <section id="upcoming-speakers">
        <Speakers />
      </section>

      {/* Contact Us Section */}
      <section id="contact">
        <ContactUS />
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;