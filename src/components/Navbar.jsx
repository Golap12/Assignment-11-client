import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BiSolidUserPlus } from "react-icons/bi";
import { AuthContext } from './../provider/AuthProvider';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const links = (
    <>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[12px] text-[12px] p-1  md:font-bold"
              : "md:text-[12px] text-[12px] p-1 md:font-bold text-orange-500"
          }
          to="/"
        >
          HOME
        </NavLink>
      </li>

      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[12px] text-[12px] p-1  md:font-bold"
              : "md:text-[12px] text-[12px] p-1 md:font-bold text-orange-500"
          }
          to="/allFood"
        >
          FOODS
        </NavLink>
      </li>

      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[12px] text-[12px] p-1  md:font-bold"
              : "md:text-[12px] text-[12px] p-1 md:font-bold text-orange-500"
          }
          to="/gallery"
        >
          GALLERY
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex items-center p-3 md:px-5 sticky top-0 z-10 bg-gray-900 text-white h-[72px]">
      <div className="navbar-start items-center lg:justify-start justify-between flex w-full md:w-[50%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden  rounded-full p-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h12M4 12h8m-8 6h12"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="bg-gray-900 rounded-b-lg p-2 *:bg-gray-800  *:p-1 *:rounded-md dropdown-content md:mt-6 mt-[12px] px-2 space-y-2 w-40 ml-[-15px] gap-2 nav font-bold md:ml-[-20px]"
          >
            {links}
          </ul>
        </div>

        <Link
          to={"/"}
          className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
          <p>Food<span className="text-orange-600">ie's</span></p>
        </Link>

        {user ? (
          <div className="md:hidden dropdown dropdown-end flex items-center">

            <div className="dropdown dropdown-end  rounded-full relative">
              <div tabIndex={0} role="button" className="btn btn-ghost gap-0 p-1">
                <div className="w-7 rounded-full">
                  <img className="w-full rounded-full"
                    alt="no photo"
                    src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="bg-gray-900 menu menu-sm dropdown-content rounded-b-md z-[1] mt-3 w-32 p-2 shadow flex flex-col gap-2">

                  
                <Link to='/myFood' className="p-1 bg-white flex gap-1 items-center text-black rounded-md text-xs font-bold">
                <FaArrowAltCircleRight size={12} />
                  <li>MY ADDED</li>
                </Link>
                <Link to='/addFood' className="p-1 bg-white flex gap-1 items-center text-black rounded-md text-xs font-bold">
                <FaArrowAltCircleRight size={12} />
                  <li>ADD FOOD</li>
                </Link>
                <Link to='/myOrderFood' className="p-1 bg-white flex gap-1 items-center text-black rounded-md text-xs font-bold">
                <FaArrowAltCircleRight size={12} />
                  <li>MY ORDERED</li>
                </Link>

                <div className="p-1 bg-white flex gap-1 items-center text-black rounded-md text-xs font-bold">
                <MdOutlineLogout color="red"></MdOutlineLogout>
                  <li onClick={handleLogout} className=""> LOGOUT</li>
                  

                </div>

              </ul>
            </div>


          </div>
        ) : (
          <div className="md:hidden dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="flex justify-center items-center gap-1">
              <span>
                <BiSolidUserPlus size={25}></BiSolidUserPlus>
              </span>
            </div>
            <ul tabIndex={0} className="bg-gray-900 dropdown-content rounded-b-sm z-[1] menu shadow mt-[15px] mr-[-12px] w-32">
              <Link to={"/login"} className="md:hidden bg-gray-800 rounded-sm p-1 font-medium text-xs flex items-center gap-2 mb-3">
                <span>
                  <FiUser size={15} color="#ff6b6b"></FiUser>
                </span>
                <span>LOGIN</span>
              </Link>
              <Link to={"/register"} className="md:hidden bg-gray-800 rounded-sm p-1 font-medium text-xs flex items-center gap-2 mb-3">
                <span>
                  <FiUser size={15} color="#ff6b6b"></FiUser>
                </span>
                <span>REGISTER</span>
              </Link>
            </ul>
          </div>
        )}
      </div>


      {/* navbar for desktop  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-3 text-sm nav space-x-2">
          {links}
        </ul>
      </div>

      <div className="navbar-end text-sm hidden md:flex">

        {user ? (

          <div className="dropdown dropdown-end flex items-center gap-2">

            <div className="dropdown dropdown-end rounded-full">
              <div tabIndex={0} role="button" className="btn gap-0 bg-gray-700 hover:bg-gray-900 border-none rounded-full p-0 justify-center items-center">
                <div className="flex justify-center items-center ">
                  <p className="p-1 rounded-l-full text-xs font-bold text-white">
                    {user ? user.displayName : ''}
                  </p>
                </div>
                <div className="w-10 rounded-full">
                  <img className="w-full rounded-full"
                    alt="no photo"
                    src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="bg-gray-900 menu menu-sm dropdown-content rounded-b-xl z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-2">

                <Link to='/MYfOOD' className="p-2 flex gap-2 items-center bg-white text-black rounded-full text-sm font-bold">
                  <FaArrowAltCircleRight size={20} />
                  <li>MY ADDED FOOD</li>
                </Link>


                <Link to='/addFood' className="p-2 flex gap-2 items-center bg-white text-black rounded-full text-sm font-bold">
                  <FaArrowAltCircleRight size={20} />
                  <li>ADD FOOD</li>
                </Link>


                <Link to='/myOrderFood' className="p-2 flex gap-2 items-center bg-white text-black rounded-full text-sm font-bold">
                  <FaArrowAltCircleRight size={20} />
                  <li>MY ORDERED</li>
                </Link>


                <button onClick={handleLogout} className="flex gap-2 p-2 bg-red-500  rounded-full text-sm font-bold">
                  <RiLogoutCircleRLine size={20} />
                  <p>Logout</p>
                </button>

              </ul>
            </div>


          </div>




        ) : (
          <div className="dropdown dropdown-bottom dropdown-end backdrop-blur-xl">


            <div
              tabIndex={0}
              role="button"
              className=" lg:p-2 md:px-1 md:py-[6px] rounded-full hover:bg-gray-900 text-xl font-bold gap-2 flex justify-center items-center text-orange-500 bg-gray-800 duration-200"
            >
              <span>
                <BiSolidUserPlus size={25}></BiSolidUserPlus>
              </span>
              <span className="text-[14px]">JOIN US</span>
            </div>
            <ul tabIndex={0} className=" rounded-b-xl md:mt-[10px] mr-[-20px] dropdown-content z-[1] menu p-2 shadow backdrop-blur-xl bg-gray-900 w-52 flex flex-col gap-2">
              <Link
                to="/login"
                className="font-semibold text-xs flex items-center gap-2 bg-gray-800 rounded-md p-2"
              >
                <span>
                  <FiUser size={20}></FiUser>
                </span>
                <span className="">LOGIN</span>
              </Link>

              <Link
                to="/register"
                className="text-xs font-semibold flex items-center gap-2 bg-gray-800 rounded-md p-2"
              >
                <span>
                  <FiUser size={20}></FiUser>
                </span>
                <span>REGISTER</span>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;