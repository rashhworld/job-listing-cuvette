import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    terms: false,
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    terms: false,
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateForm(e) {
    e.preventDefault()

    let isError = false;
    setError(() => { return { name: "", username: "", email: "", phone: "", checkbox: "", } });

    Object.keys(input).forEach(key => {
      const element = input[key];
      if (typeof element === 'string' && element.trim().length === 0) {
        isError = true;
        setError(error => ({ ...error, [key]: "This field is required." }));
      } else if (key === 'email' && !validateEmail(element)) {
        isError = true;
        setError(error => ({ ...error, [key]: "This email id is invalid." }));
      }
    });

    if (!isError) {

    }
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row h-full">
        <div className="w-full sm:w-1/2 p-5 flex justify-center items-center">
          <form className="w-full md:w-3/4 flex flex-col gap-4" onSubmit={validateForm}>
            <div className="mb-3">
              <h2 className="font-semibold text-3xl mb-2">Already have an account?</h2>
              <p className="">Your personal job finder is here</p>
            </div>
            <div>
              <input type="email" id="email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} className="block w-full p-3 text-gray-900 border border-gray-500 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
            </div>
            <div>
              <input type="password" id="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} className="block w-full p-3 text-gray-900 border border-gray-500 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
            </div>
            <div className="mt-3">
              <button type="submit" className="w-2/5 text-white bg-[#ED5353] focus:ring-4 focus:outline-none font-medium rounded text-xl px-5 py-2 text-center">Sign In</button>
            </div>
            <div>
              <p>Don't have an account?
                <Link className="underline ms-2 font-medium" to="/user/signup">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="relative hidden sm:block w-1/2">
          <img className="w-full h-full object-cover" src="/images/login-hero.png" alt="" />
          <h1 className="w-full absolute text-5xl text-white text-center font-semibold inline-block left-1/2 transform -translate-x-1/2 top-20 px-20">Your Personal Job Finder</h1>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
