import React from "react";
import { FaUser, FaFolder, FaUsers, FaSignOutAlt, FaTachometerAlt, FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 h-full bg-black">
        <h1 className="text-2xl font-bold text-white px-[2rem] py-[2rem]">
          StaffSync
        </h1>
        <div className="flex flex-col">
          <div className="py-2 px-9 text-white flex items-center">
            <FaTachometerAlt className="mr-2"/>
            <a href="#">Dashboard</a>
          </div>
          <div className="py-4 px-9 text-white flex items-center">
            <FaUsers className="mr-1"/>
            <a href="#">Manage Employees</a>
          </div>
          <div className="py-4 px-9 text-white flex items-center">
            <FaFolder className="mr-2"/>
            <a href="#">Category</a>
          </div>
          <div className="py-4 px-9 text-white flex items-center">
            <FaCalendarAlt className="mr-2"/>
            <a href="#">Time-book</a>
          </div>
          <div className="py-4 px-9 text-white flex items-center">
            <FaUser className="mr-2" />
            <a href="#">Profile</a>
          </div>
          <div className="py-4 px-9 text-white flex items-center">
          <FaSignOutAlt className="mr-2"/>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
      <div className="w-5/5 h-full bg-white"></div>
    </div>
  );
};

export default Dashboard;
