import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

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
        onSwiper={(swiper: SwiperClass) => console.log(swiper)}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {events.map((event: { src: string; name: string }, ind) => (
          <SwiperSlide key={ind}>
            <Image src={event.src} alt={event.name} height={50} width={50} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Image src="/event1.jpg" alt="Event 1" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event2.jpg" alt="Event 2" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event3.jpg" alt="Event 3" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event4.jpg" alt="Event 4" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event5.jpg" alt="Event 5" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event1.jpg" alt="Event 1" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event2.jpg" alt="Event 2" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event3.jpg" alt="Event 3" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event4.jpg" alt="Event 4" height={50} width={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/event5.jpg" alt="Event 5" height={50} width={50} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default PastEventSwiper;
