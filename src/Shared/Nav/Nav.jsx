import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import logo from "../../assets/download-C1bLvnDk.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import Swal from "sweetalert2";

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Log Out Successful!");
      })
      .catch((error) => console.log(error));
  };
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navLinks = (
    <>
      <div className=" text-white flex flex-col justify-start lg:flex-row md:gap-3 items-center mx-auto  font-mono">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded-md text-xl transition-colors duration-600 ${
              isActive
                ? "border border-[#3B9DF8] text-[#3B9DF8]"
                : "text-white hover:text-[#3B9DF8]"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/allproperty"
          className={({ isActive }) =>
            `p-2 rounded-md text-xl transition-colors duration-600 ${
              isActive
                ? "border border-[#3B9DF8] text-[#3B9DF8]"
                : "text-white hover:text-[#3B9DF8]"
            }`
          }
        >
          ALL PROPERTIES
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `p-2 rounded-md text-xl transition-colors duration-600 ${
              isActive
                ? "border border-[#3B9DF8] text-[#3B9DF8]"
                : "text-white hover:text-[#3B9DF8]"
            }`
          }
        >
          Contact Us   
        </NavLink>
        <NavLink
          to="/client"
          className={({ isActive }) =>
            `p-2 rounded-md text-xl transition-colors duration-600 ${
              isActive
                ? "border border-[#3B9DF8] text-[#3B9DF8]"
                : "text-white hover:text-[#3B9DF8]"
            }`
          }
        >
          Happy Clients
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `p-2 rounded-md text-xl transition-colors duration-600 flex justify-center gap-3 ${
              isActive
                ? "border border-[#3B9DF8] text-[#3B9DF8]"
                : "text-white hover:text-[#3B9DF8]"
            }`
          }
        >
          <FaCartShopping className="text-3xl" />
          DASHBOARD
        </NavLink>
      </div>
    </>
  );

  return (
    <div className=" md:px-8 lg:px-16 xl:px-28 navbar fixed z-50 bg-[#10090980] bg-opacity-40 shadow-sm w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-[#3B9DF8] mr-4 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black bg-opacity-80 text-left rounded-box z-1 mt-3 w-64 p-2 shadow"
          >
            {/* <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li> */}

            {navLinks}
          </ul>
        </div>

        <div className="text-white flex gap-2">
          <img className="h-9 w-9 rounded-lg" src={logo} alt="" />
          <div className="hidden md:flex">
            <Link to='/'> <p className="font-bold ">
              <span className="text-white">
                <span className="text-lg md:text-3xl text-[#3B9DF8]">P</span>
                <span className="text-lg">ROPERTY</span>
              </span>{" "}
              <span className="text-lg md:text-3xl text-[#3B9DF8]">Z</span>
              <span className="text-lg">ONE</span> <br />
            </p></Link>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden py-5 lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user?.displayName || "No User"}
            className="hidden md:flex w-12 h-12  justify-center items-center mr-2 rounded-full"
          >
            <img
              className="w-full h-full rounded-full object-cover"
              alt="User"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
              }
            />
          </div>
        )}
        {user ? (
          <>
            <Link>
              {" "}
              <button
                onClick={handleLogout}
                className="px-2 py-2  font-bold  bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4]  text-white"
              >
                Sign Out
              </button>
            </Link>
          </>
        ) : (
          <div className="flex gap-3">
            <Link to="/login">
              {" "}
              <button className="px-2 py-2 font-bold  bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4]  text-white">
                Login
              </button>
            </Link>
            <Link to="/signup">
              {" "}
              <button className="px-2 py-2 font-bold bg-gradient-to-r from-[#3BE8C4] to-[#3B9DF8]  text-white">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="ml-4">
        {/* <label className="cursor-pointer grid place-items-center">
    <input 
      onChange={handleToggle} 
      type="checkbox" 
      className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" 
    />
    
    <svg 
      className="col-start-1 row-start-1 stroke-base-100 fill-base-100" 
      xmlns="http://www.w3.org/2000/svg" 
      width="8" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>

    <svg 
      className="col-start-2 row-start-1 stroke-base-100 fill-base-100" 
      xmlns="http://www.w3.org/2000/svg" 
      width="8" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </label> */}
      </div>

      <div className="ml-4"></div>

      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Nav;
