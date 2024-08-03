import React from "react";

function JobCard() {
  const reqSkills = ["HTML", "CSS", "Javascript", "Frontend"];
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-3 md:p-6 job-card">
      <div className="flex gap-3 md:gap-6">
        <div>
          <img src="https://testfree.in/assets/plugins/image/logo_small.png" width={40} />
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <p className="font-medium text-xl">Frontend Developer</p>
          <p className="flex gap-5 text-gray-500">
            <span className="flex gap-2">
              <img className="w-5 h-4" src="icons/users.png" alt="" />
              11-20
            </span>
            <span>$2773973</span>
            <span>Delhi</span>
          </p>
          <p className="flex gap-5 text-red-500">
            <span>Remote</span>
            <span>Full Time</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-5">
        <div className="flex flex-wrap gap-2 md:gap-4 font-medium">
          {reqSkills.map((element, index) => {
            return (
              <span className="bg-[#FFEEEE] rounded px-2 md:px-6 md:py-2" key={index}>
                {element}
              </span>
            );
          })}
        </div>
        <div className="">
          <button className="bg-[#ED5353] text-white py-1.5 px-3">
            View details
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
