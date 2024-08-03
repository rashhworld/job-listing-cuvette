import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-500 md:rounded-b-[50px] overflow-hidden p-2 md:py-6">
      <div className="mx-auto flex justify-between items-center md:px-12">
        <Link to="/" className="text-white font-bold text-3xl md:text-4xl">Jobfinder</Link>
        <div className="flex items-center space-x-4">
          <Link to="/user/signin" className="text-white font-semibold rounded border border-white px-6 py-2">Login</Link>
          <Link to="/user/signup" className="bg-white text-red-500 font-semibold rounded border border-white hidden md:block px-6 py-2">Register</Link>
          <img src="https://rashhworld.github.io/assets/favicons/android-chrome-512x512.png" width={40} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;