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

  const navLinks = (
    <>
      <div className=" text-white flex flex-col justify-start lg:flex-row md:gap-3 items-center mx-auto  font-mono">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded-md text-xl transition-colors duration-600 ${
              isActive
                ? "border border-[#3BB77E] text-[#3BB77E]"
                : "text-white hover:text-[#3BB77E]"
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
                ? "border border-[#3BB77E] text-[#3BB77E]"
                : "text-white hover:text-[#3BB77E]"
            }`
          }
        >
          ALL PROPERTIES
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `p-2 rounded-md text-xl transition-colors duration-600 flex justify-center gap-3 ${
              isActive
                ? "border border-[#3BB77E] text-[#3BB77E]"
                : "text-white hover:text-[#3BB77E]"
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
    <div className=" md:px-16 lg:px-16 xl:px-28 navbar fixed z-50 bg-[#10090980] shadow-sm w-full">
      <div className="navbar-start">
        <div className="dropdown">
        <div
            tabIndex={0}
            role="button"
            className="text-green-600 mr-4 lg:hidden"
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
            className="menu menu-sm dropdown-content bg-black text-left rounded-box z-1 mt-3 w-64 p-2 shadow"
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
            <p className="font-bold ">
              <span className="text-white">
                <span className="text-lg md:text-3xl text-green-600">P</span>
                <span className="text-lg">ROPERTY</span>
              </span>{" "}
              <span className="text-lg md:text-3xl text-green-600">Z</span>
              <span className="text-lg">ONE</span> <br />
            </p>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden py-5 lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
      <div
  data-tooltip-id="my-tooltip"
  data-tooltip-content={user?.displayName || "No User"}
  className="w-12 h-12 flex justify-center items-center mr-2 rounded-full"
>
  <img
    className="w-full h-full rounded-full object-cover"
    alt="User"
    src={
      user?.photoURL ||
      "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
    }
  />
</div>
        {user ? (
          <>
            <Link>
              {" "}
              <button
                onClick={handleLogout}
                className="px-2 py-2 rounded font-bold bg-[#3BB77E]  text-white"
              >
                Sign Out
              </button>
            </Link>
          </>
        ) : (
          <div className="flex gap-3">
            <Link to="/login">
              {" "}
              <button className="px-2 py-2 rounded font-bold  bg-[#3BB77E]  text-white">
                Login
              </button>
            </Link>
            <Link to="/signup">
              {" "}
              <button className="px-2 py-2 rounded font-bold bg-[#3BB77E]  text-white">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="ml-4"></div>

      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Nav;
