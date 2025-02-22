"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { navData, tsParticleOptions } from "@/lib/constants";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
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
        // className="fixed top-0 left-0 w-full h-full"
        />
      )}
      <div id="about" className="relative bg-black w-full -z-30 px-16 py-7">
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
      {/* ------------------Past Events---------------------- */}
      <div id="events" className="events section-spacing">
        <h2>Previous Event Highlights</h2>
        <div className="carouse">
          <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
            <SwiperSlide><Image src="/event1.jpg" alt="Event 1" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event2.jpg" alt="Event 2" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event3.jpg" alt="Event 3" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event4.jpg" alt="Event 4" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event5.jpg" alt="Event 5" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event1.jpg" alt="Event 1" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event2.jpg" alt="Event 2" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event3.jpg" alt="Event 3" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event4.jpg" alt="Event 4" height={50} width={50} /></SwiperSlide>
            <SwiperSlide><Image src="/event5.jpg" alt="Event 5" height={50} width={50} /></SwiperSlide>
            </Swiper>
          </div>
      </div>
    

      {/* --------------------Speakers---------------------- */}
      <div id="speakers" className="speakers section-spacing">
        <h2>Upcoming Speakers</h2>
        <div>
          <Image src="/ayush.png" alt="Speaker 1" height={50} width={50} />
          <p>Speaker 1 - Discussing innovative ideas in technology.</p>
        </div>
        <div>
          <p>Speaker 2 - Exploring the power of resilience in failure.</p>
          <Image src="/abhigyan.png" alt="Speaker 2" height={50} width={50} />
        </div>
        <div>
          <Image src="/ankit.jpg" alt="Speaker 3" height={50} width={50} />
          <p>Speaker 3 - The future of artificial intelligence.</p>
        </div>
        <div>
          <p>Speaker 4 - Transforming setbacks into opportunities.</p>
          <Image src="/mayank.png" alt="Speaker 4" height={50} width={50} />
        </div>
        <div>
          <Image src="/speaker5.jpg" alt="Speaker 5" height={50} width={50} />
          <p>Speaker 5 - Leadership and personal growth.</p>
        </div>
        <div>
          <p>Speaker 6 - Mental well-being and success.</p>
          <Image src="/speaker6.jpg" alt="Speaker 6" height={50} width={50} />
        </div>
      </div>

      <AboutSection />
    </>
  );
};

export default Home;
