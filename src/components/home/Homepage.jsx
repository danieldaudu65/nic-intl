import React from 'react';
import { Link } from 'react-scroll';
import { FaCaretDown } from "react-icons/fa";



const Homepage = () => {
  return (
    <div className="relative -z-40 ">
      {/* Main Homepage Section */}
      <div className="homep text-white h-[95vh] flex text-center flex-col items-center justify-center w-full">
        <h1 className="text-[32px] -mt-20 font-nunito font-extrabold">NOBLE IN CHRIST MINISTRIES</h1>
        <p className="my-3 font-parkin ">BLESSED PEOPLE, BLESSING LIVES</p>

        <a href="/branch" className="underline mt-10">
          Find A Branch Near You
        </a>

        <Link
          to="home"
          smooth={true}
          duration={800}
          className="absolute bottom-10 cursor-pointer animate-hBounce text-white text-2xl"
        >
          <FaCaretDown />
        </Link>
      </div>

    
    </div>
  );
};

export default Homepage;
