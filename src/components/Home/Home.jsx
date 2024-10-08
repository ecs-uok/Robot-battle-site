import React from "react";
import Button from "../Button/Button";


const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center md:flex-row px-10 text-center mt-20 gap-5 mb-5 md:ml-[-50px]">
      <div className="flex flex-col items-center justify-center gap-2 text-white md:justify-start md:flex md:text-start md:items-start md:mt-3 md:px-20 md:mb-20 md:gap-5">
        <div>
          <h2 className="text-xl font-krona opacity-90 md:text-3xl">
            CREATIVE ROBOTICS
          </h2>
        </div>
        <div>
          <h1 className="mt-2 text-5xl font-krona md:text-7xl md:mt-0">
            UOK ROBOT BATTLES <br />
            2k24
          </h1>
        </div>
        {/* <div>
                <h1 className='text-4xl font-krona'>2k24</h1>
            </div> */}
        <div>
          <p className="mt-5 text-lg leading-normal font-krona opacity-80 md:mt-0">
            Welcome to the ultimate showdown of engineering prowess and
            strategy. Here, brilliant minds converge to pit their robotic
            creations against one another in a thrilling display of
            technological might. Join us in the arena where the future of
            robotics comes alive.
          </p>
        </div>
        <div className="mt-5">
          
        </div>
      </div>
      <div className="">
        <img
          className="   hidden md:block md:w-[2400px] md:h-[550px] md:-mt-10 md:min-w-max shadow-2xl shadow-violet-500 rounded-lg"
          src="/logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
