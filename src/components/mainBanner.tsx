import * as React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import mainBanner from "../assets/images/main.png";
import mainBanner1 from "../assets/images/main1.png";

const state = {
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
  margin: 130,
};

export default function MainBanner() {
  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        loop
        center
        // margin={state.margin}
        touchDrag={true}
        lazyLoad={true}
        responsiveClass={true}
        responsive={state.responsive}
        nav={false}
        autoplay={true}
        dots={false}
      >
        <div className="item">
          <img src={mainBanner} alt="mainBanner" className="main-banner" />
        </div>
        <div className="item">
          <img src={mainBanner1} alt="mainBanner" className="main-banner" />
        </div>
      </OwlCarousel>
    </div>
  );
}
