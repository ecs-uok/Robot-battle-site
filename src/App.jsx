import React from "react";
import Countdown from "./components/countdown";
import Timeline from "./components/timeline";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import Awareness from "./components/AwarenessSession/Awareness";
import ShinyEffect from "./components/ShinyEffect/ShinyEffect";
import Team from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import WininngPrices from "./components/WinningPrices/WininngPrices";
import About from "./components/AboutUs/About";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {" "}
      {/* Ensure relative positioning and no overflow */}
      <a name="home"><Navbar /></a>
      {/* <div className="">
        <ShinyEffect left={900} top={-300} size={1500} />
        <div className="hidden md:block">
          <ShinyEffect left={-1000} top={700} size={1500} />
        </div>
      </div>
      <div className="">
        <ShinyEffect left={1000} top={1200} size={1500} />
        <div className="hidden md:block">
          <ShinyEffect left={-1000} top={1900} size={1500} />
        </div>
      </div>
      <div className="">
        <ShinyEffect left={1000} top={2700} size={1500} />
        <div className="hidden md:block">
          <ShinyEffect left={-1200} top={3600} size={1500} />
        </div>
        <div className="hidden md:block">
          <ShinyEffect left={1000} top={4500} size={2000} />
        </div>
      </div> */}
      <Home/>
      <Countdown/>
      <a name="register"><Registration/></a>
      <Awareness />
      <a name="about"><About/></a>
      <WininngPrices />
      <a name="timeline"><Timeline/></a>
      <a name="contact"><Team/></a>
      <Footer />
    </div>
  );
};

export default App;
