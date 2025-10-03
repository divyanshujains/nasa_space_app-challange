import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import page1 from "../assets/page1.png";
import page2 from "../assets/page2.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";

const nasaImages = [page1, page2, page3, page4];

export const SkillsSection = () => {
  return (
    <section id="nasa" className="relative py-20 px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/nasa-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <div className="container mx-auto max-w-6xl relative text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          NASA Space Apps Challenge –{" "}
          <span className="text-primary">Bhopal</span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-12 leading-relaxed">
          The NASA International Space Apps Challenge is the world’s largest
          global hackathon, bringing together innovators, scientists, designers,
          and students to solve real-world challenges on Earth and in space.
          In Bhopal, the event inspires young minds to collaborate, innovate,
          and contribute to the future of space exploration.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="rounded-xl overflow-hidden shadow-xl"
        >
          {nasaImages.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`NASA ${i}`}
                className="w-full h-[620px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
