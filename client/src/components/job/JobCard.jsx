import React from "react";
import { Link } from "react-router-dom";

function JobCard({ JobData }) {
  return (
    <>
      {JobData.length > 0 ? JobData.map((data, index) => (
        <div key={index} className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-3 md:p-6 job-card">
          <div className="flex gap-3 md:gap-6">
            <div>
              <img src={data.companyLogo} width={40} alt="company logo" />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <p className="font-medium text-xl">{data.jobPosition}</p>
              <p className="flex gap-5 text-gray-500">
                <span className="flex gap-2">{data.jobDuration}</span>
                <span>₹{data.monthlySalary}</span>
                <span>{data.jobLocation}</span>
              </p>
              <p className="flex gap-5 text-red-500">
                <span>{data.locationType}</span>
                <span>{data.jobType}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-5">
            <div className="flex justify-end flex-wrap gap-2 md:gap-4 font-medium">
              {data.skillsRequired.map((skill, index) => {
                return (
                  <span className="bg-[#FFEEEE] rounded px-2 md:px-6 md:py-2" key={index}>{skill}</span>
                );
              })}
            </div>
            <div className="">
              <Link to={`/job/details/${data._id}`} className="bg-[#ED5353] text-white py-1.5 px-3">View details</Link>
            </div>
          </div>
        </div>
      )) : (
        <p className="text-center font-semibold text-red-500">No jobs match the selected filter. Try searching with different job titles or skills.</p>
      )}
    </>
  );
}

export default JobCard;