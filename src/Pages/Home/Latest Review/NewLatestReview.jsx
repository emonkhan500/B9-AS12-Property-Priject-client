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
    <div className="pt-16 px-1 md:px-3 2xl:px-20">
      <div className="text-center mb-6 md:mb-14">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text  pb-3">
          Latest Review Given By Users
        </h3>
        <p className=" text-gray-600  ">
          Honest reviews, trusted experiences shared from our community.
        </p>
      </div>
      <Swiper
  centeredSlides={true}
  spaceBetween={30}
  initialSlide={1}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  }}
  modules={[Autoplay]}
  className="mySwiper "
>
  {reviews.map((review) => (
    <SwiperSlide key={review._id}>
      <div className="w-full  h-[330px] md:h-[330px] lg:h-[450px] mt-8 md:mt-0 px-2   pt-2 bg-gradient-to-r from-[#3B9DF8]/30 to-[#00C6FF]/30 rounded-lg flex flex-col justify-between relative">
        {/* Top Quote */}
       

        {/* Top Section (Image + Description) */}
        <div className="flex flex-col flex-grow overflow-hidden">
          <img
            src={review.photo}
            alt="demo/image"
            className=" h-[130px] md:h-[120px] lg:h-[200px] 2xl:h-[230px] w-full object-cover mt-2 rounded-md"
          />
          <p className="text-[#424242] text-center mt-3 lg:mt-7 mb-3 overflow-y-auto max-h-[120px] px-2">
            {review.reviewDes}
          </p>
        </div>

        {/* Bottom Section (User Info) */}
        <div className="flex items-center relative  justify-between pt-3 pb-1   px-3 lg:px-12">
        <div className="absolute  top-0 left-0 w-full h-[2px]  bg-gradient-to-r from-[#3B9DF8] to-[#00C6FF]"></div>
          <div className="md:pb-2  flex flex-col justify-center items-center">
            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3B9DF8] to-[#00C6FF]">
              <img
                src={review.userImg}
                alt=""
                className="w-10 md:w-14 h-10 md:h-14 bg-white rounded-full"
              />
            </div>
            <h2 className="text-base font-normal">{review.userName}</h2>
          </div>
          <div className="">
            <p className="text-sm md:text-[1rem] text-[#383737]">
              <span>Property:</span> {review.propertyName}
            </p>
            <p className=" text-sm md:text-[1rem] text-[#383737]">
              <span>Time:</span> {review.time}
            </p>
          </div>
        </div>

        {/* Bottom Quote */}
       
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </div>
  );
};

export default NewLatestReview;
