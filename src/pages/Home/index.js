import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "src/components/Slider";

export default function Home() {
  return (
    <main className="w-[100%] h-[100vh] bg-bg bg-no-repeat bg-fill">
      <section className="p-8">
        <navbar className="flex justify-between">
          <div className="flex justify-center align-center">
            <button>
              <img
                className="w-[150px]"
                src={require("src/assets/img/ksklogo2.png")}
                alt="smhfbdhf"
              />
            </button>
          </div>
          <div className="justify-center">
            <button className="px-8 text-[19px] text-[#ffffff] font-semibold">
              Home
            </button>
            <button className="px-8 text-[19px] text-[#ffffff] font-semibold">
              Profile
            </button>
            <button className="px-8 text-[19px] text-[#ffffff] font-semibold">
              News
            </button>
            <button className="px-8 text-[19px] text-[#ffffff] font-semibold">
              Album
            </button>
          </div>
        </navbar>
      </section>

      <Slider />
    </main>
  );
}
