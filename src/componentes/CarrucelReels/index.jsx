import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import videos from "./carrucel";
import "./style.css";

export default function VideoCarousel() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ type: "progressbar", el: ".swiper-pagination" }}
        slidesPerView={1}
        className="progress-slide-carousel max-w-md w-full h-[700px] sm:h-[800px] md:h-[900px]"
      >
        {videos.map((video) => (
          <SwiperSlide
            key={video.id}
            className="flex justify-center items-center"
          >
            <div className="w-[360px] sm:w-[400px] md:w-[450px] lg:w-[500px] aspect-[9/16] shadow-xl rounded-3xl overflow-hidden">
              <video
                src={video.src}
                className="h-full w-full object-cover"
                controls
                autoPlay
                loop
                muted
              />
            </div>
          </SwiperSlide>
        ))}

       
      </Swiper>
    </div>
  );
}
