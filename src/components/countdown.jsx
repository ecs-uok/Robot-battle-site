import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="md:mt-[100px]">
      {" "}
      {/* Add margin top */}
      <h2 className="relative pt-20 pb-4 mb-6 text-3xl text-center text-white font-krona">
        REGISTRATION CLOSED
        {/* <span className="absolute bottom-0 block w-48 h-1 transform -translate-x-1/2 bg-white left-1/2 mt-18 "></span> */}
      </h2>
      <div className="flex flex-col items-center justify-center pt-20 space-y-8 md:flex-row md:space-y-0 md:space-x-12">
        {" "}
        {/* Increase space between boxes */}
        <div className="flex flex-col items-center justify-center p-4 text-center neon-box bg-gradiant-b from-violet-950 to-slate-900 md:w-48 md:p-6 font-geliat">
          <span className="text-2xl font-semibold text-white">Days</span>
          <span className="text-3xl font-semibold text-white">
            {timeLeft.days}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 text-center neon-box bg-gradiant-b from-violet-950 to-slate-900 md:w-48 md:p-6 font-geliat">
          <span className="text-2xl font-semibold text-white">Hours</span>
          <span className="text-3xl font-semibold text-white">
            {timeLeft.hours}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 text-center neon-box bg-gradiant-b from-violet-950 to-slate-900 md:w-48 md:p-6 font-geliat">
          <span className="text-2xl font-semibold text-white">Minutes</span>
          <span className="text-3xl font-semibold text-white">
            {timeLeft.minutes}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 text-center neon-box bg-gradiant-b from-violet-950 to-slate-900 md:w-48 md:p-6 font-geliat">
          <span className="text-2xl font-semibold text-white">Seconds</span>
          <span className="text-3xl font-semibold text-white">
            {timeLeft.seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Countdown() {
  const targetDate = new Date("2024-06-20T23:59:59"); // Set target date to May 25, 2024

  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} />
      <style>
        {`
          @keyframes animate {
            0% {
              box-shadow: 0 0 20px 10px #FF10F0; /* Increased thickness and spread */
            }
            100% {
              box-shadow: 0 0 30px 20px #FF10F0; /* Increased thickness and spread */
            }
          }

          .neon-box {
            border-radius: 0.5rem;
            box-shadow: 0 0 20px 10px #FF10F0; /* Increased thickness and spread */
            animation: animate 1s linear infinite alternate;
          }

          /* Increase space between boxes */
          @media (min-width: 768px) {
            .neon-box + .neon-box {
              margin-left: 3rem; /* Adjust as needed */
            }
          }
        `}
      </style>
    </div>
  );
}
