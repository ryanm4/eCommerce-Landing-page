import * as React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import offer1 from "../assets/images/offer1.png";
import offer2 from "../assets/images/offer2.png";

const state = {
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
  margin: 130,
};

export default function Offers() {
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
          <img src={offer1} alt="mainBanner" className="main-banner" />
        </div>
        <div className="item">
          <img src={offer2} alt="mainBanner" className="main-banner" />
        </div>
        <div className="item">
          <img src={offer1} alt="mainBanner" className="main-banner" />
        </div>
      </OwlCarousel>
    </div>
  );
}
