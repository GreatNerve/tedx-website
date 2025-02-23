"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "@tsparticles/engine";
import { tsParticleOptions } from "@/lib/constants";
import "swiper/css";
import "swiper/css/autoplay";
import { pastEventsData } from "@/lib/constants";
import "swiper/css";
import "swiper/css/autoplay";
import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PastEventSwiper from "@/components/PastEventSwiper";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

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
      <Navbar activeSection={activeSection} scrolled={scrolled} />

      <div id="home" className=" relative h-[100vh] w-full">
        {/* <Image
          alt="Hour Glass"
          src="/hero-3-final.png"
          objectFit="cover"
          fill
          className="w-full h-full -z-10"
        /> */}
        <video
          src="/hourglass-3-final.mp4"
          loop
          autoPlay
          muted
          controls={false}
          className="w-full h-screen object-cover -z-20 absolute top-0 left-0"
        ></video>
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

      {/* ------------------------About------------------------------- */}

      <AboutSection />

      {/* ------------------Past Events---------------------- */}
      <div className="box">
        <div id="previous-events" className="events section-spacing">
          {/* <h1 className="text-[5rem] uppercase text-center font-bold flex-2"> */}
          <h1 className="lg:text-[5rem] sm:text-[3.7rem] text-[3rem] uppercase text-center font-bold flex-2">
            Previous Event Highlights
          </h1>
          <div className="carouse">
            <PastEventSwiper events={pastEventsData} />
          </div>
        </div>
      </div>

      {/* --------------------Speakers---------------------- */}
      <div id="upcoming-speakers" className="speakers section-spacing mb-5">
        <h1 className="md:text-[5rem] sm:text-[3.7rem] text-[3rem] uppercase text-center font-bold flex-2">
          Upcoming Speakers
        </h1>
        <div
          className="card-row flex justify-center gap-4 flex-wrap"
          // style={{ display: "flex", gap: "20px", justifyContent: "center" }}
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
      </div>

      {/* -------------------Contact US---------------------- */}

      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
