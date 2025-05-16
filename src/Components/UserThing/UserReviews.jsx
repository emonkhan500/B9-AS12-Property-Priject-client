import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPorvider';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic';
import ShowUserReviews from './ShowUserReviews';

const UserReviews = () => {
    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const{refetch,data:myReviews=[]}=useQuery({
        queryKey:['myReviews',user?.email],
        queryFn:async ()=>{
            const res=await axiosPublic.get(`/reviews/${user.email}`)
         return res.data
        }
        
    })
    // console.log(myReviews)
    return (
        <div>
        <div className=' border-t-2 text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text text-center text-3xl font-bold pt-4 pb-8'>
       <h1>{myReviews?.userName} Your Reviews to Property</h1>
   </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 mb-10'>
          
          {
           myReviews.map(review=><ShowUserReviews review={review}></ShowUserReviews>)
          }
       </div>
      </div>
    );
};

export default UserReviews;