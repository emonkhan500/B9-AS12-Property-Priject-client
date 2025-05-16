import { HiOutlineHomeModern } from "react-icons/hi2";

import { FaUsers } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { FaBookMedical } from "react-icons/fa6";
import { FcAdvertising } from "react-icons/fc";

import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Components/useAdmin";
import useAgent from "../Components/useAgent";


const Dashboard = () => {
    const [isAdmin]=useAdmin()
    const[isAgent]=useAgent()
    // console.log(isAdmin)
    // const isAgent = false
    // const isAdmin = true
   
    return (
        <div className="flex flex-col lg:flex-row min-h-screen ">
        <div className="  w-auto lg:w-64 xl:w-80 h-full lg:min-h-screen pt-10  lg:pt-20 border-e-2">
          
          <ul className="menu space-y-2 mx-5">
            {isAdmin ? 
              <>
              <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/adminprofile'><IoMdHome /> Admin Profile</NavLink>
      </li>
      <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/managepropertybyadmin'><HiOutlineHomeModern /> Manage Properties</NavLink>
      </li>
      <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/manageusersbyadmin'><FaUsers /> Manage Users</NavLink>
      </li>
      <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/managereviewsbyadmin'><GoCodeReview /> Manage reviews</NavLink>
      </li>
      <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/advertise'><FcAdvertising /> Advertise Property</NavLink>
      </li>
      
              </>
             : isAgent ?

             <>

<li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/agentprofile'><IoMdHome /> Agent Profile</NavLink>
      </li>
      <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/addproperty'><HiOutlineHomeModern /> Add Property</NavLink>
      </li>
      <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/myaddedproperty'><HiOutlineHomeModern /> My added properties</NavLink>
      </li>
      <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/soldproperty'><HiOutlineHomeModern /> My sold properties</NavLink>
      </li>
      <li>
      <NavLink className='text-lg flex justify-center lg:justify-normal items-center ' to='/dashboard/requestedproperty'><HiOutlineHomeModern /> Requested properties</NavLink>
      </li>
             </> 
             :
             <>
                <li>
                  <NavLink className="text-lg flex justify-center lg:justify-normal items-center " to="/dashboard/userprofile">
                    <IoMdHome /> My Profile
                  </NavLink>
                </li>
                
              
                <li>
                  <NavLink className="text-lg flex justify-center lg:justify-normal items-center " to="/dashboard/userreview">
                  <GoCodeReview /> My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-lg flex justify-center lg:justify-normal items-center " to="/dashboard/propertybought">
                  <HiOutlineHomeModern /> Property Bought
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-lg flex justify-center lg:justify-normal items-center " to="/dashboard/wishlist">
                    <FaBookMedical /> WishList
                  </NavLink>
                </li>
              </>
            }
            {/* divider */}
            <div className="divider"></div>
  
            <li>
              <NavLink className="text-lg flex justify-center lg:justify-normal items-center " to="/">
                <IoMdHome /> HOME
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg flex justify-center lg:justify-normal items-center " to="/allproperty">
                <IoMenu /> ALL PROPERTY
              </NavLink>
            </li>
            
            
          </ul>
        </div>
  
        <div className="flex-1 ">
          <div className="text-center mt-6 mb-10 lg:mb-16 lg:mt-14 text-2xl md:text-4xl  lg:text-5xl xl:text-7xl text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text">
          <h1>-Welcome to Dashboard-</h1>
          </div>
          <div>
          <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;