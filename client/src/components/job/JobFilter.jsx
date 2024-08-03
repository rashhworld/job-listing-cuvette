import React, { useState } from "react";

function JobFilter() {
  const [skills, setSkills] = useState([
    "Frontend",
    "CSS",
    "JavaScript",
    "Frontend",
  ]);
  const options = [
    "Frontend",
    "Backend",
    "Full Stack",
    "DevOps",
    "Data Science",
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddSkill = () => {
    if (inputValue && !skills.includes(inputValue)) {
      setSkills([...skills, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="p-3 md:p-8 md:px-24 mt-10 job-filter">
      <div className="flex items-center mb-4">
        <input type="text" className="w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={inputValue} onChange={handleInputChange} placeholder="Type any job title" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="">
          <select id="countries" className="border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 bg-red-100 filter-item">
              <span className="ps-2">{skill}</span>
              <button className="flex justify-center items-center bg-red-500 h-[35px] w-[35px]">
                <img src="/icons/x-mark.png" width={15} alt="" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="bg-[#ED5353] text-white font-medium rounded w-[120px] py-1.5 px-3">Apply Filter</button>
          <button className="text-red-500 text-lg font-medium">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default JobFilter;
