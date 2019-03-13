window.onload = function() {
  Particles.init({
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
        maxParticles: 500
      }
    },

    {
      breakpoint: 320,
      options: {
        maxParticles: 300
      }
    }
  ]
});
};
