import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PastEventSwiper = ({
  events,
}: {
  events: { src: string; name: string }[];
}) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper: SwiperClass) => console.log(swiper)}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {events.map((event: { src: string; name: string }, ind) => (
          <SwiperSlide key={ind} className="min-w-[250px] min-h-[250px] relative bg-red-50">
            <Image 
              src={event.src}
              alt={event.name}
              // height={250}
              // width={200}
              objectFit="cover" 
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PastEventSwiper;
