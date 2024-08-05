import React from "react";
import { Link } from "react-router-dom";

function JobCreate() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row h-full">
        <div className="w-full md:w-3/6 p-5 md:px-20 md:py-10">
          <h2 className="font-semibold text-4xl mb-8">Add job description</h2>
          <form className="space-y-4">
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="company-name">Company Name</label>
              <div className="w-full">
                <input className="appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-name" type="text" placeholder="Enter your company name here" />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="logo-url">Add logo URL</label>
              <div className="w-full">
                <input className="appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="logo-url" type="text" placeholder="Enter the link" />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="job-position">Job Position</label>
              <div className="w-full">
                <input className="appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="job-position" type="text" placeholder="Enter job position" />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="monthly-salary">Monthly Salary</label>
              <div className="w-full">
                <input className="appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="monthly-salary" type="text" placeholder="Enter Amount in rupees" />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="job-type">Job Type</label>
              <div className="w-full">
                <select className="block appearance-none w-full border border-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="job-type">
                  <option>Select</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="remote-office">Remote/Office</label>
              <div className="w-full">
                <select className="block appearance-none w-full border border-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="remote-office">
                  <option>Select</option>
                  <option>Remote</option>
                  <option>Office</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="location">Location</label>
              <div className="w-full">
                <input className="appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="location" type="text" placeholder="Enter Location" />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="job-description">Job Description</label>
              <div className="w-full">
                <textarea className="appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="job-description" placeholder="Type the job description" defaultValue={""} />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="about-company">About Company</label>
              <div className="w-full">
                <textarea className="appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="about-company" placeholder="Type about your company" defaultValue={""} />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="job-type">Skills Required</label>
              <div className="w-full">
                <select className="block appearance-none w-full border border-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="job-type">
                  <option>Select</option>
                  <option>React</option>
                  <option>Node Js</option>
                  <option>Tailwind</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <label className="block font-medium md:w-2/5 mb-1 md:mb-0 pr-4" htmlFor="about-company">About Company</label>
              <div className="w-full">
                <textarea className="appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="about-company" placeholder="Type about your company" defaultValue={""} />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button type="submit" className="text-[#C2C2C2] border border-gray-300 focus:ring-4 focus:outline-none font-medium rounded text-center px-10 py-2">Cancel</button>
              <button type="submit" className="text-white bg-[#ED5353] focus:ring-4 focus:outline-none font-medium rounded text-center px-10 py-2">+ Add Job</button>
            </div>
          </form>
        </div>
        <div className="fixed top-0 right-0 w-3/6 hidden md:block">
          <img className="w-full h-screen object-cover" src="/images/job-hero.webp" alt="" />
          <h1 className="absolute mx-32 text-4xl text-white text-center font-semibold inline-block top-20">
            Recruiter add job details here
          </h1>
        </div>
      </div>
    </div>
  );
}

export default JobCreate;
