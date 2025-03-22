"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "@tsparticles/engine";
import { tsParticleOptions } from "@/lib/constants";

import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Speakers from "@/components/sections/Speakers";
import ContactUS from "@/components/sections/ContactUs";
import Events from "@/components/sections/Events";
import { Card } from "react-bootstrap";
import ContactSection from "@/components/ContactSection";
import FAQs from "@/components/FAQs";

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
      {/* {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="fixed -z-10 top-0 left-0 w-full h-full"
        />
      )} */}

      {/* Navbar */}
      <Navbar activeSection={activeSection} scrolled={true} />

      {/* Hero Section */}
      <div id="home" className="relative h-[100vh] w-full">
        <video
          src="/hourglass-3-final.mp4"
          loop
          autoPlay
          muted
          controls={false}
          className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
        ></video>
        <HeroSection />
      </div>

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Previous Events Section */}
      <div id="previous-events">
        <Events />
      </div>

      {/* --------------------Speakers---------------------- */}
      {/* <div id="upcoming-speakers" className="speakers section-spacing mb-7 mt-7">
        <h1 className="md:text-[5rem] sm:text-[3.7rem] text-[3rem] uppercase text-center font-bold flex-2">
          Upcoming Speakers
        </h1>
        <div
          className="card-row flex justify-center gap-4 flex-wrap"
        >
          <Card  className="sm:w-[25rem] w-[20rem]">
            <Card.Img variant="top" src="/image2.jpeg" />
            <Card.Body>
              <Card.Title>Speaker 1 </Card.Title>
              <Card.Text>Discussing innovative ideas in technology.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/image3.jpeg" />
            <Card.Body>
              <Card.Title>Speaker 2 </Card.Title>
              <Card.Text>
                Exploring the power of resilience in failure.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/image4.jpeg" />
            <Card.Body>
              <Card.Title>Speaker 3 </Card.Title>
              <Card.Text>The future of artificial intelligence.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div> */}
      <Speakers />

      {/* -------------------Contact US---------------------- */}
      <FAQs />
      <ContactSection />

      <Footer />
    </>
  );
};

export default Home;