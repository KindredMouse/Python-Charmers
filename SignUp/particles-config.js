/* floating particals */

particlesJS("particles-js", {
  particles: {
    number: { value: 500, density: { enable: true, value_area: 900 } },
    color: { value: ["#FFD700", "#FFC300", "#FFB000"] }, 
    shape: { type: "circle" },
    opacity: { value: 0.9, random: true },
    size: { value: 3.6, random: true },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      resize: true
    },
    modes: {
      bubble: { distance: 100, size: 6, duration: 2, opacity: 1 }
    }
  },
  retina_detect: true
});
