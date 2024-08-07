import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Navbar({ setUserdata }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authJwtToken');
    if (token) {
      const decoded = jwtDecode(token);
      setUserName(decoded.name);
      setUserdata({ token, userName })
    }
  }, []);

  return (
    <nav className="bg-red-500 md:rounded-b-[50px] overflow-hidden p-2 md:py-6">
      <div className="mx-auto flex justify-between items-center md:px-12">
        <Link to="/" className="text-white font-bold text-3xl md:text-4xl">Jobfinder</Link>
        <div className="flex items-center gap-4 text-lg">
          {userName ? (
            <>
              <Link to="/job/create" className="text-white font-medium">Add Job</Link>
              {/* <div className="hidden md:flex items-center gap-4">
                <Link to="/user/signin" className="text-white font-medium" onClick={() => localStorage.removeItem('authJwtToken')}>Logout</Link>
                <span className="text-white font-medium">Hello! <span className="hidden md:inline-block">{userName.split(" ")[0]}</span></span>
                <img className="w-10 h-10 rounded-full" src="https://rashhworld.github.io/assets/images/profile.webp" alt="profile image" />
              </div> */}
              <div className="">
                <img className="w-10 h-10 rounded-full" id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" src="https://rashhworld.github.io/assets/images/profile.webp" alt="profile image" />
                <div id="dropdownAvatar" className="z-10 hidden bg-red-500 text-white divide-y divide-gray-100 rounded me-2">
                  <p className="px-4 py-2 font-medium"><span>Hello!</span><br />{userName}</p>
                  <p className="px-4 py-2 font-medium"><Link to="/user/signin" onClick={() => localStorage.removeItem('authJwtToken')}>Logout</Link></p>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/user/signin" className="text-white font-semibold rounded border border-white px-6 py-2">Login</Link>
              <Link to="/user/signup" className="bg-white text-red-500 font-semibold rounded border border-white hidden md:block px-6 py-2">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;