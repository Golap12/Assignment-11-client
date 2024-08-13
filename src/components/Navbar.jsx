import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { PiSignOutFill } from "react-icons/pi";
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
      <li className="hover:-translate-y-2 hover:ease-in duration-300">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[16px] text-[12px] p-1 text-red-500 md:font-bold"
              : "md:text-[16px] text-[12px] p-1 md:font-bold  hover:ease-in duration-300 hover:text-red-500"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="hover:-translate-y-2 hover:ease-in duration-300 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[16px] text-[12px] p-1 text-red-500 md:font-bold"
              : "md:text-[16px] text-[12px] p-1 md:font-bold  hover:ease-in duration-300 hover:text-red-500"
          }
          to="/allCraft"
        >
          All Food
        </NavLink>
      </li>

      <li className="hover:-translate-y-2 hover:ease-in duration-300 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "md:text-[16px] text-[12px] p-1 text-red-500 md:font-bold"
              : "md:text-[16px] text-[12px] p-1 md:font-bold  hover:ease-in duration-300 hover:text-red-500"
          }
          to="/addItem"
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
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            className="backdrop-blur-md bg-[#1f1f1fd1] dropdown-content md:mt-6 mt-[16px] p-1 px-2 space-y-2 w-[100vw] ml-[-15px] gap-2 nav font-bold md:ml-[-20px]"
          >
            {links}
          </ul>
        </div>

        <Link
          to={"/"}
          className="text-4xl text-white font-bold">
          <p>Lo<span className="text-red-600">go</span></p>
        </Link>

        {user ? (
          <div className="md:hidden dropdown dropdown-end flex items-center gap-2">

            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-gray-600">
                {user?.photoURL ? (
                  <img
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    alt=""
                    src={user.photoURL}
                  />
                ) : (
                  <img
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    alt=""
                    src=''
                  />
                )}
              </div>
            </div>

            <ul className="flex flex-col items-center text-center">
              <li className="absolute top-[42px] right-[15px] w-full text-[10px] font-semibold">
                {isHovering ? user.displayName : null}
              </li>
              <li>
                <button onClick={handleLogout}>
                  <PiSignOutFill color="#ff6b6b" size={20}></PiSignOutFill>
                </button>
              </li>
            </ul>

          </div>
        ) : (
          <div className="md:hidden dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="flex justify-center items-center gap-1">
              <span>
                <BiSolidUserPlus size={30}></BiSolidUserPlus>
              </span>
            </div>
            <ul tabIndex={0} className="bg-[#ffffff74] dropdown-content z-[1] menu shadow mt-[17px] mr-[-12px] w-52">
              <Link to={"/login"} className="md:hidden font-semibold flex items-center gap-2 mb-3">
                <span>
                  <FiUser size={15} color="#ff6b6b"></FiUser>
                </span>
                <span>Login</span>
              </Link>
              <Link to={"/register"} className="md:hidden font-semibold flex items-center gap-2">
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
              <div tabIndex={0} role="button" className="btn btn-ghost gap-0 p-1 justify-center items-center">
                <div className="flex justify-center items-center">
                  <p className="p-1 rounded-l-full text-sm font-bold text-blac">
                    {user ? user.displayName : ''}
                  </p>
                </div>
                <div className="w-10 rounded-full">
                  <img className="w-full rounded-full"
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="bg-gray-900 menu menu-sm dropdown-content rounded-b-md z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-2">

                <li className="p-1 bg-white text-black rounded-md text-sm font-bold">
                  <a>My added food</a>
                </li>
                <li className="p-1 bg-white text-black rounded-md text-sm font-bold"><a>Add a food</a></li>
                <li className="p-1 bg-white text-black rounded-md text-sm font-bold"><a>My ordered food</a></li>
              </ul>
            </div>

            <ul className="px-2 py-1 flex flex-col items-center hover:text-red-600 hover:transition-all duration-300 text-center font-bold bg-white text-black rounded-full">
              <li className="absolute text-gray-400 top-[45px] right-[30px] w-[150px]">
                {isHovering ? user.displayName : null}
              </li>
              <li>
                <button className="" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-bottom dropdown-end backdrop-blur-xl">
            <div
              tabIndex={0}
              role="button"
              className="px-2 py-1 rounded-md text-xl font-bold flex justify-center items-center text-black bg-white hover:ease-in duration-300"
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
