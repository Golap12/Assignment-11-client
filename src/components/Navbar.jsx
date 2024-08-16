import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BiSolidUserPlus } from "react-icons/bi";
import { AuthContext } from './../provider/AuthProvider';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  const links = (
    <>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[16px] text-[12px] p-1  md:font-bold"
              : "md:text-[16px] text-[12px] p-1 md:font-bold text-orange-500"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[16px] text-[12px] p-1  md:font-bold"
              : "md:text-[16px] text-[12px] p-1 md:font-bold text-orange-500"
          }
          to="/allFood"
        >
          Foods
        </NavLink>
      </li>

      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[16px] text-[12px] p-1  md:font-bold"
              : "md:text-[16px] text-[12px] p-1 md:font-bold text-orange-500"
          }
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex items-center p-3 md:px-5 sticky top-0 z-10 bg-gray-900 text-white">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="bg-gray-900 rounded-b-lg p-2 *:bg-white *:text-black *:p-1 *:rounded-md dropdown-content md:mt-6 mt-[16px] px-2 space-y-2 w-40 ml-[-15px] gap-2 nav font-bold md:ml-[-20px]"
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
                {/* <p className="text-xs absolute right-9 w-20 ">{user ? user.displayName : ''}</p> */}
                <div className="w-8 rounded-full">
                  <img className="w-full rounded-full"
                    alt="no photo"
                    src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="bg-gray-900 menu menu-sm dropdown-content rounded-b-md z-[1] mt-3 w-32 p-2 shadow flex flex-col gap-2">
                <Link to='/myFood'><li className="p-1 bg-white text-black rounded-md text-xs font-bold">My Food</li>
                </Link>
                <Link to='/addFood'><li className="p-1 bg-white text-black rounded-md text-xs font-bold">Add food</li>
                </Link>
                <Link to='/myOrderFood'><li className="p-1 bg-white text-black rounded-md text-xs font-bold"> Ordered Food</li>
                </Link>
                <div className="flex gap-2 items-center p-1 bg-white text-black rounded-md text-xs font-bold">
                <li onClick={handleLogout} className=""> Logout</li> 
                  <MdOutlineLogout color="red"></MdOutlineLogout>
                   
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
            <ul tabIndex={0} className="bg-gray-900 dropdown-content rounded-b-lg z-[1] menu shadow mt-[15px] mr-[-12px] w-32">
              <Link to={"/login"} className="md:hidden bg-gray-200 rounded-full p-1 font-semibold text-sm text-black flex items-center gap-2 mb-3">
                <span>
                  <FiUser size={15} color="#ff6b6b"></FiUser>
                </span>
                <span>Login</span>
              </Link>
              <Link to={"/register"} className="md:hidden bg-gray-200 rounded-full p-1 font-semibold text-sm text-black flex items-center gap-2 mb-3">
                <span>
                  <FiUser size={15} color="#ff6b6b"></FiUser>
                </span>
                <span>Register</span>
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

            <div className="dropdown dropdown-end  rounded-full">
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
                className="bg-gray-900 menu menu-sm dropdown-content rounded-b-md z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-2">

                <Link to='/myFood'><li className="p-2 bg-white text-black rounded-full text-sm font-bold">My Add Food</li>
                </Link>
                <Link to='/addFood'><li className="p-2 bg-white text-black rounded-full text-sm font-bold">Add a food</li>
                </Link>
                <Link to='/myOrderFood'><li className="p-2 bg-white text-black rounded-full text-sm font-bold">My Ordered Food</li>
                </Link>

              </ul>
            </div>

            <ul className="px-2 py-1 flex flex-col items-center hover:text-red-600 hover:transition-all duration-300 text-center font-bold  rounded-full">

              <li>
                <button onClick={handleLogout}>
                  <RiLogoutCircleRLine size={25} />
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-bottom dropdown-end backdrop-blur-xl">
            <div
              tabIndex={0}
              role="button"
              className="px-2 py-1 rounded-full hover:bg-gray-800 hover:border border hover:text-white text-xl font-bold flex justify-center items-center text-black bg-white duration-200"
            >
              <span>
                <BiSolidUserPlus size={20}></BiSolidUserPlus>
              </span>
              <span className="text-[16px]">Join Us</span>
            </div>
            <ul tabIndex={0} className="rounded-b-xl md:mt-[10px] mr-[-20px] dropdown-content z-[1] menu p-2 shadow backdrop-blur-xl bg-gray-900 w-52 flex flex-col gap-2">
              <Link
                to="/login"
                className="text-sm font-bold flex items-center gap-2 text-black bg-white rounded-md p-2"
              >
                <span>
                  <FiUser color="" size={15}></FiUser>
                </span>
                <span>Login</span>
              </Link>

              <Link
                to="/register"
                className="text-sm font-bold flex items-center gap-2 text-black bg-white rounded-md p-2"
              >
                <span>
                  <FiUser color="" size={15}></FiUser>
                </span>
                <span>Register</span>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
