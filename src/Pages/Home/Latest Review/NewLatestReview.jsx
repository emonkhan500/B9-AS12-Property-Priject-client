import useAxiosPublic from "../../../Components/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { Typewriter } from "react-simple-typewriter";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Latest Review/css/style.css";


const NewLatestReview = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const axiosPublic = useAxiosPublic();

  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["latestReviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });
  console.log(reviews);

 

  return (
    <div className=" py-11 bg-[#ede7e7]">
      <h1 className="text-center  text-4xl font-bold text-orange-500 ">
        Users{" "}
        <Typewriter
          words={["Latest Reviews is here!"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1300}
        ></Typewriter>
      </h1>
      <Swiper
  onSwiper={setSwiperRef}
  slidesPerView={2}
  centeredSlides={true}
  spaceBetween={30}
  initialSlide={1} // Show Slide 2 initially
  pagination={{
    type: 'fraction',
  }}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>
{
  reviews.map(review => <SwiperSlide>
    <div  className='mb-10'>
  <div  className="avatar">
  <div className="mask mask-squircle w-32 ">

    <img  src={review.userImg} alt="" /></div>
  </div>
    <div>
    <h4 className="font-bold mt-4"><span className='text-orange-500 mr-2'>Name:</span>{review.userName}</h4>
    <div className='flex gap-7'>
    <h4 className="font-bold mt-2"><span className='text-orange-500 mr-2'>Reviewed For:</span>{review.propertyName}</h4>
    <h4 className="font-bold mt-2"><span className='text-orange-500 mr-2'>Time:</span>{review.time}</h4>
    </div>
    <h1 className='mt-2 text-sm'>{review.reviewDes}</h1>
    </div>
    </div>
    </SwiperSlide>)
}

</Swiper>
    </div>
  );
};

export default NewLatestReview;

