import React from "react";
import Navbar from "../../components/Navbar";

function JobDetails() {
  return (
    <div className="bg-[#FFEEEE]">
      <Navbar />
      <div className="container mx-auto px-3 md:px-12 pb-12">
        <div className="text-center text-xl md:text-3xl font-medium bg-white shadow p-4 md:p-10 -translate-y-[15px]">
          WordPress Development work from home job/internship at Adyaka Infosec Private Limited
        </div>
        <div className="shadow bg-white p-4 md:p-10 mt-10">
          <div className="flex justify-between items-center gap-2">
            <div className="flex flex-col gap-3">
              <p className="flex gap-3 text-gray-500">
                <span>1w ago</span>
                <span>Full Time</span>
                <span>Google</span>
              </p>
              <p className="text-xl md:text-3xl font-semibold">WordPress Development </p>
              <p className="text-red-500 font-medium">Bangalore | India</p>
            </div>
            <div>
              <button className="w-[110px] text-white px-6 py-2 bg-[#ED5353] rounded">Edit Job</button>
            </div>
          </div>
          <div className="py-5 flex gap-16">
            <p className="flex flex-col">
              <span className="text-gray-500">Stipend</span>
              <span>₹25000/month</span>
            </p>
            <p className="flex flex-col">
              <span className="text-gray-500">Duration</span>
              <span>6 Months</span>
            </p>
          </div>
          <div className="text-lg flex flex-col gap-5">
            <div>
              <p className="font-semibold py-3">About company</p>
              <p className="text-gray-600">
                We provide technology-based services to help businesses and organizations achieve their goals. We offer a wide range of services, including software development, system integration, network and security services, cloud computing, and data analytics. Our primary focus is on leveraging technology to streamline business processes, improve productivity, and enhance overall efficiency.
              </p>
            </div>
            <div>
              <p className="font-semibold py-3">About the job/internship</p>
              <p className="text-gray-600 flex flex-col">
                <span>We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end.
                </span>
                <span className="pt-8">
                  Selected intern's day-to-day responsibilities include:
                </span>
                <span>1. Work on the development of theme customization, liquid programming language, and corresponding apps <br /> 2. Implement system integrations that are crucial to our success{" "} <br /> 3. Contribute to the development of HTML5/CSS/JavaScript and standard web technologies integral to building seamless multi-channel experiences <br /> 4. Work on speed optimization and making a mobile-friendly website
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold py-3">Skill(s) Required</p>
              <p className="flex gap-3">
                <span className="bg-[#FFEEEE] rounded-full px-5 py-1">HTML</span>
                <span className="bg-[#FFEEEE] rounded-full px-5 py-1">CSS</span>
                <span className="bg-[#FFEEEE] rounded-full px-5 py-1">WordPress</span>
              </p>
            </div>
            <div>
              <p className="font-semibold py-3">Additional Information</p>
              <p className="text-gray-600">Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
