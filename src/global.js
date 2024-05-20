export const smoothScroll = (config) => {
    const scrollStep = () => {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, -config.stepSize);
        requestAnimationFrame(scrollStep);
      }
    };
  };
  
  smoothScroll({
    animationTime: 1000,
    stepSize: 10,
    accelerationDelta: 30,
    accelerationMax: 2,
    keyboardSupport: true,
    arrowScroll: 50,
    pulseAlgorithm: true,
    pulseScale: 6,
    pulseNormalize: 1,
    touchpadSupport: true,
  });
  

