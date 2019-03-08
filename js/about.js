let particles = Particles.init({
  selector: ".background",
  color: "#ffffff",
  maxParticles: 150,
  sizeVariations: 3,
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 100
      }
    },

    {
      breakpoint: 425,
      options: {
        maxParticles: 40
      }
    },

    {
      breakpoint: 320,
      options: {
        maxParticles: 50
      }
    }
  ]
});

new Typewriter("#typewriter", {
  strings: ["Let's de-code ideas together!"],
  autoStart: true,
  loop: true
});

new WOW().init();
