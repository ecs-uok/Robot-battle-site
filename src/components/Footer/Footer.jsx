import React, { useState } from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { ImYoutube } from "react-icons/im";

function Footer() {
    const [count, setCount] = useState(0);
      
    return (
        <footer className="footer-distributed">
            <div className="grid grid-cols-2 gap-0 font-krona">
                <div className='p-4 text-white bg-gray-900  md:px-4'>
                    <p className='pl-8 pr-8 text-base text-center md:text-3xl md:ml-8 '>Organized By</p>
                </div>
                <div className='p-4 text-white bg-gray-900  md:px-4'>
                    <p className='pl-16 pr-0 text-base md:text-3xl sm:ml-10 lg:ml-40 xl:ml-60 2xl:ml-80 '>Follow Us On</p>
                </div>
            </div>
    
            <div className="footer-left">
                <div className="grid grid-cols-3 gap-0">
                    <div className='flex justify-center md:justify-start'>
                        <img src="club_logo.png" alt="1" className='w-4/6 mt-4 ml-12 md:w-1/3 md:ml-44'/>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <h3 className='mt-8 ml-2 text-lg text-center text-white  xl:-ml-24 xl:mt-20 lg:text-2xl md:text-left'>
                            Electronics and Computer<br/>
                            <span>Science Club</span>
                        </h3>
                    </div>
                    <div className='grid-cols-3 gap-0 mx-12 mt-8 lg:grid place-content-start md:ml-6 '>
                        <a href="https://web.facebook.com/UOKRobotBattles">
                            <IoLogoFacebook className='w-10 h-10 md:w-16 md:h-16 lg:mx-8 text-white/80'/>
                        </a>
                        <a href="https://www.linkedin.com/company/uokrobotbattles/posts/?feedView=all">
                            <ImLinkedin className='w-9 h-9 md:w-14 md:h-14 lg:mx-4 text-white/80'/>
                        </a>
                        <a href="https://youtube.com/@ecscuok?si=tVpud5BPZpfJB3lt">
                            <ImYoutube className='w-10 h-10 md:w-14 md:h-14 lg:mx-0 xl:-mx-4 text-white/80'/>
                        </a>
                    </div>
                </div>
            </div>
            <p className='mt-5 mb-8 text-xs font-normal text-center text-gray-400 md:text-sm md:mb-9'>
                © 2024 All rights reserved
            </p>
        </footer>
    );
}

export default Footer;
