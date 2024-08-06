import React, { useState, useEffect } from "react";

function JobFilter({ setTitle, setSkills }) {
  const skills = ["React.js", "Node.js", "Express.js", "Tailwind", "Bootstrap"];

  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const selectSkills = (e) => {
    setSelectedSkills((prevSkills) => [...prevSkills, e.target.value]);
  };

  const removeSelectedSkill = (item) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((skill) => skill !== item));
  };

  const applyFilter = () => {
    setTitle(selectedTitle);
    setSkills(selectedSkills);
  }

  const clearFilter = () => {
    setSelectedTitle('');
    setSelectedSkills([]);
    setTitle('');
    setSkills([]);
  }

  return (
    <div className="p-3 md:p-8 md:px-24 mt-10 job-filter">
      <div className="flex items-center mb-4">
        <input type="text" className="w-full px-4 py-4 border border-gray-300 rounded" value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)} placeholder="Type any job title" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="">
          <select id="skills" className="border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={selectSkills} value="">
            <option value="" disabled hidden>Skills</option>
            {skills.filter(skill => !selectedSkills.includes(skill)).map((skill, index) => (
              <option key={index} value={skill}>{skill}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-3">
          {selectedSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 bg-red-100 filter-item">
              <span className="ps-2">{skill}</span>
              <button className="flex justify-center items-center bg-red-500 h-[35px] w-[35px]" onClick={() => removeSelectedSkill(skill)}>
                <img src="/icons/x-mark.png" width={15} alt="" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="bg-[#ED5353] text-white font-medium rounded w-[120px] py-1.5 px-3" onClick={applyFilter}>Apply Filter</button>
          <button className="text-red-500 text-lg font-medium" onClick={clearFilter}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default JobFilter;
