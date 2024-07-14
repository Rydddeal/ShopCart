import React from 'react'
import frame2 from "../images/Frame2.png";

const Hero = () => {
  return (
    <div className="w-full  flex flex-row items-start gap-9 bg-[#FFF8E7] px-4">
      <div>
        <h1 className="text-4xl font-bold mt-64 px-44">
          Define your style <br /> Shop now, discover
        </h1>
        <p className="text-lg mt-4 px-44">
          Discover curated jewelry essentials that redefine <br/> your style.
          Explore trends, quality craftmanship, <br /> and timeless elegance all
          at your fingertips
        </p>
        <button className=" mt-4 ml-44 py-2 px-8 bg-transparent text-gray-800 border border-gray-600 rounded-full hover:bg-gray-100">
          Shop Now
        </button>
      </div>
      <div className=''>
        <img src={frame2} alt="" className="  object-contain"/>
      </div>
      

    </div>
  );
}

export default Hero
