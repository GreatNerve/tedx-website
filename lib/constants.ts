import { MoveDirection, OutMode } from "@tsparticles/engine";

const tsParticleOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  fullScreen: { enable: false }, // Disable fullscreen mode
  interactivity: {
    events: {
      // onClick: {
      //   enable: true,
      //   mode: "push",
      // },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

const navData = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About Us",
    link: "about",
  },
  {
    name: "Previous Events",
    link: "previous-events",
  },
  {
    name: "Upcoming Speakers",
    link: "upcoming-speakers",
  },
  {
    name: "Contact Us",
    link: "contact",
  },
];

const pastEventsData = [
  { src: "/image1.jpeg", name: "Event 1" },
  { src: "/image2.jpeg", name: "Event 2" },
  { src: "/image3.jpeg", name: "Event 4" },
  { src: "/image4.jpeg", name: "Event 4" },
  { src: "/image5.jpeg", name: "Event 5" },
];

export { tsParticleOptions, navData, pastEventsData };
