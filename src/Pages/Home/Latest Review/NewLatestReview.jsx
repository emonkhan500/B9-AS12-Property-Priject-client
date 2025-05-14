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
    <div className="pt-16 pb-14">
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
          <SwiperSlide>
            <div className="w-full h-[450px]   mt-8 md:mt-0 px-6 pt-3 bg-white  rounded-lg ">
              <FaQuoteLeft className=" absolute top-2 left-[1%] text-[1.3rem] text-[#727272]" />
              <div className="">
                <img
                  src={review.photo}
                  alt="demo/image"
                  className="h-[230px] w-full mt-4"
                />
                {/* content div */}
                <div>
                  <p className="text-[#424242] text-center  mt-5">
                    {review.reviewDes}
                  </p>

                  <div className="flex items-center mt-5 justify-between ">
                    <div>
                      <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3B9DF8] to-[#00C6FF] inline-block">
                        <img
                          src={review.userImg}
                          alt=""
                          className="w-16 h-16 bg-white rounded-full "
                        />
                      </div>
                      <h2 className="text-[1.2rem] font-[600]">
                        {review.userName}
                      </h2>
                    </div>
                    <div>
                      <p className="text-[1rem] text-[#727272]">
                        <span className="">Reviewed For:</span>
                        {review.propertyName}
                      </p>
                      <p className="text-[1rem] text-[#727272]">
                        <span className="">Time:</span>
                        {review.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <FaQuoteLeft className="absolute bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewLatestReview;
