new WOW().init();

new Typewriter("#typewriter", {
  strings: ["Let\'\s de\-\code ideas together!"],
  autoStart: true,
  loop: true
});

let particles = Particles.init({
  selector: ".background",
  color: "#ffffff",
  maxParticles: 50,
  sizeVariations: 3,
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 40
      }
    },

    {
      breakpoint: 425,
      options: {
        maxParticles: 30
      }
    },

    {
      breakpoint: 320,
      options: {
        maxParticles: 20
      }
    }
  ]
});




