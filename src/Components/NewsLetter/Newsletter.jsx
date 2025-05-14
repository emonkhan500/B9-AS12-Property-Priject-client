import { toast } from "react-toastify";
import img from "../../assets/Group 61.png";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import newsletter from '../../../public/Newsletter.json';
import Lottie from 'lottie-react';
const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleToast=(e)=>{
        e.preventDefault();
        const email=e.target.email.value
        if(email){
            toast.success('Thank you for subscribing to our newsletter!!')
            setEmail("");
        }


     }
     const handleChange = (e) => {
        setEmail(e.target.value);
      }
  return (
    <div className=" bg-slate-50 pt-10 shadow-lg px-2 xl:px-28 flex flex-col md:flex-row justify-center items-center  gap-2 md:gap-5 ">
      <div className="md:w-1/2   md:relative">
        {/* line */}
      <div className="hidden md:flex md:absolute right-5 top-0 h-64 2xl:h-96 w-[4px] md:my-5 lg:my-[40px] xl:my-14 2xl:my-36 bg-gradient-to-r from-[#4394e1] to-[#72e4cd]"></div>
      <Lottie animationData={newsletter} className="md:pl-28 xl:pl-48 h-[280px] md:h-[300px] lg:h-full" />
      </div>
      
      <div className="md:w-1/2  md:pr-10  xl:pr-40 rounded-sm text-center md:text-left">
        
        <div className="">
        <h1 className="-mt-6 md:-mt-0 text-[28px] md:text-3xl lg::text-5xl font-bold text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text">Subscribe Newsletter</h1>
        <p className="mt-2 lg:mt-4 mb-4 lg:mb-6 lg:text-base text-gray-700">
        Subscribe to our newsletter and be the first to discover exclusive property listings, market trends, investment tips, and development updates from us. Whether you're a buyer, investor, or enthusiast, our curated content will keep you informed and inspired—delivered straight to your inbox.
        </p>
        <div >
         <form onSubmit={handleToast} className=" pb-10">
         <input  className="bg-slate-200 outline-none rounded-s-xl py-2 md:py-3 lg:py-3 px-3 md:px-7 lg:px-14"  placeholder="user@gmail.com" 
          value={email}
              onChange={handleChange}
              name="email" required />
          <input className="bg-gradient-to-r from-[#4394e1] to-[#72e4cd] text-white px-5 md:px-4 rounded-e-xl
               py-2 md:py-3 lg:py-3" type="submit" id="id2" />
         </form>
        </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Newsletter;
