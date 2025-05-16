import React from 'react';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosPublic from '../useAxiosPublic';

const ShowUserReviews = ({review}) => {
    // console.log(review)
    const axiosPublic=useAxiosPublic()
    const{reviewDes,userName,userImg,propertyName,
        location,
        time
    ,_id}=review
        const handleDelete=id=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    axiosPublic.delete(`/reviews/${id}`)
                    .then(res=>{
                        if(res.data.deletedCount>0){
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              window.location.reload()
                        }
                    })
                
                }
              });
        }
    return (
        <div>
           <div className="container bg-gradient-to-r from-[#3B9DF8]/30 to-[#00C6FF]/30 h-full flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex bg-slate-200 justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={userImg || "https://source.unsplash.com/100x100/?portrait"} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{userName}</h4>
				<span className="text-xs dark:text-gray-600">{time}</span>
			</div>
		</div>
		<button onClick={()=>handleDelete(_id)} type="button" className="bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] px-3 rounded-lg  text-white text-3xl">
			 	 <MdDelete className='' />
				
			</button>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-600">
    <p className="text-2xl font-bold"><span className="text-blue-600 text-lg">Review For:</span> {propertyName}</p>
		<p className="text-base"><span className="text-blue-600 font-bold text-lg">Review:</span> {reviewDes}</p>
	</div>
</div> 
        </div>
    );
};

export default ShowUserReviews;