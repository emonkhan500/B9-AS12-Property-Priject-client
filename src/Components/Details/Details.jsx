import React, { useContext, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdVerifiedUser } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';
import { Link, useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../useAxiosPublic';
import { AuthContext } from '../../Provider/AuthPorvider';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import ShowReview from './ShowReview';

const Details = () => {
  const { user } = useContext(AuthContext);
  const property = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { propertyName, isVerified, location, photo, agentName, minPrice, maxPrice, agentImg, des } = property;


  // wish post
  const handleWish = async () => {
    const { _id, ...others } = property;
    const wishedProperty = { propertyId: property?._id, userEmail: user?.email, ...others };
    const propertyRes = await axiosPublic.post("/wishlist", wishedProperty);
    console.log(propertyRes.data);
    if (propertyRes.data.insertedId) {
      Swal.fire("Property Added to WishList");
    }
  };



  // reviews post
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewDes = e.target.review.value;
     const currentDate = new Date().toISOString().split('T')[0];
    const { _id, ...others } = property;
    const review = { propertyId: property?._id,userImg:user?.photoURL,  userName:user?.
      displayName, userEmail: user?.email, reviewDes:reviewDes,time:currentDate, ...others };
   const reviewRes = await axiosPublic.post("/review", review);
   console.log(reviewRes.data);
   if (reviewRes.data.insertedId) {
     Swal.fire("Review Added to Property");
     refetch()
   }

    setIsModalOpen(false);
  };


  // reviews get
  const{refetch,data:reviews=[]}=useQuery({
    queryKey:['review',property._id],
    
    queryFn:async ()=>{
        const res=await axiosPublic.get(`/review/${property._id}`)
       
     return res.data
    }
    
})
console.log(reviews)


  return (
    <div className="lg:pt-16 px-1 md:px-12  mx-auto   py-4 rounded-xl">
      
        <div className="flex justify-between lg:justify-start gap-0 lg:gap-10  pt-12 md:pt-16  mt-8 text-[#331a15]  z-10">
          <div className=" ml-1 md:ml-4 gap-2 bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4]  text-white max-w-[9rem] hover:cursor-pointer  rounded p-2">
          <Link className='flex justify-center items-center gap-4' to="/allproperty">
            <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="inline"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="48"
                d="M244 400 100 256l144-144M120 256h292"
              ></path>
            </svg>
            </div>
            
            <h2 className=" pb-1 font-semibold text-xl inline">
             Back
            </h2>
            </Link>
          </div>
         
         <button onClick={handleWish} className='mr-3 px-2 py-2 rounded bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] font-bold text-white'>Add to WishList</button>
         
        </div>
    

      <div className=" mx-auto  px-1 md:px-3 pt-4 rounded-2xl flex flex-col justify-center items-center md:gap-[10%]">
        {photo && <img className="w-full h-auto md:h-[600px] rounded-md pt-3" src={photo} alt='' />}
        <div className='flex mt-6 gap-36 lg:gap-48 '>
          {/* <div className="flex items-center justify-between p-3 bg-green-400 py-4 px-10">
            <div className="flex gap-4 items-center space-x-2">
              <img src={agentImg || "https://source.unsplash.com/random/100x100/?5"} alt="" className="object-cover object-center w-14 h-w-14 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
              <div className="-space-y-1">
                <h2 className="text-lg uppercase font-semibold leading-none">{agentName}</h2>
                <span className="inline-block text-xs leading-none text-blue-600 dark:text-gray-600">-Agent-</span>
              </div>
            </div>
          </div> */}
          
        </div>
        
        <div className='flex  justify-between md:justify-normal gap-7 md:gap-36 lg:gap-52 mb-5'>
          <h1 className='text-base md:text-2xl font-semibold'><span className=' text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text  text-base  md:text-2xl mr-1'>Title:</span> {propertyName}</h1>
          <h1 className='flex items-center justify-center gap-1 text-base  md:text-2xl font-semibold'><IoLocationSharp />{location}</h1>
        </div>
        
        <div className='flex  justify-between md:justify-normal gap-7 md:gap-36 lg:gap-52 mb-5'>
          <h1 className='text-base md:text-2xl font-semibold'><span className='text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text  text-base  md:text-2xl mr-1'>Price:</span>${minPrice}-{maxPrice}</h1>
          <h1 className='flex items-center justify-center gap-1 text-xl text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text font-semibold mb-4'><MdVerifiedUser className='text-blue-600'/>{isVerified === false ? <><RxLapTimer /> Pending</> : isVerified === true ? 'Verified' : 'Rejected'}</h1>
        </div>

        <h1 className='text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text text-base mr-1'>Description <span className='text-sm md:text-lg font-normal text-gray-600'>{des}</span></h1>
        <div>
        <hr  className='text-blue-700 mt-5 '/>
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
       
		<h1 className="text-2xl md:text-4xl font-semibold  text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text leading-none text-center">Review About This Property</h1>
	</div>
          <div className='grid grid-cols-1 md:grid-cols-2 '>
          {
            reviews.map(review =><ShowReview review={review}></ShowReview>)
          }
          </div>
        </div>
        <button onClick={() => setIsModalOpen(true)} className='bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4]  text-white py-2 font-bold rounded w-full mt-4'>Add a Review</button>
      </div>

      {/* DaisyUI Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Add Your Review</h2>
            <form onSubmit={handleReviewSubmit}>
              <input 
                type="text" 
                name="review"
                placeholder="Write your review here" 
                className="input input-bordered w-full mt-2 mb-4"
              />
              <div className="modal-action">
                <button className='px-2 py-2 rounded bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4]  text-white'>Submit Review</button>
                <button type="button" onClick={() => setIsModalOpen(false)} className='px-2 py-2 rounded bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4]  text-white'>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
