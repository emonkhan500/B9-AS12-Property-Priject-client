import logo from '../../assets/download-C1bLvnDk.jpg'
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import {SlArrowUp} from "react-icons/sl";

const Footer = () => {
    return (
        <div className='w-full border  '>
            <footer className="bg-white shadow-md rounded-xl w-full p-3 md:p-4 relative">

<div
    className="w-full flex items-center justify-center pt-3 flex-col gap-4 pb-16">
    <img src={logo} alt="logo"
         className="w-[150px]"/>

    <p className="text-[0.9rem] text-center  md:text-lg lg:text-xl text-gray-600">High level
        experience in buying and selling Property with <span className='text-[#3B9DF8] md:text-lg lg:text-2xl'>PROPERTY ZONE</span>, We produced the best services.
    </p>

    <button className="py-3 px-6 rounded-full bg-[#3B9DF8] text-white">Contact Us</button>

    <div className="flex gap-[15px] text-black mt-1 md:mb-14 lg:mb-24">
        <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <CgFacebook/>
        </a>
        <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsTwitter/>
        </a>
        <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsInstagram/>
        </a>
        <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsLinkedin/>
        </a>
    </div>
</div>


<img src="https://i.ibb.co/zNk7XT4/Rectangle-97.png" alt="background/image"
     className="absolute bottom-[20px]  left-0 right-0 z-10 rounded-b-xl h-11 md:h-24 lg:h-32 w-full text-green-600"/>
<img src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
     alt="background/image"
     className="absolute bottom-0 left-0 right-0 z-10 h-10 md:h-20 lg:h-28 rounded-b-xl w-full text-green-600"/>
</footer>
        </div>
    );
};

export default Footer;