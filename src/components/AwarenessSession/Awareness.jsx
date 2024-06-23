import React from "react";
import Button from "../Button/Button";

const Awareness = () => {
  return (
    <div
      className="md:px-20 px-10 mt-[40px] py-5  md:mt-[-80px] items-center gap-10
    md:text-start
    text-center"
    >
      <h1 className="text-3xl text-white font-krona md:text-4xl ">
        AWARENES SESSION
        
      </h1>
      
      <div className="flex flex-col items-center justify-between gap-10 mt-5 md:flex-row md:mt-10">
        <div className="flex flex-col gap-10 md:flex md:flex-row md:justify-between ">
          <div className="gap-8 md:flex md:flex-col">
            <p className="mt-5 space-y-4 text-xl font-normal leading-relaxed text-center text-white  font-poppins text-justify-end opacity-90 md:text-start md:text-xl">
              Tune into this insightful video, where you'll discover
              professional strategies and essential guidelines for excelling in
              robot battle competitions, presented by Dr. Kasun Piyumal. The
              expert advice provided will equip you with the knowledge needed to
              dominate your competition and ensure your robot is battle-ready
              according to the latest rules and standards.
            </p>
            {/* <a href="https://drive.google.com/file/d/12-g5isYXt1Hpny74pIzvhhKUxRroL5XZ/view?usp=drive_link">
              <button className="px-4 py-2 mt-8 text-lg text-white border-2 border-pink-400 rounded-full  bg-gradient-to-r from-pink-500 to-fuchsia-800 font-poppins">
                Watch Now
              </button>{" "}
            </a> */}
            <div className="mt-10">
              <Button
                text="Watch Now"
                url="https://youtu.be/sidEDf2QvTQ?si=S79kt2GtBsXAkaoF"
              />{" "}
            </div>
          </div>
          <div>
            <img
              className="w-[400px] md:w-[2000px] md:h-[250px] mr-10 rounded-lg  border-violet-900 border-8 shadow-2xl shadow-violet-600"
              src="/Youtube - 3.png"
              alt="robo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
