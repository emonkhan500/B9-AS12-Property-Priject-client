import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useAxiosPublic from "../../../Components/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import React from "react";

const NewLatestReview = () => {
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
    <div className="pt-16 pb-10">
      <div className="text-center mb-6 md:mb-14">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text dark:text-white pb-3">
          Latest Review Given By Users
        </h3>
        <p className=" text-gray-600 dark:text-white ">
          Honest reviews, trusted experiences shared from our community.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        initialSlide={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Removed Navigation, added Autoplay
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
          <div className="w-full h-[450px] mt-8 md:mt-0 px-6 pt-3 bg-gradient-to-r from-[#3B9DF8]/30 to-[#00C6FF]/30 rounded-lg flex flex-col justify-between">
            {/* Top Quote */}
            <FaQuoteLeft className="absolute top-2 left-[1%] text-[1.3rem] text-[#727272]" />
        
            {/* Top Section (Image + Description) */}
            <div className="flex flex-col flex-grow overflow-hidden">
              <img
                src={review.photo}
                alt="demo/image"
                className="h-[200px] w-full object-cover mt-4 rounded-md"
              />
        
              <p className="text-[#424242] text-center mt-4 overflow-y-auto max-h-[100px] px-2">
                {review.reviewDes}
              </p>
            </div>
        
            {/* Bottom Section (User Info) */}
            <div className="flex items-center justify-between mt-5 pt-2 pb-2">
              <div className="pb-2 ">
                <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3B9DF8] to-[#00C6FF] inline-block">
                  <img
                    src={review.userImg}
                    alt=""
                    className="w-14 h-14 bg-white rounded-full"
                  />
                </div>
                <h2 className="text-[1.2rem] font-[600]">{review.userName}</h2>
              </div>
              <div className="pb-4">
                <p className="text-[1rem] text-[#383737] text-base">
                  <span>Property:</span> {review.propertyName}
                </p>
                <p className="text-[1rem] text-[#383737]">
                  <span>Time:</span> {review.time}
                </p>
              </div>
            </div>
        
            {/* Bottom Quote */}
            <FaQuoteLeft className="absolute bottom-2 right-[5%] rotate-180 text-[1.3rem] text-[#727272]" />
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </div>
  );
};

export default NewLatestReview;
