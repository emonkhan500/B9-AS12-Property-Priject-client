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
    <div className="mx-auto flex flex-col md:flex-row justify-center items-center gap-5 ">
      
      <div className=" rounded-sm w-1/2">
        
        <div className="text-center">
        <h1 className="mt-5 text-3xl font-bold">Subscribe Newsletter</h1>
        <p className="mt-3 mb-6">
          Subscribe to the  newsletter and stay updated on the project
          progress, events, and latest news on <br /> Website
        </p>
        <div >
         <form onSubmit={handleToast} className=" pb-10">
         <input  className="bg-white   rounded-s-xl py-2 px-8"  placeholder="user@gmail.com" 
          value={email}
              onChange={handleChange}
              name="email" required />
          <input className="bg-[#f00] text-white px-5 rounded-e-xl
               py-2" type="submit" id="id2" />
         </form>
        </div>
        </div>
      </div>
      <div>
      <Lottie animationData={newsletter} className="w-full  h-full md:h-[400px] lg:h-full" />
      </div>
      
    </div>
  );
};

export default Newsletter;
