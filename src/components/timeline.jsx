import React from "react";

const desktopEvents = [
  { date: "2024 . 04 . 12", title: "Registration open", x: 5, y: 40 },
  { date: "2024 . 05 . 14", title: "Workshop", x: 15, y: 27 },
  { date: "2024 . 09 . 27", title: "Arena set up", x: 40, y: 65 },
  { date: "2024 . 10 . 01", title: "Registration closing", x: 65, y: 27 },
  { date: "2024 . 10 . 08", title: "Awareness meeting", x: 90, y: 63 },
  { date: "2024 . 10 . 11", title: "Robot battle", x: 102, y: 50 },
];

const mobileEvents = [
  { date: "2024 . 04 . 12", title: "Registration open" },
  { date: "2024 . 05 . 14", title: "Workshop" },
  { date: "2024 . 09 . 27", title: "Arena set up", },
  { date: "2024 . 10 . 01", title: "Registration closing" },
  { date: "2024 . 10 . 08", title: "Awareness meeting" },
  { date: "2024 . 10 . 11", title: "Robot battle" },
];

// Function to parse and compare dates
const parseDate = (dateString) => new Date(dateString.split(" . ").join("-"));

//  mobile events by date
const sortedMobileEvents = mobileEvents.sort(
  (a, b) => parseDate(a.date) - parseDate(b.date)
);

const Timeline = () => {
  return (
    <>
      <h2 className="relative pb-2 mt-20 text-2xl font-bold text-center text-white md:text-3xl font-krona md:mt-20">
        TIMELINE
        {/* <span className="absolute bottom-0 block w-48 h-1 mb-0 transform -translate-x-1/2 bg-white left-1/2 mt-18"></span> */}
      </h2>
      <div className="hidden md:flex items-center justify-center min-h-[80vh] bg-gradient-to-r text-white overflow-hidden px-4 mt-0 pt-0">
        <div className="relative w-full max-w-6xl">
          <svg
            className="absolute w-full transform -translate-y-1/2 top-1/2 h-96"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 100 Q 125 0, 250 100 T 500 100 T 750 100 T 1000 100"
              stroke="rgba(128, 90, 213, 0.5)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-between w-full h-96">
            {desktopEvents.map((event, index) => (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 ${
                  index % 2 === 0 ? "translate-y-6" : "-translate-y-6"
                }`}
                style={{ left: `${event.x}%`, top: `${event.y}%` }}
              >
                <div className="relative w-8 h-8 mb-2 bg-pink-500 rounded-full">
                  <div className="absolute w-8 h-8 bg-pink-500 rounded-full animate-ping"></div>
                </div>
                <div className="p-2 text-xs rounded-lg md:text-sm">
                  <p className="text-xs md:text-sm">{event.date}</p>
                  <p className="font-bold">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden min-h-[80vh] bg-gradient-to-r text-white flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-lg">
          {sortedMobileEvents.map((event, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center mb-8"
            >
              <div className="relative w-8 h-8 mb-2 bg-pink-600 rounded-full">
                <div className="absolute w-8 h-8 bg-pink-600 rounded-full animate-ping"></div>
              </div>
              <div className="w-full p-4 text-center text-white rounded-lg bg-gradient-to-r from-slate-950 to-violet-900">
                <p className="text-sm">{event.date}</p>
                <p className="font-bold font-poppins">{event.title}</p>
              </div>
              {index < sortedMobileEvents.length - 1 && (
                <div className="w-1 h-8 mt-2 bg-pink-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
