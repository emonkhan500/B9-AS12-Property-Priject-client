import React from 'react';
import useAxiosPublic from '../useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ShowUiAdvertisement from './ShowUiAdvertisement';




const ShowAdvertise = () => {
    
    const axiosPublic=useAxiosPublic()
    const{refetch,data:advertiseProperties=[]}=useQuery({
        queryKey:['advertiseProperties'],
        queryFn:async ()=>{
            const res=await axiosPublic.get('/allproperties')
         return res.data
        }
        
    })
    console.log(advertiseProperties)
    return (
        <div 
        
        className=' mt-16 rounded-lg'>
            
            <div className="text-center mb-6 md:mb-14">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text dark:text-white pb-3">
        These Are Our Best Property Right Now !!
        </h3>
        <p className=" text-gray-600 dark:text-white ">
        Experience Luxury Living — Where Comfort Meets Prime Location
        </p>
      </div>
            <div className='mt-7 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-4'>
                {
                    advertiseProperties?.map(property=><ShowUiAdvertisement property={property}></ShowUiAdvertisement>)
                }
            </div>
        </div>
    );
};

export default ShowAdvertise;