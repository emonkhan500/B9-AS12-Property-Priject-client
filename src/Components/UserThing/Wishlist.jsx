import React, { useContext } from 'react';
import useAxiosPublic from '../useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthPorvider';
import ShowWishlist from './ShowWishlist';
import useaxiousSecure from '../useaxiousSecure';

const Wishlist = () => {
    const{user}=useContext(AuthContext)
    
    const axiosSecure=useaxiousSecure()

    const{refetch,data:properties=[]}=useQuery({
        queryKey:['wishedProperty',user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/wishlist/${user.email}`)
         return res.data
        }
        
    })
    // console.log(properties)
    

    return (
        <div>
        <div className=' text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text text-center text-3xl font-bold pt-8 pb-8'>
       <h1>{properties?.agentName} Your Wished Property</h1>
   </div>
   {properties && properties.length >0 ?<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-10'>
       
          
       {
        properties.map(property=><ShowWishlist item={property}></ShowWishlist>)
       }
    </div> :(
        <h1 className="text-4xl mt-2  py-3 border-t-2 text-center  text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text">
        You Haven't Added Any Property To Your Wishlist
      </h1>
    )}
       
      </div>
    );
};

export default Wishlist;