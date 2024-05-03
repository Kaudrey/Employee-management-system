// Home.js
import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen bgMain bg-no-repeat bg-cover">
      <div className="bg-black/65 h-full">
        <nav className="px-[4rem] py-[1rem] flex items-center justify-between">
          <div className="text-2xl font-semibold text-white">StaffSync</div>
          <ul className="flex items-center gap-10 text-white font-bold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
          <div>
            <Link to="/signup">
              <button className="border-[1.5px] text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-600 font-semibold  transition-all duration-500 ease-in-out border-white">
                Get started
              </button>
            </Link>
          </div>
        </nav>
        <div className="px-[4rem] py-[5rem] h-[80vh] flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold text-white text-center">
            Welcome to StaffSync - Revolutionizing Employee Management!
          </h1>
          <p className="text-white text-center w-9/12 mx-auto py-[1.5rem] text-[17px]">
            Embark on a journey of seamless employee management with [Your
            Startup Name]. Our design and style philosophy is centered around
            making your experience effortless, allowing you to focus on what
            truly matters.
          </p>
          <div className="flex items-center gap-4 py-[1rem]">
            <button className=" text-white px-6 py-3 rounded-md hover:bg-white hover:text-purple-600 font-semibold  transition-all duration-500 ease-in-out  bg-purple-700">
              Watch the demo
            </button>
            <button className=" text-purple-600  px-6 py-3 rounded-md hover:bg-purple-700 hover:text-white font-bold  transition-all duration-500 ease-in-out  bg-white">
              Explore Benefits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
