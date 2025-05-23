import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../../assets/download-C1bLvnDk.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import Swal from "sweetalert2";

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

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
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      <button
          className="lg:hidden text-3xl mr-3 text-blue-500"
          onClick={toggleMenu}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
        {/* small menu */}
        {isOpen && (
          <aside
            className={`quick fixed top-16 right-0  bg-black bg-opacity-80 z-20 shadow-lg   w-[200px] md:w-[300px] transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="gap-[20px] text-[1rem] flex flex-col mt-5">
              {navLinks}
            </ul>
          </aside>
        )}

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
      

      <div className="ml-4"></div>

      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Nav;
