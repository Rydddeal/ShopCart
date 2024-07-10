import React from "react";
import frame1 from "../src/images/Frame1.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center py-8 px-16  gap-[49px] absolute w-[1512px] h-[120px] left-1/2 transform -translate-x-1/2 top-0 bg-[#FFF8E7]">
      <img src={frame1} alt="logo" className="w-15 h-18 px-12" />
      <nav className="flex flex-row items-center gap-6  w-full">
        <ul className="flex flex-row gap-10 list-none m-44">
          <li className="text-lg font-medium cursor-pointer hover:text-red-700">
            Home
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-red-700">
            Shop
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-red-700">
            About Us
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-red-700">
            Contact Us
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-full w-44"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="flex justify-end ml-auto gap-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Header;
