import React from "react";
import Navbar from "../components/Navbar";
import JobFilter from "../components/job/JobFilter";
import JobCard from "../components/job/JobCard";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 md:px-12">
        <JobFilter />
        <div className="flex flex-col gap-5 my-[70px]">
          <JobCard />
        </div>
      </div>
    </>
  );
}

export default Homepage;
