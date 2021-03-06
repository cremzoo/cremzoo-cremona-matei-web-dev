let particles = Particles.init({
  selector: ".background",
  color: "#f2f2f2",
  maxParticles: 1000,
  sizeVariations: 3,
  connectParticles: false,
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 700
      }
    },

    {
      breakpoint: 425,
      options: {
        maxParticles: 400
      }
    },

    {
      breakpoint: 320,
      options: {
        maxParticles: 200
      }
    }
  ]
});
