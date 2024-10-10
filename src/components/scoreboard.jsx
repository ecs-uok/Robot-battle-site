const ButtonComponent = () => {
    return (
      <div className="flex flex-col items-center mt-10 gap-5 md:ml-[300px] lg:ml-[300px] md:mr-[200px]">
        {/* Header Section */}
                <h1 className="text-3xl text-center text-white font-krona md:text-4xl mt-12">
          <span className="text-5xl">The Battle is On!</span><br />
          <span className="text-2xl mt-2 mb-2">FIND OUT THE FINAL SHOWDOWN</span>
        </h1>

  
        {/* Button Section */}
        <div className="mt-4">
          <a
            href="https://robot-battles-scoreboard.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-4 text-2xl text-white bg-pink-400 border-pink-400 border-2  rounded-full cursor-pointer font-poppins glass-button">
              SCOREBOARD
            </button>
          </a>
        </div>
  
        <style jsx>{`
          .glass-button {
            background: rgba(236 ,72 ,153,0.8); /* Light background with shadow-violet-500 */
            backdrop-filter: blur(10px); /* Blur the background */
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
            border: 1px solid rgba(126, 34, 206, 0.2); /* Light border using shadow-violet-500 */
            position: relative;
            overflow: hidden;
          }
  
          .glass-button::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0) 70%);
            transform: rotate(45deg);
            transition: all 0.5s ease;
            opacity: 0.3;
          }
  
          .glass-button:hover::before {
            transform: translate(50%, 50%) rotate(90deg);
            opacity: 0.5; /* Slightly more visible on hover */
          }
        `}</style>
      </div>
    );
  };
  
  export default ButtonComponent;
  