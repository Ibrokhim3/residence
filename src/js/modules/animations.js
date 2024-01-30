import { gsap } from "gsap";

const animations = () => {
  return {
    header: gsap.from(".header", {
      duration: 1,
      y: "-100%",
      clearProps: "y",
    }),
    buttons: gsap.from(".btn-main-styles", {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
    }),
    downloadBtn: gsap.to(".footer__download-btn", {
      duration: 1,
      delay: 1,
      y: 0,
    }),
    logoMobile: gsap.from(".info-mobile-wrapper", {
      duration: 1,
      opacity: 0,
    }),
  };
};

export default animations;
