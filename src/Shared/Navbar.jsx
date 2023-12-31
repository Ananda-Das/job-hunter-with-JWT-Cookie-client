import { NavLink } from "react-router-dom";
// import logo from "logo.JPG";
import logo from "/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import DarkMode from "../Pages/DarkMode/DarkMode";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLink = (
    <>
    
      <li className="capitalize font-medium text-[#0F2239] text-base">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[rgb(13,110,253)] underline font-bold" : "")} to="/">
          Home
        </NavLink>
      </li>
      <li className="capitalize font-medium text-[#0F2239] text-base">
        <NavLink
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#0d6efd] underline font-bold" : "")}
          to="/allJobs"
        >
          All Jobs
        </NavLink>
      </li>
      <li className="capitalize font-medium text-[#0F2239] text-base">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#0d6efd] underline font-bold" : "")} to="/blogs">
          Blogs
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="capitalize font-medium text-[#0F2239] text-base">
            <NavLink
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#0d6efd] underline font-bold" : "")}
              to="/addJob"
            >
              Add a Job
            </NavLink>
          </li>
          <li className="capitalize font-medium text-[#0F2239] text-base">
            <NavLink
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#0d6efd] underline font-bold" : "")}
              to="/myJob"
            >
              My Jobs
            </NavLink>
          </li>
          <li className="capitalize font-medium text-[#0F2239] text-base">
            <NavLink
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#0d6efd] underline font-bold" : "")}
              to="/appliedJob"
            >
              Applied Job
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="max-w-[1280px] mx-auto ">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <NavLink to="/">
            <div className="flex gap-2">
              <img className="w-9 object-contain" src={logo} alt="" />
              <a className="text-3xl uppercase font-extrabold text-[#0d6efd]">Job Hunter</a>
            </div>
          </NavLink>
          <DarkMode></DarkMode>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
          {/* <a className="btn">Button</a> */}
          {user ? (
            <>
              {/* test  */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Logout</button>
                  </li>
                </ul>
              </div>
              {/* test  */}
            </>
          ) : (
            <div className="capitalize font-medium text-[#0F2239] text-base">
              <NavLink
                className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#0d6efd] underline font-bold" : "")}
                to="/login"
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
        {/* <div className="navbar-end">
         
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
