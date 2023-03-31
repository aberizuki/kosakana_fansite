import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "src/index.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <div className="flex p-10">
        <div className="px-2">
          <img
            className="w-[500px] drop-shadow-2xl rounded-xl"
            src={require("src/assets/img/kosaka1.jpg")}
            alt="smhfbdhf"
          />
        </div>
      </div>
    </>
  );
}
