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
    <div className=" bg-slate-50 px-2 lg:px-44 flex flex-col md:flex-row justify-center items-center  gap-2 md:gap-5 ">
      <div className="md:w-1/2 h-[400px]">
      <Lottie animationData={newsletter} className="md:pl-36 lg:pl-60 h-[280px] md:h-[400px] lg:h-full" />
      </div>
      
      <div className="md:w-1/2 sm:-mt-14 pr-20 lg:pr-40 rounded-sm text-center md:text-left">
        
        <div className="">
        <h1 className="mt-5 text-[28px] md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text">Subscribe Newsletter</h1>
        <p className="mt-3 mb-6 text-gray-700">
        Subscribe to our newsletter and be the first to discover exclusive property listings, market trends, investment tips, and development updates from us. Whether you're a buyer, investor, or enthusiast, our curated content will keep you informed and inspired—delivered straight to your inbox.
        </p>
        <div >
         <form onSubmit={handleToast} className=" pb-10">
         <input  className="bg-white   rounded-s-xl py-2 px-3 md:px-8"  placeholder="user@gmail.com" 
          value={email}
              onChange={handleChange}
              name="email" required />
          <input className="bg-[#f00] text-white px-5 rounded-e-xl
               py-2" type="submit" id="id2" />
         </form>
        </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Newsletter;
